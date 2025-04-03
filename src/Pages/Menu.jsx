import MenuCard from '../Components/MenuCard';

const menuItems = [
  {
    id: 1,
    name: "Pasta Carbonara",
    description: "Classic Italian pasta with eggs, cheese, pancetta, and pepper",
    price: 14.99,
    image: "src/assets/pinar-kucuk-QuFm328PV88-unsplash.jpg"
  },
  {
    id: 1,
    name: "Pasta Carbonara",
    description: "Classic Italian pasta with eggs, cheese, pancetta, and pepper",
    price: 14.99,
    image: ""
  },
  {
    id: 1,
    name: "Pasta Carbonara",
    description: "Classic Italian pasta with eggs, cheese, pancetta, and pepper",
    price: 14.99,
    image: "/path-to-image.jpg"
  },
  {
    id: 1,
    name: "Pasta Carbonara",
    description: "Classic Italian pasta with eggs, cheese, pancetta, and pepper",
    price: 14.99,
    image: "/path-to-image.jpg"
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