import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'

function NavBar() {
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      alert('Usuário deslogado com sucesso')
      navigate('/login')
  }

  let navbarComponent

  return (
    <>
      <div className='w-full bg-gradient-to-r from-indigo-950 via-blue-600 to-green-900 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
        <Link to='/home' className='hover:underline'><div className='text-2xl font-bold uppercase'>Nutrividas</div></Link>

          <div className='flex gap-4'>
            <Link to='/login' className='hover:underline'>Login</Link>
            <div className='hover:underline'>Produtos</div>
            <Link to='/sobre' className='hover:underline'>Sobre nós</Link>
            <div className='hover:underline'>Perfil</div>
            <Link to='' onClick={logout}><div className='hover:underline'>Sair</div></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
