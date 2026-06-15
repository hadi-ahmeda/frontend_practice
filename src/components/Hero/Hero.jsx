import "./Hero.css";
import heroImage from "../../assets/hero-house.jpg";
import { Home, ChevronLeft, ChevronRight } from "lucide-react";

function Hero() {
  return (
    <section className="hero">
      <img src={heroImage} alt="hero house" className="hero-bg" />

      <div className="hero-overlay">
        <nav className="navbar">
          <div className="logo">
            <Home size={22} strokeWidth={2.5} />
            Urbanet
          </div>
          <ul>
            <li className="active">Home</li>
            <li>About</li>
            <li>Listing</li>
          </ul>
          <button className="contact-btn">Contact Agent</button>
        </nav>

        <div className="hero-content">
          <div className="hero-text">
            <h1>
              <em>Simplifying</em> Property<br />
              Buying, Selling, And Renting
            </h1>
            <p>
              Your life evolves, and your home should too. We design flexible
              living spaces that adapt to your current needs, ensuring comfort,
              functionality, and style at every stage of life.
            </p>
            <button className="explore-btn">Explore Listings</button>
          </div>

          <div className="floating-card">
            <div className="floating-card-top">
              <Home size={18} className="card-icon" />
              <div>
                <strong>Modern Family Home</strong>
                <p>1234 Maple Avenue, Greenfield, TX</p>
              </div>
            </div>
            <button className="view-detail-btn">View Detail</button>
          </div>
        </div>

        <div className="hero-footer">
          <div className="happy-clients">
            <div className="avatars">
              <img src="https://i.pravatar.cc/32?img=1" alt="client" />
              <img src="https://i.pravatar.cc/32?img=2" alt="client" />
              <img src="https://i.pravatar.cc/32?img=3" alt="client" />
            </div>
            <div>
              <strong>50K+</strong>
              <span>Happy Clients</span>
            </div>
          </div>
          <div className="hero-nav-arrows">
            <button><ChevronLeft size={18} /></button>
            <button><ChevronRight size={18} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;