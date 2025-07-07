// src/pages/NewBlog.js

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Sidebar, { SidebarItem } from '../components/Sidebar';
import {
  Home,
  BookOpen,
  PlusCircle,
  PencilLine,
} from 'lucide-react';

const NewBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePublish = () => {
    console.log('Publishing...');
    console.log('Title:', title);
    console.log('Content:', content);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image', 'code-block'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'link', 'image', 'code-block',
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar>
        <SidebarItem icon={<Home size={20} />} text="Home" />
        <SidebarItem icon={<BookOpen size={20} />} text="All Blogs" />
        <SidebarItem icon={<PlusCircle size={20} />} text="New Blog" active />
        <SidebarItem icon={<PencilLine size={20} />} text="Drafts" />
      </Sidebar>

      {/* Main Content */}
      <div
        className="flex-1 overflow-y-auto bg-cover bg-center flex items-center justify-center p-6"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1470&q=80')`,
        }}
      >
        <div className="backdrop-blur-md bg-white/70 dark:bg-white/10 w-full max-w-4xl rounded-2xl p-8 shadow-2xl border border-white/30">
          <h1 className="text-6xl font-bold font-dancing text-gray-800 dark:text-white mb-6 text-center">
            📝 Create New Blog
          </h1>

          {/* Title Input */}
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mb-5 p-4 text-xl rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />

          {/* React Quill Editor */}
          <ReactQuill
            value={content}
            onChange={setContent}
            modules={modules}
            formats={formats}
            placeholder="Start writing here..."
            className="rounded-xl mb-6 dark:bg-gray-800 dark:text-white"
          />

          {/* Publish Button */}
          <div className="flex justify-end">
            <button
              onClick={handlePublish}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow transition-all"
            >
              🚀 Publish Blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBlog;
