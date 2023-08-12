import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AuthContext } from '../../../contexts/AuthContext'
import { buscar, deletar } from '../../../services/Service'
import { toastAlerta } from '../../../utils/toastAlerta'
import Tema from '../../../models/Categoria'
import categoriaIcon from '../../../assets/categorias.png'

function DeletarCategoria() {
    const [tema, setTema] = useState<Tema>({} as Tema)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setTema, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'info')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'info')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categorias")
    }

    async function deletarTema() {
        try {
            await deletar(`/categorias/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Categoria apagada com sucesso', 'sucesso');

        } catch (error) {
            toastAlerta('Erro ao apagar a Categoria', 'erro')
        }

        retornar()
    }
    return (
        <div className='container w-1/3 mx-auto'>
        <h1 className='text-4xl text-center my-4 mt-20'>Deletar Categoria</h1>

        <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a categoria a seguir?</p>
        <div className='flex justify-center'>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-verde_escuro dark:border-gray-700 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a href="#">
                <img className="rounded-t-lg" src={categoriaIcon} alt="" />
            </a>
            <div className="p-5 ">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{tema.nome}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{tema.descricao}</p>
                <div className='flex justify-evenly'>
                    <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#03A678] transition-all duration-300 ease-in-out rounded-lg hover:bg-[#014040] focus:outline-none dark:bg-verde_claro2 dark:hover:bg-white dark:hover:text-black" onClick={retornar}>
                        Retornar
                    </button>
                    <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 transition-all duration-300 ease-in-out rounded-lg hover:bg-red-900 focus:outline-none dark:bg-red-600 dark:hover:bg-white dark:hover:text-black" onClick={deletarTema}>
                        Deletar
                    </button>
                </div>
            </div>
        </div>
        </div>
    </div >
    )
}

export default DeletarCategoria
