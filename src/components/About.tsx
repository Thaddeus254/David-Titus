import React from "react";
import { Award, Users, Coffee, Palette } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: Users, label: "Happy Clients", value: "150+" },
    { icon: Coffee, label: "Projects Completed", value: "300+" },
    { icon: Palette, label: "Design Awards", value: "12" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating meaningful designs that tell stories and
            connect with audiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image & Stats */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/insert.jpg"
                  alt="David Titus Ayoo"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-800 rounded-xl flex items-center justify-center shadow-xl">
                <Palette className="w-12 h-12 text-orange-500" />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-slate-800 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Creative Vision Meets Technical Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                With over 5 years of experience in graphic design, I specialize
                in creating compelling visual identities that help brands stand
                out in today's competitive marketplace. My approach combines
                strategic thinking with creative execution to deliver designs
                that not only look beautiful but also achieve business
                objectives.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I believe great design is about solving problems and telling
                stories. Whether it's a logo that captures a brand's essence, a
                brochure that converts prospects, or a digital campaign that
                engages audiences, I bring passion and expertise to every
                project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
