import React, { useState, useEffect } from 'react';
import emailjs from "emailjs-com";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Smartphone,
  Palette,
  Menu,
  X,
  Send,
  Briefcase,
  GraduationCap,
  Cpu,
  Globe,
  Phone,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- UPDATED DATA WITH DETAILED DESCRIPTIONS ---
const USER_DATA = {
  name: "INBASURYA B",
  firstName: "INBA",
  lastName: "SURYA",
  title: "AI & ML Specialist | Full-Stack Web Developer",
  shortBio: "I am a highly motivated B.Tech student in Computer Science and Engineering with a deep focus on Artificial Intelligence and Machine Learning. My expertise lies in bridging the gap between intelligent data-driven models and robust full-stack web architectures. I am passionate about building scalable digital solutions that prioritize user integrity and solve complex real-world problems through innovative coding and algorithmic efficiency.",
  email: "inbasurya32@gmail.com",
  phone: "+91 9360681545",
  socials: {
    github: "https://github.com/Inbasurya",
    linkedin: "https://www.linkedin.com/in/inba-surya-lin1545/",
    leetcode: "#",
  },
  education: [
    {
      year: "2022 - 2026",
      degree: "B.Tech in CS & Engineering (AI)",
      institution: "Dr. M.G.R. Educational & Research Institute",
      desc: "Currently pursuing a specialized degree in Artificial Intelligence and Machine Learning with a strong academic standing of 7.5 CGPA. My coursework includes advanced studies in Data Structures, Object-Oriented Programming, and Database Management Systems. I am actively involved in research-oriented projects that explore the practical applications of neural networks and predictive analytics within modern software environments."
    }
  ],
  experience: [
    {
      year: "July 2025 - Aug 2025",
      role: "AI & ML Intern",
      company: "Gateway Software Solutions",
      desc: "During this intensive internship, I focused on data preprocessing and exploratory data analysis (EDA) using professional tools like Pandas and Matplotlib. I built and evaluated several machine learning models, including Linear and Logistic Regression, achieving an impressive classification accuracy of 85%. This role allowed me to translate complex theoretical AI concepts into practical business solutions, significantly enhancing operational efficiency and data-driven decision-making."
    }
  ],
  skills: [
    { name: "Python & ML", category: "AI Core" },
    { name: "JavaScript/ES6", category: "Frontend" },
    { name: "Flask & Node.js", category: "Backend" },
    { name: "SQL & Databases", category: "Data" },
    { name: "UI/UX Design", category: "Design" },
    { name: "IoT Integration", category: "Systems" }
  ],
  projects: [
    {
      id: 1,
      title: "Healthcare CRM Scheduler",
      category: "Full-Stack Web",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
      desc: "Designed and implemented a secure healthcare platform using Flask and SQL for streamlined medical record management. I integrated the Twilio API to handle automated SMS reminders, which effectively reduced missed patient appointments by 30%. The system features a robust role-based access control for patients and doctors, successfully cutting down manual scheduling time by nearly 40% while ensuring data privacy."
    },
    {
      id: 2,
      title: "IoT Smart Agriculture",
      category: "IoT + Cloud",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=800",
      desc: "Developed an intelligent monitoring system using Arduino and ESP8266 sensors to track soil moisture and air humidity in real-time. I leveraged the Blynk IoT platform for cloud-based data visualization, allowing farmers to monitor crop health remotely via smartphone alerts. This automated irrigation approach successfully reduced water consumption by 20% while significantly improving crop yield through precise environmental control."
    }
  ]
};

// --- COMPONENTS ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#050505]/95 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-black text-white tracking-tighter"><span className="text-[#00D1FF]">I</span>NBA.</a>
        <div className="hidden md:flex gap-10 items-center">
          {['Home', 'About', 'Expertise', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-bold text-gray-500 hover:text-[#00D1FF] uppercase tracking-[0.2em] transition-all">{item}</a>
          ))}
          <a href="#contact" className="bg-[#00D1FF] text-[#050505] px-6 py-2 rounded-lg font-black text-[10px] tracking-widest hover:bg-white transition-all shadow-lg shadow-[#00D1FF]/20">HIRE ME</a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="min-h-screen pt-32 pb-20 flex flex-col justify-center items-center text-center relative overflow-visible bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00D1FF]/10 via-transparent to-transparent">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="z-10"
    >
      <span className="text-[#00D1FF] font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Technologist & Innovator</span>
      <h1 className="text-[clamp(3.5rem,8vw,9rem)] leading-[1.05]  font-black text-white mb-8 pb-2 tracking-tighter max-w-full overflow-visible">

        INBA<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] to-[#00A3FF]">SURYA</span>
      </h1>

      <div className="flex justify-center gap-6 mb-12">
        {[
          { icon: <Github size={24} />, label: 'Github', href: USER_DATA.socials.github },
          { icon: <Linkedin size={24} />, label: 'LinkedIn', href: USER_DATA.socials.linkedin },
          { icon: <Mail size={24} />, label: 'Email', href: `mailto:${USER_DATA.email}` }
        ].map((social, idx) => (
          <a key={idx} href={social.href} className="flex flex-col items-center group">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-[#00D1FF] group-hover:text-black group-hover:shadow-[0_0_20px_#00D1FF] transition-all duration-300">
              {social.icon}
            </div>
            <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest mt-3 group-hover:text-[#00D1FF] transition-colors">{social.label}</span>
          </a>
        ))}
      </div>

      <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-12 font-medium">
        {USER_DATA.shortBio}
      </p>

      <a href="#projects" className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#00D1FF] transition-all transform hover:-translate-y-1">
        Explore Projects <ChevronRight size={16} />
      </a>
    </motion.div>
  </section>
);

const About = () => (
  <section id="about" className="py-24  bg-[#080808]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="relative z-10 w-full aspect-[4/5] rounded-[40px] overflow-hidden border-8 border-white/5 bg-[#111] shadow-2xl">
            <div className="absolute inset-0 bg-[#00D1FF]/5 flex items-center justify-center text-gray-800">
              <Briefcase size={100} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-10 left-10">
              <h3 className="text-3xl font-black text-white leading-none mb-2 tracking-tighter">AI ENGINEER &<br /><span className="text-[#00D1FF]">DEVELOPER</span></h3>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-[9px]">Based in Chennai, Tamil Nadu</p>
            </div>
          </div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#00D1FF]/20 rounded-full blur-3xl pointer-events-none" />
        </motion.div>

        <div>
          <span className="text-[#00D1FF] font-bold tracking-widest uppercase text-[9px] mb-4 block">Professional Background</span>
          <h2 className="text-5xl font-black text-white mb-12 tracking-tight">RESUME &<br />MILESTONES</h2>

          <div className="space-y-8">
            <div className="relative border-l-2 border-white/10 pl-8 space-y-12">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#00D1FF] shadow-[0_0_15px_#00D1FF]" />
                <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4">Work Experience</h4>
                {USER_DATA.experience.map((exp, idx) => (
                  <div key={idx} className="bg-white/5 p-8 rounded-[24px] border border-white/5 hover:border-[#00D1FF]/30 transition-all">
                    <div className="flex justify-between items-center mb-4">
                      <h5 className="text-xl font-black text-white">{exp.role}</h5>
                      <span className="text-[9px] font-black text-[#00D1FF] bg-[#00D1FF]/10 px-3 py-1 rounded-full uppercase">{exp.year}</span>
                    </div>
                    <p className="text-gray-500 font-bold text-xs mb-4 uppercase tracking-wider">{exp.company}</p>
                    <p className="text-gray-400 leading-relaxed text-sm font-medium">{exp.desc}</p>
                  </div>
                ))}
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-white/20 border-2 border-[#00D1FF]" />
                <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4">Education</h4>
                {USER_DATA.education.map((edu, idx) => (
                  <div key={idx} className="bg-white/5 p-8 rounded-[24px] border border-white/5 hover:border-[#00D1FF]/30 transition-all">
                    <div className="flex justify-between items-center mb-4">
                      <h5 className="text-xl font-black text-white">{edu.degree}</h5>
                      <span className="text-[9px] font-black text-gray-500 bg-white/5 px-3 py-1 rounded-full uppercase">{edu.year}</span>
                    </div>
                    <p className="text-gray-500 font-bold text-xs mb-4 uppercase tracking-wider">{edu.institution}</p>
                    <p className="text-gray-400 leading-relaxed text-sm font-medium">{edu.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Expertise = () => (
  <section id="expertise" className="py-24  bg-[#050505]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <span className="text-[#00D1FF] font-bold tracking-widest uppercase text-[9px] mb-4 block">Skill Stack</span>
        <h2 className="text-5xl font-black text-white tracking-tight">TECHNICAL EXPERTISE</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {USER_DATA.skills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5, borderColor: 'rgba(0, 209, 255, 0.3)' }}
            className="bg-[#111] p-10 rounded-[35px] border border-white/5 text-center group transition-all duration-300"
          >
            <div className="text-[#00D1FF] mb-4 flex justify-center opacity-50 group-hover:opacity-100 transition-opacity">
              <Cpu size={32} />
            </div>
            <span className="text-gray-500 font-bold text-[9px] uppercase tracking-widest block mb-2">{skill.category}</span>
            <h3 className="text-xl font-black text-white">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-24  bg-[#080808]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div>
          <span className="text-[#00D1FF] font-bold tracking-widest uppercase text-[9px] mb-4 block">Case Studies</span>
          <h2 className="text-5xl font-black text-white tracking-tight">FEATURED PROJECTS</h2>
        </div>
        <a href="#" className="text-white font-black text-[10px] uppercase tracking-[0.2em] hover:text-[#00D1FF] transition-all flex items-center gap-2 border-b border-white/10 pb-2">
          View Repository <ExternalLink size={12} />
        </a>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {USER_DATA.projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative h-[450px] overflow-hidden rounded-[35px] mb-8 bg-[#111] border border-white/5">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent p-12 flex flex-col justify-end">
                <span className="text-[#00D1FF] font-bold text-[9px] uppercase tracking-widest mb-4">{project.category}</span>
                <h3 className="text-3xl font-black text-white mb-4 tracking-tighter">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium mb-6">
                  {project.desc}
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Inbasurya/CRM-HOSPITAL"  // <-- YOUR PROJECT LINK
                    target="_blank"         // opens in new tab
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-black hover:bg-[#00D1FF] transition-all"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "portfolio_service",
      "template_o45id24",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString()
      },
      "uICL2cvobLvXtSnfT"
    );
  };

  return (
    <section id="contact" className="py-24  bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-[6vw] leading-none font-black text-white mb-10 tracking-tighter">
              LET'S BUILD <br /><span className="text-[#00D1FF]">TOMORROW.</span>
            </h2>
            <p className="text-gray-500 text-lg mb-16 font-medium max-w-sm">
              Available for AI/ML opportunities and full-stack development collaborations.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${USER_DATA.email}`} className="flex items-center gap-6 group w-fit">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-[#00D1FF] group-hover:shadow-[0_0_20px_#00D1FF] transition-all">
                  <Mail size={24} />
                </div>
                <span className="text-white text-xl font-black">{USER_DATA.email}</span>
              </a>
              <a href={`tel:${USER_DATA.phone}`} className="flex items-center gap-6 group w-fit">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-[#00D1FF] group-hover:shadow-[0_0_20px_#00D1FF] transition-all">
                  <Phone size={24} />
                </div>
                <span className="text-white text-xl font-black">{USER_DATA.phone}</span>
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-[#0a0a0a] p-12 rounded-[40px] border border-white/5 shadow-3xl"
          >

            <div className="space-y-8">
              {['Name', 'Email'].map((field) => (
                <div key={field} className="space-y-2">
                  <label className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">{field}</label>
                  <input
  type={field === 'Email' ? 'email' : 'text'}
  name={field === 'Email' ? 'email' : 'name'}
  value={field === 'Email' ? formData.email : formData.name}
  onChange={handleChange}
  className="w-full bg-transparent border-b border-white/10 py-3 text-white text-lg font-bold focus:border-[#00D1FF] focus:outline-none transition-all"
  placeholder={`Your ${field}`}
/>

                </div>
              ))}
              <div className="space-y-2">
                <label className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Message</label>
               <textarea
  rows="2"
  name="message"
  value={formData.message}
  onChange={handleChange}
  className="w-full bg-transparent border-b border-white/10 py-3 text-white text-lg font-bold focus:border-[#00D1FF] focus:outline-none transition-all resize-none"
  placeholder="Tell me about your vision"
/>

              </div>
              <button className="w-full bg-[#00D1FF] text-[#050505] py-5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-[#00D1FF]/10">
                SEND
              </button>
            </div>
          </form>
        </div>

        <div className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="text-lg font-black text-white tracking-tighter">INBA<span className="text-[#00D1FF]">SURYA.</span></span>
          <div className="flex gap-10">
            <a href={USER_DATA.socials.linkedin} className="text-gray-600 hover:text-white transition-all"><Linkedin size={20} /></a>
            <a href={USER_DATA.socials.github} className="text-gray-600 hover:text-white transition-all"><Github size={20} /></a>
          </div>
          <p className="text-gray-700 text-[9px] font-bold uppercase tracking-widest">© 2025 AI Dev Portfolio</p>
        </div>
      </div>
    </section>
  );
};


export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen w-screen overflow-x-hidden text-white font-sans selection:bg-[#00D1FF] selection:text-[#050505]">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Contact />
    </div>
  );
}