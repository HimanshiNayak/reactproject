import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [galleryItems] = useState({
    Beverages: [
      { id: 1, name: 'Classic Virgin Mojito', price: 150 },
      { id: 2, name: 'Strawberry Basil Lemonade', price: 140 },
      { id: 3, name: 'Pina Colada (Non-Alcoholic)', price: 160 },
      { id: 5, name: 'Fresh Watermelon Juice', price: 120 },
    ],
    "Appetizers & Salads": [
      { id: 11, name: 'Caesar Salad with Parmesan', price: 200 },
      { id: 13, name: 'Hummus & Pita Platter', price: 160 },
      { id: 14, name: 'Stuffed Mushroom Caps', price: 180 },
      { id: 15, name: 'Vegetable Tempura with Soya Dip', price: 150 },
    ],
    "Pasta & Noodles": [
      { id: 20, name: 'Penne Alfredo', price: 220 },
      { id: 21, name: 'Spaghetti Aglio e Olio', price: 230 },
      { id: 23, name: 'Vegetable Hakka Noodles', price: 160 },
      { id: 25, name: 'Mac & Cheese', price: 200 },
    ],
    "Indian Classics": [
      { id: 30, name: 'Royal Indian Veg Thali', price: 300 },
      { id: 32, name: 'Paneer Butter Masala', price: 200 },
      { id: 33, name: 'Chole Masala', price: 160 },
      { id: 35, name: 'Vegetable Kofta Curry', price: 180 },
    ],
    "Burgers, Sandwiches & Wraps": [
      { id: 40, name: 'Classic Veg Burger with Fries', price: 150 },
      { id: 41, name: 'Grilled Veggie & Cheese Sandwich', price: 160 },
      { id: 42, name: 'Paneer Tikka Wrap', price: 180 },
      { id: 43, name: 'Mushroom & Spinach Panini', price: 200 },
    ],
    Desserts: [
      { id: 51, name: 'Classic Tiramisu', price: 200 },
      { id: 53, name: 'Kulfi with Falooda', price: 120 },
      { id: 54, name: 'Mango Mousse', price: 130 },
      { id: 55, name: 'Gulab Jamun with Rabri', price: 100 },
    ],
  });

  return (
    <div className="gallery-container">
      <h2>Captured Flavors: A Visual Journey</h2>
      {Object.entries(galleryItems).map(([section, items]) => (
        <div key={section} className="gallery-section">
          <h3 className="section-title">{section}</h3>
          <div className="gallery-grid">
            {items.map((item) => (
              <div key={item.id} className="gallery-item">
                <img
                  src={require(`../Images/${item.id}.jpeg`)}
                  alt={item.name}
                  className="item-image"
                />
                <p className="items-name">{item.name}</p>
                <p className="item-price">₹{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
