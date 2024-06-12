// Sample store data (you can replace this with real data)
const stores = [
    {
        name: "Kabir Multi Store",
        location: "COS",
        contact: "9876570415"
    },
    {
        name: "Bombay Munchery",
        location: "COS",
        contact: "Contact Info 2"
    },
    {
        name: "Pizza Nation",
        location: "COS",
        contact: "Contact Info 3"
    }
];

// Function to generate HTML for store information
function createStoreHTML(store) {
    return `
    <section class="store">
        <h2>${store.name}</h2>
        <p>Location: ${store.location}</p>
        <p>Contact: ${store.contact}</p>
    </section>
    `;
}

// Function to populate the store list on the page
function populateStoreList() {
    const storeList = document.getElementById("store-list");

    stores.forEach(store => {
        storeList.innerHTML += createStoreHTML(store);
    });
}

// Call the function to populate the store list when the page loads
populateStoreList();

// Function to filter and display stores based on user input
function searchStores(query) {
    const storeList = document.getElementById("store-list");
    storeList.innerHTML = '';

    stores.forEach(store => {
        if (store.name.toLowerCase().includes(query.toLowerCase())) {
            storeList.innerHTML += createStoreHTML(store);
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

