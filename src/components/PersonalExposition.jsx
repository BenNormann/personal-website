import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import ExpositionSpine from "./ExpositionSpine";
import ClickSpark from "../reactbits/ClickSpark";
import TiltedButton from "../reactbits/TiltedButton";
import HoverTilt from "../reactbits/HoverTilt";
import ScrollReveal from "../reactbits/ScrollReveal";
import ImageText from "./ImageText";
import ImageModal from "./ImageModal";
import {
  carsOverview,
  carExpositions,
  musicExposition,
  everythingElseExposition,
} from "../data/personalExpositionData";

const BackButton = ({ label = "← Back to Beyond the Code", to }) => {
  const navigate = useNavigate();
  const isHome = to === undefined || to === "/";
  return (
    <div className="text-center mt-5 pb-5">
      <ClickSpark>
        <TiltedButton
          onClick={() => {
            navigate(to ?? "/");
            if (isHome) {
              setTimeout(() => {
                const target = document.querySelector("#hobbies");
                if (target) {
                  const navHeight = document.querySelector("#mainNav")?.clientHeight || 72;
                  window.scrollTo({
                    top: target.getBoundingClientRect().top + window.pageYOffset - navHeight + 5,
                    behavior: "smooth",
                  });
                }
              }, 100);
            }
          }}
        >
          {label}
        </TiltedButton>
      </ClickSpark>
    </div>
  );
};

const CarCard = ({ car }) => (
  <div className="work-box w-100 h-100" style={{ display: "flex", flexDirection: "column" }}>
    <Link to={car.to} className="work-box-link" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div className="work-img">
        <img
          src={car.heroImg}
          alt={car.name}
          className="img-fluid"
          style={{ objectFit: "cover", height: "200px", width: "100%" }}
        />
      </div>
      <div className="work-content" style={{ flex: "1 0 auto" }}>
        <div className="row">
          <div className="col-sm-12">
            <h2 className="w-title">{car.name}</h2>
            <div className="w-more">
              <span className="w-ctegory">{car.category}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

const carsOverviewSections = [
  { id: "hero", title: carsOverview.title },
  ...carsOverview.cars.map((car) => ({ id: `car-${car.id}`, title: car.name })),
];

const CarsOverview = () => (
  <>
    <div className="expo-hero expo-hero-no-logo" data-section-id="hero">
      <div className="expo-hero-text">
        <h1 className="expo-hero-title">{carsOverview.title}</h1>
        <span className="expo-badge">{carsOverview.subtitle}</span>
      </div>
    </div>
    {carsOverview.intro && (
      <div className="mb-4">
        <p className="expo-paragraph">{carsOverview.intro}</p>
      </div>
    )}
    <div className="row align-items-stretch mb-4" style={{ flexWrap: "wrap" }}>
      {carsOverview.cars.map((car) => (
        <div key={car.id} className="col-md-4 d-flex mb-4" data-section-id={`car-${car.id}`}>
          <ScrollReveal containerClassName="h-100 w-100">
            <HoverTilt className="w-100" containerHeight="100%">
              <CarCard car={car} />
            </HoverTilt>
          </ScrollReveal>
        </div>
      ))}
    </div>
    <BackButton />
  </>
);

const MediaGallery = ({ images, videos, onImageClick }) => {
  return (
    <>
      {videos && videos.length > 0 && (
        <div className="expo-video-wrap mb-3">
          {videos.map((v, i) => (
            <div key={i} className="expo-media-primary mb-3">
              <p className="expo-video-label">{v.title}</p>
              <div className="expo-video-aspect expo-video-native">
                <video src={v.url} controls playsInline style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
            </div>
          ))}
        </div>
      )}
      {images && images.length > 0 && (
        <div className="expo-image-gallery personal-expo-gallery">
          {images.map((img, i) => (
            <div
              key={i}
              className="expo-image-thumb"
              onClick={() => onImageClick && onImageClick(img)}
            >
              <img src={img} alt={`Gallery ${i + 1}`} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const CarExposition = ({ carId }) => {
  const [modalImage, setModalImage] = useState(null);
  const car = carExpositions[carId];
  if (!car) return null;

  return (
    <>
      <div className="expo-hero expo-hero-no-logo" data-section-id="hero">
        <div className="expo-hero-text">
          <h1 className="expo-hero-title">{car.name}</h1>
          <span className="expo-badge">Vintage Restoration</span>
        </div>
      </div>

      {car.intro && (
        <div className="mb-4">
          <h4 className="expo-section-label">The Journey</h4>
          {car.intro.split("\n\n").map((para, i) => (
            <p key={i} className="expo-paragraph">
              {para.trim()}
            </p>
          ))}
        </div>
      )}

      {car.imageTextBlocks?.map((block, i) => (
        <div key={i} data-section-id={`section-${i}`}>
          <ImageText
            image={block.src}
            alt={block.alt}
            onImageClick={(src) => setModalImage(src)}
          >
            <p>{block.blurb}</p>
          </ImageText>
        </div>
      ))}

      {car.videos && car.videos.length > 0 && (
        <div className="mt-4">
          <h4 className="expo-section-label">Videos</h4>
          <MediaGallery videos={car.videos} />
        </div>
      )}

      <BackButton label="← Back to Cars" to="/cars" />

      <ImageModal src={modalImage} onClose={() => setModalImage(null)} />
    </>
  );
};

const MusicExposition = () => {
  const data = musicExposition;
  const [modalImage, setModalImage] = useState(null);
  const introParagraphs = Array.isArray(data.intro) ? data.intro : [data.intro].filter(Boolean);

  return (
    <>
      <div className="expo-hero expo-hero-no-logo" data-section-id="hero">
        <div className="expo-hero-text">
          <h1 className="expo-hero-title">{data.title}</h1>
          <span className="expo-badge">{data.subtitle}</span>
        </div>
      </div>

      {introParagraphs.length > 0 && (
        <div className="mb-4">
          {introParagraphs.map((para, i) => (
            <p key={i} className="expo-paragraph">
              {para}
            </p>
          ))}
        </div>
      )}

      {data.imageTextBlocks?.map((block, i) => (
        <div key={i} data-section-id={`section-${i}`}>
          <ImageText
            image={block.src}
            alt={block.alt}
            onImageClick={(src) => setModalImage(src)}
          >
            <p>{block.blurb}</p>
          </ImageText>
        </div>
      ))}

      <div className="mb-4" data-section-id="listen">
        <h4 className="expo-section-label">Listen</h4>
        <div className="expo-links">
          {data.spotifyProfile && (
            <a
              href={data.spotifyProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn expo-btn-primary mb-2"
            >
              <i className="fa fa-spotify" aria-hidden="true" /> Spotify
            </a>
          )}
          <a
            href={data.youtubeChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="btn expo-btn-ghost mb-2"
          >
            <i className="fa fa-youtube-play" aria-hidden="true" /> YouTube Channel
          </a>
        </div>
      </div>

      {data.youtubeVideoId && (
        <div className="mb-4">
          <h4 className="expo-section-label">Featured</h4>
          <div className="expo-video-aspect">
            <iframe
              src={`https://www.youtube.com/embed/${data.youtubeVideoId}`}
              title="YouTube"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            />
          </div>
        </div>
      )}

      <BackButton />

      <ImageModal src={modalImage} onClose={() => setModalImage(null)} />
    </>
  );
};

const EverythingElseExposition = () => {
  const data = everythingElseExposition;
  const [modalImage, setModalImage] = useState(null);
  const introParagraphs = Array.isArray(data.intro) ? data.intro : [data.intro].filter(Boolean);

  return (
    <>
      <div className="expo-hero expo-hero-no-logo" data-section-id="hero">
        <div className="expo-hero-text">
          <h1 className="expo-hero-title">{data.title}</h1>
          <span className="expo-badge">{data.subtitle}</span>
        </div>
      </div>

      {introParagraphs.length > 0 && (
        <div className="mb-4">
          {introParagraphs.map((para, i) => (
            <p key={i} className="expo-paragraph">
              {para}
            </p>
          ))}
        </div>
      )}

      {data.jdp && (
        <div className="mb-4 p-4" style={{ background: "rgba(255,255,255,0.04)", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
          <h4 className="expo-section-label">{data.jdp.title}</h4>
          <p className="expo-paragraph">{data.jdp.description}</p>
          <a
            href={data.jdp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn expo-btn-ghost"
          >
            Learn more (William & Mary)
          </a>
        </div>
      )}

      {data.eagleProject && (
        <div className="mb-4 p-4" style={{ background: "rgba(255,255,255,0.04)", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
          <h4 className="expo-section-label">{data.eagleProject.title}</h4>
          <p className="expo-paragraph">{data.eagleProject.blurb}</p>
          <a
            href={data.eagleProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn expo-btn-primary"
          >
            Learn More
          </a>
        </div>
      )}

      {data.optionalSubsections && data.optionalSubsections.length > 0 && (
        <div className="mb-4">
          {data.optionalSubsections.map((sub, i) => (
            <div key={i} className="mb-4">
              <h4 className="expo-section-label">{sub.title}</h4>
              <p className="expo-paragraph">{sub.description}</p>
            </div>
          ))}
        </div>
      )}

      <h4 className="expo-section-label mb-3">Travel</h4>
      {data.imageTextBlocks?.map((block, i) => (
        <div key={i} data-section-id={`section-${i}`}>
          <ImageText
            image={block.src}
            alt={block.alt}
            onImageClick={(src) => setModalImage(src)}
          >
            <p>{block.blurb}</p>
          </ImageText>
        </div>
      ))}

      <BackButton />

      <ImageModal src={modalImage} onClose={() => setModalImage(null)} />
    </>
  );
};

const PersonalExposition = () => {
  const location = useLocation();
  const path = location.pathname;

  // Lock body scroll so only .project-exposition scrolls (fixes double scrollbar with video)
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // /cars/gtx, /cars/rx7, /cars/s2000
  const carMatch = path.match(/^\/cars\/(gtx|rx7|s2000)$/);
  if (carMatch) {
    const car = carExpositions[carMatch[1]];
    const carSections = car
      ? [
          { id: "hero", title: car.name },
          ...(car.imageTextBlocks || []).map((block, i) => ({
            id: `section-${i}`,
            title: block.title || block.alt,
          })),
        ]
      : [];
    return (
      <section className="project-exposition route">
        <div className="expo-content-layer">
          <ExpositionSpine sections={carSections}>
            <div className="container">
              <CarExposition carId={carMatch[1]} />
            </div>
          </ExpositionSpine>
        </div>
      </section>
    );
  }

  // /cars
  if (path === "/cars") {
    return (
      <section className="project-exposition route">
        <div className="expo-content-layer">
          <ExpositionSpine sections={carsOverviewSections}>
            <div className="container">
              <CarsOverview />
            </div>
          </ExpositionSpine>
        </div>
      </section>
    );
  }

  // /music
  if (path === "/music") {
    const musicSections = [
      { id: "hero", title: musicExposition.title },
      ...(musicExposition.imageTextBlocks || []).map((b, i) => ({ id: `section-${i}`, title: b.title || b.alt })),
      { id: "listen", title: "Listen" },
    ];
    return (
      <section className="project-exposition route">
        <div className="expo-content-layer">
          <ExpositionSpine sections={musicSections}>
            <div className="container">
              <MusicExposition />
            </div>
          </ExpositionSpine>
        </div>
      </section>
    );
  }

  // /everything-else
  if (path === "/everything-else") {
    const everythingSections = [
      { id: "hero", title: everythingElseExposition.title },
      ...(everythingElseExposition.imageTextBlocks || []).map((b, i) => ({ id: `section-${i}`, title: b.title || b.alt })),
    ];
    return (
      <section className="project-exposition route">
        <div className="expo-content-layer">
          <ExpositionSpine sections={everythingSections}>
            <div className="container">
              <EverythingElseExposition />
            </div>
          </ExpositionSpine>
        </div>
      </section>
    );
  }

  return (
    <section className="project-exposition route">
      <div className="container">
        <h2>Page Not Found</h2>
        <p>The requested page could not be found.</p>
        <BackButton />
      </div>
    </section>
  );
};

export default PersonalExposition;
