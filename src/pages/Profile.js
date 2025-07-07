import React from 'react';
import Sidebar, { SidebarItem } from '../components/Sidebar';
import {
  Home,
  BookOpen,
  PlusCircle,
  PencilLine,
  User,
} from 'lucide-react';

const Profile = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-sans">
      {/* Sidebar */}
      <Sidebar>
        <SidebarItem icon={<Home size={20} />} text="Home" />
        <SidebarItem icon={<BookOpen size={20} />} text="All Blogs" />
        <SidebarItem icon={<PlusCircle size={20} />} text="New Blog" />
        <SidebarItem icon={<PencilLine size={20} />} text="Drafts" />
        <SidebarItem icon={<User size={20} />} text="Profile" active />
      </Sidebar>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        {/* Profile Header */}
        <div className="text-center mb-12">
          <img
            src="https://i.pravatar.cc/300?img=5"
            alt="Profile"
            className="w-44 h-44 mx-auto rounded-full object-cover border-4 border-indigo-500 shadow-xl"
          />
          <h1 className="text-5xl font-dancing font-bold mt-4">Ritesh M H</h1>
          <p className="text-gray-400 mt-2 text-lg">Blog Author • Full Stack Dev • Dreamer</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-6 auto-rows-[200px] gap-6">
          {/* About Me */}
          <div className="col-span-3 row-span-2 bg-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-xl">
            <h2 className="text-2xl font-semibold mb-3">👨‍💻 About Me</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.

            </p>
          </div>

          {/* Skills */}
          <div className="col-span-2 row-span-1 bg-white/10 rounded-3xl p-6 shadow-xl">
            <h2 className="text-xl font-semibold mb-2">⚒️ Skills</h2>
            <ul className="text-sm text-gray-300 list-disc ml-4">
              <li>React, Tailwind CSS</li>
              <li>Java, Python, C</li>
              <li>MongoDB, Firebase</li>
            </ul>
          </div>

          {/* Fun Fact */}
          <div className="col-span-1 row-span-1 bg-white/10 rounded-3xl p-6 shadow-xl">
            <h2 className="text-xl font-semibold mb-2">😄 Fun Fact</h2>
            <p className="text-sm text-gray-300">I’ve debugged in my dreams... and found the bug.</p>
          </div>

          {/* Projects */}
          <div className="col-span-2 row-span-2 bg-white/10 rounded-3xl p-6 shadow-xl">
            <h2 className="text-xl font-semibold mb-2">🛠️ Projects</h2>
            <ul className="text-sm text-gray-300 list-disc ml-4">
              <li>Smart Event Booking</li>
              <li>Zenzone (Mental Health App)</li>
              <li>Train Tracker (Real-time)</li>
            </ul>
          </div>

          {/* Goals */}
          <div className="col-span-2 row-span-1 bg-white/10 rounded-3xl p-6 shadow-xl">
            <h2 className="text-xl font-semibold mb-2">🎯 2025 Goals</h2>
            <p className="text-sm text-gray-300">
              Build a developer blog from scratch. Contribute to open-source. Launch a SaaS tool.
            </p>
          </div>

          {/* Contact */}
          <div className="col-span-2 row-span-1 bg-white/10 rounded-3xl p-6 shadow-xl">
            <h2 className="text-xl font-semibold mb-2">📬 Contact</h2>
            <p className="text-sm text-gray-300">riteshm.dev@example.com</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
