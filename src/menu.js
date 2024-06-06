function menu() {
    window.addEventListener('DOMContentLoaded', () => {
        const btn = document.querySelector('.menu-btn');
        const contentDiv = document.querySelector('#content');
        const menuDiv = document.createElement('div');
        
        btn.addEventListener('click', () => {
            contentDiv.innerHTML = '';
            for (let i = 0; i < 5; i++) {
                const card = document.createElement('div');
                const name = document.createElement('p');
                const price = document.createElement('p');

                card.classList.add('card');
                name.classList.add('name');
                price.classList.add('price');
                name.textContent = `food Item ${i+1}`;
                price.textContent = '14.50';
                card.appendChild(name);
                card.appendChild(price);
                menuDiv.appendChild(card);
                console.log(menuDiv);
            }
            contentDiv.appendChild(menuDiv)
        })
    })
}

export {menu};