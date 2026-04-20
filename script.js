(() => {
  const storageKey = 'so-theme';

  const getPreferredTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  const getStoredTheme = () => {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  };

  const persistTheme = (theme) => {
    try {
      localStorage.setItem(storageKey, theme);
    } catch (error) {
      // Ignore storage failures and still apply the theme for this session.
    }
  };

  const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      const icon = button.querySelector('[data-theme-icon]');
      const label = button.querySelector('[data-theme-label]');

      button.setAttribute('aria-pressed', String(theme === 'dark'));
      button.setAttribute('aria-label', `Switch to ${nextTheme} mode`);

      if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
      }

      if (label) {
        label.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
      }
    });
  };

  const initialTheme = getStoredTheme() || document.documentElement.dataset.theme || getPreferredTheme();
  applyTheme(initialTheme);

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(document.documentElement.dataset.theme || initialTheme);

    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      button.addEventListener('click', () => {
        const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        persistTheme(nextTheme);
        applyTheme(nextTheme);
      });
    });
  });
})();
