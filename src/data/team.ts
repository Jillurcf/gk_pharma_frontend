export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  /**
   * Optional portrait. Place a file in `public/images/team/` and set the path,
   * e.g. `/images/team/managing-director.jpg`. When omitted, the card shows a
   * branded initials placeholder instead.
   */
  image?: string;
}

export const MANAGING_DIRECTOR = {
  name: "Managing Director",
  role: "Managing Director, GK Pharma (Unani) Limited",
  image: undefined as string | undefined,
  message: [
    "Welcome to GK Pharma (Unani) Limited. Thank you for taking the time to learn about our company and the tradition of Unani medicine that shapes our work.",
    "We believe that Unani medicine deserves a clear, honest and professional presentation. That belief guides how we approach our products, our processes and the information we share with visitors, partners and healthcare professionals.",
    "As the company grows, our commitment remains the same: to work responsibly, to value quality at every step and to communicate with transparency. This website is part of that commitment, and we are pleased to share it with you.",
  ],
} satisfies {
  name: string;
  role: string;
  image?: string;
  message: string[];
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Managing Director",
    role: "Leadership",
    bio: "Guides the company's direction and its commitment to responsible Unani medicine.",
  },
  {
    name: "Head of Quality",
    role: "Quality & Compliance",
    bio: "Oversees quality thinking across sourcing, production and product documentation.",
  },
  {
    name: "Production Lead",
    role: "Manufacturing",
    bio: "Coordinates production processes and day-to-day manufacturing discipline.",
  },
  {
    name: "Operations Manager",
    role: "Operations",
    bio: "Supports the systems that keep the company organised and dependable.",
  },
];
