import { Link } from "react-router-dom"

const Header = () => {
    return (
<header style={{ backgroundColor: '#693ff5' }}>
  <div className="header-bottom">
    <div className="container">
      <div className="header-wrapper">
        <div className="logo">
          <h4 style={{ color:'white' }}>ĐẤU GIÁ</h4>
        </div>
        <ul className="menu ml-auto">
          <li>
          <Link className="text-none" to="/">Home</Link>
          </li>
          <li>
            <a className="text-none">Auction</a>
          </li>
          <li>
            <a className="text-none">Pages</a>
            <ul className="submenu">
              <li>
                <a className="text-none">My Account</a>
                <ul className="submenu">
                  <li>
                    <Link className="text-none" to="/sign-up">Sign Up</Link>
                  </li>
                  <li>
                  <Link className="text-none" to="/sign-in">Sign In</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#0">Dashboard</a>
                <ul className="submenu">
                  <li>
                  <Link className="text-none" to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                  <Link className="text-none" to="/detail">Chi tiết Sản Phẩm</Link>
                  </li>
                  <li>
                  <Link className="text-none" to="/sign-up">Winner</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <form className="search-form">
          <input type="text" placeholder="Search for brand, model...." />
          <button type="submit"><i className="fas fa-search" /></button>
        </form>
        <div className="search-bar d-md-none">
          <a href="#0"><i className="fas fa-search" /></a>
        </div>
        <div className="header-bar d-lg-none">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  </div>
</header>

    )
}

export default Header