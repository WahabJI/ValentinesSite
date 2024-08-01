onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    // Add animation to move everything to the left side of the page
    setTimeout(() => {
      document.body.style.transition = "transform 1.5s ease-in-out";
      document.body.style.transform = "translateX(-20%)";
    }, 5000); // Adjust the 500ms delay as needed

    clearTimeout(c);
  }, 10);
};

// Assuming this is called after the left-moving animation completes
function revealRightContent() {
  const rightContent = document.querySelector('.right-content');
  if (rightContent) {
    rightContent.classList.add('reveal');
  }
}

// Call this function at the appropriate time after your animations
// For demonstration, using setTimeout as a placeholder for when your animation ends
setTimeout(revealRightContent, 75); // Adjust the time based on your animation duration