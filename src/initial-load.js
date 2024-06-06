import resImage from './images/restaurant-img.jpg'

function load() {
    window.addEventListener('DOMContentLoaded', () => {
        const contentDiv = document.querySelector('#content');
        const btn = document.querySelector('.home-btn');
        const h1 = document.createElement('h1');
        const img = document.createElement('img');
        const p = document.createElement('p');
        
        h1.innerHTML = 'THE GREATEST RESTAURANT EVER!!';
        p.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, enim?';
        img.src = resImage;

        contentDiv.appendChild(h1);
        contentDiv.appendChild(p);
        contentDiv.appendChild(img);

        btn.addEventListener('click', () => {
            contentDiv.innerHTML = '';
            contentDiv.appendChild(h1);
            contentDiv.appendChild(p);
            contentDiv.appendChild(img);
        });

    });
}

export {load};