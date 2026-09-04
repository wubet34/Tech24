// Demo data — replace with real API calls when backend is ready.
// Every item has an `id` field so the UI behaves identically to real data.

export const demoStats = {
  banks:        6,
  atms:         120,
  technicians:  50,
  openTickets:  4,
  quoteRequests:12,
  uptime:       "99.9%",
};

export const demoServices = [
  { id: 1, title: "ATM Installation",      icon: "Wrench",   description: "Complete professional installation with site prep, hardware setup, and commissioning.", status: "active" },
  { id: 2, title: "Preventive Maintenance", icon: "Settings", description: "Scheduled programs to prevent breakdowns and extend ATM lifecycle.",                    status: "active" },
  { id: 3, title: "Emergency Repair",       icon: "Clock",    description: "24/7 rapid-response for ATM breakdowns — on-site within 2 hours.",                      status: "active" },
  { id: 4, title: "Spare Parts Supply",     icon: "Package",  description: "Genuine OEM parts for all ATM models, delivered anywhere in Ethiopia.",                  status: "active" },
  { id: 5, title: "Remote Support",         icon: "Globe",    description: "Instant remote diagnostics and software troubleshooting.",                                status: "active" },
  { id: 6, title: "GRG Banking Support",    icon: "Cpu",      description: "Certified expertise for GRG Banking Systems firmware and integration.",                    status: "active" },
];

export const demoBanks = [
  { id: 1, name: "Awash Bank",   years: "3+ years", atms: 32, status: "active",   contact: "awash@bank.et" },
  { id: 2, name: "Dashen Bank",  years: "2+ years", atms: 28, status: "active",   contact: "dashen@bank.et" },
  { id: 3, name: "Ahadu Bank",   years: "1+ years", atms: 14, status: "active",   contact: "ahadu@bank.et" },
  { id: 4, name: "Amhara Bank",  years: "2+ years", atms: 22, status: "active",   contact: "amhara@bank.et" },
  { id: 5, name: "Zemen Bank",   years: "1+ years", atms: 11, status: "inactive", contact: "zemen@bank.et" },
  
];

export const demoTeam = [
  { id: 1, name: "Wubet Alebachew",   role: "Founder & CEO",      bio: "Expert in GRG Banking Systems with 10+ years in fintech.",         icon: "UserCircle2" },
  { id: 2, name: "Abebe Girma",       role: "Technical Director",  bio: "Leading technical operations and engineering excellence.",          icon: "Cpu"         },
  { id: 3, name: "Tigist Haile",      role: "Operations Manager",  bio: "Overseeing nationwide ATM field operations and logistics.",         icon: "Wrench"      },
  { id: 4, name: "Dawit Tesfaye",     role: "Support Lead",        bio: "Ensuring 24/7 customer satisfaction and rapid response.",           icon: "Headphones"  },
];

export const demoQuotes = [
  { id: 1, bank: "Commercial Bank of Ethiopia", contact: "Yonas T.", email: "yonas@cbe.et", phone: "+251911111111", atms: "50 - 100", service: "ATM Installation",  status: "pending",   date: "2026-08-20" },
  { id: 2, bank: "Lion International Bank",     contact: "Sara A.",   email: "sara@lion.et",  phone: "+251922222222", atms: "10 - 50",  service: "Maintenance",       status: "reviewed",  date: "2026-08-18" },
  { id: 3, bank: "Abyssinia Bank",              contact: "Mekdes B.", email: "mek@abys.et",   phone: "+251933333333", atms: "1 - 10",   service: "Emergency Repair",  status: "closed",    date: "2026-08-15" },
  { id: 4, bank: "Berhan Bank",                 contact: "Kiros H.",  email: "kiros@ber.et",  phone: "+251944444444", atms: "10 - 50",  service: "GRG Support",       status: "pending",   date: "2026-08-22" },
];

export const demoMessages = [
  { id: 1, name: "Fikadu Lemma",   email: "fikadu@gmail.com",  subject: "ATM Installation",   message: "We need to install 5 new ATMs in Hawassa branch.",       date: "2026-08-21", read: false },
  { id: 2, name: "Hiwot Girma",    email: "hiwot@yahoo.com",   subject: "Maintenance Query",   message: "What's included in the monthly maintenance package?",    date: "2026-08-20", read: true  },
  { id: 3, name: "Biniyam Tsega",  email: "bini@outlook.com",  subject: "Emergency Support",   message: "Our ATM at Merkato branch is down. Need urgent help.",   date: "2026-08-22", read: false },
  { id: 4, name: "Selam Bekele",   email: "selam@email.com",   subject: "Partnership",         message: "Interested in a long-term service agreement.",           date: "2026-08-19", read: true  },
];

export const demoInventory = [
  { id: 1, partName: "Cash Cassette",        partNumber: "GRG-CC-001", quantity: 24, minStock: 10, unit: "pcs",   supplier: "GRG Banking Systems", lastUpdated: "2026-08-15" },
  { id: 2, partName: "Keypad Module",        partNumber: "GRG-KP-003", quantity: 8,  minStock: 5,  unit: "pcs",   supplier: "GRG Banking Systems", lastUpdated: "2026-08-10" },
  { id: 3, partName: "Receipt Printer Roll", partNumber: "THM-PR-200", quantity: 120,minStock: 50, unit: "rolls", supplier: "Thermal Plus",        lastUpdated: "2026-08-18" },
  { id: 4, partName: "Card Reader",          partNumber: "GRG-CR-007", quantity: 3,  minStock: 5,  unit: "pcs",   supplier: "GRG Banking Systems", lastUpdated: "2026-08-12" },
  { id: 5, partName: "Power Supply Unit",    partNumber: "PSU-ATM-12", quantity: 6,  minStock: 4,  unit: "pcs",   supplier: "PowerTech ET",        lastUpdated: "2026-08-20" },
  { id: 6, partName: "Cleaning Kit",         partNumber: "CLN-KT-001", quantity: 45, minStock: 20, unit: "kits",  supplier: "CleanTech Africa",    lastUpdated: "2026-08-17" },
];
