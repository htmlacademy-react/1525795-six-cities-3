import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { store } from '../../store';
import { changeLocation } from '../../store/action';
import { loginAction } from '../../store/api-actions';
import { AppRoute } from '../../const';


function Login(): JSX.Element {
  const loginRef: React.LegacyRef<HTMLInputElement> | undefined = useRef<HTMLInputElement | null>(null);
  const passwordRef: React.LegacyRef<HTMLInputElement> | undefined = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const locationClickHandler = (evt: React.MouseEvent<HTMLElement>):void => {
    const newLocation = evt.currentTarget.innerText;
    store.dispatch(changeLocation(newLocation));
  };

  const authFormSubmitHandler = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    const loginValue = loginRef.current?.value;
    const passwordValue = passwordRef.current?.value;
    if (loginValue !== null && passwordValue !== null) {
      store.dispatch(loginAction({email: loginValue, password: passwordValue}));
      navigate(AppRoute.Main);
    }
    // Вывести сообщение об ошибке
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={authFormSubmitHandler}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="email">E-mail</label>
                <input ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="password">Password</label>
                <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/" onClick={locationClickHandler}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
