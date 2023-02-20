import hamburger from "../images/hamburger.svg";
import closeHamburger from "../images/close-hamburger.svg";
import login from "../images/login.svg";

const Navbar = () => {
  return (
    <section class="navigation">
      <div class="container">
        <div>
          <nav>
            <ul class="links">
              <li class="hamburger">
                <img src={hamburger} alt="hamburger menu icon" />
                <img src={closeHamburger} alt="close hamburger menu icon" />
              </li>
              <li class="link">
                <a href="#">home</a>
              </li>
              <li class="link">
                <a href="#">shows</a>
              </li>
              <li class="link">
                <a href="#">about</a>
              </li>
              <li class="link">
                <a href="#">contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="logIn">
          <img src={login} alt="login icon" />
          <a href="#">log in</a>
        </div>
      </div>
    </section>
  );
};
export default Navbar;
