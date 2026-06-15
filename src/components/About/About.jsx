import "./About.css";
import aboutHouse from "../../assets/about-house.jpg";

function About() {
  return (
    <section className="about">
      <div className="about-header">
        <h2>
          Connecting People With Perfect Properties
        </h2>
        <p>
          Urbanet is a leading real estate platform dedicated to connecting
          buyers, sellers, and renters with their perfect property.
        </p>
      </div>

      <div className="about-image">
        <img src={aboutHouse} alt="house" />
        <button className="play-btn">▶</button>
      </div>
    </section>
  );
}

export default About;