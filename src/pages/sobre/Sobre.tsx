import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

function Sobre() {

    const people = [
            {
            name: "Gabriele Cristine",
            role: "Software Engineer",
            href: "https://github.com/GabrieleeCris",
            linkedin: "https://www.linkedin.com/in/gabriele-cristine-ela-dela/",
            imageSrc:
                "https://res.cloudinary.com/salvedojuliao/image/upload/v1691699006/nutrividas/sobre/gabi_peap71.png",
            imageAlt: "Integrante do projeto",
            },
            {
            name: "Larissa Bueno",
            role: "Software Engineer",
            href: "https://github.com/Larissasbueno",
            linkedin: "https://www.linkedin.com/in/larissasbueno/",
            imageSrc:
                "https://res.cloudinary.com/salvedojuliao/image/upload/v1691699007/nutrividas/sobre/larissa_n7a9ba.png",
            imageAlt: "Integrante do projeto",
            },
        
            {
            name: "Letícia Francielle",
            role: "Software Engineer",
            href: "https://github.com/leticiafrancielle",
            linkedin: "https://www.linkedin.com/in/let%C3%ADcia-francielle/",
            imageSrc:
                "https://res.cloudinary.com/salvedojuliao/image/upload/v1691699006/nutrividas/sobre/leticia_llmk9e.png",
            imageAlt: "Integrante do projeto",
            },
            {
            name: "Júlio Cordeiro",
            role: "Software Engineer",
            href: "https://github.com/JayCesar",
            linkedin: "https://www.linkedin.com/in/jc-batista/",
            imageSrc:
                "https://res.cloudinary.com/salvedojuliao/image/upload/v1691699006/nutrividas/sobre/julio_gcwwha.png",
            imageAlt: "Integrante do projeto",
            },
            {
            name: "Mateus Ferreira",
            role: "Software Engineer",
            href: "https://github.com/mateuzu",
            linkedin: "https://www.linkedin.com/in/mateus-ferreira-a55691234/",
            imageSrc:
                "https://res.cloudinary.com/salvedojuliao/image/upload/v1691699006/nutrividas/sobre/matheus_w7rriv.png",
            imageAlt: "Integrante do projeto",
            },
            // More products...
    ];

  return (
    <>
      <div className="bg-white dark:bg-black pt-[100px] pb-[200px]">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-90 text-center mb-4 dark:text-verde_claro2">
            Sobre a equipe
          </h2>
          <h2 className="text-center text-lg dark:text-white">
            Nossa equipe é composta por desenvolvedores engajados, comprometidos
            e recém-formados na Generation Brasil! Juntos, transformamos códigos
            em soluções extraordinárias.
          </h2>
        </div>

        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-2 lg:max-w-full lg:px-20 flex justify-center">
          <div className="flex flex-col items-center md:flex-row md:flex-wrap justify-center sm:gap-x-12">
            {people.map((dev) => (
              <div>
                <div className="">
                  <a href={dev.href}>
                    <img
                      src={dev.imageSrc}
                      alt={dev.imageAlt}
                      className="cursor-pointer hover:scale-125 transition-all ease-out duration-300"
                    />
                  </a>
                </div>
                <div className="mt-10 flex justify-center mb-12">
                  <div className='flex-col justify-center items-center'>
                    <h3 className="text-xl text-center text-black font-bold dark:text-verde_claro2 mb-2 hover:text-verde_claro1 hover:dark:text-verde_claro2 transition-all duration-300 ease-in-out">
                    <a href={dev.href}>
                        <span aria-hidden="true" className="" />
                        {dev.name}
                    </a>
                    </h3>
                    <p className='text-center mt-[-10px] dark:text-white'> {dev.role} </p>
                 
                    <div className='mt-2 flex gap-x-2 justify-center'>
                      <a href={dev.href}><AiFillGithub className="dark:text-white w-8 h-8 cursor-pointer hover:text-verde_claro1 dark:hover:text-verde_claro2 transition-all duration-300 ease-in-out "/></a>
                      <a href={dev.linkedin}><AiFillLinkedin className="dark:text-white w-8 h-8 cursor-pointer hover:text-verde_claro1 dark:hover:text-verde_claro2 transition-all duration-300 ease-in-out"/></a>  
                    </div>      
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sobre;
