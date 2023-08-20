import "./Home.css";
import colheita from "../../assets/colheita.svg";
import heroImage from "../../assets/hero.svg";
import heroImage2 from "../../assets/hero2.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

function Home() {
  const { usuario } = useContext(AuthContext);
  const isAdmin = usuario.tipo == "admin";
  const isFornecedor = usuario.tipo == "fornecedor"
  const isCliente = usuario.tipo == "cliente"

  return (
    <>
      {/* Section 1 */}
      <section className="pt-20 lg:pt-10 px-6 dark:bg-black transition-all duration-300 ease-in-out">
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
            <div
              className="flex justify-center mt-8 lg:justify-start"
              id="saibaMais"
            >
              {isAdmin ? (
                <>
                  <Link
                    to="/cadastroProduto"
                    className="text-white bg-[#03A678] hover:bg-[#92D94D] dark:bg-[#92D94D] dark:text-black dark:hover:bg-white font-medium rounded-lg px-5 py-4 text-center hover:drop-shadow-md transition duration-300 ease-out"
                  >
                    {" "}
                    Cadastrar Produto{" "}
                  </Link>
                  <Link
                    to="/cadastroCategoria"
                    className="text-white ml-4 bg-[#03A678] hover:bg-[#92D94D] dark:bg-[#92D94D] dark:text-black dark:hover:bg-white font-medium rounded-lg px-5 py-4 text-center hover:drop-shadow-md transition duration-300 ease-out"
                  >
                    {" "}
                    Cadastrar Categoria{" "}
                  </Link>
                </>
              ) : isFornecedor ? (
                <>
                  <Link to="/cadastroProduto" className="text-white bg-[#03A678] hover:bg-[#92D94D] dark:bg-[#92D94D] dark:text-black dark:hover:bg-white font-medium rounded-lg px-5 py-4 text-center hover:drop-shadow-md transition duration-300 ease-out">
                    {" "}
                    Cadastre seu produto{" "}
                  </Link>
                </>

              ) : isCliente && (
                <>
                  <a href="#saibaMais">
                    <button type="button" className="text-black dark:border-2 dark:border-[#92D94D] text-font-bold dark:text-[#92D94D] hover:bg-gradient-to-bl focus:ring-4 transition focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 rounded-lg text-sm px-8 py-4 text-center mb-2 hover:drop-shadow-md transiton-all ease-out duration-200 shadow-lg shadow-black-500/40 font-medium drop-shadow-l bg-gradient-to-br from-[#fff] to-[#92D94D]  hover:bg-verde_claro1 dark:bg-none dark:hover:bg-verde_claro2 dark:hover:text-black dark:py-[14px]">Saiba mais</button>
                  </a>
                  <Link
                    to="/produtos"
                    className="rounded-lg px-5 text-center hover:drop-shadow-md "
                  >
                    <button type="button" className="text-white bg-gradient-to-br from-[#92D94D] to-[#03A678] hover:bg-gradient-to-bl focus:ring-4 transition duration-300 ease-out focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-8 py-4 text-center mr-2 mb-2">Produtos</button>
                  </Link>
                </>
              )}
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
                        lg:text-left lg:leading-tight mb-5 2xl:text-5xl dark:text-[#92D94D] "
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
              <a href="#saibaMais">
                <button type="button" className="text-white bg-gradient-to-br from-[#92D94D] to-[#03A678] hover:bg-gradient-to-bl focus:ring-4 transition duration-300 ease-out focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-8 py-4 text-center mr-2 mb-2">  Saiba mais</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section
        className="pt-20 px-6 bg-white dark:bg-black flex flex-col items-center justify-center mx-auto pb-32 "
        id="saibaMais"
      >
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
      <section>
        <div className="relative max-w-screen-xl py-20 px-4 mx-auto bg-white dark:bg-black sm:px-6 lg:px-8 py-26 lg:mt-20">
          <div className="relative">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
                <p className="text-base font-semibold leading-6 text-verde_claro2 uppercase">
                  Nossos Produtos
                </p>
                <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                  Abraçando a Natureza e a Reciclagem: Redefinindo o Cuidado Pessoal com Responsabilidade Ambiental!
                </h4>
                <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                  Nossos produtos naturais foram cuidadosamente selecionados para oferecer a você não apenas uma opção, mas um estilo de vida completo
                </p>
                <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                  <li className="mt-6 lg:mt-0">
                    <div className="flex">
                      <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                        Responsabilidade ambiental
                      </span>
                    </div>
                  </li>
                  <li className="mt-6 lg:mt-0">
                    <div className="flex">
                      <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                        Alimentos saborosos
                      </span>
                    </div>
                  </li>
                  <li className="mt-6 lg:mt-0">
                    <div className="flex">
                      <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                        Qualidade alimentar
                      </span>
                    </div>
                  </li>
                  <li className="mt-6 lg:mt-0">
                    <div className="flex">
                      <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>

                        </svg>
                      </span>
                      <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                        Culinária Consciente
                      </span>
                    </div>
                  </li>
                </ul>

                <div className="mt-10">
                  <Link
                    to="/produtos"
                    className=" "
                  >
                    <button type="button" className="text-white bg-gradient-to-br from-[#92D94D] to-[#03A678] hover:bg-gradient-to-bl focus:ring-4 transition duration-300 ease-out focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-8 py-4 text-center mr-2 mb-2"> Produtos</button>
                  </Link>
                </div>
              </div>
              <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                <div className="relative space-y-4">
                  <div className="flex items-end justify-center space-x-4 lg:justify-start">
                    <img
                      className="w-32 rounded-lg shadow-lg md:w-56"
                      width="200"
                      src="https://res.cloudinary.com/salvedojuliao/image/upload/v1691608974/nutrividas/categorias/melao_ntptfb.png"
                      alt="1"
                    />
                    <img
                      className="w-40 rounded-lg shadow-lg md:w-64"
                      width="260"
                      src="https://res.cloudinary.com/salvedojuliao/image/upload/v1691608815/nutrividas/categorias/Mexirica_zchmi8.png"
                      alt="2"
                    />
                  </div>
                  <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                    <img
                      className="w-24 rounded-lg shadow-lg md:w-40"
                      width="170"
                      src="https://res.cloudinary.com/salvedojuliao/image/upload/v1691608025/nutrividas/categorias/Laranja_yvllug.png"
                      alt="3"
                    />
                    <img
                      className="w-32 rounded-lg shadow-lg md:w-56"
                      width="200"
                      src="https://res.cloudinary.com/salvedojuliao/image/upload/v1691608025/nutrividas/categorias/Limao_b38iro.png"
                      alt="4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;
