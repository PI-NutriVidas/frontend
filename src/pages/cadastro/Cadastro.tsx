import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import './Cadastro.css'
import { toastAlerta } from '../../utils/toastAlerta'
import Logo from '../../assets/logo.png';

function Cadastro() {

  let navigate = useNavigate()

  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    tipo: '',
    foto: ''
  })

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    tipo: '',
    foto: ''
  })

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/login')
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
        toastAlerta('Usuário cadastrado com sucesso', 'sucesso')

      } catch (error) {
        toastAlerta('Usuário cadastrado com sucesso', 'sucesso')
      }

    } else {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro')
      setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha
      setConfirmaSenha("")                  // Reinicia o campo de Confirmar Senha
    }
  }

  return (
    <>
      <div className="fundoCadastro h-screen place-items-center font-bold">
      <div className="form-container rounded-lg backdrop-opacity-5 backdrop-invert bg-white/80 dark:bg-black/60 shadow shadow-black-500/40 hover:shadow-indigo-500/40">
        <img src={Logo} alt="Logo" />
          <form className='flex justify-center items-center flex-col w-1/3 gap-3 ' onSubmit={cadastrarNovoUsuario}>
          <h2 className="text-slate text-h2 font-bold font-mono text-black dark:text-verde_claro2">Cadastrar</h2>
          <div className="flex flex-col w-90 text-black dark:text-verde_claro2">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-2 border-slate-700 rounded p-2 text-black"
              value={usuario.nome} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-90 text-black dark:text-verde_claro2">
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-slate-700 rounded p-2 text-black"
              value={usuario.usuario} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-90 text-black dark:text-verde_claro2">
            <label htmlFor="foto">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="border-2 border-slate-700 rounded p-2 text-black"
              value={usuario.foto} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-90 text-black dark:text-verde_claro2">
              <label>Você deseja ser:</label>
              <div className='flex items-center'>
                <input
                  type="radio"
                  id="fornecedor"
                  name="tipo"
                  placeholder="fornecedor"
                  className="border-2 border-slate-700 rounded p-2 text-black"
                  value="fornecedor"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  checked={usuario.tipo === 'fornecedor'}
                />
                <label htmlFor="tipo" className='ml-5'>Fornecedor</label>
              </div>

              <div className='flex items-center'>
                <input
                  type="radio"
                  id="cliente"
                  name="tipo"
                  placeholder="cliente"
                  className="border-2 border-slate-700 rounded p-2 text-black"
                  value="cliente"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  checked={usuario.tipo === 'cliente'}
                />
                <label htmlFor="tipo" className='ml-5'>Cliente</label>
              </div>
            </div>
          <div className="flex flex-col w-90 text-black dark:text-verde_claro2">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded p-2 text-black"
              value={usuario.senha} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-90 text-black dark:text-verde_claro2">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="border-2  border-slate-700 rounded p-2 text-black"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            />
          </div>
          <div className="flex justify-between w-90 gap-8">
            <button className="text-white bg-gradient-to-br from-[#FF0000] to-[#8B0000] hover:bg-gradient-to-bl focus:ring-4 transition duration-300 ease-out focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-9 py-4 text-center mb-2" onClick={back}>
              Cancelar
            </button>
            <button className='text-white bg-gradient-to-br from-[#92D94D] to-[#03A678] hover:bg-gradient-to-bl focus:ring-4 transition duration-300 ease-out focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-8 py-4 text-center mb-2' type='submit'>
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Cadastro
