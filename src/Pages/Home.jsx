// pages/Home.jsx
import { motion } from 'framer-motion';
import './Home.css'; 
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Kary's Diner!</h1>
          <p>Experience culinary excellence</p>
          <button>View Menu</button>
        </div>
      </section>
      
      <section className="featured">
        {/* Featured dishes or specials */}
      </section>
    </motion.div>
  );
}