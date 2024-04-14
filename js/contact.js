// contact.js
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const petType = document.getElementById('pet-type').value;
      const petName = document.getElementById('pet-name').value;
      const patientId = document.getElementById('patient-id').value;
      const name = document.getElementById('name').value;
      const kana = document.getElementById('kana').value;
      const email = document.getElementById('email').value;
      const zipCode = document.getElementById('zip-code').value;
      const address = document.getElementById('address').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
      const privacyPolicy = document.getElementById('privacy-policy').checked;
  
      // You can add your own logic here to handle the form submission
      console.log('Form submitted:');
      console.log('Pet Type:', petType);
      console.log('Pet Name:', petName);
      console.log('Patient ID:', patientId);
      console.log('Name:', name);
      console.log('Kana:', kana);
      console.log('Email:', email);
      console.log('Zip Code:', zipCode);
      console.log('Address:', address);
      console.log('Phone:', phone);
      console.log('Message:', message);
      console.log('Privacy Policy Agreed:', privacyPolicy);
  
      // Reset the form
      contactForm.reset();
    });
  });