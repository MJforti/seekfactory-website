export const MACHINERY_CATEGORIES = [
  {
    id: 'cnc-metalworking',
    name: 'CNC & Metalworking',
    shortName: 'CNC Machines',
    description: 'High-precision 5-axis vertical machining centers, heavy-duty CNC lathes, horizontal boring machines, and turning centers engineered for tight tolerances.',
    count: '140+ Models',
    image: '/images/cnc_milling.jpg',
    featuredSpecs: ['5-Axis Simultaneous', 'Up to 24,000 RPM Spindle', 'BT40/HSK-A63 Taper', 'Fanuc / Siemens CNC']
  },
  {
    id: 'laser-cutting',
    name: 'Fiber Laser Cutting',
    shortName: 'Fiber Lasers',
    description: 'Ultra-high-power fiber laser cutting machines ranging from 3kW to 30kW for precision carbon steel, stainless steel, and aluminum sheet fabrication.',
    count: '85+ Models',
    image: '/images/fiber_laser.jpg',
    featuredSpecs: ['3kW - 30kW Laser Power', 'Precitec Auto-Focus Head', 'Exchange Table System', 'CypCut Software']
  },
  {
    id: 'press-brakes',
    name: 'Press Brakes & Bending',
    shortName: 'Press Brakes',
    description: 'Electro-hydraulic CNC press brakes and automated panel benders with multi-axis backgauges and automatic crowning systems for sheet metal forming.',
    count: '60+ Models',
    image: '/images/press_brake.jpg',
    featuredSpecs: ['40T to 1000T Capacity', 'Delem DA-66T / DA-69T CNC', '4+1 to 8+1 Axis', 'Wila Hydraulic Clamping']
  },
  {
    id: 'injection-molding',
    name: 'Plastic Injection Molding',
    shortName: 'Plastic Molding',
    description: 'Energy-efficient servo-hydraulic and all-electric injection molding machines engineered for automotive, medical, and precision consumer packaging.',
    count: '95+ Models',
    image: '/images/plastic_injection.jpg',
    featuredSpecs: ['90T to 3300T Clamping Force', 'Servo Energy Saving System', 'Multi-Cavity Precision', 'Keba Controller']
  },
  {
    id: 'automation-robotics',
    name: 'Automation & Quality Audit',
    shortName: 'Automation',
    description: 'Robotic welding cells, automated assembly conveyors, and precision 3D CMM optical inspection stations for smart manufacturing lines.',
    count: '50+ Solutions',
    image: '/images/quality_inspection.jpg',
    featuredSpecs: ['6-Axis Articulated Robots', 'CMM Laser Probe Inspection', 'PLC Industry 4.0 Integration', 'Custom End-Effectors']
  }
];

export const PRODUCTS = [
  {
    id: 'sf-vmc-850-hd',
    name: 'SeekMax VMC-850 Heavy Duty 5-Axis Machining Center',
    category: 'cnc-metalworking',
    categoryName: 'CNC & Metalworking',
    tagline: 'High-rigidity meehanite cast iron structure for heavy aerospace and automotive die-mold cutting.',
    image: '/images/cnc_milling.jpg',
    gallery: [
      '/images/cnc_milling.jpg',
      '/images/hero_machinery.jpg',
      '/images/quality_inspection.jpg'
    ],
    priceRange: '$48,000 - $85,000',
    minOrder: '1 Unit',
    verificationLevel: 'Gold Audit Verified',
    origin: 'Jiangsu Manufacturing Base, China',
    bisCompliant: true,
    leadTime: '25 - 35 Days',
    overview: 'The SeekMax VMC-850 HD is an industrial workhorse built on a high-rigidity Meehanite cast iron frame. Designed for continuous multi-axis machining of tough alloys including stainless steel, titanium, and forged automotive dies.',
    specs: {
      'X/Y/Z Travel': '850 x 550 x 580 mm',
      'Spindle Speed': '12,000 RPM Direct Drive (Opt. 20,000 RPM)',
      'Spindle Taper': 'BT40 / HSK-A63',
      'Table Size': '1000 x 500 mm',
      'Max Table Load': '600 kg',
      'CNC System': 'Siemens 840D sl / Fanuc 0i-MF',
      'Tool Magazine': '24-Arm Type ATC (1.8 sec tool change)',
      'Positioning Accuracy': '±0.005 mm',
      'Repeatability': '±0.003 mm',
      'Machine Weight': '6,200 kg'
    },
    features: [
      'Heavy-duty roller linear guide ways on all 3 axes',
      'Integrated chip conveyor and high-pressure coolant through spindle (20 Bar)',
      'Thermal compensation sensor array preventing thermal drift',
      'Full enclosure with CE safety glass and status beacon tower'
    ],
    applications: [
      'Automotive Engine & Gearbox Components',
      'Aerospace Bracket & Turbine Machining',
      'Precision Injection & Stamping Die Mold Making'
    ]
  },
  {
    id: 'sf-flc-12000-pro',
    name: 'SeekTitan 12kW Fiber Laser Cutting System',
    category: 'laser-cutting',
    categoryName: 'Fiber Laser Cutting',
    tagline: 'High-speed heavy sheet metal laser cutting with automated dual shuttle table exchange.',
    image: '/images/fiber_laser.jpg',
    gallery: [
      '/images/fiber_laser.jpg',
      '/images/hero_machinery.jpg'
    ],
    priceRange: '$72,000 - $130,000',
    minOrder: '1 Unit',
    verificationLevel: 'Gold Audit Verified',
    origin: 'Jinan Industrial Park, China',
    bisCompliant: true,
    leadTime: '30 - 40 Days',
    overview: 'Engineered for high-volume metal fabrication shops, the SeekTitan 12kW delivers extreme cutting speeds up to 100m/min. Features a reinforced gantry and Precitec auto-focus laser head capable of cleanly severing up to 40mm carbon steel.',
    specs: {
      'Laser Source': 'Raycus / IPG 12,000W Fiber Laser',
      'Processing Area': '6000 x 2500 mm (Dual Shuttle)',
      'Max Cutting Thickness': 'Carbon Steel 40mm | Stainless Steel 30mm',
      'Max Accelerations': '1.5G Gantry Acceleration',
      'Max Positioning Speed': '120 m/min combined',
      'Laser Head': 'Precitec ProCutter 2.0 Auto-Focus',
      'CNC Controller': 'CypCut HypCut CNC with Nesting',
      'Cooling Unit': 'Industrial Water Chiller (Dual Temp)',
      'Total Power Supply': '65 kW / 380V 50Hz 3-Phase',
      'Machine Weight': '14,500 kg'
    },
    features: [
      'Automatic dual exchange bed swapping in under 18 seconds',
      'Zoned dust extraction system with heavy filter cartridge',
      'Auto-nozzle cleaning and calibration station',
      'Vision camera positioning for scrap sheet utilization'
    ],
    applications: [
      'Heavy Structural Metal Fabrication',
      'Agricultural Machinery & Chassis Production',
      'Shipbuilding & Yellow Goods Machinery Frames'
    ]
  },
  {
    id: 'sf-pb-300t',
    name: 'SeekFlex 300T/4000 CNC Electro-Hydraulic Press Brake',
    category: 'press-brakes',
    categoryName: 'Press Brakes & Bending',
    tagline: 'Precision 6+1 axis synchronized bending with automatic hydraulic crowning system.',
    image: '/images/press_brake.jpg',
    gallery: [
      '/images/press_brake.jpg',
      '/images/hero_machinery.jpg'
    ],
    priceRange: '$39,000 - $68,000',
    minOrder: '1 Unit',
    verificationLevel: 'Audit Verified',
    origin: 'Anhui Heavy Machinery Base, China',
    bisCompliant: true,
    leadTime: '20 - 30 Days',
    overview: 'The SeekFlex 300T/4000 provides high repeatability for precision sheet metal bending. Equipped with Rexroth electro-hydraulic proportional valves and Heidenhain linear encoders to maintain angle precision across 4-meter bed lengths.',
    specs: {
      'Bending Force': '3,000 kN (300 Tons)',
      'Bending Length': '4,000 mm',
      'Distance Between Columns': '3,200 mm',
      'Throat Depth': '400 mm',
      'Ram Stroke': '250 mm',
      'Open Height': '540 mm',
      'CNC System': 'Delem DA-66T Touchscreen (3D Display)',
      'Backgauge Axis': 'X, R, Z1, Z2 CNC Driven (Servo Motors)',
      'Crowning System': 'Automatic Hydraulic Crowning',
      'Safety System': 'DSP Laser Safety Light Guard'
    },
    features: [
      'Delem DA-66T 3D visual offline programming software included',
      'Wila style quick hydraulic tool clamping',
      'Segmented precision ground punch and multi-V die set',
      'Energy-saving main motor drive system'
    ],
    applications: [
      'Electrical Enclosures & Switchgear Cabinets',
      'Commercial HVAC & Ducting Sheet Metal',
      'Architectural Facade & Heavy Tank Fabrication'
    ]
  },
  {
    id: 'sf-pim-650-servo',
    name: 'SeekMould 650T Servo Plastic Injection Machine',
    category: 'injection-molding',
    categoryName: 'Plastic Injection Molding',
    tagline: 'High-speed precision plastic component molding with energy-saving servo hydraulics.',
    image: '/images/plastic_injection.jpg',
    gallery: [
      '/images/plastic_injection.jpg',
      '/images/quality_inspection.jpg'
    ],
    priceRange: '$52,000 - $89,000',
    minOrder: '1 Unit',
    verificationLevel: 'Gold Audit Verified',
    origin: 'Ningbo Injection Molding Base, China',
    bisCompliant: true,
    leadTime: '30 - 45 Days',
    overview: 'Designed for round-the-clock manufacturing of automotive interior trim, home appliance housing, and industrial containers. Features robust double-toggle clamping mechanisms and highly responsive servo drive motors that reduce electricity consumption by up to 60%.',
    specs: {
      'Clamping Force': '6,500 kN (650 Tons)',
      'Screw Diameter': '85 mm (B Screw)',
      'Shot Weight (PS)': '1,850 g',
      'Injection Pressure': '1,720 Bar',
      'Platen Distance': '1,480 mm',
      'Tie Bar Spacing': '920 x 880 mm',
      'Mold Height Range': '350 - 900 mm',
      'Ejector Stroke': '220 mm',
      'Controller': 'Keba i2000 Color Touch Panel',
      'Servo System': 'Innovance / Phase Servo Drive'
    },
    features: [
      'Nitride hardened alloy steel screw and barrel assembly',
      'Dual core-pull hydraulic circuits for complex mold slides',
      'Automated central lubrication pump with pressure monitoring',
      'Robot interface (Euromap 67) pre-wired'
    ],
    applications: [
      'Automotive Bumper & Door Panel Components',
      'Consumer Electronics & Washing Machine Drums',
      'Industrial Storage Crate & Logistics Containers'
    ]
  },
  {
    id: 'sf-qa-cmm-108',
    name: 'SeekCheck CMM-1080 Precision 3D Laser Inspection System',
    category: 'automation-robotics',
    categoryName: 'Automation & Quality Audit',
    tagline: 'Sub-micron coordinate measuring machine for high-precision manufacturing QA labs.',
    image: '/images/quality_inspection.jpg',
    gallery: [
      '/images/quality_inspection.jpg',
      '/images/cnc_milling.jpg'
    ],
    priceRange: '$35,000 - $65,000',
    minOrder: '1 Unit',
    verificationLevel: 'Gold Audit Verified',
    origin: 'Shenzhen Metrology Center, China',
    bisCompliant: true,
    leadTime: '15 - 25 Days',
    overview: 'Providing absolute quality control confidence, the SeekCheck CMM combines high-granite structural stability with Renishaw 3D probing systems. Ideal for validating foreign supplier parts, prototype verification, and BIS audit compliance testing.',
    specs: {
      'Measuring Range (X/Y/Z)': '1000 x 800 x 600 mm',
      'Volumetric Accuracy': '1.8 + L/350 µm',
      'Probe Head': 'Renishaw PH10M Motorized Indexing Head',
      'Sensor Type': 'TP200 / SP25M Continuous Scanning Probe',
      'Structure Material': 'Natural Black Granite Base & Quill',
      'Guideway System': 'Air Bearing on all 3 Axes',
      'Software': 'RationalDMIS / PC-DMIS Metrology Suite',
      'Max Part Weight': '1,200 kg'
    },
    features: [
      'Temperature compensation software across 18-22°C',
      'Air filtration and pressure regulator unit included',
      'Direct CAD file import (STEP, IGES, DXF) for fast comparison',
      'Automated PDF inspection report generation'
    ],
    applications: [
      'First Article Inspection (FAI) for Imported Machinery Parts',
      'Precision Aerospace Turbine Blade Scanning',
      'Quality Compliance Auditing for BIS & ISO 9001 Labs'
    ]
  }
];

export const WHY_SEEKFACTORY = [
  {
    number: '50+',
    label: 'Point Factory Audit Protocol',
    description: 'We physically send certified engineers to audit foreign machinery factories before you wire a single dollar. Legal entity, machining capacity, financial stability, and past client references are verified on site.'
  },
  {
    number: '100%',
    label: 'BIS Compliance Guarantee',
    description: 'Importing machinery into India requires strict compliance with Bureau of Indian Standards regulations. We manage foreign factory audit registration, safety testing observations, and customs documentation.'
  },
  {
    number: '0%',
    label: 'Hidden Import Markup',
    description: 'Direct manufacturer pricing with transparent logistics, freight forwarding, and customs clearance breakdown. No intermediary markups or undisclosed broker fees.'
  },
  {
    number: '500+',
    label: 'Industrial Machines Delivered',
    description: 'Trusted by SME owners, tier-1 suppliers, and manufacturing plants across Mumbai, Delhi, Pune, Ahmedabad, Bengaluru, and international manufacturing hubs.'
  }
];

export const SOURCING_PROCESS = [
  {
    step: '01',
    title: 'Requirement & Technical Mapping',
    description: 'Share your machinery specifications, production goals, drawing files, or target budget. Our engineering team reviews feasibility and machine sizing.'
  },
  {
    step: '02',
    title: 'Supplier Identification & On-Site Audit',
    description: 'We shortlist top-tier verified manufacturers from China/Taiwan. Our Guangzhou & Changzhou teams conduct physical factory audits and inspect test run videos.'
  },
  {
    step: '03',
    title: 'Commercial Offer & BIS Clearance Path',
    description: 'Receive itemized machinery quotes with full technical specs, shipping terms (FOB/CIF/DDP), warranty terms, and BIS regulatory approval roadmaps.'
  },
  {
    step: '04',
    title: 'Pre-Shipment Quality Inspection (FAT)',
    description: 'Before dispatch, our inspection engineers run factory acceptance testing (FAT), checking accuracy tolerances, safety wiring, labeling, and packing.'
  },
  {
    step: '05',
    title: 'Customs Clearance & Doorstep Installation',
    description: 'We handle customs documentation, port clearance in India, inland transport to your plant, and coordinate local engineer commissioning.'
  }
];

export const TRUST_METRICS = [
  { metric: '500+', label: 'Verified Machines Sourced' },
  { metric: '15+', label: 'Years Combined Expertise' },
  { metric: '50+', label: 'Audit Checkpoints Verified' },
  { metric: '₹120 Cr+', label: 'Machinery Value Delivered' }
];

export const TESTIMONIALS = [
  {
    quote: "SeekFactory connected us with top-tier CNC machine manufacturers in China. The transparency in the verification process and pre-shipment inspection allowed us to modernize our Mumbai workshop with zero risk.",
    author: "Rajesh Kumar",
    title: "Managing Director",
    company: "Kumar Manufacturing Pvt. Ltd., Mumbai",
    machinery: "SeekMax VMC-850 5-Axis CNC"
  },
  {
    quote: "Handling BIS compliance for imported laser cutters used to take months of back-and-forth. SeekFactory audited the factory in Changzhou, completed testing observations, and delivered a 12kW fiber laser ready to run.",
    author: "Vikram Sharma",
    title: "Head of Operations",
    company: "Delhi Engineering Works, New Delhi",
    machinery: "SeekTitan 12kW Fiber Laser"
  },
  {
    quote: "The team on the ground in Guangzhou physically inspected our plastic injection molding machines before loading into containers. Every spec matched the contract perfectly.",
    author: "Anil Patel",
    title: "Technical Director",
    company: "Apex Polymers & Tooling, Ahmedabad",
    machinery: "SeekMould 650T Servo Injection Machine"
  }
];

export const LOCATIONS = [
  {
    city: 'Mumbai, India',
    role: 'Corporate Headquarters & Sales Desk',
    address: 'Suite 804, Express Towers, Nariman Point, Mumbai, Maharashtra 400021, India',
    email: 'mumbai@seekfactory.com',
    phone: '+91 (022) 4982-5000'
  },
  {
    city: 'Delhi NCR, India',
    role: 'North India Regional Office & Technical Center',
    address: 'Plot 42, Sector 18 Industrial Area, Gurugram, Haryana 122015, India',
    email: 'delhi@seekfactory.com',
    phone: '+91 (0124) 456-7890'
  },
  {
    city: 'Guangzhou, China',
    role: 'Global Sourcing & Quality Inspection Hub',
    address: 'Tower A, Poly World Trade Center, Pazhou, Haizhu District, Guangzhou, Guangdong, China',
    email: 'china@seekfactory.com',
    phone: '+86 (20) 8901-2345'
  },
  {
    city: 'Changzhou, China',
    role: 'Heavy Machinery Audit & Technical Verification Center',
    address: 'No. 88 Wujin Machinery Industrial Zone, Changzhou, Jiangsu, China',
    email: 'audit@seekfactory.com',
    phone: '+86 (519) 8812-9800'
  }
];

export const INDUSTRIES = [
  {
    id: 'automotive',
    name: 'Automotive & Electric Vehicles',
    tag: 'Tier-1 Supplier Machinery',
    image: '/images/hero_machinery.jpg',
    description: 'High-speed CNC turning centers, stamping press lines, and automated robotic welding cells for engine, gearbox, and EV battery housing manufacturing.'
  },
  {
    id: 'metal-fabrication',
    name: 'Sheet Metal & Structural Steel',
    tag: 'Fabrication Shops',
    image: '/images/fiber_laser.jpg',
    description: 'Fiber laser cutters, heavy electro-hydraulic press brakes, CNC shearing machines, and automated tube bending systems.'
  },
  {
    id: 'aerospace-defense',
    name: 'Aerospace & Precision Tooling',
    tag: 'Sub-Micron Machining',
    image: '/images/cnc_milling.jpg',
    description: '5-Axis gantry milling machines, horizontal boring centers, and high-precision 3D CMM inspection systems for titanium alloy processing.'
  },
  {
    id: 'plastics-packaging',
    name: 'Plastics & Consumer Packaging',
    tag: 'High-Volume Production',
    image: '/images/plastic_injection.jpg',
    description: 'Servo plastic injection molding machines, PET blow molders, film extruders, and automated high-speed packaging bottling lines.'
  }
];
