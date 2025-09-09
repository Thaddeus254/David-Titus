import React from "react";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

const Gallery = () => {
  const projects = [
    { id: 1, title: "Staff Name Tags", image: "/Portfolio/11.jpg" },
    { id: 2, title: "Drop Banner", image: "/Portfolio/12.jpg" },
    { id: 3, title: "Mugs Printing", image: "/Portfolio/13.jpg" },
    { id: 4, title: "Staff Diaries", image: "/Portfolio/14.jpg" },
    { id: 5, title: "Caps Embroidery", image: "/Portfolio/15.jpg" },
    { id: 6, title: "Reflectors Branding", image: "/Portfolio/16.jpg" },
    { id: 7, title: "Stamps", image: "/Portfolio/17.jpg" },
    { id: 8, title: "Sign-Posts", image: "/Portfolio/19.jpg" },
    { id: 9, title: "Tear Drop Banners", image: "/Portfolio/20.jpg" },
    { id: 10, title: "Flask", image: "/Portfolio/flask/1.jpg" },
    { id: 11, title: "Branded Notebooks", image: "/Portfolio/flask/2.jpg" },
    { id: 12, title: "Branded Pens", image: "/Portfolio/flask/3.jpg" },
    { id: 13, title: "Branded Calendars", image: "/Portfolio/flask/4.jpg" },
    { id: 14, title: "Branded Bags", image: "/Portfolio/flask/5.jpg" },
    { id: 15, title: "Branded Bottles", image: "/Portfolio/flask/6.jpg" },
    { id: 16, title: "Branded Umbrellas", image: "/Portfolio/8.jpg" },
    { id: 17, title: "Branded Keychains", image: "/Portfolio/21.jpg" },
    { id: 18, title: "Branded USB Drives", image: "/Portfolio/22.jpg" },
    { id: 19, title: "Event Backdrops", image: "/Portfolio/23.jpg" },
    { id: 20, title: "Roll-Up Stands", image: "/Portfolio/24.jpg" },
    { id: 21, title: "Brochures", image: "/Portfolio/25.jpg" },
    { id: 22, title: "Flyers", image: "/Portfolio/26.jpg" },
    { id: 23, title: "Business Cards", image: "/Portfolio/27.jpg" },
    { id: 24, title: "Calendars", image: "/Portfolio/28.jpg" },
    { id: 25, title: "Letterheads", image: "/Portfolio/29.jpg" },
    { id: 26, title: "Wedding Invitations", image: "/Portfolio/30.jpg" },
    { id: 27, title: "Funeral Programs", image: "/Portfolio/31.jpg" },
    { id: 28, title: "School Diaries", image: "/Portfolio/32.jpg" },
    { id: 29, title: "Corporate Profiles", image: "/Portfolio/33.jpg" },
    { id: 30, title: "Menus", image: "/Portfolio/34.jpg" },
    { id: 31, title: "Branded T-Shirts", image: "/Portfolio/35.jpg" },
    { id: 32, title: "Branded Hoodies", image: "/Portfolio/36.jpg" },
    { id: 33, title: "Branded Jackets", image: "/Portfolio/37.jpg" },
    { id: 34, title: "Branded Tote Bags", image: "/Portfolio/38.jpg" },
    { id: 35, title: "Branded Notebooks", image: "/Portfolio/39.jpg" },
    { id: 36, title: "PVC Banners", image: "/Portfolio/40.jpg" },
    { id: 37, title: "Vehicle Branding", image: "/Portfolio/41.jpg" },
    { id: 38, title: "Wall Murals", image: "/Portfolio/42.jpg" },
    { id: 39, title: "Office Branding", image: "/Portfolio/43.jpg" },
    { id: 40, title: "Reception Signage", image: "/Portfolio/44.jpg" },
    { id: 41, title: "Custom Labels", image: "/Portfolio/45.jpg" },
    { id: 42, title: "Thermal Rolls", image: "/Portfolio/46.jpg" },
    { id: 43, title: "Parking Tickets", image: "/Portfolio/47.jpg" },
    { id: 44, title: "Gift Vouchers", image: "/Portfolio/48.jpg" },
    { id: 45, title: "Certificates", image: "/Portfolio/49.jpg" },
    { id: 46, title: "Event Tickets", image: "/Portfolio/50.jpg" },
    { id: 47, title: "Branded Pens", image: "/Portfolio/51.jpg" },
    { id: 48, title: "Keyholders", image: "/Portfolio/52.jpg" },
    { id: 49, title: "Lanyards", image: "/Portfolio/53.jpg" },
    { id: 50, title: "ID Cards", image: "/Portfolio/54.jpg" },
    { id: 51, title: "Staff Uniforms", image: "/Portfolio/55.jpg" },
    { id: 52, title: "Corporate Gifts", image: "/Portfolio/56.jpg" },
    { id: 53, title: "Wall Clocks", image: "/Portfolio/57.jpg" },
    { id: 54, title: "Desk Pads", image: "/Portfolio/58.jpg" },
    { id: 55, title: "Mouse Pads", image: "/Portfolio/59.jpg" },
    { id: 56, title: "Laptop Sleeves", image: "/Portfolio/60.jpg" },
    { id: 57, title: "Car Stickers", image: "/Portfolio/61.jpg" },
    { id: 58, title: "Fridge Magnets", image: "/Portfolio/62.jpg" },
    { id: 59, title: "Branded Water Bottles", image: "/Portfolio/63.jpg" },
    { id: 60, title: "Umbrellas", image: "/Portfolio/64.jpg" },
    { id: 61, title: "Trophies", image: "/Portfolio/65.jpg" },
    { id: 62, title: "Medals", image: "/Portfolio/66.jpg" },
    { id: 63, title: "Name Plates", image: "/Portfolio/67.jpg" },
    { id: 64, title: "Desk Name Tags", image: "/Portfolio/68.jpg" },
    { id: 65, title: "Safety Signs", image: "/Portfolio/69.jpg" },
    { id: 66, title: "Warning Stickers", image: "/Portfolio/70.jpg" },
    { id: 67, title: "Directional Signs", image: "/Portfolio/71.jpg" },

  ];



  const whatsappNumber = "254769480189";

  const handleQuickQuote = (title: string) => {
    const message = encodeURIComponent(
      `Hi David! I'm interested in getting a quote for: ${title}\n\nCould you share pricing and options?`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Gallery
            </h1>
            <p className="text-lg text-gray-300">
              Explore our work and request a quick quote instantly
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 flex justify-center">
                    <button
                      onClick={() => handleQuickQuote(project.title)}
                      className="px-6 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-all flex items-center gap-2"
                    >
                      <MessageSquare size={18} />
                      Get Quick Quote
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Gallery;
