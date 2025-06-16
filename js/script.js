document.getElementById('bookCalculator').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get user inputs
  const pages = parseInt(document.getElementById('pages').value);
  const paperThickness = parseFloat(document.getElementById('paperThickness').value);
  const coverThickness = parseFloat(document.getElementById('coverThickness').value);
  const glueTolerance = 0.5; // Toleransi lem rata-rata (mm)

  if (isNaN(pages) || pages < 1) {
    alert('Masukkan jumlah halaman yang valid.');
    return;
  }

  // Calculate thickness for softcover
  const softcoverThickness = (pages * paperThickness / 2) + glueTolerance;

  // Calculate thickness for hardcover
  const hardcoverThickness = softcoverThickness + (2 * coverThickness);

  // Update results in the DOM
  document.getElementById('softcoverResult').textContent = softcoverThickness.toFixed(2);
  document.getElementById('hardcoverResult').textContent = hardcoverThickness.toFixed(2);
});

// Function to copy text to clipboard
function copyToClipboard(content) {
  navigator.clipboard.writeText(content).then(() => {
    // Show notification
    const notification = document.getElementById('notification');
    notification.style.display = 'block';
    setTimeout(() => {
      notification.style.display = 'none';
    }, 2000); // Hide notification after 2 seconds
  });
}

// Add event listeners for copy buttons
document.getElementById('copySoftcover').addEventListener('click', () => {
  const content = document.getElementById('softcoverResult').textContent; // Copy only the number
  copyToClipboard(content);
});

document.getElementById('copyHardcover').addEventListener('click', () => {
  const content = document.getElementById('hardcoverResult').textContent; // Copy only the number
  copyToClipboard(content);
});
