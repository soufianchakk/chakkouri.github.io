const images = document.querySelectorAll('[data-lightbox]');

images.forEach(image => {
    image.addEventListener('click', () => {
        // Code to display the lightbox goes here
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');

        const img = document.createElement('img');
        img.src = 'pic.jpeg';

        lightbox.appendChild(img);
        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', e => {
            if (e.target !== img) {
                lightbox.remove();
            }
        });
    });
});

document.addEventListener('keydown', e => {
    const lightbox = document.querySelector('.lightbox');
    if (e.key === 'Escape' && lightbox) {
        lightbox.remove();
    }
});
const menu = document.querySelector('.menu');

menu.addEventListener('mouseover', () => {
    menu.style.backgroundColor = 'lightblue';
});

menu.addEventListener('mouseout', () => {
    menu.style.backgroundColor = 'white';
});