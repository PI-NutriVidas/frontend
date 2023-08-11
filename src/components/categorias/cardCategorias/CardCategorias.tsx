import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'
import categoriaIcon from '../../../assets/categorias.png'

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 ease-in-out transform hover:scale-110">
        <a href="#">
          <img className="rounded-t-lg" src={categoriaIcon} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{categoria.nome}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{categoria.descricao}</p>  
          <Link to='/produtos'className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#03A678] transition-all duration-300 ease-in-out rounded-lg hover:bg-[#014040] focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700">
            Ver Produtos ➔
          </Link>
        </div>
      </div>

    </>
  )
}

export default CardCategorias
