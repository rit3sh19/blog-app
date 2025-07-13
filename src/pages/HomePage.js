import React from "react";
import Sidebar, { SidebarItem } from "../components/Sidebar";
import {
  Home,
  BookOpen,
  PlusCircle,
  PencilLine,
  User,
} from "lucide-react";
import ColorTrail from "../components/ColorTrail";
import { motion } from "framer-motion";

const blogPreviews = [
  {
    id: 1,
    title: "Why Clean Code Matters",
    author: "Ritesh M H",
    excerpt: "A deep dive into writing code that lasts, reads well, and reduces bugs.",
    image: "https://picsum.photos/seed/code/400/250",
  },
  {
    id: 2,
    title: "Design Systems Unleashed",
    author: "Lakshya MN",
    excerpt: "Scalable design systems explained, with real-life implementation tips.",
    image: "https://picsum.photos/seed/design2/400/250",
  },
  {
    id: 3,
    title: "Eco-Friendly App Development",
    author: "Anjali",
    excerpt: "Building sustainable apps — tips for developers to reduce carbon footprint.",
    image: "https://picsum.photos/seed/eco2/400/250",
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-black text-white relative">
      <ColorTrail />

      <Sidebar>
        <SidebarItem icon={<Home size={20} />} text="Home" active />
        <SidebarItem icon={<BookOpen size={20} />} text="All Blogs" />
        <SidebarItem icon={<PlusCircle size={20} />} text="New Blog" alert />
        <SidebarItem icon={<PencilLine size={20} />} text="Drafts" />
        <SidebarItem icon={<User size={20} />} text="Profile" />
      </Sidebar>

      <main className="flex-1 overflow-y-auto">
        {/* Hero */}
        <section
          className="relative h-[60vh] flex items-center justify-center text-center px-6 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1470&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Your Voice. Shared. Heard.
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-6">
              Write, publish, and grow with our community. Start blogging today.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 text-lg transition">
              Write Your First Blog
            </button>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-10 bg-black text-white">
          <h2 className="text-4xl font-bold text-center mb-10">
            Why Blog with Us?
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Wider Reach",
                descr:
                  "Your ideas meet an active audience that cares about your content.",
              },
              {
                title: "Clear Portfolio",
                descr:
                  "Showcase your expertise and writing to future employers or clients.",
              },
              {
                title: "Insight Stats",
                descr:
                  "Track readers, engagement and optimize your posts over time.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-8 border border-white/20 bg-white/5 shadow-md transition"
              >
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.descr}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Recent Blogs */}
        <section className="py-16 px-10 bg-gray-900">
          <h2 className="text-4xl font-bold text-center mb-10">Recent Posts</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPreviews.map((b, i) => (
              <motion.div
                key={b.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 border border-white/20 overflow-hidden"
              >
                <motion.img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
                  <p className="text-gray-400 mb-4">{b.excerpt}</p>
                  <p className="text-gray-300 text-sm">by {b.author}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-10 bg-black text-white">
          <h2 className="text-4xl font-bold text-center mb-10">What People Say</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                name: "Alex Johnson",
                quote:
                  "I doubled my readership in weeks. The writer experience is beautifully simple.",
              },
              {
                name: "Priya Singh",
                quote:
                  "Freelancers love this platform! Posts led to client assignments.",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-6 bg-white/5 border border-white/20"
              >
                <p className="text-gray-300 italic">"{t.quote}"</p>
                <p className="mt-4 font-semibold">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-10 bg-gray-800 text-white">
          <h2 className="text-4xl font-bold text-center mb-10">FAQs</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: "Is it free?",
                a: "Yes! Blogging here is absolutely free, no limits on posts.",
              },
              {
                q: "Can I delete my blog?",
                a: "Yes, you can edit or delete your posts anytime.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="bg-white/5 border border-white/20 p-4"
              >
                <summary className="cursor-pointer text-lg font-semibold">
                  {item.q}
                </summary>
                <p className="mt-2 text-gray-300">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-12 px-10 bg-gradient-to-tr from-indigo-700 to-purple-700 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Write Your First Post</h2>
          <p className="mb-6">Join thousands of writers. Inspire, educate, connect.</p>
          <button className="bg-white text-indigo-800 px-6 py-3 hover:bg-gray-100 transition">
            Start Writing
          </button>
        </section>
      </main>
    </div>
  );
}
