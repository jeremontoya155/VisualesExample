document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item h3');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const sibling = item.nextElementSibling;
            if (sibling.style.display === 'block') {
                sibling.style.display = 'none';
            } else {
                sibling.style.display = 'block';
            }
        });
    });

    // Additional JS functionality can be added here as needed
});
