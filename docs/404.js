// MutationObserver to detect span with id="error badge"
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      // Check if the added node is the error badge span
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.id === 'error-badge') {
          console.log('Error badge detected!', node);
        }

        // Also check if the error badge is within the added node
        const errorBadge = node.querySelector && node.querySelector('#error-badge');
        if (errorBadge) {
          console.log('Error badge detected!', errorBadge);
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

console.log('MutationObserver initialized - watching for span#error badge');
