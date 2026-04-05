'use client';
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, Mail, Sparkles } from "lucide-react";

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Ultimate Guide to Char Dham Yatra 2026",
    excerpt: "Everything you need to know about preparation, routes, and spiritual significance.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    date: "Oct 12, 2025",
    readTime: "8 min",
    category: "Spiritual Guide",
  },
  {
    id: 2,
    title: "Best Time to Visit Valley of Flowers",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    date: "Sep 28, 2025",
    readTime: "5 min",
    category: "Trekking"
  },
  {
    id: 3,
    title: "10 Essential Items for Kedarnath",
       image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80",

    date: "Sep 15, 2025",
    readTime: "6 min",
    category: "Travel Tips"
  },{
    id: 4,
    title: "10 Essential Items for Kedarnath",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80",
    date: "Sep 15, 2025",
    readTime: "6 min",
    category: "Travel Tips"
  }
];

export default function Blogs() {
  const featured = BLOG_POSTS[0];
  const sidePosts = BLOG_POSTS.slice(1, 4);

  return (
    <section className="py-8 lg:py-12 px-4 md:px-6 lg:px-12 xl:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* --- COMPACT HEADER --- */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-6 h-px bg-[#d8841a]" />
            <span className="text-[#d8841a] text-[9px] font-bold uppercase tracking-widest">Travel Journals</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif italic text-[#144487]">
            Latest from Prnaam
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* --- LEFT: FEATURED POST (Spans 7 columns) --- */}
          <div className="lg:col-span-7 group">
            <Link href={`/blog/${featured.id}`}>
              <div className="relative aspect-video overflow-hidden rounded-xl mb-3 shadow-lg">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="bg-[#d8841a] px-2 py-0.5 rounded text-[9px] font-bold uppercase mb-2 inline-block">
                    {featured.category}
                  </span>
                  <h3 className="text-lg md:text-2xl font-serif leading-tight">
                    {featured.title}
                  </h3>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-snug line-clamp-2">
                {featured.excerpt}
              </p>
              <div className="mt-2 flex items-center gap-2 text-[#144487] font-bold text-xs">
                Read Guide <ArrowRight size={14} />
              </div>
            </Link>
          </div>

          {/* --- RIGHT: LIST + NEWSLETTER (Spans 5 columns) --- */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="space-y-4">
              {sidePosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} className="flex gap-4 group items-center">
                  <div className="relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden border border-slate-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-[#d8841a] text-[9px] font-bold uppercase mb-1 block">
                      {post.category}
                    </span>
                    <h4 className="text-slate-900 font-bold text-sm leading-tight group-hover:text-[#144487] transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-3 text-slate-400 text-[9px] mt-1">
                      <span className="flex items-center gap-1"><Calendar size={10} /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* COMPACT NEWSLETTER */}
            <div className="p-5 rounded-xl bg-[#fff9ed] border border-[#f0e6d2] relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Mail size={16} className="text-[#d8841a]" />
                  <h4 className="text-[#144487] font-serif italic text-lg">Yatra Updates</h4>
                </div>
                <p className="text-slate-600 text-xs mb-3">
                  Route alerts and weather updates for pilgrims.
                </p>
                <form className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="flex-1 bg-white border border-slate-200 px-3 py-2 rounded-lg text-xs outline-none focus:border-[#d8841a]"
                  />
                  <button className="bg-[#144487] text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1 hover:bg-[#0f3468]">
                    Join <Sparkles size={12} />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}