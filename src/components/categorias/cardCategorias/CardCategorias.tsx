letícia
leeh_s
Ausente

letícia — 03/07/2023 13:55
olá pessoal, estava analisando nossos códigos e percebi que está faltado algumas coisas
@everyone
Júlio César — 03/07/2023 14:03
certo
estao em prlnaria?
letícia — 03/07/2023 14:03
não
o yuri vai começar chamar os grupos as 15
somos o 2º grupo
depois só voltamos para plenária às 16:30
Gabriele Cristine(ela/she) — 03/07/2023 14:05
Estou aqui realizando o teste ainda.
entra aqui no voz.
Mateus Ferreira — 03/07/2023 14:11
estou terminando de almoçar e já entro pessoal
Júlio César — 03/08/2023 15:21
Para usar o Tailwin Components:
npm install tailwindcss@latest
npm install @headlessui/react @heroicons/react
https://tailwindui.com/documentation#react-installing-dependencies
Documentation
Beautiful UI components and templates by the creators of Tailwind CSS.
Documentation
Júlio César — 09/08/2023 14:31
Cores para o tailwind config:

extend: {
      colors: {
        azul_escuro: '#01233F',
        verde_escuro: '#014040',
        verde_neutro: '#02735E',
        verde_claro1: '#03A678',
        verde_claro2: '#92D94D',
      },
    },
É a nossa paleta de cores
Gabriele Cristine(ela/she) — Ontem às 16:13
https://github.com/GabrieleeCris/ExclusivoParaTeste

Neste repositório tem todas as minhas bagunças; 

Adm usuário e não usuario
https://github.com/GabrieleeCris/ExclusivoParaTeste/blob/main/src/components/categorias/cardCategorias/CardCategorias.tsx

Código carrinho de compras:
https://github.com/GabrieleeCris/ExclusivoParaTeste/blob/main/src/contexts/AuthContext.tsx


Minha parte do código do PI:
https://github.com/GabrieleeCris/ExclusivoParaTeste/blob/main/src/pages/home/Home.tsx
GitHub
GitHub - GabrieleeCris/ExclusivoParaTeste
Contribute to GabrieleeCris/ExclusivoParaTeste development by creating an account on GitHub.
GitHub - GabrieleeCris/ExclusivoParaTeste
GitHub
ExclusivoParaTeste/src/components/categorias/cardCategorias/CardCat...
Contribute to GabrieleeCris/ExclusivoParaTeste development by creating an account on GitHub.
ExclusivoParaTeste/src/components/categorias/cardCategorias/CardCat...
GitHub
ExclusivoParaTeste/src/contexts/AuthContext.tsx at main · Gabrielee...
Contribute to GabrieleeCris/ExclusivoParaTeste development by creating an account on GitHub.
ExclusivoParaTeste/src/contexts/AuthContext.tsx at main · Gabrielee...
GitHub
ExclusivoParaTeste/src/pages/home/Home.tsx at main · GabrieleeCris/...
Contribute to GabrieleeCris/ExclusivoParaTeste development by creating an account on GitHub.
ExclusivoParaTeste/src/pages/home/Home.tsx at main · GabrieleeCris/...
Gabriele Cristine(ela/she) — Hoje às 10:57
//emoticon clicavel
                            <div className='flex gap-x-2 justify-center'>

                                <a href="https://github.com/GabrieleeCris?tab=repositories%22%3E<AiFillGithub className="dark:text-white w-8 h-8 cursor-pointer" />
                                </a>

                                <a href="https://github.com/GabrieleeCris?tab=repositories%22%3E<AiFillLinkedin className="dark:text-white w-8 h-8 cursor-pointer" /></a>


                            </div>
GitHub
GabrieleeCris - Overview
GabrieleeCris has 24 repositories available. Follow their code on GitHub.
Imagem
GitHub
GabrieleeCris - Overview
GabrieleeCris has 24 repositories available. Follow their code on GitHub.
Imagem
Mateus Ferreira — Hoje às 11:07
 //Alterando navbar caso o Usuario esteja logado

  let navbarComponent

  if (usuario.token === "") {
    navbarComponent = (
Expandir
message.txt
14 KB
Mateus Ferreira — Hoje às 21:18
import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'
import categoriaIcon from '../../../assets/categorias.png'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'

Expandir
CardCategorias.tsx
3 KB
﻿
import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'
import categoriaIcon from '../../../assets/categorias.png'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  const { usuario } = useContext(AuthContext)
  const isAdmin = usuario.tipo == 'admin'

  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-verde_escuro dark:border-gray-700 transition-transform duration-300 ease-in-out transform hover:scale-110 mt-10">
        <a href="#">
          <img className="rounded-t-lg" src={categoriaIcon} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{categoria.nome}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{categoria.descricao}</p>
          {isAdmin ?
            //SERÁ RENDERIZADO CASO O USUÁRIO SEJA DO TIPO ADNIN
            <>
              <h1 className='font-bold dark:text-white'>Usuário Admin</h1>
              <div className='flex justify-evenly mt-2'>
                <Link to={`/editarCategoria/${categoria.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#03A678] transition-all duration-300 ease-in-out rounded-lg hover:bg-[#014040] focus:outline-none dark:bg-verde_claro2 dark:hover:bg-white dark:hover:text-black" >
                  Editar
                </Link>
                <Link to={`/deletarCategoria/${categoria.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 transition-all duration-300 ease-in-out rounded-lg hover:bg-red-900 focus:outline-none dark:bg-red-600 dark:hover:bg-white dark:hover:text-black">
                  Deletar
                </Link>
              </div>
            </>
            :

            //SERÁ RENDERIZADO CASO O USUÁRIO NÃO SEJA DO TIPO ADNIN
            <Link to='/produtos' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#03A678] transition-all duration-300 ease-in-out rounded-lg hover:bg-[#014040] focus:outline-none dark:bg-verde_claro2 dark:hover:bg-white dark:hover:text-black">
              Ver Produtos ➔
            </Link>
          }
        </div>
      </div>

    </>
  )
}

export default CardCategorias
