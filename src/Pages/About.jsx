import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-overlay"></div>
        <h2 className="about-title">Our Story</h2>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <p className="about-lead">
            At <span className="highlight">Kary's Diner</span>, we don't just serve food—we serve memories.
          </p>
          
          <div className="about-paragraphs">
            <p>
              Founded in 2020 by Kary Thompson, our cozy corner of comfort has quickly become 
              a beloved gathering place. What began as a humble dream—a single grill and six 
              stools—has grown into the heart of our community.
            </p>
            
            <p>
              From <span className="accent">fluffy buttermilk pancakes</span> at sunrise to 
              <span className="accent"> hearty meatloaf dinners</span> under the glow of our 
              neon sign, every dish is made with the same love and care Kary poured into her 
              first pot of chili.
            </p>
            
            <p>
              Our recipes come straight from Kary's grandmother's cookbook, using locally-sourced 
              ingredients and served with genuine hospitality. The coffee's always hot, the pies 
              are always fresh, and the welcome is always warm.
            </p>
          </div>
        </div>
        
        <div className="about-image">
          <div className="polaroid-frame">
            <img 
              src="/src/assets/john-fornander-jJIb2e7Jkcs-unsplash.jpg" 
              alt="Kary Thompson in her diner's kitchen, 2020"
              className="polaroid-img"
            />
            <p className="polaroid-caption">Kary at the original grill, 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
}