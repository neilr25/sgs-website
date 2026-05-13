const fs = require("fs");
const c = JSON.parse(fs.readFileSync("data/content.json", "utf-8"));

const content = [
  '<div class="sqs-html-content" data-sqsp-text-block-content>',
  '<h2>Energy vs Energy Efficiency: Why the Difference Matters More Than You Think</h2>',
  '<p class="" style="white-space:pre-wrap;">Energy moves ships through water. Energy efficiency does not.</p>',
  '<p class="" style="white-space:pre-wrap;">I have been saying this for years, and it still stops people in their tracks. It sounds simple, but it is one of the most misunderstood distinctions in maritime decarbonisation, and frankly, one that has cost the industry dearly in lost time and misdirected investment.</p>',
  '<p class="" style="white-space:pre-wrap;">Energy efficiency makes your fuel go further. But without energy in the first place, even the smoothest hull and the smartest routing leaves you exactly where you started. Going nowhere.</p>',
  '<p class="" style="white-space:pre-wrap;">Two different problems. Two different solutions.</p>',
  '<p class="" style="white-space:pre-wrap;">Think of it this way.</p>',
  '<p class="" style="white-space:pre-wrap;"><strong>Energy efficiency is about reducing waste.</strong></p>',
  '<p class="" style="white-space:pre-wrap;"><strong>Energy is about adding power.</strong></p>',
  '<p class="" style="white-space:pre-wrap;">You need both, but they are not interchangeable. A ship fitted with every efficiency measure available still needs a source of propulsive energy. Wind propulsion provides that. It does not just reduce how much fuel you burn; it actively drives the vessel forward, reducing the load on the engine entirely.</p>',
  '<p class="" style="white-space:pre-wrap;">That distinction is commercially significant. And history proves it.</p>',
  '<h3>The Cutty Sark: speed built on wind energy</h3>',
  '<p class="" style="white-space:pre-wrap;">We Brits are proud of the Scottish-built Cutty Sark, one of the fastest clipper ships ever to sail. She could reach more than 17 knots. Not because she was efficient, but because her sails harvested enormous amounts of wind energy.</p>',
  '<div class="sqs-block-image"><div class="image-block-wrapper"><img src="/images/54e49287e4b062d0771142f2/blog-energy-efficiency/cutty-sark-painting.png" alt="Cutty Sark painting" style="max-width:100%;height:auto"/></div></div>',
  '<p class="" style="white-space:pre-wrap;">Her multiple sail design gave her extraordinary power. Her copper hull, which reduced drag and prevented fouling, made her extraordinarily efficient at using that power. Both mattered. But it was the energy that moved her.</p>',
  '<p class="" style="white-space:pre-wrap;">Fun fact: Cutty Sark means \u201cshort nightie\u201d in old Scottish. If you have not visited the museum in Greenwich, put it on your list.</p>',
  '<h3>The Flying Cloud: when commerce demands breakthroughs</h3>',
  '<p class="" style="white-space:pre-wrap;">When the pressure of commerce intensifies, design leaps forward. The Flying Cloud was built in direct response to the Gold Rush, designed to rush resources from the East Coast of the United States and return with gold. Speed was not a nice-to-have. It was the entire business model.</p>',
  '<div class="sqs-block-image"><div class="image-block-wrapper"><img src="/images/54e49287e4b062d0771142f2/blog-energy-efficiency/cutty-sark-copper-bottom.png" alt="Cutty Sark copper bottom" style="max-width:100%;height:auto"/></div></div>',
  '<p class="" style="white-space:pre-wrap;">The Flying Cloud broke the world sailing speed record and held it for 109 years. She was able to do that because commercial pressure drove relentless innovation in sail design. Then fossil fuels arrived, and that innovation stopped overnight.</p>',
  '<p class="" style="white-space:pre-wrap;">That means there is more than a century of latent potential sitting untapped in wind propulsion, now being unlocked by lightweight composite materials, aerospace-grade aerodynamic modelling, AI, machine learning, and, crucially, commercial motivation.</p>',
  '<h3>The opportunity right now</h3>',
  '<p class="" style="white-space:pre-wrap;">Global shipping is navigating one of its most volatile periods in decades. Longer routes, rising fuel costs, tightening regulation, and growing pressure to reduce fossil fuel dependency have created an environment where wind propulsion is not just attractive. It is strategically essential.</p>',
  '<p class="" style="white-space:pre-wrap;">Used to augment engine power, FastRig reduces fuel demand while maintaining service speeds. When competitors are slow steaming, wind assist gives you a measurable edge. Same speed, less fuel. Same fuel, more speed. The maths works in your favour either way.</p>',
  '<p class="" style="white-space:pre-wrap;">The smart money also recognises that this is a rehearsal for what comes next. Alternative fuels will be more expensive and harder to source. Commodity markets will drive volatility. Reducing dependency now, while locking in guaranteed fuel savings, is the definition of a no-regrets decision.</p>',
  '<p class="" style="white-space:pre-wrap;">21st century wind propulsion is ready. It retrofits to your existing fleet, installs swiftly, and performs under warranty.</p>',
  '<p class="" style="white-space:pre-wrap;">The wind has always been free. Now, for the first time, the savings are guaranteed.</p>',
  "</div>",
].join("\n");

const newPost = {
  title:
    "Energy vs Energy Efficiency: Why the Difference Matters More Than You Think",
  link: "/blog2/2026/5/13/energy-vs-energy-efficiency",
  pubDate: "Wed, 13 May 2026 14:00:00 +0000",
  postName: "2026/5/13/energy-vs-energy-efficiency",
  postType: "post",
  status: "publish",
  content: content,
  featuredImage: "",
  categories: [],
  postId: "energy-efficiency-blog-" + Date.now(),
};

c.postsByCollection.blog.unshift(newPost);
c.stats.blog_posts++;

fs.writeFileSync("data/content.json", JSON.stringify(c, null, 2));
console.log("Added. Total blog posts:", c.stats.blog_posts);
