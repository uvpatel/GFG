import Footer from "@/app/components/Footer"
import { Navbar } from "@/app/components/Navbar";
import MemberCard from "@/app/components/Team";
import Event from "@/app/components/Event";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  const members = [
    {
    name: "Urvil Patel",
    role: "AI Engineer & Developer",
    description:
      "Passionate about AI, ML, and web development. Building intelligent systems that make a difference.",
    image: "/team/urvil.jpg",
    linkedin: "https://linkedin.com/in/urvilpatel",
    instagram: "https://instagram.com/urvil.codes",
    github: "https://github.com/uvpatel",
    website: "https://urvil.dev",
  },
  {
    name: "Neha Sharma",
    role: "Frontend Developer",
    description:
      "Design-focused developer crafting smooth and responsive UIs using React and Tailwind.",
    image: "/team/neha.jpg",
    linkedin: "https://linkedin.com/in/nehasharma",
    instagram: "https://instagram.com/neha.ui",
    github: "https://github.com/neha-sharma",
  },
  {
    name: "Ravi Mehta",
    role: "Backend Developer",
    description:
      "Server-side problem solver who loves Node.js, Express, and database design.",
    image: "/team/ravi.jpg",
    linkedin: "https://linkedin.com/in/ravimehta",
    github: "https://github.com/ravimehta",
  },
  {
    name: "Priya Singh",
    role: "UI/UX Designer",
    description:
      "Turns ideas into intuitive and aesthetic designs. Obsessed with details and usability.",
    image: "/team/priya.jpg",
    instagram: "https://instagram.com/priya.designs",
    linkedin: "https://linkedin.com/in/priyasingh",
  },
  {
    name: "Amit Verma",
    role: "Data Scientist",
    description:
      "Transforms raw data into actionable insights using Python, Pandas, and ML models.",
    image: "/team/amit.jpg",
    linkedin: "https://linkedin.com/in/amitverma",
    github: "https://github.com/amitvdata",
  },
  {
    name: "Simran Kaur",
    role: "Project Manager",
    description:
      "Coordinates the chaos. Keeps the team aligned, motivated, and on schedule.",
    image: "/team/simran.jpg",
    linkedin: "https://linkedin.com/in/simrankaur",
  },
  {
    name: "Rahul Yadav",
    role: "Mobile App Developer",
    description:
      "Building seamless mobile experiences using React Native and Flutter.",
    image: "/team/rahul.jpg",
    github: "https://github.com/rahulyadav",
    linkedin: "https://linkedin.com/in/rahulyadav",
  },
  {
    name: "Ananya Gupta",
    role: "Full Stack Developer",
    description:
      "End-to-end developer specializing in scalable Next.js applications and REST APIs.",
    image: "/team/ananya.jpg",
    linkedin: "https://linkedin.com/in/ananyagupta",
    github: "https://github.com/ananya-gupta",
  },
  {
    name: "Arjun Reddy",
    role: "DevOps Engineer",
    description:
      "Automates everything. Loves CI/CD, Docker, and cloud-native architectures.",
    image: "/team/arjun.jpg",
    linkedin: "https://linkedin.com/in/arjunreddy",
  },
  {
    name: "Meera Nair",
    role: "AI Researcher",
    description:
      "Exploring the boundaries of deep learning, NLP, and computer vision.",
    image: "/team/meera.jpg",
    github: "https://github.com/meeran",
    linkedin: "https://linkedin.com/in/meeranair",
  },
  {
    name: "Karan Patel",
    role: "Cybersecurity Analyst",
    description:
      "Keeps systems safe from attacks and vulnerabilities. Ethical hacking enthusiast.",
    image: "/team/karan.jpg",
    github: "https://github.com/karan-sec",
    linkedin: "https://linkedin.com/in/karanpatel",
  },
  {
    name: "Isha Deshmukh",
    role: "Content Strategist",
    description:
      "Bridges tech and storytelling with clear, creative content strategies.",
    image: "/team/isha.jpg",
    linkedin: "https://linkedin.com/in/ishadeshmukh",
  },
  {
    name: "Vikas Jain",
    role: "QA Engineer",
    description: "Ensures perfection by breaking things before users can.",
    image: "/team/vikas.jpg",
    linkedin: "https://linkedin.com/in/vikasjain",
  },
  {
    name: "Tanya Rao",
    role: "Marketing Lead",
    description:
      "Creates impactful campaigns that connect tech innovation to real people.",
    image: "/team/tanya.jpg",
    instagram: "https://instagram.com/tanya.markets",
  },
  {
    name: "Deep Patel",
    role: "ML Engineer",
    description:
      "Loves experimenting with neural networks and optimizing ML pipelines.",
    image: "/team/deep.jpg",
    github: "https://github.com/deeppatelml",
    linkedin: "https://linkedin.com/in/deeppatel",
  },
  {
    name: "Nidhi Joshi",
    role: "Community Manager",
    description:
      "Builds strong communities and manages collaborations with enthusiasm.",
    image: "/team/nidhi.jpg",
    linkedin: "https://linkedin.com/in/nidhijoshi",
  },
  ];

  return (
    <div>
      <Navbar />
      <About />
            
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Event />
      </div>
      <section id="Team" className="py-12 bg-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-10">
            Meet Our Team
          </h1>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {members.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
      <Contact />

      <Footer />
    </div>
  );
}
