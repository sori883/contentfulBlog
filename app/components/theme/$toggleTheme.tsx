export const ToggleTheme = () => {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    if (isDark) {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <button
      onClick={toggleTheme}
      class="text-theme flex h-10 w-10 cursor-pointer items-center justify-center rounded-md transition-opacity hover:opacity-70"
      type="button"
    >
      <LightIcon />
      <DarkIcon />
    </button>
  );
};

const DarkIcon = () => (
  <svg
    class="hidden h-6 w-6 dark:block"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>dark theme icon</title>
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
);

const LightIcon = () => (
  <svg
    class="block h-6 w-6 dark:hidden"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>light theme icon</title>
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);
