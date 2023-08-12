import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import { buscar, deletar } from '../../../services/Service'
import Produto from '../../../models/Produto'
import { toastAlerta } from '../../../utils/toastAlerta'

function DeletarProduto() {
    const [produto, setProduto] = useState<Produto>({} as Produto)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto, {
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
        navigate("/produtos")
    }

    async function deletarProduto() {
        try {
            await deletar(`/produtos/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Produto apagado com sucesso', 'sucesso')

        } catch (error) {
            toastAlerta('Erro ao apagar o Produto', 'erro')
        }

        retornar()
    }
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar produto</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a produto a seguir?</p>

            <div className="bg-gray-100 justify-center flex">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
                    <div className="max-w-sm bg-white rounded-lg shadow dark:bg-verde_escuro dark:border-gray-700 transition-transform duration-300 ease-in-out transform hover:scale-110">
                        <a href="#">
                            <img className="rounded-t-lg" src={produto.foto} alt="" />
                        </a>
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{produto.nome}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{produto.categoria?.nome}</p>
                            <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">R$ {new Intl.NumberFormat('pt-BR', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            }).format(produto.preco)}</p>
                            <div className='flex justify-evenly'>
                                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#03A678] transition-all duration-300 ease-in-out rounded-lg hover:bg-[#014040] focus:outline-none dark:bg-verde_claro2 dark:hover:bg-white dark:hover:text-black" onClick={retornar}>
                                    Retornar
                                </button>
                                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 transition-all duration-300 ease-in-out rounded-lg hover:bg-red-900 focus:outline-none dark:bg-red-600 dark:hover:bg-white dark:hover:text-black" onClick={deletarProduto}>
                                    Deletar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletarProduto
