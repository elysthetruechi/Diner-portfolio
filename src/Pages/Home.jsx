// pages/Home.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to Kary's Diner!
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Experience culinary excellence
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/menu" className="hero-button">
              View Menu
            </Link>
          </motion.div>
        </div>
      </section>
      
      <section className="featured">
        {/* Featured dishes or specials */}
      </section>
    </motion.div>
  );
}