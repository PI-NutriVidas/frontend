import ListaProdutos from '../../components/produtos/listaProdutos/ListaProdutos';
import { Carousel } from 'flowbite-react';
import bannerNutri from '../../assets/banner_nutrividas.svg'
import bannerEco from '../../assets/banner_ecobag.svg'
import './Produtos.css'
import { Link } from 'react-router-dom';

function Produtos() {
    return (
        <>
            <div className='relative w-full dark:bg-black'>
                <div className='relative h-[500px] overflow-hidden dark:bg-black'>
                    <Carousel className='bg-white h-full dark:bg-black'>
                        <img
                            alt="..."
                            src={bannerNutri}
                            className=''
                        />
                        <img
                            alt="..."
                            src={bannerEco}
                        />
                    </Carousel>
                </div>
            </div>

            <div className="bg-white dark:bg-black">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 bg-gray-100 dark:bg-black">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 text-center dark:text-verde_claro2 text-[2rem]">Produtos</h1>
                    <div>
                        <ListaProdutos />
                    </div>
                    <Link to="/carrinho" className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#03A678] transition-all duration-300 ease-in-out rounded-lg hover:bg-[#014040] focus:outline-none dark:bg-verde_claro2 dark:hover:bg-white dark:hover:text-black'>
                        <button>Finalizar Compra</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Produtos;