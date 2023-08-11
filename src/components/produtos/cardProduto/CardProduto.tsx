// import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'
import { toastAlerta } from '../../../utils/toastAlerta'
import { useState } from 'react';

interface CardProdutoProps {
    prod: Produto
}

function CardProduto({ prod }: CardProdutoProps) {
    const [valor, setValor] = useState(prod.quantidade);

    function addCarrinho(){
        try {
            if(valor > 0){
                setValor(valor - 1)
                toastAlerta('Item adicionado ao carrinho', 'sucesso');
            } else {
                toastAlerta('Quantidade insuficiente', 'erro');
            }
        } catch(error:any){
            toastAlerta('Não foi possível adicionar o item ao carrinho', 'erro');
        }
    }

    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
                <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 ease-in-out transform hover:scale-110">
                    <a href="#">
                        <img className="rounded-t-lg" src={prod.foto} alt="" />
                    </a>
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{prod.nome}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{prod.categoria?.nome}</p>
                        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">R$ {new Intl.NumberFormat('pt-BR', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        }).format(prod.preco)}</p>
                        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">Quantidade: {valor}</p>
                        
                        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#03A678] transition-all duration-300 ease-in-out rounded-lg hover:bg-[#014040] focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700" onClick={addCarrinho}>
                            Adicionar 🛒
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProduto
