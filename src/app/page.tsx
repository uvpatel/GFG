import Footer from "@/app/components/Footer"
import { Navbar } from "@/app/components/Navbar";
// import Hero from "@/app/components/Hero"
import MemberCard from "@/app/components/Team";
import Event from "@/app/components/Event";
import About from "./components/About";
import Contact from "./components/Contact";
export default function Home() {
  const members = [
    {
      name: "John Doe",
      role: "President",
      description:
        "Passionate about building strong coding communities and leading innovative projects.",
      image: "/images/john.jpg",
      linkedin: "https://linkedin.com/in/john",
      instagram: "https://instagram.com/john",
      github: "https://github.com/john",
    },
    {
      name: "Jane Smith",
      role: "Vice President",
      description:
        "Focused on AI, ML, and empowering students with coding culture.",
      linkedin: "https://linkedin.com/in/jane",
      instagram: "https://instagram.com/jane",
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
