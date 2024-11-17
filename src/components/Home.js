
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [showMore, setShowMore] = useState(false);

    const highlights = [
      { title: 'Butter Chicken', description: 'Our signature dish, rich and creamy with authentic spices.' },
      { title: 'Biryani', description: 'Flavorful rice dish layered with tender meat and spices.' },
      { title: 'Paneer Tikka', description: 'Grilled paneer marinated in spices, served with mint chutney.' },
      { title: 'Pasta Masala', description: 'Fusion dish of pasta with Indian spices and fresh vegetables.' },
      { title: 'Samosas', description: 'Crispy pastry filled with spiced potatoes and peas.' },
      { title: 'Dal Makhani', description: 'Rich lentil dish cooked with cream and butter, served with naan.' },
      { title: 'Gulab Jamun', description: 'Soft, sweet, and syrupy dessert made from milk solids.' },
    ];

    return (
      <>
     <div className='Hero'>
      <div className="Overlay">
        <h1>Welcome to Bahar</h1>
        <p>
          A dining experience like no other—<em>where every meal is a feast fit for royalty</em>.
        </p>
        <Link to="./reservations" className="cta-button">Explore</Link>
        </div>
        </div>
    
        
        <section className='Section'>
          <h1>Our Story</h1>
          <div className="our-story-box">
            <p>
              Situated in the vibrant heart of the city, The Royal Rasoi is a culinary journey that brings the rich heritage of Indian cuisine to your plate. Our chefs, rooted in tradition yet inspired by innovation, take pride in presenting dishes that resonate with authentic flavors and aromas. Join us in celebrating the warmth and hospitality that make every meal a cherished experience.
            </p>
          </div>
        </section>
  
        <section className='Section'>
          <h1>What Our Guests Say</h1>
          <div className="testimonials">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Mujhe toh yeh restaurant bahut pasand aaya! Butter chicken toh kamaal hai aur ambiance bilkul ghar jaisa hai. Yeh restaurant har baar mujhe yaad dilata hai ki ghar ke khane ka maza kya hota hai."
              </p>
              <p className="customer-name">- Aditi Sharma</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Kya baat hai! Aaj tak itna tasty Indian khana nahi khaya. Flavors of India ka khana dil se bana hua lagta hai. Service bhi bahut acchi hai!"
              </p>
              <p className="customer-name">- Ravi Kumar</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Yahan aake mehsoos hota hai ki asli Indian khana kya hota hai. Thali ka maza leke dekho, aap zaroor baar baar aana chahenge!"
              </p>
              <p className="customer-name">- Sneha Verma</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "I never thought I’d find Italian pasta with an Indian twist that tastes this good! The Pasta Masala is truly unique, with spices that perfectly complement the creamy sauce. It’s become my absolute favorite!"
              </p>
              <p className="customer-name">- Meera Chopra</p>
            </div>
          </div>
        </section>
  
        <section className='Section'>
          <h1>Our Highlights</h1>
          <div className="highlights-section">
            <div className="highlights-grid">
              {highlights.slice(0, 4).map((highlight, index) => (
                <div className="highlight-card" key={index}>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </div>
              ))}
              {showMore && highlights.slice(4).map((highlight, index) => (
                <div className="highlight-card" key={index + 4}>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </div>
              ))}
            </div>
            <button onClick={() => setShowMore(!showMore)} className="explore-button">
              {showMore ? 'Show Less' : 'Explore More'}
            </button>
          </div>
        </section>
        </>
    );
  };
  
  export default Home;