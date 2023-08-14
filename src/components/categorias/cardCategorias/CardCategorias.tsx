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