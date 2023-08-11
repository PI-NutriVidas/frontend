import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AuthContext } from '../../../contexts/AuthContext'
import { buscar, deletar } from '../../../services/Service'
import { toastAlerta } from '../../../utils/toastAlerta'
import Tema from '../../../models/Categoria'

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
            <h1 className='text-4xl text-center my-4'>Deletar Categoria</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a categoria a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Categoria</header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.nome}</p>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p>
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletarTema}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria