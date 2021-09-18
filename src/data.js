import {
  FaAirbnb,
  FaCodepen,
  FaDiscord,
  FaDropbox,
  FaFacebookF,
  FaGithub,
  FaSquarespace,
  FaTwitter,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const headerLinks = [
  {
    id: 1,
    name: "find job",
    active: true,
  },
  {
    id: 2,
    name: "company review",
    active: false,
  },
  {
    id: 3,
    name: "find salaries",
    active: false,
  },
];
const employmentType = [
  {
    id: 1,
    name: "full time jobs",
    noOfJob: 56,
    isChecked: false,
  },
  {
    id: 2,
    name: "part time jobs",
    noOfJob: 43,
    isChecked: false,
  },
  {
    id: 3,
    name: "remote jobs",
    noOfJob: 24,
    isChecked: false,
  },
  {
    id: 4,
    name: "internship jobs",
    noOfJob: 27,
    isChecked: false,
  },
  {
    id: 5,
    name: "contract ",
    noOfJob: 76,
    isChecked: false,
  },
  {
    id: 6,
    name: "training jobs",
    noOfJob: 28,
    isChecked: false,
  },
];
const employmentTypes = [
  {
    id: 1,
    name: "full time jobs",
  },
  {
    id: 2,
    name: "part time jobs",
  },
  {
    id: 3,
    name: "remote jobs",
  },
  {
    id: 4,
    name: "internship jobs",
  },
  {
    id: 5,
    name: "contract ",
  },
  {
    id: 6,
    name: "training jobs",
  },
];
const seniorityLevel = [
  {
    id: 1,
    name: "student level",
    noOfJob: 98,
    isChecked: false,
  },
  {
    id: 2,
    name: "entry level",
    noOfJob: 44,
    isChecked: false,
  },
  {
    id: 3,
    name: "mid level",
    noOfJob: 35,
    isChecked: false,
  },
  {
    id: 4,
    name: "senior level",
    noOfJob: 29,
    isChecked: false,
  },
  {
    id: 5,
    name: "directors",
    noOfJob: 26,
    isChecked: false,
  },
  {
    id: 6,
    name: "VP or Above",
    noOfJob: 56,
    isChecked: false,
  },
];
const salaryRange = [
  {
    id: 1,
    min: 700,
    max: 1000,
    noOfJob: 49,
    isChecked: false,
  },
  {
    id: 2,
    min: 1000,
    max: 1200,
    noOfJob: 67,
    isChecked: false,
  },
  {
    id: 3,
    min: 1200,
    max: 1400,
    noOfJob: 24,
    isChecked: false,
  },
  {
    id: 4,
    min: 1500,
    max: 1800,
    noOfJob: 27,
    isChecked: false,
  },
  {
    id: 5,
    min: 2000,
    max: 3000,
    noOfJob: 76,

    isChecked: false,
  },
  {
    id: 6,
    min: 3000,
    max: 4000,
    noOfJob: 22,
    isChecked: false,
  },
  {
    id: 7,
    min: 4000,
    max: 5000,
    noOfJob: 18,
    isChecked: false,
  },
];
const jobTypes = [
  { id: 1, name: "ui ux designer" },
  { id: 2, name: "product designer" },
  { id: 3, name: "ui developer" },
  { id: 4, name: "user experience designer" },
  { id: 5, name: "ui ux" },
  { id: 6, name: "ux designer" },
];
const jobs = [
  {
    id: 1,
    title: "UI / UX Designer",
    location: "2972 Westheimer Rd. Santa Ana.",
    seniorityLevel: "senior level",
    employmentType: "full time jobs",
    salary: 3500.0,
    experience: 1,
    posted: 8,
    noOfApplication: 98,
    info: `The User Experience Designer position exists to create compelling and digital user experience through excellent design...`,
    overview: `
    We believe that design (and you) will be critical to the company's success. You will work with our founders and our early customers to help define and build our product functionality, while maintaining the quality bar that customers have come to expect from modern SaaS applications. You have a strong background in product design with a quantitavely anf qualitatively analytical mindset. You will also have the opportunity to craft our overall product and visual identity and should be comfortable to flex into working.`,

    description: [
      `3+ years working as a product designer.`,
      `A portfolio that highlights your approach to problem solving, as well as you skills in UI.`,
      `Experience conducting research and building out smooth flows.`,
      `Excellent communication skills with a well-defined design process.
`,
      `Familiarity with design tools like Sketch and Figma.`,
      `Up-level our overall design and bring consistency to end-user facing properties.`,
    ],
    Icon: FaTwitter,
    Class: "twitter",
  },
  {
    id: 2,
    title: "Sr. Product Designer",
    location: "1901 Thornridge Cir.Shiloh, Hawaii.",
    seniorityLevel: "student level",
    employmentType: "internship jobs",
    salary: 800.0,
    experience: 1,
    posted: 9,
    noOfApplication: 50,
    info: `The User Experience Designer position exists to create compelling and digital user experience through excellent design...`,
    overview: `
    We believe that design (and you) will be critical to the company's success. You will work with our founders and our early customers to help define and build our product functionality, while maintaining the quality bar that customers have come to expect from modern SaaS applications. You have a strong background in product design with a quantitavely anf qualitatively analytical mindset. You will also have the opportunity to craft our overall product and visual identity and should be comfortable to flex into working.`,

    description: [
      `3+ years working as a product designer.`,
      `A portfolio that highlights your approach to problem solving, as well as you skills in UI.`,
      `Experience conducting research and building out smooth flows.`,
      `Excellent communication skills with a well-defined design process.
`,
      `Familiarity with design tools like Sketch and Figma.`,
      `Up-level our overall design and bring consistency to end-user facing properties.`,
    ],
    Icon: FaDropbox,
    Class: "dropbox",
  },
  {
    id: 3,
    title: "User Experience Designer",
    location: "414 Parker Rd. Allentown, New york",
    seniorityLevel: "directors",
    employmentType: "contract",
    salary: 5000.0,
    experience: 1,
    posted: 16,
    noOfApplication: 15,
    info: `The User Experience Designer position exists to create compelling and digital user experience through excellent design...`,
    overview: `
    We believe that design (and you) will be critical to the company's success. You will work with our founders and our early customers to help define and build our product functionality, while maintaining the quality bar that customers have come to expect from modern SaaS applications. You have a strong background in product design with a quantitavely anf qualitatively analytical mindset. You will also have the opportunity to craft our overall product and visual identity and should be comfortable to flex into working.`,

    description: [
      `3+ years working as a product designer.`,
      `A portfolio that highlights your approach to problem solving, as well as you skills in UI.`,
      `Experience conducting research and building out smooth flows.`,
      `Excellent communication skills with a well-defined design process.
`,
      `Familiarity with design tools like Sketch and Figma.`,
      `Up-level our overall design and bring consistency to end-user facing properties.`,
    ],
    Icon: FaCodepen,
    Class: "codepen",
  },
  {
    id: 4,
    title: "Product Designer",
    location: "4517 Washington Ave. Syracuse",
    seniorityLevel: "entry level",
    employmentType: "training jobs",
    salary: 1000.0,
    experience: 1,
    posted: 26,
    noOfApplication: 157,
    info: `The User Experience Designer position exists to create compelling and digital user experience through excellent design...`,
    overview: `
    We believe that design (and you) will be critical to the company's success. You will work with our founders and our early customers to help define and build our product functionality, while maintaining the quality bar that customers have come to expect from modern SaaS applications. You have a strong background in product design with a quantitavely anf qualitatively analytical mindset. You will also have the opportunity to craft our overall product and visual identity and should be comfortable to flex into working.`,

    description: [
      `3+ years working as a product designer.`,
      `A portfolio that highlights your approach to problem solving, as well as you skills in UI.`,
      `Experience conducting research and building out smooth flows.`,
      `Excellent communication skills with a well-defined design process.
`,
      `Familiarity with design tools like Sketch and Figma.`,
      `Up-level our overall design and bring consistency to end-user facing properties.`,
    ],
    Icon: FaDiscord,
    Class: "discord",
  },
  {
    id: 5,
    title: "UI / UX Designer",
    location: "2711 Ash Dr. San Jose, South Dark",
    seniorityLevel: "mid level",
    employmentType: "part time jobs",
    salary: 2000.0,
    experience: 1,
    posted: 5,
    noOfApplication: 79,
    info: `The User Experience Designer position exists to create compelling and digital user experience through excellent design...`,
    overview: `
    We believe that design (and you) will be critical to the company's success. You will work with our founders and our early customers to help define and build our product functionality, while maintaining the quality bar that customers have come to expect from modern SaaS applications. You have a strong background in product design with a quantitavely anf qualitatively analytical mindset. You will also have the opportunity to craft our overall product and visual identity and should be comfortable to flex into working.`,

    description: [
      `3+ years working as a product designer.`,
      `A portfolio that highlights your approach to problem solving, as well as you skills in UI.`,
      `Experience conducting research and building out smooth flows.`,
      `Excellent communication skills with a well-defined design process.
`,
      `Familiarity with design tools like Sketch and Figma.`,
      `Up-level our overall design and bring consistency to end-user facing properties.`,
    ],
    Icon: FcGoogle,
    Class: "google",
  },
  {
    id: 6,
    title: "UI / UX Designer",
    location: "1976 Thornide Joshua. Andr Maria",
    seniorityLevel: "mid level",
    employmentType: "full time jobs",
    salary: 3700.0,
    experience: 1,
    posted: 2,
    noOfApplication: 83,
    info: `The User Experience Designer position exists to create compelling and digital user experience through excellent design...`,
    overview: `
    We believe that design (and you) will be critical to the company's success. You will work with our founders and our early customers to help define and build our product functionality, while maintaining the quality bar that customers have come to expect from modern SaaS applications. You have a strong background in product design with a quantitavely anf qualitatively analytical mindset. You will also have the opportunity to craft our overall product and visual identity and should be comfortable to flex into working.`,
    description: [
      `3+ years working as a product designer.`,
      `A portfolio that highlights your approach to problem solving, as well as you skills in UI.`,
      `Experience conducting research and building out smooth flows.`,
      `Excellent communication skills with a well-defined design process.
`,
      `Familiarity with design tools like Sketch and Figma.`,
      `Up-level our overall design and bring consistency to end-user facing properties.`,
    ],
    Icon: FaGithub,
    Class: "github",
  },
  {
    id: 7,
    title: "UI Developer",
    location: "1725 Preston Rd. Inglewood.",
    seniorityLevel: "vp or above",
    employmentType: "remote jobs",
    salary: 4000.0,
    experience: 1,
    posted: 13,
    noOfApplication: 43,
    info: `The User Experience Designer position exists to create compelling and digital user experience through excellent design...`,
    overview: `
    We believe that design (and you) will be critical to the company's success. You will work with our founders and our early customers to help define and build our product functionality, while maintaining the quality bar that customers have come to expect from modern SaaS applications. You have a strong background in product design with a quantitavely anf qualitatively analytical mindset. You will also have the opportunity to craft our overall product and visual identity and should be comfortable to flex into working.`,
    description: [
      `3+ years working as a product designer.`,
      `A portfolio that highlights your approach to problem solving, as well as you skills in UI.`,
      `Experience conducting research and building out smooth flows.`,
      `Excellent communication skills with a well-defined design process.
`,
      `Familiarity with design tools like Sketch and Figma.`,
      `Up-level our overall design and bring consistency to end-user facing properties.`,
    ],
    Icon: FaAirbnb,
    Class: "airbnb",
  },

  {
    id: 8,
    title: "User Interface Designer",
    location: "1725 Preston Rd. Inglewood.",
    seniorityLevel: "mid level",
    employmentType: "part time jobs",
    salary: 3400.0,
    experience: 1,
    posted: 20,
    noOfApplication: 113,
    info: `The User Experience Designer position exists to create compelling and digital user experience through excellent design...`,
    overview: `
    We believe that design (and you) will be critical to the company's success. You will work with our founders and our early customers to help define and build our product functionality, while maintaining the quality bar that customers have come to expect from modern SaaS applications. You have a strong background in product design with a quantitavely anf qualitatively analytical mindset. You will also have the opportunity to craft our overall product and visual identity and should be comfortable to flex into working.`,
    description: [
      `3+ years working as a product designer.`,
      `A portfolio that highlights your approach to problem solving, as well as you skills in UI.`,
      `Experience conducting research and building out smooth flows.`,
      `Excellent communication skills with a well-defined design process.
`,
      `Familiarity with design tools like Sketch and Figma.`,
      `Up-level our overall design and bring consistency to end-user facing properties.`,
    ],
    Icon: FaFacebookF,
    Class: "facebook",
  },

  {
    id: 9,
    title: "UX Designer",
    location: "2972 Westheimer Rd. Santa Ana.",
    seniorityLevel: "senior level",
    employmentType: "remote jobs",
    salary: 4500.0,
    experience: 1,
    posted: 15,
    noOfApplication: 134,
    info: `The User Experience Designer position exists to create compelling and digital user experience through excellent design...`,
    overview: `
    We believe that design (and you) will be critical to the company's success. You will work with our founders and our early customers to help define and build our product functionality, while maintaining the quality bar that customers have come to expect from modern SaaS applications. You have a strong background in product design with a quantitavely anf qualitatively analytical mindset. You will also have the opportunity to craft our overall product and visual identity and should be comfortable to flex into working.`,
    description: [
      `3+ years working as a product designer.`,
      `A portfolio that highlights your approach to problem solving, as well as you skills in UI.`,
      `Experience conducting research and building out smooth flows.`,
      `Excellent communication skills with a well-defined design process.
`,
      `Familiarity with design tools like Sketch and Figma.`,
      `Up-level our overall design and bring consistency to end-user facing properties.`,
    ],
    Icon: FaSquarespace,
    Class: "squarespace",
  },
];
export {
  headerLinks,
  employmentType,
  seniorityLevel,
  salaryRange,
  jobs,
  jobTypes,
  employmentTypes,
};
