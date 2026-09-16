import { MenuItem, AdaptogenInfo } from '../types';

export const ADAPTOGENS: AdaptogenInfo[] = [
  {
    id: 'lions-mane',
    name: "Lion's Mane",
    commonName: "Focus & Cognitive Clarity",
    scientificName: "Hericium erinaceus",
    benefit: "Enhances mental focus, memory recall, and neurogenesis without mid-day jitters.",
    icon: "🧠",
    color: "#EAB308",
    description: "Packed with hericenones and erinacines that stimulate Nerve Growth Factor (NGF) synthesis for laser-sharp work and creative flow.",
    dosage: "1,200mg Dual-Extract 100% Fruiting Body",
    bestFor: "Deep work sessions, studying, and morning productivity"
  },
  {
    id: 'reishi',
    name: "Reishi",
    commonName: "Calm, Balance & Stress Relief",
    scientificName: "Ganoderma lucidum",
    benefit: "Known as the 'Mushroom of Immortality' to downregulate cortisol and soothe the nervous system.",
    icon: "✨",
    color: "#A855F7",
    description: "Rich in triterpenes and beta-glucans, helping modulate physical stress responses and foster a centered, serene state of calm.",
    dosage: "1,000mg Organic Dual-Extract",
    bestFor: "Afternoon decompression, anxiety reduction, and smooth focus"
  },
  {
    id: 'cordyceps',
    name: "Cordyceps",
    commonName: "Natural Vitality & Oxygen Uptake",
    scientificName: "Cordyceps militaris",
    benefit: "Boosts cellular ATP production and stamina without heart-racing caffeine spikes.",
    icon: "⚡",
    color: "#F97316",
    description: "Improves VO2 max and cellular energy reserves by assisting adenosine triphosphate generation naturally in muscle and brain cells.",
    dosage: "1,000mg Pure Cordycepin Extract",
    bestFor: "Pre-workout, active mornings, and all-day endurance"
  },
  {
    id: 'chaga',
    name: "Chaga",
    commonName: "Immune Shield & Longevity",
    scientificName: "Inonotus obliquus",
    benefit: "One of Earth's highest natural sources of superoxide dismutase (SOD) antioxidants.",
    icon: "🛡️",
    color: "#10B981",
    description: "Deep, earthy antioxidant powerhouse that fortifies immune defense and protects cells from environmental oxidative stress.",
    dosage: "800mg Wildcrafted Extract",
    bestFor: "Daily wellness defense and digestive harmony"
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // Functional & Mushroom Coffee
  {
    id: 'func-1',
    name: "Signature Eclipse Adaptogenic Latte",
    category: 'functional',
    price: 6.75,
    description: "Double espresso infused with 1,200mg Lion's Mane & Reishi dual-extract, silky steamed oat milk, vanilla bean & organic Ceylon cinnamon dust.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop",
    adaptogens: ["Lion's Mane", "Reishi"],
    dietary: ["Vegan Option", "Gluten-Free"],
    popular: true,
    calories: 180
  },
  {
    id: 'func-2',
    name: "Golden Focus Brew",
    category: 'functional',
    price: 6.25,
    description: "Specialty batch brew cold extract charged with 1,000mg Lion's Mane, organic raw honey, turmeric, and velvety steamed almond milk.",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=800&auto=format&fit=crop",
    adaptogens: ["Lion's Mane"],
    dietary: ["Dairy-Free", "Low Calorie"],
    popular: true,
    calories: 120
  },
  {
    id: 'func-3',
    name: "Zen Reishi Dark Velvet Mocha",
    category: 'functional',
    price: 7.25,
    description: "Heirloom single-origin dark cacao melted with rich espresso, 1,000mg Reishi mushroom extract, and silky microfoam.",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop",
    adaptogens: ["Reishi"],
    dietary: ["Organic Cacao"],
    popular: false,
    calories: 240
  },
  {
    id: 'func-4',
    name: "Cordyceps Sunrise Nitro Cold Brew",
    category: 'functional',
    price: 6.50,
    description: "24-hour slow-steeped micro-lot Colombian coffee infused with Cordyceps militaris, finished with a fresh citrus twist over crystal ice.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop",
    adaptogens: ["Cordyceps"],
    dietary: ["Sugar-Free", "Keto", "Vegan"],
    popular: true,
    calories: 15
  },
  {
    id: 'func-5',
    name: "Chaga Spiced Maple Macchiato",
    category: 'functional',
    price: 6.90,
    description: "Double ristretto poured over chilled oat milk, real Vermont maple syrup, and wildcrafted Chaga mushroom elixir.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
    adaptogens: ["Chaga"],
    dietary: ["Refined Sugar-Free"],
    popular: false,
    calories: 165
  },
  {
    id: 'func-6',
    name: "Celestial Tremella Glow Matcha",
    category: 'functional',
    price: 7.50,
    description: "First-harvest ceremonial grade Uji matcha whisked with hydration-boosting Tremella mushroom, Madagascar vanilla & coconut cream.",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=800&auto=format&fit=crop",
    adaptogens: ["Tremella"],
    dietary: ["Antioxidant Rich", "Vegan"],
    popular: true,
    calories: 140
  },

  // Traditional Espresso & Matcha
  {
    id: 'trad-1',
    name: "Citrus Park Artisan Cortado",
    category: 'traditional',
    price: 4.50,
    description: "1:1 ratio of double origin espresso and silky, velvety textured whole milk served in a faceted Gibraltar glass.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    dietary: ["Artisan Roast"],
    popular: true,
    calories: 90
  },
  {
    id: 'trad-2',
    name: "Spanish Vanilla Latte",
    category: 'traditional',
    price: 5.75,
    description: "Rich espresso stirred with sweet condensed milk, house vanilla syrup, steamed whole milk, and a dusting of nutmeg.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop",
    dietary: ["House Favorite"],
    popular: true,
    calories: 230
  },
  {
    id: 'trad-3',
    name: "Ceremonial Uji Kyoto Matcha",
    category: 'traditional',
    price: 5.95,
    description: "Whisked to order ceremonial green tea with vibrant umami notes, paired with creamy barista oat milk.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop",
    dietary: ["Japanese Origin", "Vegan"],
    popular: false,
    calories: 110
  },
  {
    id: 'trad-4',
    name: "Double Origin Pull Espresso",
    category: 'traditional',
    price: 3.75,
    description: "Double shot showcasing Ethiopian Yirgacheffe notes of bergamot, dark chocolate, and candied lemon rind.",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=800&auto=format&fit=crop",
    dietary: ["Zero Calorie", "Single Origin"],
    popular: false,
    calories: 5
  },

  // Fresh Bakery & Desserts
  {
    id: 'bake-1',
    name: "Golden Parisian Butter Croissant",
    category: 'bakery',
    price: 4.50,
    description: "72 laminated layers of French Normandy cultured butter. Golden crispy honeycomb exterior with a cloud-soft, pillowy interior.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop",
    dietary: ["Baked Fresh 5 AM"],
    popular: true,
    calories: 310
  },
  {
    id: 'bake-2',
    name: "Pain au Chocolat (Chocolate Croissant)",
    category: 'bakery',
    price: 4.95,
    description: "Flaky European pastry dough wrapped around two double batons of 64% Valrhona dark chocolate, baked golden.",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=800&auto=format&fit=crop",
    dietary: ["Valrhona Chocolate"],
    popular: true,
    calories: 360
  },
  {
    id: 'bake-3',
    name: "Almond Frangipane Twice-Baked Croissant",
    category: 'bakery',
    price: 5.75,
    description: "Infused with orange blossom simple syrup, filled with rich almond cream, and blanketed in toasted sliced almonds & powdered sugar.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
    dietary: ["Artisanal Bakery"],
    popular: false,
    calories: 420
  },
  {
    id: 'bake-4',
    name: "Adaptogenic Lion's Mane Cinnamon Swirl",
    category: 'bakery',
    price: 5.25,
    description: "Cardamom brioche roll rolled with brown sugar, Korintje cinnamon, and a delicate Lions Mane adaptogenic vanilla glaze.",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=800&auto=format&fit=crop",
    adaptogens: ["Lion's Mane"],
    dietary: ["House Specialty"],
    popular: true,
    calories: 340
  },

  // Paninis & Breakfast
  {
    id: 'pani-1',
    name: "Tuscan Prosciutto & Burrata Panini",
    category: 'paninis',
    price: 11.95,
    description: "Aged 24-month prosciutto di Parma, creamy imported burrata, wild baby arugula, and aged Modena fig balsamic glaze pressed on warm artisan ciabatta.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop",
    dietary: ["Hot Pressed", "Italian Import"],
    popular: true,
    calories: 580
  },
  {
    id: 'pani-2',
    name: "Smoked Turkey & Pesto Melt",
    category: 'paninis',
    price: 10.95,
    description: "Herb-roasted turkey breast, melted smoked provolone, sun-dried marinated tomatoes, and house basil walnut pesto on crusty sourdough.",
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?q=80&w=800&auto=format&fit=crop",
    dietary: ["High Protein"],
    popular: true,
    calories: 520
  },
  {
    id: 'pani-3',
    name: "Truffled Mushroom & Fontina Panini",
    category: 'paninis',
    price: 11.50,
    description: "Sautéed cremini & king oyster mushrooms, thyme, white truffle oil, melted Italian fontina cheese, and caramelized shallots on grilled country bread.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
    dietary: ["Vegetarian", "Chef Pick"],
    popular: false,
    calories: 490
  },
  {
    id: 'pani-4',
    name: "Artisan Breakfast Brioche Sandwich",
    category: 'paninis',
    price: 9.25,
    description: "Fluffy folded cage-free pasture eggs, thick-cut applewood bacon, sharp white cheddar, and smoked paprika aioli on toasted golden brioche bun.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop",
    dietary: ["Breakfast Favorite"],
    popular: true,
    calories: 540
  }
];

export const LOCATION_DETAILS = {
  address: "6118 Gunn Hwy, Citrus Park, Tampa, FL 33625",
  shortAddress: "6118 Gunn Hwy, Tampa, FL",
  phone: "(813) 444-2390",
  email: "hello@eclipsecafe.intl",
  instagram: "@eclipsecafe.intl",
  hours: [
    { day: "Monday", hours: "6:30 AM - 7:00 PM", driveThru: "6:00 AM - 7:30 PM" },
    { day: "Tuesday", hours: "6:30 AM - 7:00 PM", driveThru: "6:00 AM - 7:30 PM" },
    { day: "Wednesday", hours: "6:30 AM - 7:00 PM", driveThru: "6:00 AM - 7:30 PM" },
    { day: "Thursday", hours: "6:30 AM - 7:00 PM", driveThru: "6:00 AM - 7:30 PM" },
    { day: "Friday", hours: "6:30 AM - 8:00 PM", driveThru: "6:00 AM - 8:30 PM" },
    { day: "Saturday", hours: "7:00 AM - 8:00 PM", driveThru: "6:30 AM - 8:30 PM" },
    { day: "Sunday", hours: "7:00 AM - 6:00 PM", driveThru: "6:30 AM - 6:30 PM" }
  ],
  amenities: [
    { icon: "🚗", title: "Dedicated Two-Lane Drive-Thru", desc: "Order ahead on app or pull through for lightning-fast barista service." },
    { icon: "⚡", title: "Free Gigabit Fiber Wi-Fi", desc: "Ultra-fast connection with ample power outlets at every booth & table." },
    { icon: "🍄", title: "100% Organic Fruiting Body", desc: "Lab-tested, zero starch/mycelium fillers, certified potent adaptogens." },
    { icon: "🐾", title: "Pet-Friendly Sun Patio", desc: "Outdoor seating with complimentary iced water bowls and adaptogen pup treats." }
  ]
};
