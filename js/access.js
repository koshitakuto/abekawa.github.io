// access.js
document.addEventListener('DOMContentLoaded', function() {
    const accessInfoItems = document.querySelectorAll('.access-info-item');
  
    accessInfoItems.forEach(function(item, index) {
      item.style.animation = `fadeIn 0.5s ease-in-out ${(index + 1) * 0.2}s forwards`;
    });
  });