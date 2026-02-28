<svelte:options immutable />

<script lang="ts">
  import type { Moment } from "moment";
  import {
    Calendar as CalendarBase,
    ICalendarSource,
    configureGlobalMomentLocale,
  } from "obsidian-calendar-ui";
  import { onDestroy, onMount } from "svelte";

  import { shouldUseChineseCalendar } from "src/i18n";
  import type { ISettings } from "src/settings";
  import { activeFile, dailyNotes, settings, weeklyNotes } from "./stores";

  let today: Moment;
  let calendarRootEl: HTMLDivElement;

  $: today = getToday($settings);

  export let displayedMonth: Moment = today;
  export let sources: ICalendarSource[];
  export let onHoverDay: (date: Moment, targetEl: EventTarget) => boolean;
  export let onHoverWeek: (date: Moment, targetEl: EventTarget) => boolean;
  export let onClickDay: (date: Moment, isMetaPressed: boolean) => boolean;
  export let onClickWeek: (date: Moment, isMetaPressed: boolean) => boolean;
  export let onContextMenuDay: (date: Moment, event: MouseEvent) => boolean;
  export let onContextMenuWeek: (date: Moment, event: MouseEvent) => boolean;

  export function tick() {
    today = window.moment();
    localizeTodayButton();
  }

  function getToday(settings: ISettings) {
    configureGlobalMomentLocale(settings.localeOverride, settings.weekStart);
    if (shouldUseChineseCalendar()) {
      window.moment.locale("zh-cn");
    }
    dailyNotes.reindex();
    weeklyNotes.reindex();
    return window.moment();
  }

  function localizeTodayButton() {
    if (!calendarRootEl || !shouldUseChineseCalendar()) {
      return;
    }

    const actionEls = calendarRootEl.querySelectorAll("button, [role='button']");
    actionEls.forEach((el) => {
      const text = el.textContent?.trim()?.toLowerCase();
      if (text === "today") {
        el.textContent = "今天";
      }

      const ariaLabel = el.getAttribute("aria-label")?.trim()?.toLowerCase();
      if (ariaLabel === "today") {
        el.setAttribute("aria-label", "今天");
      }

      const title = el.getAttribute("title")?.trim()?.toLowerCase();
      if (title === "today") {
        el.setAttribute("title", "今天");
      }
    });
  }

  // 1 minute heartbeat to keep `today` reflecting the current day
  let heartbeat = setInterval(() => {
    tick();

    const isViewingCurrentMonth = displayedMonth.isSame(today, "day");
    if (isViewingCurrentMonth) {
      // if it's midnight on the last day of the month, this will
      // update the display to show the new month.
      displayedMonth = today;
    }
  }, 1000 * 60);

  onDestroy(() => {
    clearInterval(heartbeat);
  });

  onMount(() => {
    localizeTodayButton();
  });
</script>

<div bind:this={calendarRootEl}>
  <CalendarBase
    {sources}
    {today}
    {onHoverDay}
    {onHoverWeek}
    {onContextMenuDay}
    {onContextMenuWeek}
    {onClickDay}
    {onClickWeek}
    bind:displayedMonth
    localeData={today.localeData()}
    selectedId={$activeFile}
    showWeekNums={$settings.showWeeklyNote}
  />
</div>
