// Function to check for target elements
function checkForElements(context = document) {
  // Check for span with id="error-badge"
  const errorBadge = context.querySelector('#error-badge');
  if (errorBadge) {
    console.log('Error badge detected!', errorBadge);
  }

  // Check for div with data-page-title="Page Not Found"
  const pageNotFoundDiv = context.querySelector('div[data-page-title="Page Not Found"]');
  if (pageNotFoundDiv) {
    console.log('Page Not Found div detected!', pageNotFoundDiv);
  }

  // Check for div with id="error-description"
  const errorDescription = context.querySelector('#error-description');
  if (errorDescription) {
    console.log('Error description detected!', errorDescription);
  }
}

// Check for existing elements on page load
console.log('Checking for existing elements...');
checkForElements();

// MutationObserver to detect elements added dynamically
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        // Check the node itself
        if (node.id === 'error-badge') {
          console.log('Error badge detected (mutation)!', node);
        }
        if (node.id === 'error-description') {
          console.log('Error description detected (mutation)!', node);
        }
        if (node.getAttribute && node.getAttribute('data-page-title') === 'Page Not Found') {
          console.log('Page Not Found div detected (mutation)!', node);
        }

        // Check within the added node for our target elements
        if (node.querySelector) {
          checkForElements(node);
        }
      }
    });
  });
});

// Start observing the document body for child additions
observer.observe(document.body, {
  childList: true,
  subtree: true
});

console.log('MutationObserver initialized - watching for error elements');
