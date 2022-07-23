// import React from "react";
// import SectionTitle from "../global/SectionTitle";
// import Link from "next/link";
// import { allPosts } from 'contentlayer/generated';

// function Posts({allPosts}) {
//   return (
//     <div className="pb-10">
//       <SectionTitle title="Recent Posts" />
//       <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center divide-y-2 md:divide-y-0 md:divide-x-2 divide-fun-pink-dark">
//         {allPosts.map((item, index) => {
//           return (
//             <div key={index} className="h-full">
//               <div className="text-left p-8 h-full w-full flex flex-col justify-between">
//                 <div className="mb-6">
//                   <Link href={`/blog/${item.url}`}>
//                     <h3 className="text-2xl mb-2 font-bold">{item.title}</h3>
//                   </Link>
//                   <p className="text-fun-gray text-base font-thin italic">{item.description}</p>
//                 </div>
//                 <div className="flex flex-col items-start space-y-4">
//                   <p className="font-monospace text-xs font-bold text-fun-pink flex-shrink-0">
//                     {`{ ${new Date(item.date).getMonth() + 1}.${new Date(
//                       item.date
//                     ).getDate()}.${new Date(item.date).getFullYear()} }`}
//                   </p>
//                   <div className="flex flex-wrap items-center gap-2">
//                     {item.tags.split(", ").map((tag) => {
//                       return (
//                         <span
//                           key={index}
//                           className="bg-fun-pink-dark text-sm py-1 px-3 rounded-lg text-fun-pink"
//                         >
//                           #{tag}
//                         </span>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <Link href="/blog">
//         <div className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darker hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
//           View More
//         </div>
//       </Link>
//     </div>
//   );
// }

// export default Posts;
