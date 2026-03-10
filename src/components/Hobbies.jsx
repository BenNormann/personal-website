import React from "react";
import ScrollReveal from "../reactbits/ScrollReveal";

const hobbyCards = [
  {
    id: "cars",
    title: "Cars",
    subtitle: "Vintage Restoration & Automotive",
    image: "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?w=800&h=1000&fit=crop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. From stripping down classic engines to sourcing period-correct parts, there's nothing quite like bringing a forgotten machine back to life. The process demands patience, precision, and a deep appreciation for the craftsmanship of a different era.",
  },
  {
    id: "music",
    title: "Music",
    subtitle: "Composition & Production",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=1000&fit=crop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Music has always been a creative outlet — whether composing original pieces, layering synths, or exploring different genres. It's one of the few pursuits where technical discipline and pure intuition live side by side.",
  },
  {
    id: "other",
    title: "Everything Else",
    subtitle: "Eagle Scout · Travel · Tennis · Skiing · Hiking · Boating",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=1000&fit=crop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Life is best lived across many pursuits. From earning Eagle Scout to competitive tennis courts, steep ski runs, open water, and trails wherever the map ends — staying curious and active outside the screen is what keeps everything else sharp.",
  },
];

const Hobbies = () => {
  return (
    <section id="hobbies" className="hobbies-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <ScrollReveal>
                <h3 className="title-a">Beyond the Code</h3>
                <p className="subtitle-a">
                  Life outside of tech — the adventures, pursuits, and passions that keep me grounded
                </p>
                <div className="line-mf"></div>
              </ScrollReveal>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          {hobbyCards.map((card) => (
            <div key={card.id} className="col-md-4 mb-4">
              <ScrollReveal>
                <div className="hobby-card">
                  <div
                    className="hobby-card-img"
                    style={{ backgroundImage: `url(${card.image})` }}
                  />
                  <div className="hobby-card-overlay" />
                  <div className="hobby-card-body">
                    <h4 className="hobby-card-title">{card.title}</h4>
                    <p className="hobby-card-subtitle">{card.subtitle}</p>
                    <p className="hobby-card-desc">{card.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
