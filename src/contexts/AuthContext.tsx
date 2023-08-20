import { createContext, ReactNode, useState } from "react"

import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service"
import { toastAlerta } from "../utils/toastAlerta"
import Produto from "../models/Produto"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
    adicionarProduto: (produto: Produto) => void
    removerProduto: (produtoId: number) => void
    limparCart: () => void
    comprar: () => void
    items: Produto[]
    quantidadeItems: number
    itemsComprados: Produto[]
    pedido: number
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        tipo: "",
        foto: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, userLogin, setUsuario)
            toastAlerta('Usuário logado com sucesso', 'sucesso');
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            toastAlerta('Usuário ou senha inválidos. Tente novamente', 'erro');
            setIsLoading(false)
        }
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            tipo: "",
            token: ""
        })
    }

    // CÓDIGO DO CARRINHO
    const [items, setItems] = useState<Produto[]>([])
    const quantidadeItemsCarrinho = items.reduce((total, item) => total + item.quantidade, 0);
    const [itemsComprados, setItemsComprados] = useState<Produto[]>([]);
    const [pedido, setPedido] = useState(0);

    function adicionarProduto(produto: Produto) {
        const itemExiste = items.find((item) => item.id === produto.id);

        if(itemExiste) {
            setItems((state) =>
                state.map((item) =>
                item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
                )
            );
        } else {
            setItems((state) => [...state, { ...produto, quantidade: 1 }]);
        }
        toastAlerta("Produto adicionado ao carrinho", 'sucesso')
    }


    function removerProduto(produtoId: number) {
        const updatedItems = items.map((item) => {
            if (item.id === produtoId) {
                // Verifica se a quantidade é maior que 1 antes de decrementar
                if (item.quantidade > 0) {
                    return { ...item, quantidade: item.quantidade - 1 };
                } else {
                    toastAlerta("O carrinho está vazio", 'info')
                    return item;
                }
            }
            return item;
        });
    
        try {
            setItems(updatedItems);
            toastAlerta("Uma unidade do produto foi removida do carrinho", 'sucesso');
        } catch(error:any) {
            console.log(error);
            toastAlerta('Ocorreu um erro ao remover o produto', 'erro');
        }
    }

    function comprar() {
        const itemsComprados = [...items];
        setItemsComprados(itemsComprados)
        toastAlerta("Compra Efetuada com Sucesso", 'sucesso')
        setItems([])
        setPedido(pedido + 1)
    }

    function limparCart() {
        toastAlerta("O Carrinho está vazio", 'info')
        setItems([])
    }

    return (
        <AuthContext.Provider value={{ adicionarProduto, removerProduto, limparCart, comprar, items, quantidadeItems: quantidadeItemsCarrinho, usuario, handleLogin, handleLogout, isLoading, itemsComprados, pedido }}>
            {children}
        </AuthContext.Provider>
    )
}
