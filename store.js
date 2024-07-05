document.addEventListener('DOMContentLoaded', () => {
    const store = JSON.parse(localStorage.getItem('store'));

    if (store) {
        document.getElementById('store-name').textContent = store.name;
        document.getElementById('store-image').src = store.image;
        document.getElementById('store-location').textContent = `Location: ${store.location}`;
        document.getElementById('store-contact').textContent = `Contact: ${store.contact}`;
        document.getElementById('store-services').textContent = store.services;
        
        const menuList = document.getElementById('store-menu');
        store.menu.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${item.name} <span>${item.price}</span>`;
            menuList.appendChild(listItem);
        });

        // Add background image for Pizza Nation
        if (store.name === 'Pizza Nation') {
            document.body.classList.add('pizza-nation');
        }
    }
});
