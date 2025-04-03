import MenuCard from '../Components/MenuCard';
import './Menu.css'; 
const menuItems = [
  {
    id: 1,
    name: "Pasta Carbonara",
    description: "Classic Italian pasta with either eggs, cheese, pancetta, and pepper",
    price: 14.99,
    image: "src/assets/pinar-kucuk-QuFm328PV88-unsplash.jpg"
  },
  {
    id: 1,
    name: "Pancakes",
    description: "Classic pancakes with eggs, cheese, pancetta, and pepper",
    price: 14.99,
    image: "src/assets/fernando-andrade-ZQKY56UdcSQ-unsplash.jpg"
  },
  {
    id: 1,
    name: "Bacon strips",
    description: "Classic Bacons with eggs, cheese, pancetta, and pepper",
    price: 14.99,
    image: "src/assets/james-trenda-IJIyIWZk-qg-unsplash.jpg"
  },
 
  // More items...
];

export default function Menu() {
  return (
    <div className="menu-page">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map(item => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}