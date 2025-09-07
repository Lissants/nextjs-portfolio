import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Christopher",
  lastName: "Lissants",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role1: "Full-Stack Developer",
  role2: "Cybersecurity Enthusiast",
  avatar: "/images/avatar.jpg",
  email: "christopher.lissants@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/lissants",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/lissants",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@lissants.chris",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role1}`,
  headline: <>Delivering Brilliant Ideas to Your Fingertips</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Berkaraoke Mobile App</strong></>,
    href: "https://github.com/Lissants/berkaraoke",
  },
  subline: (
    <>
      Salut! Chris Here, a recent Applied Computing graduate from The University of Arizona
      <br /> and Information Systems graduate from Sampoerna University.
      <br /> I aim to learn more about Full-Stack Development and Cybersecurity!.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Chris is a Jakarta-based engineer with a passion in empowering brilliant business ideas with website & mobile applications, as well
        as providing cybersecurity solutions to protect your organization, its business process, and the people it serves.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Project Experience",
    experiences: [
      {
        company: "Web Programming course - University of Arizona",
        timeframe: "Jan 2025 - May 2025",
        role: "Web Developer (Full-Stack)",
        achievements: [
          <>
            Developed a functional social media web application using HTML, CSS, Node.JS and MySQL.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
          },
        ],
      },
      {
        company: "Senior Capstone - University of Arizona & Sampoerna University",
        timeframe: "Jan 2025 - May 2025",
        role: "Mobile App Developer (Full-Stack)",
        achievements: [
          <>
            Designed and produced mobile application capable of recommending karaoke songs according to user's singing performance
            and preferences using React Native and Appwrite.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Arizona",
        description: <>Studied Applied Computing and part of dual-degree program with Sampoerna University.</>,
      },
      {
        name: "Sampoerna University",
        description: <>Studied Information Systems.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
