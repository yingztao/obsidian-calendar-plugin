import {
  getCalendarLocaleOverride,
  getPreferredLocale,
  messages,
  normalizeLocale,
  shouldUseChineseCalendar,
  t,
} from "src/i18n";

describe("normalizeLocale", () => {
  test.each([
    ["zh", "zh-CN"],
    ["zh-CN", "zh-CN"],
    ["zh-Hans", "zh-CN"],
    ["zh-SG", "zh-CN"],
    ["en-US", "en"],
    ["fr-FR", "en"],
    ["", "en"],
    [undefined, "en"],
  ])("normalizes %p to %p", (input, expected) => {
    expect(normalizeLocale(input)).toBe(expected);
  });
});

describe("t", () => {
  test("returns Chinese text when locale is zh-CN", () => {
    expect(t("menu.delete", undefined, "zh-CN")).toBe("删除");
  });

  test("falls back to English when locale is unsupported", () => {
    expect(t("menu.delete", undefined, "fr-FR")).toBe("Delete");
  });

  test("falls back to English when locale message is missing", () => {
    const original = messages["zh-CN"]["menu.delete"];
    // Simulate partial translation coverage.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (messages["zh-CN"] as any)["menu.delete"] = undefined;

    expect(t("menu.delete", undefined, "zh-CN")).toBe("Delete");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (messages["zh-CN"] as any)["menu.delete"] = original;
  });

  test("interpolates variables", () => {
    expect(
      t("modal.createMissingFileText", { filename: "2026-02-28" }, "zh-CN")
    ).toBe("文件 2026-02-28 不存在。是否要创建该文件？");
  });
});

describe("shouldUseChineseCalendar", () => {
  test.each([
    ["zh-CN", true],
    ["zh-Hans", true],
    ["en-US", false],
    [undefined, false],
  ])("returns %p for %p", (input, expected) => {
    expect(shouldUseChineseCalendar(input)).toBe(expected);
  });
});

describe("locale preference", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const originalApp = (global.window as any)?.app;

  afterEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global.window as any).app = originalApp;
  });

  test("prefers calendar locale override over Obsidian locale", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global.window as any).app = {
      plugins: {
        getPlugin: (id: string) =>
          id === "calendar" ? { options: { localeOverride: "en" } } : null,
      },
      vault: {
        getConfig: () => "zh-CN",
      },
    };

    expect(getCalendarLocaleOverride()).toBe("en");
    expect(getPreferredLocale()).toBe("en");
    expect(t("menu.delete")).toBe("Delete");
  });
});
