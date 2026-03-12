/**
 * Personal exposition data for Beyond the Code pages.
 * Text derived from personal statement + file-name hints; placeholders for user to fill.
 */

// Cars - GTX
import gtxDay1 from "../assets/personal-media/Cars/GTX/Day1.jpg";
import gtxDay1Interior from "../assets/personal-media/Cars/GTX/Day1Interior.jpg";
import gtxValvecoverAfter from "../assets/personal-media/Cars/GTX/ValvecoverAfter.jpg";
import gtxValvecoverBefore from "../assets/personal-media/Cars/GTX/valvecoverbefore.jpg";

// Cars - RX7
import rx7Day1Front from "../assets/personal-media/Cars/RX7/Day1Front.jpg";
import rx7Day1Back from "../assets/personal-media/Cars/RX7/Day1Back.jpg";
import rx7BeforeGuages from "../assets/personal-media/Cars/RX7/BeforeGuages.jpg";
import rx7Fluids from "../assets/personal-media/Cars/RX7/Fluids.jpg";
import rx7RetroTailights from "../assets/personal-media/Cars/RX7/RetroTailights.JPG";
import rx7Beachsunset from "../assets/personal-media/Cars/RX7/beachsunset1.jpg";
import rx7WithCappucino from "../assets/personal-media/Cars/RX7/withcappucino.jpg";
import rx7Startup1st from "../assets/personal-media/Cars/RX7/Startup1st.mp4";

// Cars - S2000
import s2000Day1 from "../assets/personal-media/Cars/S2000/day1.jpg";
import s2000Day1Dent from "../assets/personal-media/Cars/S2000/day1dent.jpg";
import s2000BumperOff from "../assets/personal-media/Cars/S2000/bumperoff.jpg";
import s2000Valves from "../assets/personal-media/Cars/S2000/valves.jpg";
import s2000OldSeats from "../assets/personal-media/Cars/S2000/oldseats.jpg";
import s2000NewSeats from "../assets/personal-media/Cars/S2000/newseats.jpg";
import s2000SofttopReplace from "../assets/personal-media/Cars/S2000/softtopreplace.jpg";
import s2000Now from "../assets/personal-media/Cars/S2000/S2000now.jpg";
import s2000StrangeNoise from "../assets/personal-media/Cars/S2000/StrangeNoise.mp4";

// Music
import musicSetupBW from "../assets/personal-media/Music/setupBW.jpg";

// Travel (skip Glacier.heic - unsupported in browsers)
import travelAmsterdam from "../assets/personal-media/Travel/Amsterdam.jpg";
import travelCavesSpain from "../assets/personal-media/Travel/CavesSpain.jpg";
import travelJoshRoadTrip from "../assets/personal-media/Travel/JoshRoadTrip.jpg";
import travelPolandWinterMarket from "../assets/personal-media/Travel/PolandWinterMarket.jpg";
import travelPortugul from "../assets/personal-media/Travel/Portugul.jpg";
import travelPrincesslouisainlet from "../assets/personal-media/Travel/Princesslouisainlet.jpg";
import travelRoadTripCamp from "../assets/personal-media/Travel/RoadTripCamp.jpg";
import travelScotlandCliffs from "../assets/personal-media/Travel/ScotlandCliffs.JPG";
import travelAlovelyhike1 from "../assets/personal-media/Travel/Alovelyhike1.jpg";
import travelAlovelyhike2 from "../assets/personal-media/Travel/Alovelyhike2.jpg";
import travelMorocco1 from "../assets/personal-media/Travel/morocco1.jpg";
import travelMorocco2 from "../assets/personal-media/Travel/morocco2.jpg";

// Personal statement snippets for templating
const PERSONAL_STATEMENT = {
  cars:
    "I'm a creative builder and lifelong explorer — restoring vintage cars is one way I stay hands-on and grounded outside the screen. The process demands patience, precision, and a deep appreciation for the craftsmanship of a different era.",
  music:
    "Music has always been a creative outlet — whether composing original pieces, layering synths, or exploring different genres. It's one of the few pursuits where technical discipline and pure intuition live side by side.",
  everythingElse:
    "Life is best lived across many pursuits. From earning Eagle Scout to competitive tennis courts, steep ski runs, open water, and trails wherever the map ends — staying curious and active outside the screen is what keeps everything else sharp.",
};

export const carsOverview = {
  id: "cars",
  title: "Cars",
  subtitle: "Vintage Restoration & Automotive",
  intro: PERSONAL_STATEMENT.cars,
  cars: [
    {
      id: "gtx",
      name: "GTX",
      heroImg: gtxDay1,
      to: "/cars/gtx",
      category: "Classic Mopar",
    },
    {
      id: "rx7",
      name: "RX7",
      heroImg: rx7Beachsunset,
      to: "/cars/rx7",
      category: "Rotary Revival",
    },
    {
      id: "s2000",
      name: "S2000",
      heroImg: s2000Now,
      to: "/cars/s2000",
      category: "Honda Roadster",
    },
  ],
};

export const carExpositions = {
  gtx: {
    id: "gtx",
    name: "GTX",
    videos: [],
    intro: `[Describe your GTX — year, model, how you found it, and your restoration goals.]

Day 1: The day I brought it home. [Add your notes about the pickup and first impressions.]`,
    imageTextBlocks: [
      {
        src: gtxDay1,
        alt: "GTX Day 1",
        title: "Day 1",
        blurb: "Day 1: The day I brought it home. [Add your notes about the pickup and first impressions.]",
      },
      {
        src: gtxDay1Interior,
        alt: "GTX Interior",
        title: "Interior",
        blurb: "[Describe the interior condition and any work done. Day1Interior.jpg documents the cabin state.]",
      },
      {
        src: gtxValvecoverBefore,
        alt: "Valve cover before",
        title: "Valve Cover Before",
        blurb: "[Describe the valve cover restoration — before. ValvecoverBefore.jpg shows the starting condition.]",
      },
      {
        src: gtxValvecoverAfter,
        alt: "Valve cover after",
        title: "Valve Cover After",
        blurb: "[Describe the valve cover restoration — after. ValvecoverAfter.jpg shows the transformation.]",
      },
    ],
  },
  rx7: {
    id: "rx7",
    name: "RX7",
    videos: [{ url: rx7Startup1st, title: "First Startup" }],
    intro: `[Describe your RX7 — year, engine, how you found it, and restoration goals.]

Day 1: Front and back. [Add your notes about the initial state and first steps.]`,
    imageTextBlocks: [
      { src: rx7Day1Front, alt: "Day 1 front", title: "Day 1 Front", blurb: "Day 1: Front view. [Add your notes about the initial state and first steps.]" },
      { src: rx7Day1Back, alt: "Day 1 back", title: "Day 1 Back", blurb: "Day 1: Rear view. [Add your notes about the pickup and first assessment.]" },
      { src: rx7BeforeGuages, alt: "Before gauges", title: "Gauge Restoration", blurb: "[Describe the gauge restoration. BeforeGuages.jpg documents the process.]" },
      { src: rx7Fluids, alt: "Fluids", title: "Fluids", blurb: "[Describe the fluid work and maintenance. Fluids.jpg documents the process.]" },
      { src: rx7RetroTailights, alt: "Retro taillights", title: "Retro Taillights", blurb: "[Describe the taillight upgrade. RetroTailights.JPG shows the result.]" },
      { src: rx7Beachsunset, alt: "Beach sunset", title: "Beach Sunset", blurb: "[A moment with the RX7 — beach sunset drive.]" },
      { src: rx7WithCappucino, alt: "With Cappuccino", title: "With Cappuccino", blurb: "[Describe the meetup or comparison. Suzuki Cappuccino alongside.]" },
    ],
  },
  s2000: {
    id: "s2000",
    name: "S2000",
    videos: [{ url: s2000StrangeNoise, title: "Strange Noise Troubleshooting" }],
    intro: `[Describe your S2000 — year, AP1/AP2, how you found it, and goals.]

Day 1: Initial condition and the dent. [Add your notes about the purchase and first assessment.]`,
    imageTextBlocks: [
      { src: s2000Day1, alt: "Day 1", title: "Day 1", blurb: "Day 1: Initial condition. [Add your notes about the purchase and first assessment.]" },
      { src: s2000Day1Dent, alt: "Day 1 dent", title: "Day 1 Dent", blurb: "Day 1: The dent that needed attention. [Add your notes.]" },
      { src: s2000BumperOff, alt: "Bumper off", title: "Bumper Off", blurb: "[Describe bumper removal and repair. bumperoff.jpg documents the process.]" },
      { src: s2000Valves, alt: "Valve adjustment", title: "Valve Adjustment", blurb: "[Describe the valve adjustment procedure. valves.jpg shows the work.]" },
      { src: s2000OldSeats, alt: "Old seats", title: "Old Seats", blurb: "[Describe the original seats before the swap. oldseats.jpg.]" },
      { src: s2000NewSeats, alt: "New seats", title: "New Seats", blurb: "[Describe the seat upgrade. newseats.jpg shows the result.]" },
      { src: s2000SofttopReplace, alt: "Soft top replacement", title: "Soft Top Replacement", blurb: "[Describe the soft top replacement. softtopreplace.jpg documents the job.]" },
      { src: s2000Now, alt: "Current state", title: "Current State", blurb: "[Describe where the car stands now. S2000now.jpg.]" },
    ],
  },
};

export const musicExposition = {
  id: "music",
  title: "Music",
  subtitle: "Composition & Production",
  intro: PERSONAL_STATEMENT.music,
  imageTextBlocks: [
    { src: musicSetupBW, alt: "Music production setup", title: "Setup", blurb: PERSONAL_STATEMENT.music },
  ],
  videos: [],
  spotifyProfile: "https://open.spotify.com/user/warrior_demon",
  // Add playlist IDs from Spotify share → embed (e.g. .../playlist/37i9dQZF1DX...)
  spotifyPlaylistIds: [],
  youtubeChannel: "https://www.youtube.com/@tnassiorc",
  youtubeVideoId: null, // Optional: featured video ID for embed
};

export const everythingElseExposition = {
  id: "everything-else",
  title: "Everything Else",
  subtitle: "Eagle Scout · Travel · Tennis · Skiing · Hiking · Boating",
  intro: PERSONAL_STATEMENT.everythingElse,
  eagleProject: {
    title: "Eagle Scout Project",
    blurb: "For my Eagle Scout project, I built a tiny home for the Low Income Housing Institute (LIHI) in Seattle. With the help of 32 volunteers and 218 hours of work, the home now provides shelter to a homeless member of our community. I achieved the rank of Eagle Scout in June 2019. You can see photos and learn more about the project on my website.",
    url: "https://benseagleproject.com/",
  },
  imageTextBlocks: [
    { src: travelAmsterdam, alt: "Amsterdam", title: "Amsterdam", blurb: "[Your adventure in Amsterdam.]" },
    { src: travelCavesSpain, alt: "Caves in Spain", title: "Caves in Spain", blurb: "[Exploring caves in Spain.]" },
    { src: travelJoshRoadTrip, alt: "Road trip with Josh", title: "Road Trip", blurb: "[Road trip adventures.]" },
    { src: travelPolandWinterMarket, alt: "Poland winter market", title: "Poland", blurb: "[Poland winter market experience.]" },
    { src: travelPortugul, alt: "Portugal", title: "Portugal", blurb: "[Travels in Portugal.]" },
    { src: travelPrincesslouisainlet, alt: "Princess Louisa Inlet", title: "Princess Louisa", blurb: "[Boating to Princess Louisa Inlet.]" },
    { src: travelRoadTripCamp, alt: "Road trip camping", title: "Camping", blurb: "[Camping on the road.]" },
    { src: travelScotlandCliffs, alt: "Scotland cliffs", title: "Scotland", blurb: "[Scotland cliffs and coastline.]" },
    { src: travelAlovelyhike1, alt: "A lovely hike", title: "Hike", blurb: "[Hiking adventures.]" },
    { src: travelAlovelyhike2, alt: "A lovely hike", title: "Hike", blurb: "[More hiking memories.]" },
    { src: travelMorocco1, alt: "Morocco", title: "Morocco", blurb: "[Morocco travels.]" },
    { src: travelMorocco2, alt: "Morocco", title: "Morocco", blurb: "[Morocco adventures.]" },
  ],
  optionalSubsections: [
    {
      title: "Travel",
      description:
        "[Lorem ipsum or your notes: adventures from Amsterdam to Morocco, Portugal, Poland, Spain, Scotland, and beyond.]",
    },
    {
      title: "Outdoors",
      description:
        "[Tennis, skiing, hiking, boating — your experiences and favorite spots.]",
    },
  ],
};
