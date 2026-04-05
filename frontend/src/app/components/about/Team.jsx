import React from 'react';

const teamMembers = [
  {
    name: 'Arjun Kapoor',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    bio: 'Visionary leader with 15+ years of experience in Himalayan expeditions.'
  },
  {
    name: 'Meera Singh',
    role: 'Co-Founder & COO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    bio: 'Expert in operational excellence and luxury travel logistics.'
  },
  {
    name: 'Sana Khan',
    role: 'Lead Travel Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    bio: 'Crafting unique, soul-stirring journeys across the globe.'
  },
  {
    name: 'David Lee',
    role: 'Luxury Travel Specialist',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    bio: 'Focused on high-end comfort and exclusive destination access.'
  }
];

function Team() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-12 xl:px-24 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#d8841a]" />
            <span className="text-[#d8841a] text-xs font-bold uppercase tracking-widest">
              The People Behind
            </span>
            <span className="w-8 h-px bg-[#d8841a]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif italic mb-4 text-slate-900">
            Meet Our Passionate Team
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
            Our experts have explored every corner of the world to ensure your 
            journey is nothing short of extraordinary.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              {/* Image Container */}
              <div className="relative overflow-hidden mb-4 rounded-lg aspect-[4/5]">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Text Content */}
              <div className="text-center">
                <h3 className="text-xl font-serif italic text-slate-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-[#d8841a] text-xs font-bold uppercase tracking-widest mb-3">
                  {member.role}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed px-2">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Team;