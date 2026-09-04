export const NAV_LINKS = [
  { name: "Home",     path: "/"         },
  { name: "About",    path: "/about"    },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Careers",  path: "/careers"  },
  { name: "Contact",  path: "/contact"  },
];

export const STATS = [
  { value: "6+",    label: "Banks Trusted"     },
  { value: "24/7",  label: "Emergency Response" },
  { value: "3+",    label: "Years Experience"   },
  { value: "99.9%", label: "Uptime Guarantee"   },
];

export const BENEFITS = [
  {
    title: "Reduced Downtime",
    description: "Up to 70% reduction in ATM downtime with proactive maintenance.",
    icon: "TrendingDown",
  },
  {
    title: "Fast Response",
    description: "Average 2-hour emergency response time anywhere in Ethiopia.",
    icon: "Zap",
  },
  {
    title: "Cost Effective",
    description: "Save up to 40% on maintenance costs with our service plans.",
    icon: "DollarSign",
  },
  {
    title: "99.9% Uptime",
    description: "Guaranteed ATM availability with our comprehensive SLAs.",
    icon: "ShieldCheck",
  },
];

export const SERVICES = [
  {
    title: "ATM Installation",
    description: "Complete professional installation of new ATMs with site preparation, hardware setup, and full configuration.",
    icon: "Wrench",
    features: ["Site survey & preparation", "Hardware installation", "Software configuration", "Testing & commissioning"],
  },
  {
    title: "Preventive Maintenance",
    description: "Scheduled maintenance programs to prevent breakdowns and extend your ATM lifecycle.",
    icon: "Settings",
    features: ["Monthly inspections", "Cleaning & calibration", "Parts replacement", "Performance optimization"],
  },
  {
    title: "Emergency Repair",
    description: "Round-the-clock emergency response for ATM breakdowns and critical technical issues.",
    icon: "Clock",
    features: ["2-hour response time", "On-site diagnosis", "Rapid repair", "Spare parts available"],
  },
  {
    title: "Spare Parts Supply",
    description: "Genuine manufacturer spare parts for all ATM models delivered directly to your location.",
    icon: "Package",
    features: ["Original manufacturer parts", "Fast delivery", "Inventory management", "Warranty included"],
  },
  {
    title: "Remote Support",
    description: "Quick remote diagnostics and troubleshooting to minimize downtime across all your ATMs.",
    icon: "Globe",
    features: ["24/7 helpdesk", "Remote diagnostics", "Software fixes", "Technical consultation"],
  },
  {
    title: "GRG Banking Support",
    description: "Expert certified support for GRG Banking Systems — the leading ATM manufacturer in Africa.",
    icon: "Cpu",
    features: ["GRG certified engineers", "Firmware updates", "System integration", "Technical training"],
  },
];

export const TEAM = [
  { name: "Wubet Alebachew",   role: "Founder & CEO",     bio: "Expert in GRG Banking Systems with 10+ years in the fintech sector.", icon: "UserCircle2" },
  { name: "Technical Director", role: "Head of Engineering",bio: "Leading our technical operations and engineering excellence.",         icon: "Cpu"         },
  { name: "Operations Manager", role: "Field Operations",   bio: "Overseeing nationwide ATM field operations and logistics.",            icon: "Wrench"      },
  { name: "Support Lead",       role: "Customer Support",   bio: "Ensuring 24/7 customer satisfaction and rapid response.",             icon: "Headphones"  },
];

// ── GRG ATM Products ──────────────────────────────────────────────────
export const GRG_PRODUCTS = [
  {
    id: "h22v",
    name: "GRG H22V",
    type: "Cash Dispenser ATM",
    category: "Full-Function ATM",
    tagline: "High-capacity outdoor ATM with superior reliability",
    description:
      "The H22V is GRG's flagship full-function ATM, designed for high-traffic banking environments. It features a 19-inch touch screen, bulk-note loading, and advanced cash management capabilities. Maximum bulk cash capacity is enlarged by 67% compared to mainstream models, while dispensing cassette capacity increases by 17%.",
    specs: [
      { label: "Screen",         value: "19-inch TFT touch screen" },
      { label: "Type",           value: "Through-the-Wall / Lobby" },
      { label: "Cash Capacity",  value: "Up to 4 cassettes, 3,000+ notes each" },
      { label: "Dispense Speed", value: "High-speed multi-denomination" },
      { label: "Card Reader",    value: "Motorized EMV chip + magstripe" },
      { label: "Connectivity",   value: "TCP/IP, XFS compliant" },
      { label: "Security",       value: "UL 291 Business Hours safe" },
      { label: "Receipt",        value: "Thermal journal & receipt printer" },
    ],
    features: [
      "Bulk-note loading technology",
      "67% larger cash capacity vs mainstream models",
      "EMV chip card & NFC contactless reader",
      "Anti-skimming protection",
      "Remote monitoring & management",
      "Multilingual interface support",
    ],
    color: "from-blue-600/30 to-blue-500/10",
    badge: "Flagship",
    badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/20",
    manualUrl: "https://img1.wsimg.com/blobby/go/d2cf3ab9-82da-4432-92ad-638826da3817/H22V-202307%C2%A0(19-inch%C2%A0screen%C2%A0model).pdf",
  },
  {
    id: "h22vl",
    name: "GRG H22VL",
    type: "Cash Dispenser ATM",
    category: "Lobby ATM",
    tagline: "Slim lobby design with full ATM functionality",
    description:
      "The H22VL is the lobby-optimized variant of the H22V series, featuring a slimmer enclosure purpose-built for indoor bank branches. It delivers the same high-capacity cash dispensing performance in a space-efficient form factor, ideal for branch environments where floor space is at a premium.",
    specs: [
      { label: "Screen",         value: "15-inch or 19-inch TFT display" },
      { label: "Type",           value: "Lobby / In-Branch" },
      { label: "Cash Capacity",  value: "Up to 4 cassettes" },
      { label: "Form Factor",    value: "Slim upright enclosure" },
      { label: "Card Reader",    value: "EMV chip + magstripe + NFC" },
      { label: "Connectivity",   value: "TCP/IP, SSL encrypted" },
      { label: "Security",       value: "UL 291 compliant safe" },
      { label: "Receipt",        value: "Thermal receipt & journal" },
    ],
    features: [
      "Space-efficient slim design",
      "Full EMV and NFC contactless support",
      "High-reliability note transport",
      "Anti-skimming & anti-shimming sensors",
      "Modular maintenance access",
      "Compatible with existing CMS systems",
    ],
    color: "from-orange-600/30 to-orange-500/10",
    badge: "Popular",
    badgeColor: "bg-orange-500/15 text-orange-400 border-orange-500/20",
    manualUrl: "https://img1.wsimg.com/blobby/go/d2cf3ab9-82da-4432-92ad-638826da3817/H22V-202307%C2%A0(19-inch%C2%A0screen%C2%A0model).pdf",
  },
  {
    id: "crm9250n",
    name: "GRG CRM9250N",
    type: "Cash Recycling Machine",
    category: "Cash Recycler",
    tagline: "Intelligent cash recycling with dual-currency support",
    description:
      "The CRM9250N is GRG's advanced cash recycling solution for high-volume bank branches. It processes notes at 8 notes/second and supports up to 3,350 notes per intelligent recycling cassette. The double-currency recycling cassette enables simultaneous management of two denominations, dramatically reducing CIT costs.",
    specs: [
      { label: "Screen",           value: "10.1-inch customer display" },
      { label: "Type",             value: "Cash Recycling Machine" },
      { label: "Processing Speed", value: "8 notes/second" },
      { label: "Cassette Capacity",value: "3,350 notes per recycling cassette" },
      { label: "Cassette Slots",   value: "4 recycling + 1 multifunctional" },
      { label: "Currency Support", value: "Dual-currency recycling cassette" },
      { label: "Authentication",   value: "4-sensor banknote validation" },
      { label: "Connectivity",     value: "TCP/IP, XFS / CEN standard" },
    ],
    features: [
      "8 notes/second high-speed processing",
      "3,350-note intelligent recycling cassettes",
      "Double-currency recycling capability",
      "4-sensor counterfeit detection",
      "Real-time cash management reporting",
      "Flexible deposit, withdrawal & recycling config",
    ],
    color: "from-green-600/30 to-green-500/10",
    badge: "Best Seller",
    badgeColor: "bg-green-500/15 text-green-400 border-green-500/20",
    manualUrl: "https://img1.wsimg.com/blobby/go/d2cf3ab9-82da-4432-92ad-638826da3817/downloads/CRM9250N%20Brochure%20(04-2020).pdf?ver=1773173977852",
  },
  {
    id: "p5800l",
    name: "GRG P5800L",
    type: "Cash Recycler",
    category: "Compact Cash Recycler",
    tagline: "Compact recycling solution for branches and retailers",
    description:
      "The P5800L is a compact cash recycling solution designed for bank branches and high-volume retail points. It enables flexible deposit, withdrawal, and recycling configuration, reduces CIT costs through real-time cash management, and delivers accurate multi-sensor banknote authentication. Ideal where space is limited but transaction volumes are high.",
    specs: [
      { label: "Type",           value: "Compact Cash Recycler" },
      { label: "Target",         value: "Bank branches & retailers" },
      { label: "Configuration",  value: "Deposit / Withdrawal / Recycling" },
      { label: "Authentication", value: "Multi-sensor note validation" },
      { label: "Cash Management",value: "Real-time reporting & alerts" },
      { label: "Connectivity",   value: "TCP/IP, CEN/XFS compliant" },
      { label: "Security",       value: "Secure safe compartment" },
      { label: "Footprint",      value: "Compact — minimal floor space" },
    ],
    features: [
      "Flexible deposit, withdrawal & recycling modes",
      "Reduces CIT cost with real-time cash management",
      "Accurate multi-sensor banknote authentication",
      "Ideal for high-cash-flow retail environments",
      "Compact form factor — minimal counter space",
      "Compatible with GRG Cash Management Software",
    ],
    color: "from-purple-600/30 to-purple-500/10",
    badge: "Compact",
    badgeColor: "bg-purple-500/15 text-purple-400 border-purple-500/20",
    manualUrl: "https://www.atmia.com/showrooms/grgbanking/30/",
  },
];
