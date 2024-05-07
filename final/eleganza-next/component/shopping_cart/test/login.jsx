import eleganza from '../test/log.module.css';
import useAuth from '@/hooks/useAuth';

const Login = () => {
  const { isAuthenticated, login, logout } = useAuth(); // 使用自定義 hook 來檢查登入狀態並提供登入/登出功能

  return (
    <>
      <title>Title</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Noto+Sans+TC:wght@100..900&family=Noto+Serif+TC&family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />

      <main className="wrap flex-grow-1">
        <div className={`${eleganza['empty-cart-container']}`}>
          <section>
            <p className={`${eleganza['empty-cart-message']}`}>請登入帳號</p>
            {isAuthenticated ? (
              <button
                className={`${eleganza['shop-now-button']}`}
                onClick={logout}
              >
                登出
              </button>
            ) : (
              <button
                className={`${eleganza['shop-now-button']}`}
                onClick={() => login('dummyToken')} // 假裝登入時給一個示範 token
              >
                登入
              </button>
            )}
          </section>
        </div>
      </main>
    </>
  );
};

export default Login;
