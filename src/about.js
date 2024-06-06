function about() {
    window.addEventListener('DOMContentLoaded', () => {
        const btn = document.querySelector('.about-btn');
        const aboutHeader = document.createElement('p');
        const p = document.createElement('p');
        const aboutDiv = document.createElement('div');
        const contentDiv = document.querySelector('#content');

        aboutDiv.classList.add('about-div');
        aboutHeader.textContent = 'About';
        p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita assumenda facilis sequi quod harum qui odit ratione quas itaque explicabo reprehenderit laboriosam a voluptates quam, libero accusamus vero ullam, possimus, labore recusandae tenetur saepe atque officia dolores. Delectus a laudantium nihil magni pariatur officia illo eos sequi ex voluptas, consequatur consectetur voluptates fugit dolores est assumenda illum, ea, aperiam temporibus? Laudantium veritatis libero sint minima, optio ullam a eligendi eaque quisquam dolorem iste velit debitis. Sapiente eos, laborum temporibus perferendis alias explicabo praesentium voluptatum tenetur quos fugiat, voluptates asperiores quaerat iusto velit esse optio quis aut facere modi exercitationem provident nemo, at dicta! Nam minus harum, suscipit unde enim accusantium culpa deserunt id, labore accusamus tempora incidunt, reiciendis sapiente libero ipsa impedit eius eum assumenda officia. Adipisci assumenda recusandae labore soluta eveniet, necessitatibus aliquam ea placeat. Perspiciatis, ut quidem eligendi, ea quibusdam suscipit dolorem, atque reprehenderit deserunt pariatur at rerum accusamus animi. Velit qui obcaecati necessitatibus aspernatur reprehenderit incidunt rerum aperiam nemo cum voluptatibus ipsam sapiente deleniti adipisci eos repellendus mollitia et sed beatae hic fugit suscipit maiores, doloribus consequatur. Vel, commodi! Sequi nemo adipisci laboriosam commodi voluptatibus amet temporibus quibusdam nesciunt facilis exercitationem sint corrupti, dolorem officiis fugit consequuntur!'

        btn.addEventListener('click', () => {
            contentDiv.innerHTML = '';
            aboutDiv.appendChild(aboutHeader);
            aboutDiv.appendChild(p);
            contentDiv.appendChild(aboutDiv);

        })
    });
}


export {about};