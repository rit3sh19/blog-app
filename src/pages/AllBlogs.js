import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ColorTrail from '../components/ColorTrail';
import Sidebar, { SidebarItem } from '../components/Sidebar';
import {
  Home,
  PencilLine,
  BookOpen,
  PlusCircle,
  User
} from 'lucide-react';

const initialBlogs = [
  {
    id: 1,
    title: 'The Art of Clean Code',
    author: 'Ritesh M H',
    excerpt: 'Tips to write code that feels like poetry.',
    image: 'https://picsum.photos/seed/clean/600/400',
  },
  {
    id: 2,
    title: 'Design Systems 101',
    author: 'Lakshya MN',
    excerpt: 'How to build scalable design systems.',
    image: 'https://picsum.photos/seed/design/600/400',
  },
  {
    id: 3,
    title: 'Sustainable Dev Practices',
    author: 'Anjali',
    excerpt: 'Build smart, build green.',
    image: 'https://picsum.photos/seed/eco/600/400',
  },
  {
    id: 4,
    title: 'Mindset and Productivity',
    author: 'Ayan',
    excerpt: 'Sharpening the coder’s mind for peak focus.',
    image: 'https://picsum.photos/seed/focus/600/400',
  },
];

const AllBlogs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBlogs = initialBlogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex">
      {/* 🧭 Sidebar */}
      <Sidebar>
        <SidebarItem icon={<Home size={20} />} text="Home" />
        <SidebarItem icon={<BookOpen size={20} />} text="All Blogs" active />
        <SidebarItem icon={<PlusCircle size={20} />} text="New Blog" alert />
        <SidebarItem icon={<PencilLine size={20} />} text="Drafts" />
        <SidebarItem icon={<User size={20} />} text="Profile" />
      </Sidebar>

      {/* 🌈 Page Content */}
      <div className="relative flex-1 min-h-screen overflow-hidden text-white bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
        <ColorTrail />

        {/* Blurred Pulse Blobs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-500 opacity-20 rounded-full blur-3xl z-0 animate-pulse" />
        <div className="absolute -bottom-32 -right-20 w-[400px] h-[400px] bg-pink-400 opacity-25 rounded-full blur-3xl z-0 animate-pulse" />

        <div className="relative z-10 p-10">
          <h1 className="text-5xl font-bold font-dancing text-center mb-8">
            ✨ Explore Blogs
          </h1>

          {/* 🔍 Search Bar */}
          <div className="max-w-md mx-auto mb-10">
            <input
              type="text"
              placeholder="Search blogs..."
              className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* 📦 Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/30 shadow-2xl cursor-pointer group relative z-10"
              >
                <div className="overflow-hidden">
                  <motion.img
                    src={blog.image}
                    alt={blog.title}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-60 object-cover group-hover:brightness-90 transition-all duration-300"
                  />
                </div>
                <div className="p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2 group-hover:text-indigo-300 transition-all duration-200">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-gray-300 mb-1">by {blog.author}</p>
                  <p className="text-gray-200">{blog.excerpt}</p>
                </div>
              </motion.div>
            ))}
            {filteredBlogs.length === 0 && (
              <p className="text-center col-span-full text-gray-300">
                No blogs found matching “{searchTerm}”
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
