import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';
import Categoria from '../../../models/Categoria';
import { buscar, atualizar, cadastrar } from '../../../services/Service';


function FormularioProduto() {
    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        descricao: '',
        nome: '',
        produto: null,
    });

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        descricao: '',
        preco: 0,
        quantidade: 0,
        foto: '',
        categoria: null,
        usuario: null
    });

    async function buscarProdutoPorId(id: string) {
        await buscar(`/produtos/${id}`, setProduto, {
            headers: {
                Authorization: token,
            },
        });
    }

    async function buscarCategoriaPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria, {
            headers: {
                Authorization: token,
            },
        });
    }

    async function buscarCategorias() {
        await buscar('/categorias', setCategorias, {
            headers: {
                Authorization: token,
            },
        });
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        buscarCategorias();
        if (id !== undefined) {
            buscarProdutoPorId(id);
            console.log(categoria);

        }
    }, [id]);

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria,
        });
    }, [categoria]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria,
            usuario: usuario,
        });
    }

    function retornar() {
        navigate('/produtos');
    }

    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log({ produto });

        if (id != undefined) {
            try {
                await atualizar(`/produtos`, produto, setProduto, {
                    headers: {
                        Authorization: token,
                    },
                });
                alert('Produto atualizado com sucesso');
                retornar();
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    alert('O token expirou, favor logar novamente')
                    handleLogout()
                } else {
                    alert('Erro ao atualizar Produto');
                }
            }
        } else {
            try {
                await cadastrar(`/produtos`, produto, setProduto, {
                    headers: {
                        Authorization: token,
                    },
                });

                alert('Produto cadastrado com sucesso');
                retornar();
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    alert('O token expirou, favor logar novamente')
                    handleLogout()
                } else {
                    alert('Erro ao cadastrar Produto');
                }
            }
        }
    }

    const carregandoCategoria = categoria.descricao === '';
    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">{id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}</h1>

            <form onSubmit={gerarNovoProduto} className="flex flex-col w-1/2 gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome do Produto</label>
                    <input
                        value={produto.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Nome"
                        name="nome"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição do produto</label>
                    <input
                        value={produto.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Descrição"
                        name="descricao"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="preco">Preço do produto</label>
                    <input
                        value={produto.preco}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="number"
                        placeholder="Preço"
                        name="preco"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="quantidade">Quantidade do produto</label>
                    <input
                        value={produto.quantidade}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="number"
                        placeholder="Quantidade"
                        name="quantidade"
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="foto">Foto do Produto</label>
                    <input
                        value={produto.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Foto"
                        name="foto"
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Categoria da produto</p>
                    <select name="categoria" id="categoria" className='border p-2 border-slate-800 rounded' onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
                        <option value="" selected disabled>Selecione uma Categoria</option>
                        {categorias.map((categoria) => (
                            <>
                                <option value={categoria.id} >{categoria.descricao}</option>
                            </>
                        ))}
                    </select>
                </div>
                <button disabled={carregandoCategoria} type='submit' className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2'>
                    {carregandoCategoria ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Cadastrar'}
                </button>
            </form>
        </div>
    );
}

export default FormularioProduto;