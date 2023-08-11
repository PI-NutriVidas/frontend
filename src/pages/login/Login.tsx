import { ChangeEvent, useContext, useEffect, useState } from "react";
import "./Login.css";

import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import UsuarioLogin from "../../models/UsuarioLogin";
import { RotatingLines } from "react-loader-spinner";
import Logo from "../../assets/logo.png";

function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);
  const { isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <>
      <div className="login-background py-20 h-screen">
        <div className="form-container rounded-xl backdrop-opacity-5 backdrop-invert bg-white/80 dark:bg-black/60 shadow shadow-black-500/40 hover:shadow-indigo-500/40">
          <img src={Logo} alt="Logo" />
          <h2 className="text-slate text-h2 font-bold font-mono dark:text-verde_claro2">
            Login
          </h2>

          <form
            className="form flex justify-center items-center flex-col w-1/2 gap-4"
            onSubmit={login}
          >
            <div className="flex flex-col w-80 font-bold">
              <label htmlFor="usuario" className="dark:text-verde_claro2">Usuário</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuario"
                className="border-2 border-slate-800 rounded p-2"
                value={usuarioLogin.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>
            <div className="flex flex-col w-80 font-bold">
              <label htmlFor="senha" className="dark:text-verde_claro2">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="border-2 border-slate-700 rounded p-2"
                value={usuarioLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>
            <button
              type="submit"
              className="text-white bg-gradient-to-br from-[#92D94D] to-[#03A678] hover:bg-gradient-to-bl focus:ring-4 transition duration-300 ease-out focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-8 py-4 text-center mr-2 mb-2"
            >
              {isLoading ? (
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                />
              ) : (
                <span className="font-bold">Entrar</span>
              )}
            </button>



            <hr className="border-slate-800 w-full" />
          </form>

          <div>
            <p className="dark:text-white text-center pb-10">
              Ainda não tem uma conta?{" "}
              <Link
                to="/cadastro"
                className="text-verde_escuro font-bold	hover:underline dark:text-verde_claro2"
              >
                Cadastre-se
              </Link>
            </p>
          </div>
          <div className="fundoLogin hidden lg:block"></div>
        </div>
      </div>
    </>
  );
}

export default Login;
