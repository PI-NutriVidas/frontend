import { GithubLogo } from '@phosphor-icons/react'

function Footer() {
 
    return (
    <>
        <div className="flex justify-center bg-gradient-to-r from-indigo-950 via-blue-600 to-green-900 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'> NutriVidas | Copyright: </p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-4'>
              <a href='https://github.com/PI-NutriVidas' target='_blank'><GithubLogo size={48} weight='bold' /></a>
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer
