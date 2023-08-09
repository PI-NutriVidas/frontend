import { Link } from 'react-router-dom';
import homeLogo from '../../assets/nutri.png'
import './Home.css';
import ModalProduto from '../../components/produtos/modalProduto/ModalProduto';
import ListaProdutos from '../../components/produtos/listaProdutos/ListaProdutos';

function Home() {
    return (
        <>
            <div className="bg-gradient-to-r from-green-900 via-blue-600 to-indigo-950 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
                        <p className='text-xl'>Alimentos saudáveis e acessíveis você encontra aqui </p>

                        <div className="flex justify-around gap-4">
                        <ModalProduto />
                        <Link to="/produtos"><button className='rounded transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r via-blue-600 to-green-900 from-indigo-950 py-2 px-4'>Ver Produtos</button></Link>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img src={homeLogo} alt="" className='w-2/3' />

                    </div>
                </div>
            </div>
            <ListaProdutos />
        </>
    );
}

export default Home;