export type Post = {
  slug: string;
  cat: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  body: { heading: string; paragraphs: string[]; pullQuote?: string }[];
};

const POST_IMAGES = [
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80",
  "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
  "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1200&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
];

const POST_DATES = [
  "March 12, 2026",
  "April 02, 2026",
  "April 18, 2026",
  "May 01, 2026",
  "May 04, 2026",
  "May 09, 2026",
  "May 11, 2026",
  "May 12, 2026",
  "May 12, 2026",
];

type RawPost = Omit<Post, "image" | "date">;
const rawPosts: RawPost[] = [
  {
    slug: "5-reasons-your-website-is-losing-clients",
    cat: "Web Design",
    title: "5 Reasons Your Website Is Losing Clients and How to Fix It",
    excerpt: "If your website looks great but isn't bringing in leads, these are the five culprits behind it.",
    readTime: "6 min read",
    body: [
      {
        heading: "Your Website Is the Hardest Working Member of Your Team",
        paragraphs: [
          "Most business owners think a website is just a digital brochure. In reality, it's a 24/7 sales rep — and when it underperforms, you lose money silently. The frustrating part is that beautiful, expensive websites can be just as bad at converting as cheap ones. Looks alone don't sell.",
          "At Prime Wave Agency we audit dozens of sites every month. The same five issues come up again and again, and once they're fixed, conversion rates often double within weeks.",
        ],
      },
      {
        heading: "1. Slow Load Speed",
        paragraphs: [
          "Studies from Google show that 53% of mobile visitors leave a page that takes longer than three seconds to load. Heavy images, bloated themes, and unoptimised code are the usual suspects. Compress images to WebP, lazy-load anything below the fold, and serve assets through a CDN.",
        ],
      },
      {
        heading: "2. Unclear Value Proposition",
        paragraphs: [
          "Visitors decide within five seconds whether your site is worth their time. If your hero section doesn't immediately answer 'what do you do, who do you do it for, and why should I care?', they leave. A strong headline plus a single clear call-to-action beats a clever tagline every time.",
        ],
      },
      {
        heading: "3. Weak or Missing Calls-to-Action",
        paragraphs: [
          "Every page should guide the visitor toward one specific next step — book a call, request a quote, message on WhatsApp. Multiple competing CTAs create decision paralysis. Pick the one action that matters most and make it impossible to miss.",
        ],
      },
      {
        heading: "4. Bad Mobile Experience",
        paragraphs: [
          "Over 65% of web traffic is mobile. Tiny text, tap targets that are too close together, and forms that don't fit the screen kill conversions instantly. Test your site on a real phone, not just the browser inspector.",
        ],
      },
      {
        heading: "5. Zero Trust Signals",
        paragraphs: [
          "People buy from people they trust. Add real photos, testimonials with names and faces, case studies, certifications, and clear contact details. A faceless website feels like a scam, no matter how polished the design.",
        ],
      },
      {
        heading: "Fix These and Watch Leads Climb",
        paragraphs: [
          "These five fixes alone will move the needle for 90% of small-business websites. The remaining edge comes from technical SEO, copy, and ongoing optimisation — but speed, clarity, CTAs, mobile UX, and trust are the foundation.",
        ],
      },
    ],
  },
  {
    slug: "rank-on-google-2026-without-ads",
    cat: "SEO",
    title: "How to Rank on Google in 2026 Without Spending on Ads",
    excerpt: "Modern SEO is about intent, speed and trust. Here's the playbook.",
    readTime: "7 min read",
    body: [
      {
        heading: "SEO Is Not Dead — It Just Got Smarter",
        paragraphs: [
          "Every year someone declares SEO over. And every year, businesses that invest in it quietly compound traffic while competitors burn cash on ads. In 2026, ranking on Google is less about keyword stuffing and more about being genuinely the best answer for a specific intent.",
        ],
      },
      {
        heading: "Start With Search Intent, Not Keywords",
        paragraphs: [
          "Google's algorithm is now intent-first. Before writing a page, ask: what is the person searching this term actually trying to accomplish? Are they researching, comparing, or ready to buy? Match the page format to the intent — guides for research queries, comparison tables for evaluation, landing pages for transactional ones.",
        ],
      },
      {
        heading: "Technical Foundations Matter More Than Ever",
        paragraphs: [
          "Core Web Vitals — Largest Contentful Paint, Interaction to Next Paint, Cumulative Layout Shift — are direct ranking factors. A slow site simply won't rank, no matter how good the content is. Use a modern framework, optimise images, and serve from the edge.",
          "Make sure your site uses semantic HTML, has a proper sitemap, includes structured data (JSON-LD), and is fully crawlable. These basics are still where most sites fail.",
        ],
      },
      {
        heading: "Build Topical Authority",
        paragraphs: [
          "Instead of chasing random keywords, pick three or four topic clusters you want to own. Write deep, interconnected content around them. Link related articles together. Google rewards sites that demonstrate genuine expertise in a niche, not generalists with a few thin pages.",
        ],
      },
      {
        heading: "Earn Real Backlinks",
        paragraphs: [
          "Backlinks are still one of the strongest ranking signals, but only when they're earned naturally. Guest post on industry publications, get featured in roundups, publish original research or data, and partner with complementary businesses. One link from a reputable site beats fifty from directories.",
        ],
      },
      {
        heading: "Local SEO for Service Businesses",
        paragraphs: [
          "If you serve a geographic area, your Google Business Profile is more valuable than any ad campaign. Keep it updated, post weekly, collect reviews, and respond to every one of them. Add city-specific landing pages for each service area.",
        ],
      },
      {
        heading: "Patience Pays",
        paragraphs: [
          "Organic SEO compounds. The first three months feel slow, but by month six the traffic is essentially free forever. Compare that to paid ads where the moment you stop spending, the leads stop too.",
        ],
      },
    ],
  },
  {
    slug: "why-small-business-needs-professional-website",
    cat: "Business",
    title: "Why Every Small Business Needs a Professional Website in 2026",
    excerpt: "Your website is your hardest-working employee. Here's why DIY isn't enough anymore.",
    readTime: "5 min read",
    body: [
      {
        heading: "The Days of 'I'll Just Use a Free Builder' Are Over",
        paragraphs: [
          "Drag-and-drop builders promise a website in an afternoon. The result usually looks like every other site on that platform, loads slowly, ranks poorly, and converts even worse. In 2026, customers expect more — and your competitors are happy to deliver it.",
        ],
      },
      {
        heading: "First Impressions Happen Online",
        paragraphs: [
          "Before someone walks into your store or picks up the phone, they Google you. A dated or amateur website tells them you don't take your business seriously. A polished, fast, mobile-friendly site signals quality and builds trust before the first conversation.",
        ],
      },
      {
        heading: "You Own the Asset",
        paragraphs: [
          "Social media accounts can be suspended or have their algorithms changed overnight. Your website is the only digital asset you fully control. Every dollar you put into improving it compounds — every dollar into rented platforms evaporates the moment you stop posting.",
        ],
      },
      {
        heading: "It Works While You Sleep",
        paragraphs: [
          "A professional site captures leads, books appointments, sells products, and answers FAQs around the clock. Even a small business can punch above its weight with the right setup — automated forms, instant WhatsApp replies, and an AI assistant turn casual visitors into qualified leads automatically.",
        ],
      },
      {
        heading: "DIY vs Professional: Real Numbers",
        paragraphs: [
          "Free builder sites typically convert at 0.5–1%. A professionally built, conversion-optimised site routinely hits 3–7%. On 1,000 visitors a month, that's the difference between 5 leads and 50. Multiply by your average deal size and the upgrade pays for itself within weeks.",
        ],
      },
      {
        heading: "What 'Professional' Really Means",
        paragraphs: [
          "Custom design that matches your brand. Fast load times. Mobile-first layout. Proper SEO foundations. Clear CTAs. Trust signals. Analytics. Ongoing support. This is what separates a real business website from a digital business card.",
        ],
      },
    ],
  },
  {
    slug: "whatsapp-automation-double-restaurant-sales",
    cat: "WhatsApp",
    title: "How WhatsApp Automation Can Double Your Restaurant Sales",
    excerpt: "Automated bookings, menus, and order confirmations turn chats into revenue.",
    readTime: "6 min read",
    body: [
      {
        heading: "Your Customers Already Live on WhatsApp",
        paragraphs: [
          "More than 2 billion people use WhatsApp every day. For restaurants, this is not just another marketing channel — it's where your customers actually communicate. The restaurants that win in 2026 meet customers in the channel they already prefer, and they do it without hiring extra staff.",
        ],
      },
      {
        heading: "What WhatsApp Automation Actually Does",
        paragraphs: [
          "A properly configured WhatsApp business setup can: auto-reply to common questions, send the menu instantly, take reservations, confirm orders, send delivery updates, follow up after the visit for reviews, and re-engage past customers with offers — all without a human touching a keyboard.",
        ],
      },
      {
        heading: "1. Instant Menu and Pricing",
        paragraphs: [
          "When someone messages 'menu', the bot replies instantly with a beautifully formatted PDF, photos of the most popular dishes, and a direct link to order. No more 'we'll get back to you' — and no more lost customers who message a competitor while waiting.",
        ],
      },
      {
        heading: "2. Reservations Without Phone Tag",
        paragraphs: [
          "Customers pick a time, party size, and any notes through a guided chat flow. The system checks availability, books the table, sends a confirmation, and reminds them the day of. Front-of-house staff stop being interrupted by phone calls during service.",
        ],
      },
      {
        heading: "3. Re-Engagement Campaigns",
        paragraphs: [
          "Send a Tuesday-night offer to everyone who hasn't ordered in 30 days. Promote a new dessert to recent diners. With a simple list segmentation, you can lift mid-week revenue by 20–40% without spending on ads.",
        ],
      },
      {
        heading: "4. Reviews on Autopilot",
        paragraphs: [
          "Two hours after a visit, the bot asks how the meal was. Happy customers get a one-tap link to leave a Google review. Unhappy customers get routed straight to the manager. Your reputation improves week by week, automatically.",
        ],
      },
      {
        heading: "Setup Is Faster Than You Think",
        paragraphs: [
          "Most restaurant automations go live in under two weeks. The ROI usually shows up in the first month. The only real question is how much business you've already lost by waiting.",
        ],
      },
    ],
  },
  {
    slug: "psychology-of-color-in-web-design",
    cat: "Design",
    title: "The Psychology of Color in Web Design and Why It Matters",
    excerpt: "Color choices influence trust, action and recall. Use them strategically.",
    readTime: "5 min read",
    body: [
      {
        heading: "Color Is Never Just Decoration",
        paragraphs: [
          "Every colour on your website triggers an emotional response within milliseconds — long before a visitor reads a single word. Choose well and you build instant trust. Choose poorly and you fight an uphill battle with every visitor.",
        ],
      },
      {
        heading: "What the Major Colors Communicate",
        paragraphs: [
          "Blue suggests trust, stability, and professionalism — used by banks and tech companies for a reason. Red signals urgency and excitement, perfect for sale banners and flash offers. Green is associated with growth, health, and finance. Black communicates luxury and authority. Orange and gold project warmth, energy, and premium quality.",
        ],
      },
      {
        heading: "Contrast Drives Conversion",
        paragraphs: [
          "Your CTA button should be the highest-contrast element on the page. If it blends in, clicks evaporate. The actual colour matters less than the contrast against everything around it — that's why button colour A/B tests rarely show a clear winner unless contrast itself changes.",
        ],
      },
      {
        heading: "Cultural Context Matters",
        paragraphs: [
          "Colour meanings shift across cultures. White signals purity in the West and mourning in parts of Asia. Red is luck in China and danger in much of Europe. If you serve international clients, do basic colour research before picking your palette.",
        ],
      },
      {
        heading: "Stick to a Disciplined Palette",
        paragraphs: [
          "The best brands use one primary, one accent, and a handful of neutrals. That's it. Resist the urge to add colour for variety — restraint reads as premium, while a rainbow of colours reads as amateur.",
        ],
      },
      {
        heading: "Test, Then Trust the Data",
        paragraphs: [
          "Start with the principles, then test the specifics on your audience. The colour that converts best in your industry might surprise you — but only if you're tracking results properly.",
        ],
      },
    ],
  },
  {
    slug: "7-things-online-store-must-have",
    cat: "Ecommerce",
    title: "7 Things Your Online Store Must Have to Convert Visitors into Buyers",
    excerpt: "From trust badges to checkout speed — the essentials of a converting store.",
    readTime: "7 min read",
    body: [
      {
        heading: "Traffic Is Not the Problem — Conversion Is",
        paragraphs: [
          "Most ecommerce founders pour money into ads and influencer campaigns while their store converts at under 1%. The fix isn't more traffic — it's plugging the leaks. Here are the seven essentials every converting store has in 2026.",
        ],
      },
      {
        heading: "1. Crystal-Clear Product Photography",
        paragraphs: [
          "Multiple angles, zoom, lifestyle shots, and ideally a short video. Online shoppers can't touch your product, so visuals do all the heavy lifting. Cheap photos kill premium pricing instantly.",
        ],
      },
      {
        heading: "2. Honest, Specific Reviews",
        paragraphs: [
          "Verified reviews with photos beat polished testimonials every time. Show the average rating prominently, but never hide negative reviews — modern shoppers trust a 4.6 with mixed feedback far more than a suspicious 5.0.",
        ],
      },
      {
        heading: "3. A One-Page Checkout",
        paragraphs: [
          "Every additional checkout step loses around 10% of buyers. Combine cart, shipping, and payment on one screen. Offer guest checkout. Auto-detect country and currency. Pre-fill what you can.",
        ],
      },
      {
        heading: "4. Multiple Payment Options",
        paragraphs: [
          "Card, Apple Pay, Google Pay, PayPal, and a 'buy now pay later' option for higher-ticket items. Each one you skip loses a slice of buyers — especially on mobile, where wallet payments convert dramatically better than typed card details.",
        ],
      },
      {
        heading: "5. Visible Trust Signals",
        paragraphs: [
          "Secure checkout badges, return policy, shipping times, contact information, and a real address. Anything that whispers 'this is a legit business' lifts conversion across the board.",
        ],
      },
      {
        heading: "6. Lightning-Fast Mobile Performance",
        paragraphs: [
          "If your product page takes more than two seconds on a phone, you've lost half your potential buyers before they even see the price. Compress images, lazy-load, and ditch heavy theme apps that slow the store down.",
        ],
      },
      {
        heading: "7. Smart Abandoned-Cart Recovery",
        paragraphs: [
          "Around 70% of carts get abandoned. A simple sequence — email at one hour, WhatsApp at four hours, gentle discount at 24 hours — typically recovers 10–15% of those carts. Pure profit on traffic you've already paid for.",
        ],
      },
      {
        heading: "Fix the Leaks Before Scaling Spend",
        paragraphs: [
          "Doubling conversion is mathematically the same as doubling traffic — but cheaper, faster, and compounds with everything you do afterward. Optimise the store first; then scale ads.",
        ],
      },
    ],
  },
  {
    slug: "10-web-design-trends-2026",
    cat: "Web Design",
    title: "10 Web Design Trends That Will Dominate 2026",
    excerpt: "Stay ahead of the competition by understanding the design trends that top agencies are already implementing for their clients this year.",
    readTime: "6 min read",
    body: [
      { heading: "Design in 2026 Is About Performance Plus Personality", paragraphs: ["Top agencies are no longer choosing between beautiful and functional. The best sites in 2026 are both, and they use the trends below to stand out without slowing down. Here are the ten design movements shaping premium websites this year."] },
      { heading: "1. AI Generated Design Elements", paragraphs: ["Agencies use AI to generate hero illustrations, abstract backgrounds and product variations in seconds. The result is original visuals on every project without stock photo fatigue."] },
      { heading: "2. Dark Mode Websites", paragraphs: ["Dark themes are no longer a toggle, they are the default for premium brands. Black and deep navy backgrounds with gold or neon accents feel modern, focused and high end."] },
      { heading: "3. Micro Animations", paragraphs: ["Buttons that pulse, icons that wiggle on hover, counters that tick up. Tiny moments of motion make a site feel alive without being distracting."] },
      { heading: "4. Glassmorphism", paragraphs: ["Frosted glass cards layered over rich backgrounds create depth and a premium feel. Used sparingly, the effect signals quality."] },
      { heading: "5. Bold Typography", paragraphs: ["Massive headings with tight tracking are the new hero image. The right typeface alone can make a website feel like a luxury brand."] },
      { heading: "6. Immersive Scrolling", paragraphs: ["Scroll triggered storytelling, parallax sections and pinned elements turn passive visitors into engaged readers."] },
      { heading: "7. 3D Elements", paragraphs: ["Subtle 3D objects, tilt effects and depth layers add a tactile dimension that flat design simply cannot match."] },
      { heading: "8. Personalization", paragraphs: ["Sites greet returning visitors by name, surface relevant content based on location and tailor offers to behavior. Personalization is now table stakes for ecommerce."] },
      { heading: "9. Accessibility First Design", paragraphs: ["High contrast palettes, clear focus states and screen reader friendly markup are no longer optional. Inclusive design lifts conversion for everyone."] },
      { heading: "10. Sustainable Web Design", paragraphs: ["Lightweight code, optimized images and dark backgrounds reduce energy use. Eco conscious brands proudly display their carbon footprint."] },
      { heading: "Bring These Trends to Your Brand", paragraphs: ["At Prime Wave Agency we blend the trends above with conversion strategy so your site looks current and performs even better. Get in touch for a free design review."] },
    ],
  },
  {
    slug: "first-10-clients-new-business",
    cat: "Business",
    title: "How to Get Your First 10 Clients as a New Business Owner",
    excerpt: "Starting a business is exciting but getting those first clients is the hardest part. Here is the exact strategy that works in 2026.",
    readTime: "6 min read",
    body: [
      { heading: "The First Ten Clients Are the Hardest", paragraphs: ["Once you have ten paying clients you have proof, testimonials and referrals. Before that, you have nothing but conviction. The strategy below has helped dozens of new founders cross that line in under 90 days."] },
      { heading: "1. Define Your Ideal Client", paragraphs: ["Stop chasing everyone. Pick one specific niche, learn their pain points and speak their language. A narrow positioning closes deals faster than a generic one."] },
      { heading: "2. Leverage Your Existing Network", paragraphs: ["Email every former coworker, classmate and contact. Tell them what you do and ask if they know anyone who needs it. Referrals from warm contacts close at five times the rate of cold leads."] },
      { heading: "3. Use Google Business Profile", paragraphs: ["Claim and optimize your Google Business Profile. For local services this single step puts you in front of buyers actively searching for what you offer."] },
      { heading: "4. Social Media Strategy", paragraphs: ["Pick one platform where your buyers spend time and post valuable content five days a week. Consistency beats reach in the early months."] },
      { heading: "5. Cold Outreach That Works", paragraphs: ["Personalized DMs and emails referencing something specific about the prospect convert. Generic mass blasts do not. Send fewer, better messages."] },
      { heading: "6. The Power of Referrals", paragraphs: ["After every project ask the client for two introductions. Most will say yes. This single habit can fill your pipeline indefinitely."] },
      { heading: "7. List on Freelance Platforms", paragraphs: ["Upwork, Fiverr and Toptal still deliver real clients to founders willing to start with smaller projects. Use them to build a portfolio fast."] },
      { heading: "8. Create Free Value Content", paragraphs: ["Write helpful guides, record short videos and share templates. Free content builds trust at scale and brings inbound leads."] },
      { heading: "9. Follow Up Consistently", paragraphs: ["Most deals are won on the third or fourth touch, not the first. Build a simple CRM and follow up every prospect on a regular cadence."] },
      { heading: "10. Never Stop", paragraphs: ["The founders who win are the ones still pitching when others quit. Show up daily, refine your offer and the clients will come."] },
      { heading: "Need a Website to Close Deals?", paragraphs: ["Prime Wave Agency builds conversion focused sites that turn visitors into qualified leads. Book a free consultation today."] },
    ],
  },
  {
    slug: "complete-beginner-guide-local-seo-2026",
    cat: "SEO",
    title: "The Complete Beginner Guide to Local SEO in 2026",
    excerpt: "Local SEO is the fastest way to get your business found by customers in your area. Here is everything you need to know to get started today.",
    readTime: "7 min read",
    body: [
      { heading: "What Local SEO Is and Why It Matters", paragraphs: ["Local SEO is the practice of optimizing your online presence so your business appears in local search results and on Google Maps. For service businesses and brick and mortar shops it is the single highest ROI marketing channel available."] },
      { heading: "1. Google Business Profile Setup", paragraphs: ["Claim your profile, verify ownership and complete every field. Add high quality photos, working hours, services and a compelling description. This is the foundation of local SEO."] },
      { heading: "2. NAP Consistency", paragraphs: ["Name, Address and Phone number must be identical everywhere your business appears online. Even minor differences confuse Google and hurt rankings."] },
      { heading: "3. Local Keywords", paragraphs: ["Target city plus service phrases like plumber Toronto or web design Hamilton. Use them in page titles, headings and meta descriptions."] },
      { heading: "4. Getting Reviews", paragraphs: ["Reviews are a top three local ranking factor. Ask every happy client for a Google review. Respond to every review, positive or negative, with grace."] },
      { heading: "5. Local Backlinks", paragraphs: ["Get listed in local directories, sponsor a community event or partner with complementary businesses. Local links carry more weight than generic ones for local rankings."] },
      { heading: "6. Mobile Optimization", paragraphs: ["Most local searches happen on phones. Your site must load in under three seconds on mobile and have tap friendly buttons."] },
      { heading: "7. Schema Markup for Local Business", paragraphs: ["Add LocalBusiness schema to your homepage. This structured data helps Google understand your business and improves the look of your search listings."] },
      { heading: "8. Social Signals", paragraphs: ["An active Facebook and Instagram presence reinforces your business legitimacy and drives traffic to your site, both of which help local rankings indirectly."] },
      { heading: "9. Tracking Results", paragraphs: ["Use Google Business Profile Insights and Search Console to track impressions, calls and direction requests. What gets measured improves."] },
      { heading: "Get Found Locally Faster", paragraphs: ["Prime Wave Agency offers complete local SEO setup and Google Business Profile optimization. Reach out for a free local SEO audit."] },
    ],
  },
];

const POST_IMAGE_OVERRIDES: Record<string, string> = {
  "10-web-design-trends-2026": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80",
  "first-10-clients-new-business": "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80",
  "complete-beginner-guide-local-seo-2026": "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80",
};

export const posts: Post[] = rawPosts.map((p, i) => ({
  ...p,
  image: POST_IMAGE_OVERRIDES[p.slug] ?? POST_IMAGES[i % POST_IMAGES.length],
  date: POST_DATES[i % POST_DATES.length],
}));

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

