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

  const formatCompactNumber = (value) =>
    new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(value);

  const updateGitHubIndicators = async () => {
    const projects = document.querySelectorAll('[data-github-repo]');
    if (!projects.length) {
      return;
    }

    await Promise.all(
      Array.from(projects).map(async (project) => {
        const repo = project.getAttribute('data-github-repo');
        const starsEl = project.querySelector('[data-github-stars]');
        const forksEl = project.querySelector('[data-github-forks]');

        if (!repo || !starsEl || !forksEl) {
          return;
        }

        try {
          const response = await fetch(`https://api.github.com/repos/${repo}`, {
            headers: {
              Accept: 'application/vnd.github+json'
            }
          });

          if (!response.ok) {
            return;
          }

          const data = await response.json();
          if (typeof data.stargazers_count === 'number') {
            starsEl.textContent = `GitHub stars ${formatCompactNumber(data.stargazers_count)}`;
          }
          if (typeof data.forks_count === 'number') {
            forksEl.textContent = `Forks ${formatCompactNumber(data.forks_count)}`;
          }
        } catch (error) {
          // Keep the static fallback values if the API request fails.
        }
      })
    );
  };

  const setupSectionNavigation = () => {
    const sections = Array.from(document.querySelectorAll('[data-nav-section]'));
    const navLinks = Array.from(document.querySelectorAll('.so-nav__tab[href^="#"]'));
    if (!sections.length || !navLinks.length) {
      return;
    }

    const linksByHash = new Map(navLinks.map((link) => [link.getAttribute('href'), link]));

    const setActiveSection = (sectionId) => {
      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${sectionId}`);
      });
    };

    navLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        const hash = link.getAttribute('href');
        if (!hash || !hash.startsWith('#')) {
          return;
        }
        const target = document.querySelector(hash);
        if (!target) {
          return;
        }

        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', hash);
        setActiveSection(target.id);
      });
    });

    const updatePanelVisibility = (visibleId) => {
      sections.forEach((section) => {
        section.classList.toggle('is-visible', section.id === visibleId);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (!visibleEntries.length) {
          return;
        }

        const active = visibleEntries[0].target;
        setActiveSection(active.id);
        updatePanelVisibility(active.id);
      },
      {
        root: null,
        threshold: [0.15, 0.3, 0.55, 0.75],
        rootMargin: '-14% 0px -52% 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));

    const initialHash = window.location.hash;
    const initialLink = initialHash ? linksByHash.get(initialHash) : null;
    const initialSection = initialLink ? document.querySelector(initialHash) : sections[0];
    if (initialSection) {
      setActiveSection(initialSection.id);
      updatePanelVisibility(initialSection.id);
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(document.documentElement.dataset.theme || initialTheme);

    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      button.addEventListener('click', () => {
        const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        persistTheme(nextTheme);
        applyTheme(nextTheme);
      });
    });
    setupSectionNavigation();
    updateGitHubIndicators();
  });
})();
