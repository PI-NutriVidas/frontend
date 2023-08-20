import { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { AuthContext } from '../../contexts/AuthContext'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import nutriLogo from '../../assets/logoNutriVidas.svg'
import { BsFillMoonFill } from 'react-icons/bs'
import { toastAlerta } from '../../utils/toastAlerta'
import { AuthContext } from '../../contexts/AuthContext'


function Navbar() {
  /* Toggle */
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "ligth" : "dark");
    console.log("test");
  };
  /* Toggle Ends */

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  let navigate = useNavigate()

  const { usuario, handleLogout, quantidadeItems } = useContext(AuthContext)

  function logout() {
    handleLogout()
    toastAlerta('Usuário deslogado com sucesso', 'sucesso')
    navigate('/login')
  }

  //Alterando navbar caso o Usuario esteja logado
  let navbarComponent

  if (usuario.token === "") {
    navbarComponent = (
      <>
        <header className="fixed inset-x-0 top-0 z-50 bg-white dark:bg-black transition-all ease-in-out duration-600">
          <nav className="flex items-center justify-between py-4 lg:py-4 px-4 xl:px-48 border-b" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link to='/' className="-m-1.5 p-1.5 flex items-center gap-x-4 font-black font text-xl"><span className="sr-only">Your Company</span>
                <img
                  className="h-12 w-auto"
                  src={nutriLogo}
                  alt=""
                />
                <p className='hover:text-[#03A678] dark:text-white transiton-all ease-in-out duration-300'>NutriVidas</p>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <label className="mr-2 dark:hover:text-[#92D94D] transiton-all' ease-out duration-200 hover:bg-[#02735E] dark:hover:bg-[#92D94D] shadow-lg shadow-black-500/50 bg-black dark:bg-white w-[34px] h-[34px] flex justify-center items-center rounded-[50%] cursor-pointer" onClick={handleThemeSwitch}>
                <BsFillMoonFill className="text-white dark:text-black" />
              </label>

              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black dark:text-white"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Menu Desktop */}
            <div className="hidden lg:flex lg:gap-x-4 lg:items-center w-[800px] justify-end">

              <label className="dark:hover:text-[#92D94D] transiton-all' ease-out duration-200 hover:bg-[#02735E] dark:hover:bg-[#92D94D] shadow-lg shadow-black-500/50 bg-black dark:bg-white w-[34px] h-[34px] flex justify-center items-center rounded-[50%] cursor-pointer" onClick={handleThemeSwitch}>
                <BsFillMoonFill className="text-white dark:text-black" />
              </label>

              <Link to='/home' className='dark:text-white transiton-all ease-in-out duration-300 text-black dark:hover:text-orange_03 text-md font-bold hover:text-[#02735E] dark:hover:text-[#92D94D] transiton-all'>Início</Link>

              <Link to='/sobre' className='text-black dark:text-white dark:hover:text-orange_03 text-md font-bold hover:text-[#02735E] transiton-all ease-in-out duration-300 dark:hover:text-[#92D94D]'>Sobre</Link>

              <Link to='/login' className='text-white dark:text-[#92D94D] px-2 text-md font-bold'>
                <button type="button" className="text-white bg-[#03A678] focus:ring-4 transition duration-300 ease-out focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 rounded-lg text-sm px-6 py-3 text-center dark:bg-black border-[0.5px] dark:border-[0.5px] dark:border-[#92D94D] dark:text-verde_claro2 dark:hover:bg-[#92D94D] dark:hover:text-black font-bold hover:bg-black hover:text-white"> Entrar</button>
              </Link>

              <Link to='/cadastro' className='hover:text-orange_01 text-white text-md font-bold'>
                <button type="button" className="text-white bg-gradient-to-br from-[#92D94D] to-[#03A678] hover:bg-gradient-to-bl focus:ring-4 transition duration-300 ease-out focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-6 py-3 text-center"> Criar Conta</button>
              </Link>

            </div>
          </nav>


          {/* Menu Mobile */}
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white transition-all ease-in-out duration-600">
              <div className="flex items-center justify-between">
                <Link to='/home' className="-m-1.5 p-1.5 flex items-center gap-x-4 font-black font text-xl"><span className="sr-only">Your Company</span>
                  <img
                    className="h-12 w-auto"
                    src={nutriLogo}
                    alt=""
                  />
                  <p className='hover:text-[#03A678] dark:text-white text-black transiton-all ease-in-out duration-300'>NutriVidas</p>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-black dark:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6 flex flex-col justify-center items-center">
                    <Link to='/home' className='dark:text-white transiton-all ease-in-out duration-300 text-black dark:hover:text-orange_03 text-md font-bold hover:text-[#02735E] dark:hover:text-[#92D94D] transiton-all'>Início</Link>
                    <Link to='/sobre' className='text-black dark:text-white dark:hover:text-orange_03 text-md font-bold hover:text-[#02735E] transiton-all ease-in-out duration-300 dark:hover:text-[#92D94D]'>Sobre</Link>
                    <Link to='/login' className='dark:text-white transiton-all ease-in-out duration-300 text-black dark:hover:text-orange_03 text-md font-bold hover:text-[#02735E] dark:hover:text-[#92D94D] transiton-all'>Entrar</Link>
                    <Link to='/cadastro' className='text-black dark:text-white dark:hover:text-orange_03 text-md font-bold hover:text-[#02735E] transiton-all ease-in-out duration-300 dark:hover:text-[#92D94D]'>Criar Conta</Link>

                  </div>
                  <div className="py-2 gap-y-4 flex flex-col items-center justify-center">
                    <p className='text-black font-bold dark:text-white'>Cor do fundo</p>
                    <label className="dark:hover:text-[#92D94D] transiton-all' ease-out duration-200 hover:bg-[#02735E] dark:hover:bg-[#92D94D] shadow-lg shadow-black-500/50 bg-black dark:bg-white w-[34px] h-[34px] flex justify-center items-center rounded-[50%] cursor-pointer" onClick={handleThemeSwitch}>
                    </label>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
      </>
    )
  } else {
    navbarComponent = (
      <>
        <header className="fixed inset-x-0 top-0 z-50 bg-white dark:bg-black transition-all ease-in-out duration-600">
          <nav className="flex items-center justify-between py-4 lg:py-4 px-4 xl:px-48 border-b" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link to='/home' className="-m-1.5 p-1.5 flex items-center gap-x-4 font-black font text-xl"><span className="sr-only">Your Company</span>
                <img
                  className="h-12 w-auto"
                  src={nutriLogo}
                  alt=""
                />
                <p className='hover:text-[#03A678] dark:text-white transiton-all ease-in-out duration-300'>NutriVidas</p>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <label className="mr-2 dark:hover:text-[#92D94D] transiton-all' ease-out duration-200 hover:bg-[#02735E] dark:hover:bg-[#92D94D] shadow-lg shadow-black-500/50 bg-black dark:bg-white w-[34px] h-[34px] flex justify-center items-center rounded-[50%] cursor-pointer" onClick={handleThemeSwitch}>
                <BsFillMoonFill className="text-white dark:text-black" />
              </label>

              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black dark:text-white"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Menu Desktop */}
            <div className="hidden lg:flex lg:gap-x-4 lg:items-center w-[800px] justify-end">

              <label className="dark:hover:text-[#92D94D] transiton-all' ease-out duration-200 hover:bg-[#02735E] dark:hover:bg-[#92D94D] shadow-lg shadow-black-500/50 bg-black dark:bg-white w-[34px] h-[34px] flex justify-center items-center rounded-[50%] cursor-pointer" onClick={handleThemeSwitch}>
                <BsFillMoonFill className="text-white dark:text-black" />
              </label>

              <Link to='/produtos' className='text-black dark:text-white dark:hover:text-orange_03 text-md font-bold hover:text-[#02735E] transiton-all ease-in-out duration-300 dark:hover:text-[#92D94D]'>Produtos</Link>

              <Link to='/categorias' className='text-black dark:text-white dark:hover:text-orange_03 text-md font-bold hover:text-[#02735E] transiton-all ease-in-out duration-300 dark:hover:text-[#92D94D]'>Categorias</Link>

              <Link to='/sobre' className='text-black dark:text-white dark:hover:text-orange_03 text-md font-bold hover:text-[#02735E] transiton-all ease-in-out duration-300 dark:hover:text-[#92D94D]'>Sobre</Link>

              <Link to='/perfil' className='text-black dark:text-white dark:hover:text-orange_03 text-md font-bold hover:text-[#02735E] transiton-all ease-in-out duration-300 dark:hover:text-[#92D94D]'>Perfil</Link>

              <Link to='/carrinho' className='hover:text-orange_01 text-white text-md font-bold'>
                <button type="button" className="relative inline-flex items-center px-5 py-2.5 text-white bg-gradient-to-br from-[#92D94D] to-[#03A678] hover:bg-gradient-to-bl focus:ring-4 transition duration-300 ease-out focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-6 py-3 text-center">
                  Carrinho
                  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-[#03A678] border-2 border-white rounded-full -top-2 -right-2 dark:border-white dark:bg-[#014040]">{quantidadeItems}</div>
                </button>
              </Link>

              <Link to='' className='hover:text-orange_01 text-white text-md font-bold'>
                <button type="button" className="text-white bg-gradient-to-br from-[#92D94D] to-[#03A678] hover:bg-gradient-to-bl focus:ring-4 transition duration-300 ease-out focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-6 py-3 text-center" onClick={logout}> Sair</button>
              </Link>
            </div>
          </nav>


          {/* Menu Mobile */}
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white transition-all ease-in-out duration-600">
              <div className="flex items-center justify-between">
                <Link to='/home' className="-m-1.5 p-1.5 flex items-center gap-x-4 font-black font text-xl"><span className="sr-only">Your Company</span>
                  <img
                    className="h-12 w-auto"
                    src={nutriLogo}
                    alt=""
                  />
                  <p className='hover:text-[#03A678] dark:text-white text-black transiton-all ease-in-out duration-300'>NutriVidas</p>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-black dark:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6 flex flex-col justify-center items-center">
                    <Link to='/produtos' className='dark:text-white transiton-all ease-in-out duration-300 text-black dark:hover:text-orange_03 text-md font-bold hover:text-[#02735E] dark:hover:text-[#92D94D] transiton-all'>Produtos</Link>
                    <Link to='/categorias' className='dark:text-white transiton-all ease-in-out duration-300 text-black dark:hover:text-orange_03 text-md font-bold hover:text-[#02735E] dark:hover:text-[#92D94D] transiton-all'>Categorias</Link>
                    <Link to='/perfil' className='text-black dark:text-white dark:hover:text-orange_03 text-md font-bold hover:text-[#02735E] transiton-all ease-in-out duration-300 dark:hover:text-[#92D94D]'>Perfil</Link>
                    <Link to='/carrinho' className='text-black dark:text-white dark:hover:text-orange_03 text-md font-bold hover:text-[#02735E] transiton-all ease-in-out duration-300 dark:hover:text-[#92D94D] ml-4'>
                      Carrinho
                      <div className="ml-2 relative inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-[#03A678] border-2 border-white rounded-full dark:border-white dark:bg-[#014040]">
                        {quantidadeItems}
                      </div>
                    </Link>
                    <Link to='' className='text-black dark:text-white dark:hover:text-orange_03 text-md font-bold hover:text-[#02735E] transiton-all ease-in-out duration-300 dark:hover:text-[#92D94D]' onClick={logout}>Sair</Link>
                  </div>
                  <div className="py-2 gap-y-4 flex flex-col items-center justify-center">
                    <p className='text-black font-bold dark:text-white'>Cor do fundo</p>
                    <label className="dark:hover:text-[#92D94D] transiton-all' ease-out duration-200 hover:bg-[#02735E] dark:hover:bg-[#92D94D] shadow-lg shadow-black-500/50 bg-black dark:bg-white w-[34px] h-[34px] flex justify-center items-center rounded-[50%] cursor-pointer" onClick={handleThemeSwitch}>
                      {/* <FontAwesomeIcon icon={faMoon} className="h-[22px] text-white dark:text-black hover:text-white dark:hover:text-white transiton-all' ease-out duration-200"/> */}
                    </label>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
      </>
    )
  }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar