// Retrieves saved theme choice, if available
const getSavedTheme = () => {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
    return savedTheme;
  }
  return "light";
};

// Switch between light and dark theme
const switchTheme = () => {
  const root = document.documentElement;
  let theme = root.getAttribute("data-theme");

  let newTheme = theme === "light" ? "dark" : "light";

  root.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  return newTheme;
};

export { getSavedTheme, switchTheme };
