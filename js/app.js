document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.welcome-container');
  const colors = ['#ff6347', '#ffd700', '#3cb371', '#1e90ff', '#9370db']; // Add more colors as desired

  // Create and append animated shapes
  for (let i = 0; i < 15; i++) { // Increased number of shapes
    let shape = document.createElement('div');
    shape.classList.add('shape');
    shape.style.width = `${Math.random() * 100 + 50}px`;
    shape.style.height = shape.style.width;
    shape.style.top = `${Math.random() * 100}%`;
    shape.style.left = `${Math.random() * 100}%`;
    shape.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    container.appendChild(shape);
  }

  // Event listener for the Enter button
  const enterButton = document.querySelector('.enter-button');
  enterButton.addEventListener('click', () => {
    // Add fade-out animation
    container.classList.add('fade-out');

    // Redirect to main.html after the animation
    setTimeout(() => {
      window.location.href = '';
    }, 500); // This duration should match the CSS animation duration
  });
});
