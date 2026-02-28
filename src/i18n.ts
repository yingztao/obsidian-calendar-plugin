export const translationKeys = [
  "view.calendar",
  "command.openView",
  "command.openWeeklyNote",
  "command.revealActiveNote",
  "menu.delete",
  "modal.cancel",
  "modal.create",
  "modal.newDailyNoteTitle",
  "modal.newWeeklyNoteTitle",
  "modal.createMissingFileText",
  "settings.general",
  "settings.weekly",
  "settings.advanced",
  "settings.banner.dailyNotesDisabledTitle",
  "settings.banner.dailyNotesDisabledDesc",
  "settings.weeklyMovingNotice",
  "settings.wordsPerDot.name",
  "settings.wordsPerDot.desc",
  "settings.weekStart.name",
  "settings.weekStart.desc",
  "settings.weekStart.localeDefault",
  "settings.confirmCreate.name",
  "settings.confirmCreate.desc",
  "settings.showWeekNumber.name",
  "settings.showWeekNumber.desc",
  "settings.weeklyFormat.name",
  "settings.weeklyFormat.desc",
  "settings.weeklyTemplate.name",
  "settings.weeklyTemplate.desc",
  "settings.weeklyFolder.name",
  "settings.weeklyFolder.desc",
  "settings.localeOverride.name",
  "settings.localeOverride.desc",
  "settings.localeOverride.sameAsSystem",
] as const;

export type TranslationKey = typeof translationKeys[number];
type SupportedLocale = "en" | "zh-CN";
type TranslationVars = Record<string, string | number | boolean | null | undefined>;
type LocaleMessages = Record<TranslationKey, string>;

export const messages: Record<SupportedLocale, LocaleMessages> = {
  en: {
    "view.calendar": "Calendar",
    "command.openView": "Open view",
    "command.openWeeklyNote": "Open Weekly Note",
    "command.revealActiveNote": "Reveal active note",
    "menu.delete": "Delete",
    "modal.cancel": "Never mind",
    "modal.create": "Create",
    "modal.newDailyNoteTitle": "New Daily Note",
    "modal.newWeeklyNoteTitle": "New Weekly Note",
    "modal.createMissingFileText":
      "File {filename} does not exist. Would you like to create it?",
    "settings.general": "General Settings",
    "settings.weekly": "Weekly Note Settings",
    "settings.advanced": "Advanced Settings",
    "settings.banner.dailyNotesDisabledTitle":
      "⚠️ Daily Notes plugin not enabled",
    "settings.banner.dailyNotesDisabledDesc":
      "The calendar is best used in conjunction with either the Daily Notes plugin or the Periodic Notes plugin (available in the Community Plugins catalog).",
    "settings.weeklyMovingNotice":
      "Note: Weekly Note settings are moving. You are encouraged to install the 'Periodic Notes' plugin to keep the functionality in the future.",
    "settings.wordsPerDot.name": "Words per dot",
    "settings.wordsPerDot.desc":
      "How many words should be represented by a single dot?",
    "settings.weekStart.name": "Start week on:",
    "settings.weekStart.desc":
      "Choose what day of the week to start. Select 'Locale default' to use the default specified by moment.js",
    "settings.weekStart.localeDefault": "Locale default ({localeWeekStart})",
    "settings.confirmCreate.name": "Confirm before creating new note",
    "settings.confirmCreate.desc":
      "Show a confirmation modal before creating a new note",
    "settings.showWeekNumber.name": "Show week number",
    "settings.showWeekNumber.desc":
      "Enable this to add a column with the week number",
    "settings.weeklyFormat.name": "Weekly note format",
    "settings.weeklyFormat.desc":
      "For more syntax help, refer to format reference",
    "settings.weeklyTemplate.name": "Weekly note template",
    "settings.weeklyTemplate.desc":
      "Choose the file you want to use as the template for your weekly notes",
    "settings.weeklyFolder.name": "Weekly note folder",
    "settings.weeklyFolder.desc": "New weekly notes will be placed here",
    "settings.localeOverride.name": "Override locale:",
    "settings.localeOverride.desc":
      "Set this if you want to use a locale different from the default",
    "settings.localeOverride.sameAsSystem": "Same as system ({sysLocale})",
  },
  "zh-CN": {
    "view.calendar": "日历",
    "command.openView": "打开视图",
    "command.openWeeklyNote": "打开周记",
    "command.revealActiveNote": "定位当前笔记",
    "menu.delete": "删除",
    "modal.cancel": "取消",
    "modal.create": "创建",
    "modal.newDailyNoteTitle": "新建日记",
    "modal.newWeeklyNoteTitle": "新建周记",
    "modal.createMissingFileText":
      "文件 {filename} 不存在。是否要创建该文件？",
    "settings.general": "通用设置",
    "settings.weekly": "周记设置",
    "settings.advanced": "高级设置",
    "settings.banner.dailyNotesDisabledTitle": "⚠️ 未启用 Daily Notes 插件",
    "settings.banner.dailyNotesDisabledDesc":
      "建议将日历与 Daily Notes 插件或 Periodic Notes 插件（可在社区插件目录中找到）配合使用。",
    "settings.weeklyMovingNotice":
      "注意：周记设置正在迁移。建议安装 “Periodic Notes” 插件以持续使用相关功能。",
    "settings.wordsPerDot.name": "每个点代表的字数",
    "settings.wordsPerDot.desc": "一个圆点代表多少个词？",
    "settings.weekStart.name": "每周起始日：",
    "settings.weekStart.desc":
      "选择每周从哪一天开始。选择“语言默认”可使用 moment.js 指定的默认值。",
    "settings.weekStart.localeDefault": "语言默认（{localeWeekStart}）",
    "settings.confirmCreate.name": "创建新笔记前确认",
    "settings.confirmCreate.desc": "在创建新笔记前显示确认弹窗",
    "settings.showWeekNumber.name": "显示周数",
    "settings.showWeekNumber.desc": "启用后会新增一列显示周数",
    "settings.weeklyFormat.name": "周记格式",
    "settings.weeklyFormat.desc": "更多语法说明请参考格式文档",
    "settings.weeklyTemplate.name": "周记模板",
    "settings.weeklyTemplate.desc": "选择周记创建时使用的模板文件",
    "settings.weeklyFolder.name": "周记文件夹",
    "settings.weeklyFolder.desc": "新建周记会放在此文件夹中",
    "settings.localeOverride.name": "覆盖语言环境：",
    "settings.localeOverride.desc": "如果你想使用与默认值不同的语言环境，请在此设置",
    "settings.localeOverride.sameAsSystem": "与系统一致（{sysLocale}）",
  },
};

export function normalizeLocale(rawLocale?: string | null): SupportedLocale {
  const locale = (rawLocale || "").toLowerCase();
  if (!locale) {
    return "en";
  }

  if (locale === "zh") {
    return "zh-CN";
  }

  if (
    locale.startsWith("zh-cn") ||
    locale.startsWith("zh-hans") ||
    locale.startsWith("zh-sg")
  ) {
    return "zh-CN";
  }

  return "en";
}

export function getObsidianLocale(): string {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const app = (window as any)?.app;
    const obsidianLocale = app?.vault?.getConfig?.("locale");
    if (typeof obsidianLocale === "string" && obsidianLocale.trim() !== "") {
      return obsidianLocale;
    }
  } catch (_error) {
    // Ignore and fallback to browser locale.
  }

  if (typeof navigator !== "undefined" && navigator.language) {
    return navigator.language;
  }

  return "en";
}

export function getCalendarLocaleOverride(): string | null {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const app = (window as any)?.app;
    const calendarPlugin = app?.plugins?.getPlugin?.("calendar");
    const localeOverride = calendarPlugin?.options?.localeOverride;
    if (
      typeof localeOverride === "string" &&
      localeOverride.trim() !== "" &&
      localeOverride !== "system-default"
    ) {
      return localeOverride;
    }
  } catch (_error) {
    // Ignore and fallback to Obsidian locale.
  }

  return null;
}

export function getPreferredLocale(): string {
  return getCalendarLocaleOverride() || getObsidianLocale();
}

function interpolate(
  template: string,
  vars?: TranslationVars
): string {
  if (!vars) {
    return template;
  }

  return template.replace(/\{(\w+)\}/g, (_match, key: string) => {
    const value = vars[key];
    return value == null ? "" : String(value);
  });
}

export function t(
  key: TranslationKey,
  vars?: TranslationVars,
  rawLocale: string = getPreferredLocale()
): string {
  const locale = normalizeLocale(rawLocale);
  const english = messages.en[key];
  const translated = messages[locale][key] || english;
  return interpolate(translated, vars);
}

export function isChineseUI(rawLocale: string = getPreferredLocale()): boolean {
  return normalizeLocale(rawLocale) === "zh-CN";
}

export function shouldUseChineseCalendar(
  rawLocale: string = getPreferredLocale()
): boolean {
  return normalizeLocale(rawLocale) === "zh-CN";
}
