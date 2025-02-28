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
      loadTab(tab);
    });
  });
  
  // Load the default tab (home) on page load
  window.addEventListener('DOMContentLoaded', () => {
    loadTab('home');
  });
  