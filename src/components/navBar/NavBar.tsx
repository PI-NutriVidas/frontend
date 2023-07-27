import { Link } from "react-router-dom"

function NavBar() {

  return (
    <>
     <div className='w-full bg-gradient-to-r from-indigo-950 via-blue-600 to-green-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Nutrividas</div>

            <div className='flex gap-4'>
            <Link to='/login' className='hover:underline'>Login</Link>
            <Link to='/home' className='hover:underline'>Home</Link>
              <div className='hover:underline'>Produtos</div>
              <div className='hover:underline'>Sobre Nós</div>
              <div className='hover:underline'>Perfil</div>
              <div className='hover:underline'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default NavBar
