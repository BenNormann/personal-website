import React from "react";
import HoverTilt from "../reactbits/HoverTilt";
import ScrollReveal from "../reactbits/ScrollReveal";
import ExpositionCard from "./ExpositionCard";
import {
  carsOverview,
  musicExposition,
  everythingElseExposition,
} from "../data/personalExpositionData";

const carHeroImg = carsOverview.cars.find((c) => c.id === "s2000")?.heroImg;
const musicHeroImg = musicExposition.imageTextBlocks?.[0]?.src;
const travelHeroImg = everythingElseExposition.imageTextBlocks?.[7]?.src;

const hobbyCards = [
  {
    id: "cars",
    to: "/cars",
    title: "Cars",
    category: "Vintage Restoration & Automotive",
    img: carHeroImg,
    alt: "Vintage car restoration",
  },
  {
    id: "music",
    to: "/music",
    title: "Music",
    category: "Composition & Production",
    img: musicHeroImg,
    alt: "Music production setup",
  },
  {
    id: "everything-else",
    to: "/everything-else",
    title: "Everything Else",
    category: "Eagle Scout · Travel · Tennis · Skiing · Hiking · Boating",
    img: travelHeroImg,
    alt: "Travel and outdoors",
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
        <div className="row align-items-stretch mt-4" style={{ flexWrap: "wrap" }}>
          {hobbyCards.map((card) => (
            <div key={card.id} className="col-md-4 d-flex mb-4">
              <ScrollReveal containerClassName="h-100 w-100">
                <HoverTilt className="w-100" containerHeight="100%">
                  <ExpositionCard
                    title={card.title}
                    category={card.category}
                    img={card.img}
                    alt={card.alt}
                    to={card.to}
                    imageCoversCard={true}
                  />
                </HoverTilt>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
