import ListaProdutos from '../../components/produtos/listaProdutos/ListaProdutos';
import { Carousel } from 'flowbite-react';
import bannerNutri from '../../assets/banner nutrividas.svg'
import bannerEco from '../../assets/banner ecobag.svg'
import './Produtos.css'

function Produtos() {
    return (
        <>
        <div className='relative w-full teste'>
            <div className='relative h-56 overflow-hidden'>
                <Carousel>
                    <img
                        alt="..."
                        src={bannerNutri}
                    />
                    <img
                        alt="..."
                        src={bannerEco}
                    />
                </Carousel>
                </div>
            </div>
            
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 bg-gray-100 ">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Produtos</h1>
                    <div>
                        <ListaProdutos />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Produtos;