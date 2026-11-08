// Google Sheets Integration for Contact Form using Formspree
// This solution uses Formspree which automatically saves to Google Sheets

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {
    // Set form action to Formspree endpoint
    contactForm.setAttribute('action', 'https://formspree.io/f/xyzgdppl');
    contactForm.setAttribute('method', 'POST');

    contactForm.addEventListener('submit', async function(e) {
      // Show loading state
      const submitBtn = this.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
      }

      // Form will submit normally to Formspree
      // Formspree will handle the submission and save to spreadsheet
    });

    // Listen for form submission success
    contactForm.addEventListener('formspree:submit', function(e) {
      showNotification('Thank you! Your enquiry has been sent successfully.', 'success');
      contactForm.reset();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.textContent = 'Send Enquiry';
        submitBtn.disabled = false;
      }
    });

    // Listen for form submission error
    contactForm.addEventListener('formspree:error', function(e) {
      showNotification('Error sending enquiry. Please try again.', 'error');

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.textContent = 'Send Enquiry';
        submitBtn.disabled = false;
      }
    });
  }
});

function showNotification(message, type) {
  // Remove existing notifications
  const existingNotification = document.querySelector('.form-notification');
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement('div');
  notification.className = `form-notification ${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    color: white;
    font-weight: 600;
    z-index: 1000;
    animation: slideIn 0.3s ease;
    background: ${type === 'success' ? '#E60000' : '#d32f2f'};
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  `;

  document.body.appendChild(notification);

  // Remove after 5 seconds
  setTimeout(() => {
    notification.remove();
  }, 5000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);
