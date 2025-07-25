const THEME_KEY = "theme";

export function getStoredTheme() {
  if (typeof window === "undefined") return "light"; // fallback for SSR
  return localStorage.getItem(THEME_KEY) || "light";
}

export function setTheme(theme) {
  if (theme !== "light" && theme !== "dark") return;

  localStorage.setItem(THEME_KEY, theme);

  const root = window.document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
}

export function toggleTheme() {
  const current = getStoredTheme();
  const next = current === "light" ? "dark" : "light";
  setTheme(next);
}
