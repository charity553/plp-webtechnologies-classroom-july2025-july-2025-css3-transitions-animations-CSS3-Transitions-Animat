// =======================================
// 📚✨ Part 2: JavaScript Functions & Scope
// =======================================

// Global variable example
let isAnimating = false;

// Function with parameters and return value
function toggleAnimationState(currentState) {
  return !currentState; // Return the opposite of current state
}

// Function to update message on console
function showMessage(message) {
  console.log(message);
}

// =======================================
// 🎨🎬 Part 3: Combine JS + CSS Animations
// =======================================

const animatedBox = document.getElementById("animatedBox");

// Function to start animation
function startAnimation() {
  isAnimating = toggleAnimationState(isAnimating); // Switch state using function
  if (isAnimating) {
    animatedBox.classList.add("move");
    showMessage("Animation started!");
  }
}

// Function to stop animation
function stopAnimation() {
  if (isAnimating) {
    isAnimating = toggleAnimationState(isAnimating);
    animatedBox.classList.remove("move");
    showMessage("Animation stopped!");
  }
}
