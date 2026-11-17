export const LINKEDIN = "https://www.linkedin.com/in/sanjivberi/";
export const NEWSLETTER = "https://www.linkedin.com/newsletters/the-mindful-mantra-7035646322716131329/";
export const ALL_POSTS = "https://www.linkedin.com/in/sanjivberi/recent-activity/newsletter/";

/** Prefix for files in /public, so they resolve under the GitHub Pages sub-path. */
export const asset = (p: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${p}`;

/** Hero portrait (background removed). Set to null to show the 3D orb instead. */
export const PORTRAIT: string | null = asset("/sanjiv.png");
export const AVATAR = asset("/sanjiv-avatar.jpg");

export const nav = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Insights", href: "#insights" },
  { label: "FAQ", href: "#faq" },
];

export const credentials = [
  "International Coaching Federation · PCC",
  "Cornell University · Plant-Based Nutrition",
  "HeartMath Certified Mentor",
  "Genos International · EQ 360",
  "NLP Center of New York",
  "iPEC Coaching · ELI-MP",
  "Tony Robbins Platinum Partners",
  "Jack Canfield Companies",
  "One World Academy",
];

export const proofChips = [
  "369K+ LinkedIn followers",
  "15+ years of coaching",
  "7+ certifications earned",
  "Clients on 3 continents",
];

export const img = (src: string, w = 600) => `${src}?w=${w}&q=80&auto=format&fit=crop`;

export type ArtKind = "pulse" | "rings" | "helix" | "bars" | "sun" | "grid" | "wave" | "heart" | "orbit";

export const programs = [
  {
    title: "Longevity Strategy",
    icon: "pulse" as const,
    body: "A personal healthspan blueprint, built from biomarkers and blood panels, nutrition, muscle and metabolic health, sleep and recovery.",
    photos: ["https://images.unsplash.com/photo-1498507297833-5373e346b4e0", "https://images.unsplash.com/photo-1744060204728-f68e434a3edf", "https://images.unsplash.com/photo-1639772823849-6efbd173043c"],
    tags: ["Biomarkers", "Nutrition", "Metabolic health", "+more"],
  },
  {
    title: "Executive Coaching",
    icon: "compass" as const,
    featured: true,
    body: "One-to-one ICF PCC coaching for leaders who want clarity, presence and resilience, without trading their health for results.",
    photos: ["https://images.unsplash.com/photo-1758519288550-1975537cff9a", "https://images.unsplash.com/photo-1523287562758-66c7fc58967f", "https://images.unsplash.com/photo-1542744173-8e7e53415bb0"],
    tags: ["1:1 coaching", "Leadership", "Mentoring", "+more"],
  },
  {
    title: "EQ & Team Workshops",
    icon: "heart" as const,
    body: "Facilitated workshops backed by Genos EI and 360 assessments, HeartMath resilience tools and evidence-based stress management.",
    photos: ["https://images.unsplash.com/photo-1623303647440-967d26b95b47", "https://images.unsplash.com/photo-1559595500-e15296bdbb48", "https://images.unsplash.com/photo-1659366100463-9e29a63adcc2"],
    tags: ["EQ 360", "HeartMath", "Keynotes", "+more"],
  },
];

export const steps = [
  { t: "Discovery Call", d: "We start with a conversation about your goals, your energy and what's holding you back, and check that we're a great fit." },
  { t: "Baseline", d: "Biomarkers, lifestyle and leadership assessments give us an honest picture of where you are today." },
  { t: "Blueprint", d: "Together we design a personal plan across health, performance and the way you lead." },
  { t: "Coaching", d: "Regular sessions and real accountability turn the plan into everyday habits that stick." },
  { t: "Sustain", d: "We re-measure, refine and lock in routines you can rely on for decades, not weeks." },
];

export const featuredPost = {
  cat: ["Featured", "Emotional Intelligence"],
  title: "Mind Meets Heart: The True Essence of Emotional Intelligence",
  excerpt:
    "The leaders people remember most combine clear thinking with genuine empathy. Here's why emotional intelligence is a skill you can build on purpose, and where to begin.",
  date: "2023",
  art: "heart" as ArtKind,
  photo: "https://images.unsplash.com/photo-1762368229295-81f2742fb8a5",
  url: "https://www.linkedin.com/pulse/mind-meets-heart-true-essence-emotional-intelligence-sanjiv-beri/",
};

export const posts = [
  {
    cat: "Leadership",
    title: "The True Mark of Leadership: Knowing When to Seek and Offer Support",
    excerpt: "Strength isn't doing everything alone. It's building a culture where asking for help is normal and offering it is expected.",
    date: "2023",
    art: "orbit" as ArtKind,
    photo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
    url: "https://www.linkedin.com/pulse/true-mark-leadership-knowing-when-seek-offer-support-sanjiv-beri-2j6fc/",
  },
  {
    cat: "Inclusion",
    title: "The Role of Diversity, Equity and Inclusion in Maritime Leadership",
    excerpt: "What one of the world's oldest industries can learn from teams that include and empower everyone on board.",
    date: "2023",
    art: "wave" as ArtKind,
    photo: "https://images.unsplash.com/photo-1602660985776-c701a6d7b6f2",
    url: "https://www.linkedin.com/pulse/role-diversity-equity-inclusion-maritime-leadership-sanjiv-beri-i6vzc/",
  },
  {
    cat: "Wellbeing",
    title: "Current Times, Calm Minds: Techniques for Stress Management",
    excerpt: "Our lives are full of noise and pressure. Simple, proven techniques to slow down, breathe and stay clear-headed when it matters most.",
    date: "2023",
    art: "bars" as ArtKind,
    photo: "https://images.unsplash.com/photo-1682706841281-f723c5bfcd83",
    url: "https://www.linkedin.com/pulse/current-times-calm-minds-techniques-stress-management-sanjiv-beri/",
  },
];

export const why =
  "I believe longevity isn't only about adding years to your life. It's about adding life to your years. Since my first full blood panel in 2009, I've helped leaders on three continents turn science into simple daily habits that last.";

export const faqs = [
  { q: "Who do you typically work with?", a: "Executives, founders and high performers who want to stay at the top of their game for decades, plus organisations investing in the wellbeing and emotional intelligence of their leaders." },
  { q: "Do you work with clients outside the Netherlands?", a: "Yes. I'm based in Utrecht and work with clients across Europe, Asia and the Americas, online and in person." },
  { q: "Is this medical advice?", a: "No. My work is coaching and education. I'm happy to work alongside your doctor, and I always encourage you to review lab results with a qualified medical professional." },
  { q: "How long is a typical engagement?", a: "Most one-to-one programs run three to six months, enough time to build real habits. Workshops and keynotes can be a single session or a series." },
  { q: "What happens on the discovery call?", a: "We talk about where you are now, where you want to be and whether we're a good fit. No pressure, no obligation." },
  { q: "What's the best way to reach you?", a: "Send me a message on LinkedIn and I'll personally get back to you." },
];
