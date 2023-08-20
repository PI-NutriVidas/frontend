import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { buscar } from '../../../src/services/Service';
// import loginLogo from '../../assets/nutri.png'
import { toastAlerta } from '../../utils/toastAlerta'
import Produto from '../../models/Produto'
import CardProduto from '../../components/produtos/cardProduto/CardProduto';

function Perfil() {
  let navigate = useNavigate()
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const { usuario, handleLogout, itemsComprados, pedido} = useContext(AuthContext)
  const token = usuario.token
  const isCliente = usuario.tipo == 'cliente'


  async function buscarProdutos() {
    try {
      await buscar('/produtos', setProdutos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

  useEffect(() => {
    if (usuario.token === "") {
      toastAlerta('Você precisa estar logado', 'erro')
      navigate("/login")
    }
  }, [usuario.token])

  const produtosDoUsuario = produtos.filter(produto => produto.usuario?.id === usuario.id);

  return (
    <>
      <div className="container mx-auto mt-4 rounded-2xl overflow-hidden">

        <div className='w-full h-72 object-cover border-b-8 border-white ' />

        <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10 ' />

        <div className="relative mt-[-6rem] h-72 flex flex-col bg-verde_neutro text-white text-2xl items-center justify-center ">
          <p>Nome: {usuario.nome} </p>
          <p>Email: {usuario.usuario}</p>
          <p>Tipo: {usuario.tipo}</p>
        </div>
        {isCliente ? (
          <>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 text-center dark:text-verde_claro2 text-[2rem] mt-5">Produtos favoritos!</h1>
            <h2 className='font-bold tracking-tight text-gray-900 dark:text-verde_claro2 mt-5 text-lg ml-5'>Total de pedidos: {pedido}</h2>
            <div className='flex'>
                {itemsComprados
                .filter((item) => item.quantidade > 0)
                .map((item) => (
                  <>
                    <CardProduto key={item.id} prod={item}/>
                  </>
                ))}
            </div>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 text-center dark:text-verde_claro2 text-[2rem] mt-5">Seus produtos</h1>
            <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {produtosDoUsuario.map((produto) => (
                    <CardProduto key={produto.id} prod={produto} fornecedor={true} />
                ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Perfil

