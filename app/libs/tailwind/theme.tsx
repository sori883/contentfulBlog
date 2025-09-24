import { html } from "hono/html";

// ちらつきをなくすため
export const ThemeInit = () => {
  return (
    <script>
      {html`
        (function() { const savedTheme = localStorage.getItem("theme"); const
        prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add("dark"); } })();
      `}
    </script>
  );
};
