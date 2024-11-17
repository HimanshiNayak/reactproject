import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

const MenuItem = ({ id, name, price }) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate('/order', { state: { id, name, price } });
  };

  return (
    <div className="menu-item" onClick={handleItemClick}>
      <span className="item-name">{name}</span>
      <span className="item-price">₹{price}</span>
    </div>
  );
};

const MenuSection = ({ title, items }) => (
  <div className="menu-section">
    <h2>{title}</h2>
    <div className="section-items">
      {items.map((item, index) => (
        <MenuItem key={index} name={item.name} price={item.price} />
      ))}
    </div>
  </div>
);

const Menu= () => {
  const menuData = {
    beverages: [
      { name: 'Classic Virgin Mojito', price: 150 },
      { name: 'Strawberry Basil Lemonade', price: 140 },
      { name: 'Pina Colada (Non-Alcoholic)', price: 160 },
      { name: 'Mango Mint Smoothie', price: 130 },
      { name: 'Fresh Watermelon Juice', price: 120 },
      { name: 'Masala Chai Latte', price: 80 },
      { name: 'Organic Green Tea', price: 60 },
      { name: 'Cold Brew Coffee', price: 140 },
      { name: 'Classic Iced Latte', price: 120 },
    ],
    appetizers: [
      { name: 'Greek Salad with Feta', price: 180 },
      { name: 'Caesar Salad with Parmesan', price: 200 },
      { name: 'Bruschetta Trio', price: 160 },
      { name: 'Hummus & Pita Platter', price: 160 },
      { name: 'Stuffed Mushroom Caps', price: 180 },
      { name: 'Vegetable Tempura with Soya Dip', price: 150 },
      { name: 'Avocado Toast with Microgreens', price: 160 },
      { name: 'Cheese Corn Balls', price: 120 },
    ],
    pasta: [
      { name: 'Penne Alfredo', price: 220 },
      { name: 'Spaghetti Aglio e Olio', price: 230 },
      { name: 'Creamy Pesto Fettuccine', price: 240 },
      { name: 'Vegetable Hakka Noodles', price: 160 },
      { name: 'Thai Red Curry with Jasmine Rice', price: 250 },
      { name: 'Mac & Cheese', price: 200 },
    ],
    indianClassics: [
      { name: 'Royal Indian Veg Thali', price: 300 },
      { name: 'Mini Veg Thali', price: 180 },
      { name: 'Paneer Butter Masala', price: 200 },
      { name: 'Chole Masala', price: 160 },
      { name: 'Dal Tadka', price: 140 },
      { name: 'Vegetable Kofta Curry', price: 180 },
      { name: 'Palak Paneer', price: 200 },
      { name: 'Aloo Gobi Masala', price: 150 },
      { name: 'Butter Naan', price: 30 },
      { name: 'Garlic Naan', price: 40 },
      { name: 'Stuffed Kulcha', price: 60 },
      { name: 'Multigrain Roti', price: 20 },
      { name: 'Laccha Paratha', price: 30 },
    ],
    burgers: [
      { name: 'Classic Veg Burger with Fries', price: 150 },
      { name: 'Grilled Veggie & Cheese Sandwich', price: 160 },
      { name: 'Paneer Tikka Wrap', price: 180 },
      { name: 'Mushroom & Spinach Panini', price: 200 },
      { name: 'Falafel Wrap with Hummus', price: 180 },
    ],
    internationalMains: [
      { name: 'Vegetable Lasagna', price: 240 },
      { name: 'Grilled Veggie Platter with Herbed Quinoa', price: 260 },
      { name: 'Stuffed Bell Peppers with Couscous', price: 200 },
      { name: 'Vegetable Thai Green Curry with Rice', price: 250 },
      { name: 'Mediterranean Mezze Platter', price: 220 },
    ],
    desserts: [
      { name: 'Dark Chocolate Fondant with Vanilla Ice Cream', price: 180 },
      { name: 'Classic Tiramisu', price: 200 },
      { name: 'Raspberry Cheesecake', price: 160 },
      { name: 'Kulfi with Falooda', price: 120 },
      { name: 'Mango Mousse', price: 130 },
      { name: 'Gulab Jamun with Rabri', price: 100 },
      { name: 'Assorted Macarons (4 pcs)', price: 150 },
      { name: 'Fresh Fruit Platter', price: 100 },
    ],
  };

  return (
    <div className="menu">
      <h1 className="menu-title"> Menu</h1>
      <MenuSection title=" Beverages" items={menuData.beverages} />
      <MenuSection title=" Appetizers & Salads" items={menuData.appetizers} />
      <MenuSection title=" Pasta & Noodles" items={menuData.pasta} />
      <MenuSection title=" Indian Classics" items={menuData.indianClassics} />
      <MenuSection title=" Burgers, Sandwiches & Wraps" items={menuData.burgers} />
      <MenuSection title=" International Mains" items={menuData.internationalMains} />
      <MenuSection title=" Desserts" items={menuData.desserts} />
    </div>
  );
};

export default Menu;
