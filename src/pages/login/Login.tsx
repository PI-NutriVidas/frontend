import { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';

import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';
import Logo from '../../assets/logo.png';

function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);
  const { isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/home')
    }
  }, [usuario])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <>
        <div className="login-background ">
        <div className="form-container rounded-lg backdrop-opacity-5 backdrop-invert bg-white/40">
          <img src={Logo} alt="Logo" />
          <h2 className="text-slate text-h2 font-bold font-mono">Login</h2>
          <form className="form flex justify-center items-center flex-col w-1/2 gap-4  " onSubmit={login}>

            <div className="flex flex-col w-80">
              <label htmlFor="usuario">Usuário</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuario"
                className="border-2 border-slate-800 rounded p-2"
                value={usuarioLogin.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-80">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="border-2 border-slate-700 rounded p-2"
                value={usuarioLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <button type="submit" className="rounded bg-verde_claro2 hover:bg-verde_claro1 text-white w-1/2 py-2 flex justify-center">
              {isLoading ? (
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                />
              ) : (
                <span>Entrar</span>
              )}
            </button>

            <hr className="border-slate-800 w-full" />

            <p>
              Ainda não tem uma conta?{' '}
              <Link to="/cadastro" className="text-sky-400	 hover:underline">
                Cadastre-se
              </Link>
            </p>
          </form>
          <div className="fundoLogin hidden lg:block"></div>
        </div>
      </div>
    </>
  );
}

export default Login;