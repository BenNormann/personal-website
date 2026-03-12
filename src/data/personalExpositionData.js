/**
 * Personal exposition data for Beyond the Code pages.
 * Text derived from personal statement + file-name hints; placeholders for user to fill.
 */

// Cars - GTX
import gtxDay1 from "../assets/personal-media/Cars/GTX/Day1.jpg";
import gtxRally from "../assets/personal-media/Cars/GTX/Rally Image.jpg";
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
    "I'm a creative builder and lifelong explorer - restoring vintage cars is one way I stay hands-on and grounded outside the screen. The process demands patience, precision, and a deep appreciation for the craftsmanship of a different era.",
  music: [
    "Music has always been a part of my life, whether listening or playing.",
    "I started on piano and moved into electronic music - beginning with Ableton and learning how plugins work. That grew into a deeper understanding of digital music and signal flow through two college classes: intro and intermediate computer music. In those courses I built my own plugins and integrated them into Ableton Live.",
    "Beyond producing, I've curated many playlists on Spotify and have started uploading my own music to YouTube. It's a space where technical curiosity and creative expression meet.",
  ],
  everythingElse:
    "I have pretty diverse interests and took a different path through undergrad. I also love to disconnect and just live in the world: travel, sports, hiking, nature.",
};

export const carsOverview = {
  id: "cars",
  title: "Cars",
  subtitle: "Vintage Restoration & Automotive",
  intro: PERSONAL_STATEMENT.cars,
  cars: [
    {
      id: "gtx",
      name: "Mazda 323 GTX",
      heroImg: gtxDay1,
      to: "/cars/gtx",
      category: "Rally Homologation",
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
    name: "Mazda 323 GTX",
    videos: [],
    intro: `What is it? The Mazda 323 GTX, a rally homologation car from 1988 built for Group A rally. Before the WRX and Evo took over, Mazda made this turbocharged, all-wheel-drive hot hatch. Only 1,243 made it to North America in 1988 and 1989, so they're rare now.

Mazda built it to homologate their rally program after Group B ended. It's got a 1.6L turbo B6T (132 hp street, around 250 in rally trim), permanent AWD with a lockable 50:50 center diff, and a chassis built to take abuse. It won Rally Sweden in 1987 and got 3rd in the manufacturer's championship in 1989.

This is my most recent project.

What I've done: Replaced the old worn-out suspension, fluids, spark plugs, and a transmission swap. I found out the guy sold it to me with a cracked bell housing that had been JB welded over. Classic. 😭

It was actually in pretty good shape when I got it. There was some paint denting and a hidden JB weld, but I didn't know that yet. The interior just needed a vacuum to clear out the dog hair.`,
    imageTextBlocks: [
      {
        src: gtxRally,
        alt: "Mazda 323 GTX rally car in action",
        title: "What It Was Built For",
        blurb: "The GTX in its element: a Mazda factory car on a snowy stage, doing what homologation was all about.",
      },
      {
        src: gtxDay1,
        alt: "GTX Day 1",
        title: "Day 1",
        blurb: "This was the day I brought it home. My newest project, and it turned out to be in pretty good shape.",
      },
      {
        src: gtxDay1Interior,
        alt: "GTX Interior",
        title: "Interior",
        blurb: "The cabin has Recaro buckets and a period-correct layout. It just needed a vacuum to clear out the dog hair.",
      },
      {
        src: gtxValvecoverBefore,
        alt: "Valve cover before",
        title: "Valve Cover Before",
        blurb: "The valve cover before restoration was worn, faded, and overdue for attention.",
      },
      {
        src: gtxValvecoverAfter,
        alt: "Valve cover after",
        title: "Valve Cover After",
        blurb: "This shows the valve cover after restoration. It was a satisfying before/after, and the B6T deserves to look the part.",
      },
    ],
  },
  rx7: {
    id: "rx7",
    name: "1993 RX-7 FD",
    videos: [{ url: rx7Startup1st, title: "First Startup" }],
    intro: `What is it? The Mazda RX-7 FD, a 1993 third-gen with a 13B-REW twin-turbo rotary. Mazda's last RX-7, only sold here from 1993 to 1995. 1.3L sequential twin-turbo Wankel, 252 hp and 217 lb-ft, 0 to 60 in under 5 seconds. Apex seals are the weak point, and they're especially at risk when an engine sits. Seals stick, compression drops.

This was my first project. It was a barn find that had been sitting outside, then inside, for seven years. It was dusty and had one flat tire. The mechanical condition was surprisingly decent, mostly just age and neglect.

What I did: I replaced all fluids and spark plugs and manually lubricated the engine before first start to avoid apex seal failure. That's a crucial step for any rotary that's been sitting. I also installed new rims and tires, refreshed the suspension, and replaced the radio plus sound electronics, and added tint, a front lip, and new interior foam where the materials had broken down. Luckily the cluster and everything under the hood were fine.`,
    imageTextBlocks: [
      { src: rx7Day1Front, alt: "Day 1 front", title: "Day 1 Front", blurb: "It was a barn find with seven years of dust. It had one flat tire but was otherwise remarkably intact. The FD's lines still showed through." },
      { src: rx7Day1Back, alt: "Day 1 back", title: "Day 1 Back", blurb: "This is the rear view on day one. It had been stored outdoors then indoors, and the elements took their toll on the seals." },
      { src: rx7BeforeGuages, alt: "Before gauges", title: "Before Gauges", blurb: "I only had to replace the radio and sound electronics. The cluster and everything under the hood were fine." },
      { src: rx7Fluids, alt: "Fluids", title: "Fluids", blurb: "I replaced all fluids before the first start. That's critical for a rotary since apex seals need proper lubrication. I also swapped the spark plugs and manually lubricated the engine to avoid seal failure. Around this time I also handled the less photogenic upgrades: new rims and tires, refreshed suspension, tint, a front lip, and fresh interior foam." },
      { src: rx7RetroTailights, alt: "Rear view", title: "Rear", blurb: "The stock taillights stayed as is. No changes needed." },
      { src: rx7Beachsunset, alt: "Beach sunset", title: "Beach Sunset", blurb: "This was a beach sunset drive. The rotary sings and the car delivers when it counts." },
      { src: rx7WithCappucino, alt: "With Cappuccino", title: "With Cappuccino", blurb: "Here's the FD alongside a Suzuki Cappuccino. Two Japanese icons with different vibes and the same obsession." },
    ],
  },
  s2000: {
    id: "s2000",
    name: "Honda S2000",
    videos: [{ url: s2000StrangeNoise, title: "Strange Noise Before Fix" }],
    intro: `What is it? The Honda S2000, a front-mid-engine roadster built for Honda's 50th anniversary (1999 to 2009). AP1 had the 2.0L F20C: 240 hp at 8,300 rpm, 9,000 redline, highest specific output of any NA engine until 2010. AP2 got a 2.2L with more torque and better handling. Pure driver's car.

I got an amazing deal on a clean-title S2000. But it needed work and had high miles. What was wrong? Literally most of it. Interior, exterior, and the engine wouldn't rev past 6,000 rpm and made a terrible noise (see video). Took a while to diagnose. Turned out to be a fully clogged catalytic converter choking it at high rpm. Did a lot of research to figure that one out.

What I did: Replaced the cat and fixed the rev limit. Full maintenance, new rims and tires, new soft top (so much work), new interior pieces, new radio, new shocks, new brakes. Seized rear rotor replaced, all others regreased plus calipers, pads, lines. Tail lights, bodywork, swapped in an AP2 rear diff. Most recently, timing chain tensioner.`,
    imageTextBlocks: [
      { src: s2000Day1, alt: "Day 1", title: "Day 1", blurb: "Day one. Clean title, high miles, long list of needs. Bones were good, the rest was work." },
      { src: s2000Day1Dent, alt: "Day 1 dent", title: "Day 1 Dent", blurb: "The dent that came with the deal. Bodywork was on the list, along with everything else." },
      { src: s2000BumperOff, alt: "Bumper off", title: "Bumper Off", blurb: "Bumper off for bodywork and access. Part of the full exterior refresh." },
      { src: s2000Valves, alt: "Valve adjustment", title: "Valve Adjustment", blurb: "Valve adjustment. Maintenance basics. The F20C rewards careful care." },
      { src: s2000OldSeats, alt: "Old seats", title: "Old Seats", blurb: "Original seats. Worn and tired. Interior restoration was comprehensive." },
      { src: s2000NewSeats, alt: "New seats", title: "New Seats", blurb: "Fresh seats. It was a big upgrade with new interior pieces throughout." },
      { src: s2000SofttopReplace, alt: "Soft top replacement", title: "Soft Top Replacement", blurb: "Soft top replacement. It was so much work and one of the more involved jobs on the S2000." },
      { src: s2000Now, alt: "Current state", title: "Current State", blurb: "Where it stands now. Sorted, sharp, ready to hit that 8,000+ rpm sweet spot." },
    ],
  },
};

export const musicExposition = {
  id: "music",
  title: "Music",
  subtitle: "Composition & Production",
  intro: PERSONAL_STATEMENT.music,
  imageTextBlocks: [
    { src: musicSetupBW, alt: "Music production setup", title: "Setup", blurb: "My production setup - Ableton and the plugins I've built and learned. Where the technical and creative sides meet." },
  ],
  videos: [],
  spotifyProfile: "https://open.spotify.com/user/warrior_demon",
  youtubeChannel: "https://www.youtube.com/@tnassiorc",
  youtubeVideoId: null, // Optional: featured video ID for embed
};

/** Short description of the William & Mary / St Andrews Joint Degree Programme (from wm.edu). */
const JDP_DESCRIPTION =
  "The Joint Degree Programme (JDP) is a partnership between William & Mary and the University of St Andrews. You spend two years at each school and graduate with one degree, a Bachelor of Arts (International Honours), from both. You get more breadth than a typical St Andrews degree and more depth than usual at W&M, plus two different intellectual and national cultures.";

export const everythingElseExposition = {
  id: "everything-else",
  title: "Everything Else",
  subtitle: "Eagle Scout · Travel · Tennis · Skiing · Hiking · Boating",
  intro: [
    "I have pretty diverse interests and took a different educational path. I wanted to explain that here.",
    "I have always been interested in how things work. You can see that in my cars and music. Computer science and economics fit the bill. The world runs on technology and on money, in my opinion, so I decided to study both.",
    "I also love to do a lot of other things to disconnect from how the world works and just live in it. Travel, sports, hiking, nature. I love all of that and have had a passion to experience the world for a while.",
  ],
  jdp: {
    title: "What is the JDP?",
    description: JDP_DESCRIPTION,
    url: "https://www.wm.edu/as/undergraduate/more-pathways/standrews/",
  },
  eagleProject: {
    title: "Eagle Scout Project",
    blurb: "For my Eagle Scout project, I built a tiny home for the Low Income Housing Institute (LIHI) in Seattle. With the help of 32 volunteers and 218 hours of work, the home now provides shelter to a homeless member of our community. I achieved the rank of Eagle Scout in June 2019. You can see photos and learn more about the project on my website.",
    url: "https://benseagleproject.com/",
  },
  imageTextBlocks: [
    { src: travelAmsterdam, alt: "Amsterdam", title: "Amsterdam", blurb: "Amsterdam. One of many places I've been lucky to explore." },
    { src: travelCavesSpain, alt: "Caves in Spain", title: "Caves in Spain", blurb: "Exploring caves in Spain. I like getting off the beaten path." },
    { src: travelJoshRoadTrip, alt: "Road trip with Josh", title: "Road Trip", blurb: "A road trip with Josh. Good company and the open road." },
    { src: travelPolandWinterMarket, alt: "Poland winter market", title: "Poland", blurb: "Poland winter market. I love seeing how different places celebrate the season." },
    { src: travelPortugul, alt: "Portugal", title: "Portugal", blurb: "Portugal. Travel has been a way to experience the world firsthand." },
    { src: travelPrincesslouisainlet, alt: "Princess Louisa Inlet", title: "Princess Louisa", blurb: "Boating to Princess Louisa Inlet. Open water and getting away from the screen." },
    { src: travelRoadTripCamp, alt: "Road trip camping", title: "Camping", blurb: "Camping on the road. I like staying active and outdoors whenever I can." },
    { src: travelScotlandCliffs, alt: "Scotland cliffs", title: "Scotland", blurb: "Scotland. The JDP took me to St Andrews; the cliffs and coastline here are something else." },
    { src: travelAlovelyhike1, alt: "A lovely hike", title: "Hike", blurb: "A favorite hike. Hiking and nature are how I disconnect and just live in the moment." },
    { src: travelAlovelyhike2, alt: "A lovely hike", title: "Hike", blurb: "Another day on the trail. I have had a passion to experience the world for a while." },
    { src: travelMorocco1, alt: "Morocco", title: "Morocco", blurb: "Morocco. Travel has taken me from Europe to North Africa and beyond." },
    { src: travelMorocco2, alt: "Morocco", title: "Morocco", blurb: "More from Morocco. Different cultures and landscapes keep me curious." },
  ],
  optionalSubsections: [
    {
      title: "Travel",
      description:
        "I love to travel. From Amsterdam to Morocco, Portugal, Poland, Spain, Scotland, and beyond. It is a way to disconnect from how the world works and just live in it. I have had a passion to experience the world for a while.",
    },
    {
      title: "Outdoors",
      description:
        "Tennis, skiing, hiking, boating. I love all of these. Eagle Scout, competitive tennis, steep ski runs, open water, trails wherever the map ends. Staying curious and active outside the screen is what keeps everything else sharp.",
    },
  ],
};
