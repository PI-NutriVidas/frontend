// import { AiFillGithub } from 'react-icons/Ai'
// import { AiFillLinkedin } from 'react-icons/Ai'


// function Sobre() {
//   const people = [
//     {
//       name: "Gabriele Cristine",
//       href: "https://github.com/GabrieleeCris", 
//       imageSrc:
//         "https://res.cloudinary.com/salvedojuliao/image/upload/v1691699006/nutrividas/sobre/gabi_peap71.png",
//       imageAlt: "Integrante do projeto",
  
//     },
//     {
//       name: "Larissa Bueno", 
//       href: "#",
//       imageSrc:
//         "https://res.cloudinary.com/salvedojuliao/image/upload/v1691699007/nutrividas/sobre/larissa_n7a9ba.png",
//       imageAlt: "Integrante do projeto",
   
//     },

//     {
//       name: "Letícia Francielle",
//       href: "#",
//       imageSrc:
//         "https://res.cloudinary.com/salvedojuliao/image/upload/v1691699006/nutrividas/sobre/leticia_llmk9e.png",
//       imageAlt: "Integrante do projeto",
//     },
//     {
//       name: "Júlio Cordeiro",
//       href: "https://github.com/JayCesar",
//       imageSrc:
//         "https://res.cloudinary.com/salvedojuliao/image/upload/v1691699006/nutrividas/sobre/julio_gcwwha.png",
//       imageAlt: "Integrante do projeto",
    
//     },
//     {
//       name: "Matheus Ferreira", 
//       href: "https://github.com/JayCesar",
//       imageSrc:
//         "https://res.cloudinary.com/salvedojuliao/image/upload/v1691699006/nutrividas/sobre/matheus_w7rriv.png",
//       imageAlt: "Integrante do projeto",
  
//     },
//     // More products...
//   ];

//   return (
//     <>
//       <div className="bg-white dark:bg-black pb-40">
//         <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 mt-4">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-90 text-center mb-4 dark:text-verde_claro2">
//             Sobre a equipe
//           </h2>
//           <h2 className="text-center text-lg dark:text-white">
//             Nossa equipe é composta por desenvolvedores engajados, comprometidos
//             e recém-formados na Generation Brasil! Juntos, transformamos códigos
//             em soluções extraordinárias.
//           </h2>
//         </div>

//         <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-2 lg:max-w-full lg:px-20 flex justify-center">
//           <div className="flex flex-col items-center md:flex-row md:flex-wrap justify-center sm:gap-x-12">
//             {people.map((dev) => (
//               <div>
//                 <div className="">
//                   <a href={dev.href}>
//                     <img
//                       src={dev.imageSrc}
//                       alt={dev.imageAlt}
//                       className="cursor-pointer"
//                     />
//                   </a>
//                 </div>
//                 <div className="mt-4 flex justify-center mb-12">
//                   <div className='flex-col justify-center'>
//                     <h3 className="text-md text-center text-black font-bold dark:text-verde_claro2 mb-2">
//                       <a href={dev.href}>
//                         <span aria-hidden="true" className="inset-0" />
//                         {dev.name}
//                       </a>
//                     </h3>
//                     <div className='flex gap-x-2 justify-center'>
//                       <AiFillGithub className="dark:text-white"/>
//                       <AiFillLinkedin className="dark:text-white"/>
//                     </div>
//                   </div>
//                 </div>
                
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Sobre;
