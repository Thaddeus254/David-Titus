import React from "react";
import {
  Award,
  Users,
  Coffee,
  Palette,
  Download,
  CheckCircle,
} from "lucide-react";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";

const AboutPage = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: Users, label: "Happy Clients", value: "150+" },
    { icon: Coffee, label: "Projects Completed", value: "300+" },
    { icon: Palette, label: "Design Awards", value: "12" },
  ];

  const skills = [
    { name: "Brand Identity", level: 95 },
    { name: "Print Design", level: 90 },
    { name: "Digital Design", level: 88 },
    { name: "UI/UX Design", level: 85 },
    { name: "Illustration", level: 92 },
    { name: "Photography", level: 80 },
  ];

  const achievements = [
    "Adobe Certified Expert in Creative Suite",
    "Winner of Kisumu Central Sub-COunty Design Awards 2023",
    "Featured in Design Magazine Africa",
    "Speaker at Kisumu Design Conference",
    "Mentor at Creative Youth Program",
  ];

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About David
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Passionate graphic designer with a mission to create meaningful
                visual experiences
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Left Column - Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-6">
                    Creative Vision Meets Technical Excellence
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    With over 5 years of experience in graphic design, I
                    specialize in creating compelling visual identities that
                    help brands stand out in today's competitive marketplace. My
                    approach combines strategic thinking with creative execution
                    to deliver designs that not only look beautiful but also
                    achieve business objectives.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    I believe great design is about solving problems and telling
                    stories. Whether it's a logo that captures a brand's
                    essence, a brochure that converts prospects, or a digital
                    campaign that engages audiences, I bring passion and
                    expertise to every project.
                  </p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
                    <a
                      href="https://drive.google.com/file/d/1JSi90kKulQIvp79EyNWSDhRZX7duup4L/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Download size={20} />
                      Download Resume
                    </a>
                  </button>
                </div>
              </motion.div>

              {/* Right Column - Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-2xl overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="David Titus Ayoo"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-800 rounded-xl flex items-center justify-center shadow-xl">
                  <Palette className="w-12 h-12 text-orange-500" />
                </div>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-slate-800 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills & Achievements */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-8">
                  Skills & Expertise
                </h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-slate-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1.5,
                            delay: 1.2 + index * 0.1,
                            ease: "easeOut",
                          }}
                          className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-8">
                  Achievements & Recognition
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                      className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    >
                      <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
