import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { AuthContext } from '../../contexts/AuthContext'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import nutriLogo from '../../assets/logoNutriVidas.svg'
import { BsFillMoonFill } from 'react-icons/Bs'

function scrollToElement() {
  const element = document.querySelector('#sobre');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

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

  // let navigate = useNavigate()

  // const { handleLogout } = useContext(AuthContext)
  // const { usuario, handleLogout } = useContext(AuthContext)

  // function logout() {
  //     handleLogout()
  //     alert('Usuário deslogado com sucesso')
  //     navigate('/login')
  // }

  // let navbarComponent

  // Tem que aprecer produtos e perfil para quem estar logado

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-white dark:bg-black transition-all ease-in-out duration-600">
        <nav className="flex items-center justify-between py-4 lg:py-4 px-4 xl:px-48 border-b " aria-label="Global">

          <div className="flex lg:flex-1 lg:pl">
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
              {/* <FontAwesomeIcon icon={faMoon} className="h-[22px] text-white dark:text-black hover:text-white dark:hover:text-white transiton-all' ease-out duration-200"/> */}
              <BsFillMoonFill className="text-white dark:text-black"/>
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
              <BsFillMoonFill className="text-white dark:text-black"/>
            </label>
    
            <Link to='/home' className='dark:text-white transiton-all ease-in-out duration-300 text-black dark:hover:text-orange_03 text-md font-bold hover:text-[#02735E] dark:hover:text-[#92D94D] transiton-all'>Início</Link>

            <Link to='/home#sobre' className='text-black dark:text-white dark:hover:text-orange_03 text-md font-bold hover:text-[#02735E] transiton-all ease-in-out duration-300 dark:hover:text-[#92D94D]' onClick={scrollToElement}>Sobre</Link>

            <Link to='/login' className='text-white dark:text-[#92D94D] px-2 text-md font-bold'>
              <button className='transiton-all ease-in-out duration-300 bg-[#03A678] dark:bg-black dark:border-[0.5px] dark:border-[#92D94D] 
              dark:hover:bg-[#92D94D] dark:hover:text-black p-3 rounded-lg hover:bg-[#01233F]'>Entrar</button>
            </Link>

            <Link to='/cadastro' className='hover:text-orange_01 text-white text-md font-bold'>
              <button className='transiton-all ease-in-out duration-300 bg-[#02735E] dark:bg-[#92D94D] dark:text-black dark:hover:bg-white p-3 rounded-lg hover:bg-[#01233F]'>Criar Conta</button>
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
                  <Link to='/postagens' className='text-black dark:text-white dark:hover:text-orange_03 text-md font-bold hover:text-[#02735E] transiton-all ease-in-out duration-300 dark:hover:text-[#92D94D]'>Sobre</Link>
                  <Link to='/login' className='dark:text-white transiton-all ease-in-out duration-300 text-black dark:hover:text-orange_03 text-md font-bold hover:text-[#02735E] dark:hover:text-[#92D94D] transiton-all'>Entrar</Link>
                  <Link to='/postagens' className='text-black dark:text-white dark:hover:text-orange_03 text-md font-bold hover:text-[#02735E] transiton-all ease-in-out duration-300 dark:hover:text-[#92D94D]'>Criar Conta</Link>
                  
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

export default Navbar