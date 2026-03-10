import React from "react";
import FlowingMenu from "../reactbits/FlowingMenu";
import ScrollReveal from "../reactbits/ScrollReveal";

const hobbyItems = [
  {
    text: "Eagle Scout",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=80&h=80&fit=crop",
    link: "#hobbies",
  },
  {
    text: "Vintage Car Restoration",
    image: "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?w=80&h=80&fit=crop",
    link: "#hobbies",
  },
  {
    text: "Music Composition",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=80&h=80&fit=crop",
    link: "#hobbies",
  },
  {
    text: "Travel",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=80&h=80&fit=crop",
    link: "#hobbies",
  },
  {
    text: "Tennis",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=80&h=80&fit=crop",
    link: "#hobbies",
  },
  {
    text: "Skiing",
    image: "https://images.unsplash.com/photo-1543162932-c8c0a78d4e3d?w=80&h=80&fit=crop",
    link: "#hobbies",
  },
  {
    text: "Hiking",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=80&h=80&fit=crop",
    link: "#hobbies",
  },
  {
    text: "Boating",
    image: "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=80&h=80&fit=crop",
    link: "#hobbies",
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
      </div>
      <div className="hobbies-menu-wrap">
        <FlowingMenu items={hobbyItems} />
      </div>
    </section>
  );
};

export default Hobbies;
