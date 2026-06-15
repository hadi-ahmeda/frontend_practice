import "./Services.css";
import buyingImg from "../../assets/buying.jpg";
import sellingImg from "../../assets/selling.jpg";
import rentingImg from "../../assets/renting.jpg";
import consultingImg from "../../assets/consulting.jpg";
import {
  BadgeCheck,
  SlidersHorizontal,
  Headphones,
  MousePointerClick,
  Video,
  Tag,
  CreditCard,
  Users,
} from "lucide-react";

function Services() {
  const services = [
    { title: "Property Buying", desc: "Find your dream home from our extensive listings of verified properties.", img: buyingImg },
    { title: "Property Selling", desc: "Sell your property quickly and efficiently with our market expertise.", img: sellingImg },
    { title: "Property Renting", desc: "Explore the best rental options that suit your lifestyle and budget.", img: rentingImg },
    { title: "Real Estate Consulting", desc: "Get professional advice to make informed property decisions.", img: consultingImg },
  ];

  const facilities = [
    { icon: <BadgeCheck size={24} />, title: "Verified Property Listings", desc: "100% trusted properties for peace of mind." },
    { icon: <SlidersHorizontal size={24} />, title: "Advanced Search Filters", desc: "Find properties tailored to your preferences." },
    { icon: <Headphones size={24} />, title: "Expert Support", desc: "Agents and consultants at your service." },
    { icon: <MousePointerClick size={24} />, title: "User-Friendly Platform", desc: "Simple navigation for seamless browsing." },
    { icon: <Video size={24} />, title: "Virtual Tours", desc: "Explore properties from the comfort of your home." },
    { icon: <Tag size={24} />, title: "Affordable Pricing", desc: "Competitive rates for every budget." },
    { icon: <CreditCard size={24} />, title: "Flexible Payment Options", desc: "Tailored payment plans for ease." },
    { icon: <Users size={24} />, title: "Community Insights", desc: "Discover neighborhoods that fit your lifestyle." },
  ];

  return (
    <section className="services">
      <div className="title-row">
        <h2>What We Offer</h2>
        <p>We are redefining real estate with innovation and excellence.</p>
      </div>

      <div className="service-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index} style={{ backgroundImage: `url(${service.img})` }}>
            <div className="service-card-body">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="title-row facility-title">
        <h2>Discover The Facilities <br />We Offer At Urbanet</h2>
        <p>
          With innovative solutions, market expertise, and a customer-first
          approach, we simplify the process to ensure a smooth experience.
        </p>
      </div>

      <div className="facility-grid">
        {facilities.map((facility, index) => (
          <div className="facility-card" key={index}>
            <div className="facility-icon">{facility.icon}</div>
            <h3>{facility.title}</h3>
            <p>{facility.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;