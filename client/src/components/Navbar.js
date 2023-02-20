import hamburger from "../images/hamburger.svg";
import closeHamburger from "../images/close-hamburger.svg";

const Navbar = () => {
  return (
    <section class="navigation">
      <div class="container">
        <div>
          <nav>
            <ul class="links">
              <li class="hamburger">
                <img src={hamburger} alt="hamburger menu" />
                <img src={closeHamburger} alt="hamburger menu" />
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
          <svg
            width="20px"
            height="17.44px"
            viewBox="0 0 40 35"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Combined Shape</title>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="#df3311"
              fill-rule="evenodd"
            >
              <path
                d="M20,0 C31.045695,0 40,8.93778415 40,19.9630996 C40,25.8984717 37.40495,31.2288556 33.2855786,34.8854984 C31.8218633,29.2672649 26.8697723,25.0521728 20.8733221,24.6767052 C25.1505724,24.2392973 28.4870849,20.6106159 28.4870849,16.199262 C28.4870849,11.4915949 24.6872875,7.67527675 20,7.67527675 C15.3127125,7.67527675 11.5129151,11.4915949 11.5129151,16.199262 C11.5129151,20.6106159 14.8494276,24.2392973 19.126183,24.6786184 C13.1302277,25.0521728 8.17813668,29.2672649 6.71376519,34.8851895 C2.59504998,31.2288556 0,25.8984717 0,19.9630996 C0,8.93778415 8.954305,0 20,0 Z"
                id="Combined-Shape"
                fill="#df3311"
              ></path>
            </g>
          </svg>
          <a href="#">log in</a>
        </div>
      </div>
    </section>
  );
};
export default Navbar;
