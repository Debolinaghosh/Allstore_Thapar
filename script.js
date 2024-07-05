// Sample store data with images and details
const stores = [
    {
        name: "Kabir Multi Store",
        location: "COS",
        contact: "9876570415",
        image: "images/kabir-store.jpg",
        services: "General store services, Groceries, Household items",
        menu: ["Item 1", "Item 2", "Item 3"]
    },
    {
        name: "Bombay Munchery",
        location: "COS",
        contact: "Contact Info 2",
        image: "images/bombay-munchery.jpg",
        services: "Fast food, Snacks, Beverages",
        menu: ["Burger", "Pizza", "Fries"]
    },
    {
        name: "Pizza Nation",
        location: "COS",
        contact: "Contact Info 3",
        image: "images/pizza-nation.jpg",
        services: "Pizza, Italian Cuisine, Beverages",
        menu: ["Pepperoni Pizza", "Margherita Pizza", "Garlic Bread"]
    }
];

// Function to generate HTML for store information
function createStoreHTML(store, index) {
    return `
    <section class="store" onclick="viewStore(${index})">
        <img src="${store.image}" alt="${store.name}">
        <div class="store-info">
            <h2>${store.name}</h2>
            <p>Location: ${store.location}</p>
            <p>Contact: ${store.contact}</p>
        </div>
    </section>
    `;
}

// Function to populate the store list on the page
function populateStoreList() {
    const storeList = document.getElementById("store-list");

    stores.forEach((store, index) => {
        storeList.innerHTML += createStoreHTML(store, index);
    });
}

// Call the function to populate the store list when the page loads
populateStoreList();

// Function to filter and display stores based on user input
function searchStores(query) {
    const storeList = document.getElementById("store-list");
    storeList.innerHTML = '';

    stores.forEach((store, index) => {
        if (store.name.toLowerCase().includes(query.toLowerCase())) {
            storeList.innerHTML += createStoreHTML(store, index);
        }
    });
}

// Function to handle search input
function handleSearchInput() {
    const searchInput = document.getElementById("search-input");
    searchInput.addEventListener("input", () => {
        searchStores(searchInput.value);
    });
}

// Call the function to handle search input
handleSearchInput();

// Function to view store details
function viewStore(index) {
    localStorage.setItem('store', JSON.stringify(stores[index]));
    window.location.href = `store.html`;
}
