// Contact form
document.getElementById('contact-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Message sent successfully!");
  this.reset();
});

// Maoni form
document.getElementById('maoni-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thank you for your feedback on the policy.");
  this.reset();
});
