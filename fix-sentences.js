const fs = require('fs');
const path = 'src/data/personalExpositionData.js';
let content = fs.readFileSync(path, 'utf8');

const replacements = [
  // RX7 What I did - fix fragments
  [
    `What I did: Replaced all fluids and spark plugs, manually lubricated the engine before first start to avoid apex seal failure. Crucial step for any rotary that's been sitting. New rims and tires, suspension, and the radio plus sound electronics. Luckily the cluster and everything under the hood were fine.`,
    `What I did: I replaced all fluids and spark plugs, and manually lubricated the engine before first start to avoid apex seal failure. That's a crucial step for any rotary that's been sitting. I put in new rims and tires, suspension, and the radio plus sound electronics. Luckily the cluster and everything under the hood were fine.`
  ],
  // RX7 Day 1 Front blurb
  [
    `blurb: "It was a barn find with seven years of dust. One flat tire, but otherwise remarkably intact. The FD's lines still showed through."`,
    `blurb: "It was a barn find with seven years of dust. It had one flat tire but was otherwise remarkably intact. The FD's lines still showed through."`
  ],
  // RX7 Day 1 Back
  [
    `blurb: "Rear view on day one. It had been stored outdoors then indoors, and the elements took their toll on the seals."`,
    `blurb: "This is the rear view on day one. It had been stored outdoors then indoors, and the elements took their toll on the seals."`
  ],
  // RX7 Fluids
  [
    `blurb: "I replaced all fluids before the first start. That's critical for a rotary since apex seals need proper lubrication. Spark plugs swapped and engine manually lubed to avoid seal failure."`,
    `blurb: "I replaced all fluids before the first start. That's critical for a rotary since apex seals need proper lubrication. I swapped the spark plugs and manually lubed the engine to avoid seal failure."`
  ],
  // RX7 Beach Sunset
  [
    `blurb: "A beach sunset drive. The rotary sings and the car delivers when it counts."`,
    `blurb: "This was a beach sunset drive. The rotary sings and the car delivers when it counts."`
  ],
  // RX7 With Cappuccino
  [
    `blurb: "The FD alongside a Suzuki Cappuccino. Two Japanese icons with different vibes and the same obsession."`,
    `blurb: "The FD parked alongside a Suzuki Cappuccino. Two Japanese icons with different vibes and the same obsession."`
  ],
  // GTX intro
  [
    `It was actually in pretty good shape when I got it. Some paint denting and the hidden JB weld, but I didn't know that yet. Interior just needed a vacuum. Lots of dog hair.`,
    `It was actually in pretty good shape when I got it. There was some paint denting and the hidden JB weld, but I didn't know that yet. The interior just needed a vacuum because there was lots of dog hair.`
  ],
  [
    `Found out the guy sold it to me with a cracked bell housing that had been JB welded over. Classic. 😭`,
    `I found out the guy sold it to me with a cracked bell housing that had been JB welded over. Classic. 😭`
  ],
  [
    `Mazda built it to homologate their rally program after Group B ended. It's got a 1.6L turbo B6T (132 hp street, around 250 in rally trim), permanent AWD with a lockable 50:50 center diff, and a chassis built to take abuse. Won Rally Sweden in 1987, got 3rd in the manufacturer's championship in 1989.`,
    `Mazda built it to homologate their rally program after Group B ended. It's got a 1.6L turbo B6T (132 hp street, around 250 in rally trim), permanent AWD with a lockable 50:50 center diff, and a chassis built to take abuse. It won Rally Sweden in 1987 and got 3rd in the manufacturer's championship in 1989.`
  ],
  // S2000 intro
  [
    `I got an amazing deal on a clean-title S2000. But it needed work and had high miles. What was wrong? Literally most of it. Interior, exterior, and the engine wouldn't rev past 6,000 rpm and made a terrible noise (see video). Took a while to diagnose. Turned out to be a fully clogged catalytic converter choking it at high rpm. Did a lot of research to figure that one out.`,
    `I got an amazing deal on a clean-title S2000. But it needed work and had high miles. What was wrong? Literally most of it. The interior, exterior, and engine all had issues, and the engine wouldn't rev past 6,000 rpm and made a terrible noise (see video). It took a while to diagnose. It turned out to be a fully clogged catalytic converter choking it at high rpm. I did a lot of research to figure that one out.`
  ],
  // S2000 Day 1 blurb
  [
    `blurb: "Day one. Clean title, high miles, long list of needs. Bones were good, the rest was work."`,
    `blurb: "This was day one. Clean title, high miles, and a long list of needs. The bones were good but the rest was work."`
  ],
  // S2000 Bumper Off
  [
    `blurb: "Bumper off for bodywork and access. Part of the full exterior refresh."`,
    `blurb: "I had the bumper off for bodywork and access. It was part of the full exterior refresh."`
  ],
  // S2000 Valves
  [
    `blurb: "Valve adjustment. Maintenance basics. The F20C rewards careful care."`,
    `blurb: "I did a valve adjustment. Just maintenance basics. The F20C rewards careful care."`
  ],
  // S2000 Old Seats
  [
    `blurb: "Original seats. Worn and tired. Interior restoration was comprehensive."`,
    `blurb: "These were the original seats. They were worn and tired. The interior restoration was comprehensive."`
  ],
  // S2000 New Seats
  [
    `blurb: "Fresh seats. It was a big upgrade with new interior pieces throughout."`,
    `blurb: "Fresh seats went in. It was a big upgrade with new interior pieces throughout."`
  ],
  // S2000 Soft Top
  [
    `blurb: "Soft top replacement. It was so much work and one of the more involved jobs on the S2000."`,
    `blurb: "I replaced the soft top. It was so much work and one of the more involved jobs on the S2000."`
  ],
  // S2000 Current State
  [
    `blurb: "Where it stands now. Sorted, sharp, ready to hit that 8,000+ rpm sweet spot."`,
    `blurb: "This is where it stands now. It's sorted, sharp, and ready to hit that 8,000+ rpm sweet spot."`
  ],
  // S2000 Day 1 Dent
  [
    `blurb: "The dent that came with the deal. Bodywork was on the list, along with everything else."`,
    `blurb: "This was the dent that came with the deal. Bodywork was on the list, along with everything else."`
  ]
];

for (const [oldStr, newStr] of replacements) {
  if (content.includes(oldStr)) {
    content = content.replace(oldStr, newStr);
    console.log('Replaced:', oldStr.substring(0, 50) + '...');
  } else {
    console.log('NOT FOUND:', oldStr.substring(0, 50) + '...');
  }
}

fs.writeFileSync(path, content);
console.log('Done.');
