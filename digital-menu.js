class DigitalMenu {
    constructor() {
        this.menuData = [
            // Starters
            {
                name: "Fish & Chips",
                category: "starters",
                description: "Crispy battered fish served with french fries and tartar sauce",
                price: 710,
                image: "img/g1.jpg"
            },
            {
                name: "Chicken Milanese",
                category: "starters",
                description: "Breaded chicken cutlet served with garlic aioli",
                price: 530,
                image: "img/g2.jpg"
            },
            {
                name: "Chicken Wings",
                category: "starters",
                description: "Crispy wings tossed in your choice of sauce",
                price: 450,
                image: "img/g3.jpg"
            },
            {
                name: "Hummus",
                category: "starters",
                description: "Classic chickpea dip served with Arabic bread",
                price: 250,
                image: "img/g4.jpg"
            },
            {
                name: "Fattoush",
                category: "starters",
                description: "Traditional Arabic salad with toasted pita bread",
                price: 280,
                image: "img/g5.jpg"
            },

            // Main Course
            {
                name: "Pasta Alfredo (Penne)",
                category: "main-course",
                description: "Creamy pasta in rich Alfredo sauce",
                variants: [
                    { size: "Vegetarian", price: 530 },
                    { size: "Chicken", price: 620 },
                    { size: "Shrimp", price: 800 }
                ],
                image: "img/g6.jpg"
            },
            {
                name: "Penne Arrabiata",
                category: "main-course",
                description: "Spicy tomato sauce pasta",
                variants: [
                    { size: "Vegetarian", price: 530 },
                    { size: "Chicken", price: 620 },
                    { size: "Shrimp", price: 800 }
                ],
                image: "img/g7.jpg"
            },
            {
                name: "Mexican Rice",
                category: "main-course",
                variants: [
                    { size: "With Grilled Paneer", price: 710 },
                    { size: "With Grilled Chicken", price: 800 }
                ],
                description: "Spicy Mexican rice with vegetables and choice of protein",
                image: "img/g8.jpg"
            },
            {
                name: "Peri Peri Chicken",
                category: "main-course",
                description: "Spicy grilled chicken with butter garlic rice",
                price: 710,
                image: "img/g9.jpg"
            },
            {
                name: "Lemon Grilled Fish",
                category: "main-course",
                description: "Fresh fish grilled with lemon herbs and white sauce",
                price: 1065,
                image: "img/g10.jpg"
            },
            {
                name: "Grilled Chicken",
                category: "main-course",
                description: "Tender chicken with brown sauce",
                price: 620,
                image: "img/g1.jpg"
            },

            // Arabic Specialties
            {
                name: "Chicken Mandi",
                category: "arabic",
                description: "Traditional smoky rice with tender chicken",
                variants: [
                    { size: "Quarter", price: 620 },
                    { size: "Half", price: 1065 },
                    { size: "Full", price: 2130 }
                ],
                image: "img/g2.jpg"
            },
            {
                name: "Mutton Mandi",
                category: "arabic",
                description: "Smoky rice with tender mutton pieces",
                variants: [
                    { size: "Quarter", price: 710 },
                    { size: "Half", price: 1420 }
                ],
                image: "img/g3.jpg"
            },
            {
                name: "Al Faham Mandi",
                category: "arabic",
                description: "Grilled chicken mandi with special spices",
                variants: [
                    { size: "Quarter", price: 620 },
                    { size: "Half", price: 1065 },
                    { size: "Full", price: 2130 }
                ],
                image: "img/g4.jpg"
            },
            {
                name: "Mixed Grill Platter",
                category: "arabic",
                description: "Assortment of grilled meats with Arabic rice",
                price: 1500,
                image: "img/g5.jpg"
            },
            {
                name: "Shawarma Plate",
                category: "arabic",
                variants: [
                    { size: "Chicken", price: 450 },
                    { size: "Beef", price: 520 }
                ],
                description: "Traditional shawarma served with garlic sauce and fries",
                image: "img/g6.jpg"
            },

            // Beverages
            {
                name: "Hot Beverages",
                category: "beverages",
                description: "Premium hot drinks selection",
                variants: [
                    { size: "Arabic Coffee", price: 180 },
                    { size: "Turkish Coffee", price: 200 },
                    { size: "Espresso", price: 150 },
                    { size: "Cappuccino", price: 200 },
                    { size: "Café Latte", price: 200 },
                    { size: "Karak Chai", price: 120 }
                ],
                image: "img/g7.jpg"
            },
            {
                name: "Fresh Juices",
                category: "beverages",
                description: "Orange, Apple, Watermelon, Pineapple, Mixed Fruit",
                price: 250,
                image: "img/g8.jpg"
            },
            {
                name: "Milkshakes",
                category: "beverages",
                variants: [
                    { size: "Chocolate", price: 280 },
                    { size: "Vanilla", price: 260 },
                    { size: "Strawberry", price: 280 }
                ],
                description: "Thick and creamy milkshakes",
                image: "img/g9.jpg"
            },
            {
                name: "Mocktails",
                category: "beverages",
                description: "Virgin Mojito, Blue Lagoon, Fruit Punch",
                price: 300,
                image: "img/g10.jpg"
            }
        ];
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderMenu();
    }

    setupEventListeners() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.filter;
                this.renderMenu();
            });
        });
    }

    createMenuItem(item) {
        return `
            <div class="menu-item" data-category="${item.category}">
                <div class="item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="item-details">
                    <h3 class="item-name">${item.name}</h3>
                    <p class="item-description">${item.description}</p>
                    ${this.renderPrice(item)}
                </div>
            </div>
        `;
    }

    renderPrice(item) {
        if (item.variants) {
            return `
                <ul class="price-variants">
                    ${item.variants.map(variant => 
                        `<li>${variant.size} - ₹${variant.price}</li>`
                    ).join('')}
                </ul>
            `;
        }
        return `<div class="item-price">₹${item.price}</div>`;
    }

    renderMenu() {
        const menuGrid = document.getElementById('menuGrid');
        const filteredItems = this.currentFilter === 'all' 
            ? this.menuData 
            : this.menuData.filter(item => item.category === this.currentFilter);

        menuGrid.innerHTML = filteredItems.map(item => this.createMenuItem(item)).join('');
    }
}

// Initialize the digital menu
document.addEventListener('DOMContentLoaded', () => {
    new DigitalMenu();
}); 