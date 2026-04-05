import React from 'react'
import Banner from '../components/about/Banner'
import Gallary from '../components/Gallary'
import TripTales from '../components/TripTales'
import Team from '../components/about/Team'

function page() {
  return (
    <div>
      <Banner/>
      <Team/>
      <Gallary/>
      <TripTales/>
    </div>
  )
}

export default page


// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import { motion } from "framer-motion";
//   const clients = [
//     { name: "The Mad House", logo: "/logo/bs.png" },
//     { name: "Born16", logo: "/logo/dailyhunt.png" },
//     { name: "Nourish Mantra", logo: "/logo/dainikjagran.png" },
//     { name: "Neemli Naturals", logo: "/logo/ddnews.png" },
//     { name: "Secret Alchemist", logo: "/logo/msme.png" },
//     { name: "Ayuvya", logo: "/logo/tripadvisor.png" },
//     { name: "Softbird", logo: "/logo/trustpilot.png" },
//     { name: "Ellement Co", logo: "/logo/uktourism.png" },
//     { name: "Decathlon", logo: "/logo/decathlon.webp" },
//   ];

//   // We only need two sets for a continuous line
//   const duplicatedClients = [...clients, ...clients];

// const index = () => {
//     return (
//         <>
          

            

//             <main className="">
//                      <section className="relative h-[300px] md:h-[300px] xl:h-[300px] overflow-hidden">
//          {/* Background Image - Blurred Ocean View (Placeholder) */}
//          <div
//            className="absolute inset-0 bg-cover bg-center"
//            style={{
//              backgroundImage: "url('/about2.webp')",
//            }}
//          />
   
        

//        </section>

//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//                     <section className="space-y-6">
//                         <p className="text-gray-700">We welcome you to Prnaam Travels. We are a team of passionate individuals who love exploring the world and creating unforgettable experiences for our clients. We work with you to understand your needs and create personalized itineraries that meet your specific desires. From adventurous journeys in remote parts of the globe to relaxing beach getaways, we have it all. Our travel designers and local guides will ensure you get an unforgettable travel experience. Join us to discover the world through a whole new perspective!</p>
//                         <ul className="list-disc pl-5 space-y-2 text-gray-700">
//                             <li><strong>Expert Knowledge:</strong> Our travel agents have extensive knowledge of destinations across the globe, allowing them to provide you with the best travel advice.</li>
//                             <li><strong>Personalized Itineraries:</strong> We work with you to understand your specific needs and create a personalized itinerary that is just right for you.</li>
//                             <li><strong>Competitive Pricing:</strong> We offer competitive prices on all our travel packages, making it affordable for everyone to travel.</li>
//                             <li><strong>Excellent Service:</strong> We pride ourselves on providing excellent customer service, ensuring that our clients are happy with every aspect of their travel experience.</li>
//                             <li><strong>Reliability:</strong> We are a reliable and trustworthy company that is dedicated to providing our clients with the best possible travel experience.</li>
//                         </ul>
//                     </section>

//                     <section className="mt-16 border-t border-gray-200 pt-16">
//                         <h2 className="text-2xl md:text-3xl mb-6 leading-tight text-slate-900">Travel Services • Company Brands</h2>
//                         <div className="flex space-x-12">
//                             <div className="flex-1 space-y-4">
//                                 <div className="flex"><span className="w-1/3 font-medium">Brands:</span><span className="flex-1">Prnaam Travels, <span className="text-blue-600">Travel Vidya</span></span></div>
//                                 <div className="flex"><span className="w-1/3 font-medium">Founded:</span><span className="flex-1">January 2021</span></div>
//                                 <div className="flex"><span className="w-1/3 font-medium">Headquarters:</span><span className="flex-1">New Delhi</span></div>
//                                 <div className="flex"><span className="w-1/3 font-medium">Registration:</span><span className="flex-1">CIN: 198273763266</span></div>
//                                 <div className="flex"><span className="w-1/3 font-medium">Specialization:</span><span className="flex-1">Luxury Holidays, Family Tours</span></div>
//                                 <div className="flex"><span className="w-1/3 font-medium">Primary Focus:</span><span className="flex-1">Tour Operation, Visa, Flight, Forex</span></div>
//                                 <div className="flex"><span className="w-1/3 font-medium">Address:</span><span className="flex-1">H-120, Sector 2, New Delhi</span></div>
//                                 <div className="flex"><span className="w-1/3 font-medium">Email:</span><span className="flex-1 text-blue-600">contact@prnaamtravels.com</span></div>
//                                 <div className="flex"><span className="w-1/3 font-medium">Phone:</span><span className="flex-1">1800-419-7221 / +91-8882103432</span></div>
//                                 <div className="flex"><span className="w-1/3 font-medium">Website:</span><span className="flex-1 text-blue-600">www.prnaamtravels.com</span></div>
//                             </div>
//                             <div className="flex-none flex flex-col space-y-4">
//                                 <img src="/uttrakhand.webp" alt="Travel Vidya" className="w-40 h-auto"/>
//                                 <img src="/uttrakhand.webp" alt="Travel Vidya" className="w-40 h-auto"/>
//                             </div>
//                         </div>
//                     </section>

//                   <section className="py-8 lg:py-12 overflow-hidden">
//       <div className="text-center mb-12">
//           <div className="flex items-center justify-center gap-2 mb-3">
//             <span className="w-8 h-px bg-[#d8841a]" />
//             <span className="text-[#d8841a] text-xs  uppercase tracking-widest">As Seen On</span>
//             <span className="w-8 h-px bg-[#d8841a]" />
//           </div>
//         <h2 className="text-2xl md:text-3xl mb-6 leading-tight text-slate-900">
//   Featured In News
// </h2>

// {/* <p className="text-slate-600 text-sm md:text-base mx-auto mb-8">
//   Explore breathtaking glimpses of your spiritual journey. From sacred temples to scenic Himalayan views, let Prnaam Travels plan your perfect yatra—simply share your details and we’ll take care of the rest.
// </p> */}
//         </div>
//       <div 
//         className="relative flex items-center"
//         style={{
//           maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
//           WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
//         }}
//       >
//         <motion.div 
//           className="flex whitespace-nowrap"
//           animate={{
//             x: ["0%", "-50%"], // Move by half (since we duplicated the list)
//           }}
//           transition={{
//             duration: 15,
//             ease: "linear",
//             repeat: Infinity,
//           }}
//         >
//           {duplicatedClients.map((client, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-center px-4 md:px-12 shrink-0"
//             >
//               <Image
//                 src={client.logo}
//                 alt={client.name}
//                 width={140}
//                 height={60}
//                 className="object-contain h-[25px] lg:h-[45px] w-auto transition-all duration-300"
//               />
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>

//                     <section className="mt-16 border-t border-gray-200 pt-16">
//                         <h2 className="text-2xl md:text-3xl mb-6 leading-tight text-slate-900">Customer Reviews & Feedback</h2>
//                         <p className="text-gray-700 mb-8">We are committed to providing the best travel experience to our clients. See what our happy travelers have to say about their experiences with us.</p>


//                         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
//                             <img src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80" alt="Gallery 1" className="w-full h-auto object-cover rounded"/>
//                             <img src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80" alt="Gallery 2" className="w-full h-auto object-cover rounded"/>
//                             <img src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80" alt="Gallery 3" className="w-full h-auto object-cover rounded"/>
//                             <img src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80" alt="Gallery 4" className="w-full h-auto object-cover rounded"/>
//                             <img src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80" alt="Gallery 5" className="w-full h-auto object-cover rounded"/>
//                         </div>

//                         <div className="grid md:grid-cols-3 gap-8">
//                             {[
//                                 { name: "Ananya Sharma", image: "/Mana.webp", review: "Great trip to Rajasthan with Prnaam Travels. Very good service!"},
//                                 { name: "Vikram Singh", image: "/Mana.webp", review: "Perfect beach holiday in Kerala. Excellent itinerary. Highly recommended."},
//                                 { name: "Rahul Singh", image: "/Mana.webp", review: "Kashmir was amazing. Thanks for making it a reality."}
//                             ].map((reviewer) => (
//                                 <div key={reviewer.name} className="flex space-x-4 items-center">
//                                     <img src={reviewer.image} alt={reviewer.name} className="w-16 h-16 rounded-full"/>
//                                     <div>
//                                         <h4 className="font-semibold">{reviewer.name}</h4>
//                                         <p className="text-gray-600 text-sm">Prnaam Travels arranged our first tour and the entire process was efficient and delightful.</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </section>

//                     <section className="mt-16 border-t border-gray-200 pt-16">
//                         <h2 className="text-2xl md:text-3xl mb-6 leading-tight text-slate-900">Why Thousands Trust Prnaam Travels?</h2>
//                         <ul className="grid md:grid-cols-2 gap-x-12 gap-y-6 list-disc pl-5 text-gray-700">
//                             <li><strong>Proven Track Record:</strong> We have a history of successful and enjoyable trips.</li>
//                             <li><strong>Seamless Experience:</strong> We handle all details, from flights and accommodations to local tours.</li>
//                             <li><strong>Expert Itineraries:</strong> Our travel agents are experienced in creating efficient itineraries.</li>
//                             <li><strong>Dedicated Support:</strong> We offer dedicated 24/7 customer support to assist you at all times.</li>
//                             <li><strong>Unmatched Value:</strong> We offer great value for money on all our tours and services.</li>
//                             <li><strong>Secure & Safe:</strong> Your safety is our priority.</li>
//                             <li><strong>Transparency:</strong> Transparent pricing and booking processes.</li>
//                             <li><strong>Customer Satisfaction:</strong> Our primary focus is customer satisfaction, which shows in our high customer satisfaction rate.</li>
//                         </ul>
//                     </section>

//                     <section className="mt-16 border-t border-gray-200 pt-16">
//                         <h2 className="text-2xl md:text-3xl mb-6 leading-tight text-slate-900">Meet Your Travel Expert</h2>
//                         <p className="text-gray-700 mb-12">Learn more about our core team of passionate travel enthusiasts. Each one brings unique insights and expertise to ensure your trips are exceptional.</p>
                        
//                         <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12">
//                             <div className="flex-1 flex flex-col items-center">
//                                 <img src="/uttrakhand.webp" alt="Abhinay Gupta" className="w-32 h-32 rounded-full mb-6"/>
//                                 <h3 className="text-xl ">Abhinay Gupta</h3>
//                                 <p className="text-gray-600">Expert in Global Tours & Group Travel</p>
//                                 <p className="text-gray-700 text-center mt-4">Abhinay is an expert in global tours and group travel. He has a wealth of experience in arranging complex itineraries and group bookings.</p>
//                             </div>
//                             <div className="flex-1 flex flex-col items-center">
//                                 <img src="/uttrakhand.webp" alt="Himalaya Upadhyay" className="w-32 h-32 rounded-full mb-6"/>
//                                 <h3 className="text-xl ">Himalaya Upadhyay</h3>
//                                 <p className="text-gray-600">Travel Itinerary Expert</p>
//                                 <p className="text-gray-700 text-center mt-4">Himalaya is a specialist in creating unique and personalized travel itineraries that are tailored to your interests.</p>
//                             </div>
//                             <div className="flex-1 flex flex-col items-center">
//                                 <img src="/uttrakhand.webp" alt="Piyush Singh" className="w-32 h-32 rounded-full mb-6"/>
//                                 <h3 className="text-xl ">Piyush Singh</h3>
//                                 <p className="text-gray-600">Operations & Logistics Expert</p>
//                                 <p className="text-gray-700 text-center mt-4">Piyush is a specialist in travel logistics and handles all aspects of your trip, ensuring everything goes smoothly.</p>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </main>

            
//         </>
//     );
// };

// export default index;

// 'use client';
// import React from 'react';
// import { Clock, CheckCircle2, UserCheck, Phone, Mail } from 'lucide-react';
// import Blogs from '../components/Blogs';
// import About from '../components/About'
// import TripTales from '../components/TripTales';
// const AboutPage = () => {
//   return (
//     <div className="flex flex-col w-full bg-white text-gray-900">
      
//       {/* 1. HERO SECTION */}
//       <section className="relative h-[300px] md:h-[400px] xl:h-[500px] overflow-hidden">
//         {/* Background Image - Blurred Ocean View (Placeholder) */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: "url('/about2.webp')",
//           }}
//         />
   
        

//       </section>

//       {/* 2. CORE PURPOSE SECTION (We Are Very Trusted...) */}
//       <section className="py-16 md:py-24 px-4 md:px-12 lg:px-20 bg-white">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
//           {/* Left: Text Content */}
//           <div className="md:col-span-7 space-y-6">
//             <h3 className="text-2xl md:text-4xl font-serif italic leading-tight drop-shadow-lg">
//               We Are Very Trusted Tour And Travel Agency, Standing Up For You All
//             </h3>
//             <div className="flex flex-wrap gap-x-8 gap-y-4 pt-2">
//               {[
//                 { label: 'Affordable Prices', icon: <CheckCircle2 className="w-5 h-5" /> },
//                 { label: 'Prioritize Comfort', icon: <UserCheck className="w-5 h-5" /> },
//               ].map((item, i) => (
//                 <div key={i} className="flex items-center gap-2.5 text-[#144487] font-semibold text-sm">
//                   <div className="text-[#d8841a]">{item.icon}</div>
//                   <span className="uppercase tracking-wide">{item.label}</span>
//                 </div>
//               ))}
//             </div>
//             <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl">
//                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.

//             </p>
//           </div>
          
//           {/* Right: Feature Image & Bullet List */}
//           <div className="md:col-span-5 space-y-8">
//             <ul className="space-y-4 border-l-2 border-slate-100 pl-6 text-slate-500 text-xs md:text-sm font-medium tracking-wide">
//               {['Professional', 'Trusted Company', 'Friendly To Customer'].map(item => (
//                 <li key={item}>{item}</li>
//               ))}
//             </ul>
//             <div className="rounded-2xl overflow-hidden shadow-2xl">
//               <img
//                 src="/Mana.webp"
//                 alt="Charming lakeside cabins"
//                 className="w-full h-[300px] md:h-[350px] object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 3. VALUE PROPOSITION SECTION (Teal Triplets) */}
//       <section className="bg-[#4c6282d2] grid md:grid-cols-12 overflow-hidden my-10">
        
//         {/* Gazebo Feature */}
//         <div className="md:col-span-3 h-[300px] md:h-full relative">
//           <img
//             src="/uttrakhand.webp"
//             alt="Gazebo over tropical waters"
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//         </div>

//         {/* Triple Feature Cards */}
//         {[
//           { title: 'Tours Guide', icon: <Clock /> },
//           { title: 'Safety Safe', icon: <CheckCircle2 /> },
//           { title: 'Clear Price', icon: <Clock /> }
//         ].map((item, i) => (
//           <div key={i} className={`md:col-span-3 p-10 flex flex-col items-center text-center gap-5 ${i === 1 ? 'bg-[#395581b1]' : i === 2 ? 'bg-[#1f406fdc]' : ''}`}>
//             <div className="p-4 rounded-full bg-white/10 text-white shadow-inner">
//               {item.icon}
//             </div>
//             <h4 className="text-xl  text-white tracking-wide">{item.title}</h4>
//             <p className="text-white/80 text-xs md:text-sm leading-relaxed max-w-sm">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//             </p>
//           </div>
//         ))}
//       </section>

//     <Blogs/>
// <About/>
// <TripTales/>
//     </div>
//   );
// };

// export default AboutPage;
