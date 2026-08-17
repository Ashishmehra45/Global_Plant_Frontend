import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Target,
  Eye,
  ShieldCheck,
  Clock,
  Users,
  Globe,
  TrendingUp,
  Leaf,
  ChevronRight,
  CheckCircle2,
  Briefcase,
  UserCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const values = [
    {
      icon: ShieldCheck,
      title: "Integrity",
      desc: "We agree pricing, quality and lead times before a contract is signed, and we do not revise terms afterward to protect a margin. That discipline is what a trade relationship is built on.",
      color: "from-emerald-50 to-teal-50",
      iconColor: "text-teal-600",
    },
    {
      icon: Clock,
      title: "Reliability",
      desc: "We treat every contract as a commitment, not an estimate. When conditions change, we say so early — consistent grading and dependable lead times matter more to us than winning an order on price alone.",
      color: "from-amber-50 to-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: Users,
      title: "Partnership",
      desc: "Every relationship in our network — farmer, processor, logistics partner, buyer — is a long-term investment, not a series of unconnected transactions.",
      color: "from-blue-50 to-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      icon: Globe,
      title: "Global Outlook",
      desc: "We are built to trade with the world, not with any one region. Growth into new markets and new categories follows the same discipline as our first shipment.",
      color: "from-rose-50 to-pink-50",
      iconColor: "text-pink-600",
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      desc: "Supplier development, execution capability and market intelligence are ongoing investments for us, not a one-time setup cost.",
      color: "from-purple-50 to-fuchsia-50",
      iconColor: "text-fuchsia-600",
    },
  ];

  const leadershipTeam = [
    {
      name: "Ravi K. Tiwari",
      role: "Strategic Advisor, Trade & Investment",
      bio: "Advises on international market entry and trade strategy. Brings over 15 years of experience advising governments and companies, including ProMéxico India and Government of Ontario. CEO of MIBC and IM Global.",
      img: "/leadership/ravi_sir_img-Picsart-AiImageEnhancer.png",
      isComplete: true,
    },
    {
      name: "Krishan Pratap Singh Rajput",
      role: "Founder & Director",
      bio: "Leads the company's sourcing, supplier onboarding and export operations, with a focus on building a compliance-first trading house from the ground up.",
      img: "/public/leadership/krishan.jpg",
      isComplete: true,
    },

    {
      name: "Nilesh Agrawal",
      role: "Leadership Team",
      bio: "Detailed professional background and role specifics are currently being updated.",
      img:  "/public/leadership/harsh_Agrawal-.jpg",
      isComplete: false,
    },
    {
      name: "Harsh Agrawal",
      role: "Leadership Team",
      bio: "Detailed professional background and role specifics are currently being updated.",
      img: "/public/leadership/harsh_Agrawal-.jpg",
      isComplete: false,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#f8fafc] font-sans selection:bg-green-500 selection:text-white overflow-hidden"
    >
      {/* 1. Cinematic Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden  rounded-b-[3rem] mx-2 sm:mx-4 mt-4 shadow-2xl z-10">
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/1200x/9e/72/ae/9e72ae0d39b00ec28d4d9d137752c29f.jpg')",
            y: yBg,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90 z-10" />

        <motion.div
          style={{ opacity }}
          className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center pt-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 1.2 }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-white mb-8 border border-white/20 shadow-lg"
          >
           
            <span className="text-xs font-bold tracking-[0.2em] uppercase">
              About Our Company
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white font-heading mb-6 tracking-tight leading-tight"
          >
            Trade Earns Trust <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
              Through Execution.
            </span>
          </motion.h1>
        </motion.div>
      </section>

      {/* 2. Introduction Section (Text & Image Split) */}
      <section className="py-24 bg-transparent relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="w-16 h-1.5 bg-green-500 rounded-full mb-8"></div>
              <h2 className="text-4xl font-black text-gray-900 font-heading tracking-tight">
                Global Planet Products Export
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Global Planet Products Export Private Limited is an Indore-based
                export house connecting India's farming and processing base with
                international buyers of spices, rice, soy products, oilseeds and
                pulses.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                We work directly with farmers and processing units, and treat
                every relationship — supplier or buyer — as one we intend to
                keep for years, not a single transaction.
              </p>
              <div className="bg-green-50 p-6 rounded-2xl border border-green-100 mt-8">
                <p className="text-green-900 font-bold text-lg leading-relaxed italic">
                  "Trade earns trust through execution: the right product, at
                  the grade agreed, delivered on the timeline promised. That is
                  the standard we hold ourselves to on every consignment, from
                  the first one."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[5/5] rounded-[2rem] overflow-hidden shadow-2xl group"
            >
              <img
                src="https://i.pinimg.com/1200x/06/59/09/065909271e627bbfe05b71d8ae75b877.jpg"
                alt="Agricultural Processing"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 flex items-center gap-4">
                <div className="bg-green-500 p-3 rounded-full">
                  <CheckCircle2 className="text-white w-6 h-6" />
                </div>
                <span className="text-white font-bold text-xl tracking-wide">
                  Direct Sourcing
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision (Light Pastel Theme) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 font-heading tracking-tight">
              Our <span className="text-[#00b884]">Purpose</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card (Mint Green Theme like 'Integrity') */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#effaf5] p-10 lg:p-14 rounded-[2.5rem] hover:shadow-lg transition-all duration-500 hover:-translate-y-2 group"
            >
              {/* White Icon Box */}
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <Target className="text-[#059669] w-8 h-8" />
              </div>

              <h3 className="text-3xl font-black text-gray-900 font-heading mb-6 tracking-tight">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                To connect India's agricultural base with international markets
                through direct sourcing, consistent grading and reliable
                execution.
              </p>
            </motion.div>

            {/* Vision Card (Soft Peach/Orange Theme like 'Reliability') */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#fff8ee] p-10 lg:p-14 rounded-[2.5rem] hover:shadow-lg transition-all duration-500 hover:-translate-y-2 group"
            >
              {/* White Icon Box */}
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <Eye className="text-[#ea580c] w-8 h-8" />
              </div>

              <h3 className="text-3xl font-black text-gray-900 font-heading mb-6 tracking-tight">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                To build a globally recognised Indian export house for spices,
                rice, oilseeds and soy products — known for consistency as much
                as for scale.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h4 className="text-green-600 font-bold tracking-[0.2em] uppercase mb-4 text-sm">
              The Foundation
            </h4>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 font-heading tracking-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">
                Values
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`bg-gradient-to-br ${val.color} p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group ${
                  idx === 3 ? "lg:col-span-2" : ""
                } ${idx === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="bg-white p-4 rounded-2xl w-fit mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <val.icon className={`w-8 h-8 ${val.iconColor}`} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 font-heading">
                  {val.title}
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. LEADERSHIP TEAM (2 Top, 3 Bottom Layout) */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-16"
          >
            <h4 className="text-green-600 font-bold tracking-[0.2em] uppercase mb-4 text-sm bg-green-100 px-4 py-1.5 rounded-full">
              The Core Team
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 font-heading tracking-tight">
              Our Leadership
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            // CHANGED: Yahan grid-cols-6 hata kar direct grid-cols-2 kar diya hai for perfect 2x2 layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {leadershipTeam.map((member, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                // CHANGED: col-span wala complex logic hata diya, ab har card naturally 1 column lega
                className={`relative group bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full ${
                  !member.isComplete
                    ? "bg-gray-50/80 border-dashed border-gray-200"
                    : ""
                }`}
              >
                {/* 3D Float Effect on Hover */}
                <motion.div
                  className="flex-grow flex flex-col items-center text-center"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative mb-6">
                    {member.img ? (
                      <div className="w-46 h-46 rounded-full overflow-hidden border-4 border-green-50 shadow-lg group-hover:border-green-100 transition-colors">
                        <img
                          src={member.img}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-gray-200/50 flex items-center justify-center border-4 border-gray-100">
                        <UserCircle2 className="w-16 h-16 text-gray-400" />
                      </div>
                    )}
                    {/* Tiny Role Badge */}
                    <div className="absolute -bottom-2 -right-2 bg-gray-900 text-white p-2 rounded-full shadow-lg">
                      <Briefcase size={16} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 font-heading tracking-tight mb-2 group-hover:text-green-700 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-bold text-sm tracking-wide uppercase mb-4">
                    {member.role}
                  </p>

                  <div
                    className={`mt-auto pt-2 border-t w-full ${
                      member.isComplete
                        ? "border-gray-100"
                        : "border-gray-200 "
                    }`}
                  >
                    <p
                      className={`text-base leading-relaxed ${
                        member.isComplete
                          ? "text-gray-600 font-medium"
                          : "text-gray-600 "
                      }`}
                    >
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Sustainability Briefing */}
      <section className="py-24 bg-[#f6f6f6] relative overflow-hidden rounded-t-[3rem] mx-2 sm:mx-4 ">
        {/* Dark theme for sustainability to make it pop at the end */}?
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
            className="bg-white/10 backdrop-blur-md w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl border border-white/20"
          >
            <Leaf className="text-green-400 w-12 h-12" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-black font-heading mb-6 tracking-tight"
          >
            Sustainability, in Brief
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl text-black leading-relaxed max-w-3xl mx-auto mb-10 font-light"
          >
            Responsible sourcing and long-term relationships with the farmers
            and processors we work with sit at the centre of how we operate.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              to="/sustainability"
              className="inline-flex items-center gap-3 bg-green-500 text-gray-950 px-10 py-4 rounded-full font-bold hover:bg-green-400 transition-all duration-300 shadow-[0_0_30px_-5px_rgba(34,197,94,0.4)] group hover:-translate-y-1"
            >
              Read more on Sustainability
              <ChevronRight className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
