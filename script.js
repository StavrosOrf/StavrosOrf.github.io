// Function to load a tab's content from its corresponding HTML file
function loadTab(tabName) {
    fetch(`${tabName}.html`)
      .then(response => response.text())
      .then(html => {
        document.getElementById('content').innerHTML = html;
      })
      .catch(error => {
        document.getElementById('content').innerHTML = `<p>Error loading content.</p>`;
        console.error('Error loading tab:', error);
      });
  }
  
  // Set up event listeners for tab buttons
  document.querySelectorAll('.tab button').forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      document.querySelectorAll('.tab button').forEach(btn => btn.classList.remove('active'));
      // Add active class to the clicked button
      this.classList.add('active');
  
      // Load the corresponding tab content based on the data-tab attribute
      let tab = this.getAttribute('data-tab');
      if (tab !== null)
        loadTab(tab);
    });
  });

// Load user preference on page load
window.addEventListener('DOMContentLoaded', () => {
    loadTab('home');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-theme');
      updateToggleIcon(true);
    }
  });
  
  // Grab the toggle button
  const themeToggleBtn = document.getElementById('theme-toggle');
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    // Check if dark theme is active
    const isDark = document.body.classList.contains('dark-theme');
    
    // Store user preference
    if (isDark) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
    
    // Update the icon
    updateToggleIcon(isDark);
  });
  
  // Update icon function
  function updateToggleIcon(isDark) {
    const icon = themeToggleBtn.querySelector('i');
    if (isDark) {
      // Switch to sun icon
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      // Switch to moon icon
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }
  