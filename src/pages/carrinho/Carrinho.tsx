import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import CardProduto from '../../components/produtos/cardProduto/CardProduto'
import './Carrinho.css'
import { useNavigate } from 'react-router-dom'

function Carrinho() {
    let navigate = useNavigate();

    function continuarComprando() {
        navigate("/produtos")
    }

    const { items, limparCart, comprar } = useContext(AuthContext)

    const subtotal = items.reduce((total, items) => {
        return total + (items.preco * items.quantidade);
    }, 0)

    const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

    return (
        <>
            <div className='mt-20 subtotal-container dark:bg-black'>
                <div className='cards-container'>
                    {items.map((item) => (
                        item.quantidade > 0 && (
                            <div className='card'>
                                <CardProduto key={item.id} prod={item} noCarrinho={true} />
                            </div>
                        )
                    ))}
                </div>
                <div className='subtotal rounded-lg '>
                    <h1 className='font-bold text-xl dark:text-white'>Subtotal: R$ {new Intl.NumberFormat('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    }).format(subtotal)}</h1>
                    <div className='btn-subtotal mt-3 p-2'>
                        <button className={`px-3 py-2 text-sm font-medium text-center text-white bg-red-800 transition-all duration-300 ease-in-out rounded-lg hover:bg-red-600 focus:outline-none ${subtotal > 0 ? 'dark:bg-red-500 dark:hover:bg-white dark:hover:text-black' : 'opacity-50 cursor-not-allowed'}`}
                            onClick={limparCart}
                            disabled={subtotal === 0}> Limpar carrinho
                        </button>
                        <button className='px-3 py-2 text-sm font-medium text-center text-white bg-[#03A678] transition-all duration-300 ease-in-out rounded-lg hover:bg-[#014040] focus:outline-none dark:bg-verde_claro2 dark:hover:bg-white dark:hover:text-black'
                            onClick={continuarComprando}>Continuar comprando
                        </button>
                    </div>
                    <h1 className='font-bold text-lg dark:text-white mt-5 ml-5'>Selecione a forma de pagamento: </h1>
                    <div className='flex flex-col p-3 justify-center'>
                        <div className="payment-option transition-transform duration-300 ease-in-out transform hover:scale-110 dark:bg-verde_escuro dark:border-gray-700 mt-5">
                            <div className='flex items-center'>
                                <input
                                    type="radio"
                                    id="pix"
                                    name="payment"
                                    value="pix"
                                    className='radio-button'
                                    onChange={() => setSelectedPayment('pix')} />
                                <label htmlFor="pix" className='ml-5'><p className='font-bold text-lg dark:text-white'>PIX ❖</p></label>
                            </div>
                        </div>
                        <div className="payment-option transition-transform duration-300 ease-in-out transform hover:scale-110 dark:bg-verde_escuro dark:border-gray-700">
                            <div className='flex items-center'>
                                <input
                                    type="radio"
                                    id="cartao"
                                    name="payment"
                                    value="cartao"
                                    onChange={() => setSelectedPayment('cartao')} />
                                <label htmlFor="cartão" className='ml-5'><p className='font-bold text-lg dark:text-white'>Cartão 💳</p></label>
                            </div>
                        </div>
                        <div className="payment-option transition-transform duration-300 ease-in-out transform hover:scale-110 dark:bg-verde_escuro dark:border-gray-700">
                            <div className='flex items-center'>
                            <input
                                type="radio"
                                id="boleto"
                                name="payment"
                                value="boleto"
                                onChange={() => setSelectedPayment('boleto')} />
                            <label htmlFor="boleto" className='ml-5'><p className='font-bold text-lg dark:text-white'>Boleto 🎫</p></label>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button 
                            className={`px-3 mt-5 py-2 text-sm font-medium text-center text-white bg-[#03A678] transition-all duration-300 ease-in-out rounded-lg hover:bg-[#014040] focus:outline-none ${selectedPayment && subtotal > 0 ? 'dark:bg-verde_claro2 dark:hover:bg-white dark:hover:text-black' : 'opacity-50 cursor-not-allowed'}`}
                            onClick={comprar}
                            disabled={subtotal === 0 || !selectedPayment}> Finalizar Compra </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carrinho