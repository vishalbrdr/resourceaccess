import Cta from "./Cta";
import Logo from "./Logo";
import Nav from "./Nav";

function Header({ show }) {
  const toggleNav = () => {
    // alert("hello")
    document.querySelector(".nav").classList.toggle("scale");
  };

  return (
    <header className={show ? "header" : "header nobackground"}>
      <div className="container">
        <div className="navbar">
          <Logo className="header__logo" />
          <div className="menu" onClick={toggleNav}>
            <div className="menu-btn"></div>
          </div>
          <Nav />
        </div>
        {show && (
          <div className="heading-container">
            <h1 className="heading-dark">More than just shorter links</h1>
            <p>
              {" "}
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <div className="cta-container">
              <Cta
                className="rounded"
                href="/resourceAccess"
                name="Request Access"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
