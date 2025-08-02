export function getStoredTheme() {
  return localStorage.getItem("theme") || "light"
}

export function setTheme(theme) {
  const root = window.document.documentElement

  if (theme === "dark") {
    root.classList.add("dark")
    localStorage.setItem("theme", "dark")
  } else {
    root.classList.remove("dark")
    localStorage.setItem("theme", "light")
  }
}
