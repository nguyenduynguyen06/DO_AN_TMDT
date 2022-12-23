import Header from "../Header/Header"

const SignIn = () => {
    return (
        <>
            <Header />
            <div className="hero-section">
  <div className="container">
    <ul className="breadcrumb">
      <li>
        <a href="index.html">Home</a>
      </li>
      <li>
        <a href="#0">Pages</a>
      </li>
      <li>
        <span>Sign In</span>
      </li>
    </ul>
  </div>
  <div className="bg_img hero-bg bottom_center" data-background="./assets/images/banner/hero-bg.png" />
</div>

            <section className="account-section padding-bottom">
  <div className="container">
    <div className="account-wrapper mt--100 mt-lg--440">
      <div className="left-side">
        <div className="section-header">
          <h2 className="title">HI, THERE</h2>
          <p>You can log in to your account here.</p>
        </div>
        <ul className="login-with">
          <li>
            <a href="#0"><i className="fab fa-facebook" />Log in with Facebook</a>
          </li>
          <li>
            <a href="#0"><i className="fab fa-google-plus" />Log in with Google</a>
          </li>
        </ul>
        <div className="or">
          <span>Or</span>
        </div>
        <form className="login-form">
          <div className="form-group mb-30">
            <label htmlFor="login-email"><i className="far fa-envelope" /></label>
            <input type="text" id="login-email" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <label htmlFor="login-pass"><i className="fas fa-lock" /></label>
            <input type="password" id="login-pass" placeholder="Password" />
            <span className="pass-type"><i className="fas fa-eye" /></span>
          </div>
          <div className="form-group">
            <a href="#0">Forgot Password?</a>
          </div>
          <div className="form-group mb-0">
            <button type="submit" className="custom-button">LOG IN</button>
          </div>
        </form>
      </div>
      <div className="right-side cl-white">
        <div className="section-header mb-0">
          <h3 className="title mt-0">NEW HERE?</h3>
          <p>Sign up and create your Account</p>
          <a href="sign-up.html" className="custom-button transparent">Sign Up</a>
        </div>
      </div>
    </div>
  </div>
</section>
        </>

    )
}

export default SignIn