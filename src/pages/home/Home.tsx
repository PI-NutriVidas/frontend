// import homeLogo from '../../assets/nutri.png'
import "./Home.css";
import colheita from "../../assets/colheita.svg";
// import Sobre from "../../pages/sobre/Sobre";
import heroImage from "../../assets/hero.svg";
import heroImage2 from "../../assets/hero2.svg";
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from 'react'


function Home() {
  const { usuario } = useContext(AuthContext)
  const isAdmin = usuario.tipo == 'admin'

  useEffect(() => {
    const element = document.querySelector('#sobre');

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const people = [
    {
      name: "Gabriele Cristine",
      href: "https://github.com/GabrieleeCris",
      linkedin: "https://www.linkedin.com/in/gabriele-cristine-ela-dela/",
      imageSrc:
        "https://res.cloudinary.com/salvedojuliao/image/upload/v1691699006/nutrividas/sobre/gabi_peap71.png",
      imageAlt: "Integrante do projeto",
    },
    {
      name: "Larissa Bueno",
      href: "https://github.com/Larissasbueno",
      linkedin: "https://www.linkedin.com/in/larissasbueno/",
      imageSrc:
        "https://res.cloudinary.com/salvedojuliao/image/upload/v1691699007/nutrividas/sobre/larissa_n7a9ba.png",
      imageAlt: "Integrante do projeto",
    },

    {
      name: "Letícia Francielle",
      href: "https://github.com/leticiafrancielle",
      linkedin: "https://www.linkedin.com/in/let%C3%ADcia-francielle/",
      imageSrc:
        "https://res.cloudinary.com/salvedojuliao/image/upload/v1691699006/nutrividas/sobre/leticia_llmk9e.png",
      imageAlt: "Integrante do projeto",
    },
    {
      name: "Júlio Cordeiro",
      href: "https://github.com/JayCesar",
      linkedin: "https://www.linkedin.com/in/jc-batista/",
      imageSrc:
        "https://res.cloudinary.com/salvedojuliao/image/upload/v1691699006/nutrividas/sobre/julio_gcwwha.png",
      imageAlt: "Integrante do projeto",
    },
    {
      name: "Mateus Ferreira",
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
      {/* Section 1 */}
      <section className="pt-20 px-6 dark:bg-black transition-all duration-300 ease-in-out">
        <div
          className="container flex flex-wrap-reverse items-center justify-center mx-auto gap-y-10 md:gax-y-0
                mt-10 md:flex-row lg:py-36"
        >
          <div className="mb-14 lg:mb-0">
            <h1
              className="max-w-xl text-[2.9rem] leading-none text-black font-extrabold font-sans text-center lg:text-5xl
                        lg:text-left lg:leading-tight mb-5 2xl:text-5xl dark:text-[#92D94D]"
            >
              Vida Saudável e Equilíbrio
            </h1>
            <p className="max-w-xl text-center text-black lg:text-left lg:max-w-md dark:text-white">
              Explore produtos naturais, descubra a beleza da natureza em suas
              mãos. Oferecemos variedade para promover um estilo de vida
              saudável. Viva em sintonia com a natureza e sinta a diferença em
              sua jornada de bem-estar.
            </p>
            <div className="flex justify-center mt-14 lg:justify-start">
            {isAdmin ?
                <>
                  <Link to='/cadastroProduto' className="text-white ml-4 bg-[#03A678] hover:bg-[#92D94D] dark:bg-[#92D94D] dark:text-black dark:hover:bg-white font-medium rounded-lg px-5 py-4 text-center hover:drop-shadow-md transition duration-300 ease-out"> Cadastrar Produto </Link>
                  <Link to='/cadastroCategoria' className="text-white ml-4 bg-[#03A678] hover:bg-[#92D94D] dark:bg-[#92D94D] dark:text-black dark:hover:bg-white font-medium rounded-lg px-5 py-4 text-center hover:drop-shadow-md transition duration-300 ease-out"> Cadastrar Categoria </Link>
                </>
                :
                <>
                  <a href="#saibaMais">
                    <button className="text-white bg-[#02735E] hover:bg-[#03A678] hover:text-white dark:bg-black dark:border-[0.5px] dark:border-[#92D94D] dark:text-[#92D94D] dark:hover:bg-[#92D94D] dark:hover:text-black text-font-bold rounded-lg px-5 py-4 text-center hover:drop-shadow-md transiton-all ease-out duration-200 shadow-lg shadow-black-500/5 font-medium ">
                      Saiba mais
                    </button>
                  </a>
                  <Link to='/produtos' className="text-white ml-4 bg-[#03A678] hover:bg-[#92D94D] dark:bg-[#92D94D] dark:text-black dark:hover:bg-white font-medium rounded-lg px-5 py-4 text-center hover:drop-shadow-md transition duration-300 ease-out"> Produtos </Link>
                </>
              }
            </div>
          </div>
          <div className="drop-shadow-md">
            <img src={heroImage} alt="heroImage" className="ml-auto" />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="pt-20 px-6 bg-[#02735E] dark:bg-[#014040] transition-all duration-300 ease-in-out">
        <div
          className="container flex flex-wrap items-center justify-center mx-auto gap-y-10 md:gax-y-0
                mt-10 md:flex-row lg:py-36"
        >
          <div className="drop-shadow-md">
            <img src={heroImage2} alt="heroImage" className="ml-auto" />
          </div>
          <div className="mb-40 lg:mb-0 lg:ml-20">
            <h1
              className="max-w-xl text-[2.9rem] leading-none text-white font-extrabold font-sans text-center lg:text-5xl
                        lg:text-left lg:leading-tight mb-5 2xl:text-5xl dark:text-[#92D94D]"
            >
              O que é a NutriVidas?
            </h1>
            <p className="max-w-xl text-center text-white lg:text-left lg:max-w-md dark:text-white mt-6 lg:mt-8">
              NutriVidas é uma plataforma dedicada a vender alimentos cultivados
              com baixo ou nenhum uso de agrotóxicos, visando promover uma
              alimentação mais saudável e sustentável. A preocupação com a
              qualidade dos alimentos e a redução do impacto ambiental são os
              principais pilares da plataforma.
            </p>
            <div className="flex justify-center mt-6 lg:mt-12 lg:justify-start">
              <button className="text-white bg-[#014040] hover:bg-[#03A678] hover:text-white dark:bg-[#92D94D] dark:text-black dark:hover:bg-white dark:hover:text-black text-font-bold rounded-lg px-5 py-4 text-center hover:drop-shadow-md transiton-all ease-out duration-200 shadow-lg shadow-black-500/5 font-medium ">
                Saiba mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="pt-20 px-6 bg-white dark:bg-black flex flex-col items-center justify-center mx-auto pb-32" id="saibaMais">
        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            <img src={colheita} alt="heroImage" className="w-80" />
          </div>
          <div className="flex justify-center mt-4 text-lg">
            <p className="max-w-xl text-center text-black md:max-w-6xl tex-black dark:text-white">
              {" "}
              No mundo, 892,7 milhões de pessoas (11,3% da população) estavam em
              situação de insegurança alimentar grave entre 2020 e 2022. Ao
              todo, em situação de insegurança alimentar moderada ou grave são
              29,5% da população mundial, totalizando 2,3 bilhões de pessoas.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-verde_escuro py-40">
        <div className="container mx-auto px-10 lg:px-20">
          <div className="lg:max-w-2xl lg:flex lg:flex-col lg:items-center">
            <div className="flex gap-x-2 items-center justify-center mb-2">
              <svg
                className="w-10 h-10 text-verde_claro2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z"></path>
              </svg>
              <h2 className="text-white text-[2.9rem]">Missão</h2>
            </div>
            <p className="text-white text-center leading-20">
              Buscamos tornar alimentos saudáveis acessíveis a todos. Nosso
              objetivo é garantir segurança alimentar para pessoas de baixa
              renda e grande vulnerabilidade. Alinhada ao ODS 2 (Fome Zero e
              Agricultura Sustentável), nossa plataforma promove produtos com
              baixos níveis de agrotóxicos, incentivando o apoio a pequenos
              agricultores e organizações locais. Para garantir justiça, parte
              da receita do e-commerce apoia ONGs dedicadas à erradicação da
              fome.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-10 lg:px-20 mt-20 flex justify-end">
          <div className="lg:max-w-2xl lg:flex-row-reverse lg:items-en lg:col-end">
            <div className="flex gap-x-2 items-center justify-center mb-2">
              <svg
                className="w-10 h-10 text-verde_claro2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 19V.352A3.451 3.451 0 0 0 7.5 0a3.5 3.5 0 0 0-3.261 2.238A3.5 3.5 0 0 0 2.04 6.015a3.518 3.518 0 0 0-.766 1.128c-.042.1-.064.209-.1.313a3.34 3.34 0 0 0-.106.344 3.463 3.463 0 0 0 .02 1.468A4.016 4.016 0 0 0 .3 10.5l-.015.036a3.861 3.861 0 0 0-.216.779A3.968 3.968 0 0 0 0 12a4.032 4.032 0 0 0 .107.889 4 4 0 0 0 .2.659c.006.014.015.027.021.041a3.85 3.85 0 0 0 .417.727c.105.146.219.284.342.415.072.076.148.146.225.216.1.091.205.179.315.26.11.081.2.14.308.2.02.013.039.028.059.04v.053a3.506 3.506 0 0 0 3.03 3.469 3.426 3.426 0 0 0 4.154.577A.972.972 0 0 1 9 19Zm10.934-7.68a3.956 3.956 0 0 0-.215-.779l-.017-.038a4.016 4.016 0 0 0-.79-1.235 3.417 3.417 0 0 0 .017-1.468 3.387 3.387 0 0 0-.1-.333c-.034-.108-.057-.22-.1-.324a3.517 3.517 0 0 0-.766-1.128 3.5 3.5 0 0 0-2.202-3.777A3.5 3.5 0 0 0 12.5 0a3.451 3.451 0 0 0-1.5.352V19a.972.972 0 0 1-.184.546 3.426 3.426 0 0 0 4.154-.577A3.506 3.506 0 0 0 18 15.5v-.049c.02-.012.039-.027.059-.04.106-.064.208-.13.308-.2s.214-.169.315-.26c.077-.07.153-.14.225-.216a4.007 4.007 0 0 0 .459-.588c.115-.176.215-.361.3-.554.006-.014.015-.027.021-.041.087-.213.156-.434.205-.659.013-.057.024-.115.035-.173.046-.237.07-.478.073-.72a3.948 3.948 0 0 0-.066-.68Z"></path>
              </svg>
              <h2 className="text-white text-[2.9rem]">Visão</h2>
            </div>
            <p className="text-white text-center leading-20">
              Na NutriVidas, priorizamos a alimentação saudável e plena,
              garantindo acesso à alimentação de qualidade. Acreditamos que a
              nutrição é fundamental para um futuro vibrante e estamos dedicados
              a criar um impacto positivo duradouro, promovendo escolhas
              alimentares conscientes e informadas.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-10 lg:px-20 mt-20">
          <div className="lg:max-w-2xl lg:flex lg:flex-col lg:items-center mb-2">
            <div className="flex gap-x-2 items-center justify-center">
              <svg
                className="w-10 h-10 text-verde_claro2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 21 21"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
                ></path>
              </svg>
              <h2 className="text-white text-[2.9rem]">Valores</h2>
            </div>
            <p className="text-white text-center leading-20">
              Nossos princípios unem: Acesso Universal a Alimentos saudáveis,
              educação nutricional consciente, sustentabilidade agrícola e apoio
              a pequenos produtores. Solidariedade e equidade impulsionam nosso
              compromisso com comunidades vulneráveis. Inovação responsável e
              transparência sustentam nossa busca por um impacto positivo,
              moldando um futuro saudável e sustentável para todos.
            </p>
          </div>
        </div>
      </section>

      {/* Sobre 4 */}
      <div className="bg-white dark:bg-black pb-40" id="sobre">
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
                      className="cursor-pointer"
                    />
                  </a>
                </div>
                <div className="mt-4 flex justify-center mb-12">
                  <div className='flex-col justify-center'>
                    <h3 className="text-xl text-center text-black font-bold dark:text-verde_claro2 mb-2">
                      <a href={dev.href}>
                        <span aria-hidden="true" className="inset-" />
                        {dev.name}
                      </a>
                    </h3>
                    <div className='flex gap-x-2 justify-center'>
                      <a href={dev.href}><AiFillGithub className="dark:text-white w-8 h-8 cursor-pointer"/></a>
                      <a href={dev.linkedin}><AiFillLinkedin className="dark:text-white w-8 h-8 cursor-pointer"/></a>  
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

export default Home;
