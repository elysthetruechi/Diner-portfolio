export default function MenuCard({ item }) {
    return (
      <div className="menu-card">
        <img src={item.image} alt={item.name} />
        <div className="menu-details">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <span>${item.price}</span>
        </div>
      </div>
    );
  }