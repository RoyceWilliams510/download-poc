// Function to check for target elements
function checkForElements(context = document) {
  const errorBadge = context.querySelector('#error-badge');
  if (errorBadge && errorBadge.textContent.includes('404')) {
    console.log('404 error detected!');
    // Add posthog event here 
  }
}

checkForElements();
