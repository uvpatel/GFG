import Footer from "@/app/components/Footer"
import { Navbar } from "@/app/components/Navbar";
import MemberCard from "@/app/components/Team";
import Event from "@/app/components/Event";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  const members = [
    {
    name: "Prof. Prachi Shah",
    role: "Faculty Advisor",
    image: "/team/Prachi Shah Mam.jpeg"
  },
  {
    name: "Kavya Zinzuvadiya",
    role: "Chairperson",
    image: "/team/Kavya_Chairperson.jpg",
    instagram: "https://www.instagram.com/kavya.z25/",
    linkedin: "https://www.linkedin.com/in/kavya-zinzuvadiya-19340a2bb/",
  },
  {
    name: "Vihaa Shah",
    role: "Vice-Chairperson",
    image: "/team/Vihaa_vicechair.jpg",
    instagram: "https://www.instagram.com/viiiihaaaa/",
    linkedin: "https://www.linkedin.com/in/vihaa-shah-98b71128a",
  },
  {
    name: "Urvil Patel",
    role: "Tech Manager",
    image: "/team/uv.jpg",
    linkedin: "https://www.linkedin.com/in/urvil-patel-6995a0320/",
    github: "https://github.com/uvpatel",
    website: "https://urvilpatel-portfolio.netlify.app/",
  },
  {
    name: "Patel Arya",
    role: "Content Creator",
    image: "/team/Patel Arya_content creator.jpg",
    instagram: "https://www.instagram.com/Arya_p_16/",
  },
  {
    name: "Megh Patel",
    role: "Graphics Superviser",
    image: "/team/Megh Patel - Graphic Superviser.png",
    linkedin: "https://www.linkedin.com/in/meghpatel007/",
    instagram: "https://www.instagram.com/_meghpatel_007/",
    github: "https://github.com/MeghPatel-007",
  },
  {
    name: "Parv Luhar",
    role: "Event Coordinator",
    image: "/team/ParvLuhar_eventCoordinator1.jpg",
    linkedin: "https://www.linkedin.com/in/parvluhar2010/",
    instagram: "https://www.instagram.com/parv_luhar20/",
  },
  {
    name: "Jeet Vasoya",
    role: "Marketing Coordinator",
    image: "/team/Jeet Vasoya.png",
    linkedin: "https://www.linkedin.com/in/jeet-vasoya-071397323/",
    instagram: "https://www.instagram.com/j_d_vasoya_21/",
  },
  {
    name: "Dhanvi Upadhyay",
    role: "Outreach Specialist",
    image: "/team/Dhanvi.png",
    instagram: "https://www.instagram.com/dhanvi_upadhyay/",
  },
  {
    name: "Pratibha Indravath",
    role: "Social Media Manager",
    image: "/team/Pratibha Indravath__Social Media Manager.png",
    instagram: "https://www.instagram.com/pratibha_indravath/",
  }
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
            Meet Our Amazing Team
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
