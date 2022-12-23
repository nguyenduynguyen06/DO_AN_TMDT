const Banner = () => {
    return (
        <section className="banner-section bg_img" style={{ backgroundColor : '#693ff5' }}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-xl-6">
              <div className="banner-content cl-white">
                <h5 className="cate">Nơi diễn ra các cuộc đấu giá</h5>
                <h1 className="title"><span className="d-xl-block">Tìm Kiếm</span> Đấu Giá!</h1>
                <p>
                  
      Đấu giá trực tuyến là nơi mọi người đi mua sắm, bán và cho, đồng thời khám phá sự đa dạng và khả năng chi trả.
                </p>
                <a href="#0" className="custom-button yellow btn-large">Get Started</a>
              </div>
            </div>
            <div className="d-none d-lg-block col-lg-6">
              <div className="banner-thumb-2">
                <img src="assets/images/banner/banner-1.png" alt="banner" />
              </div>
            </div>
          </div>
        </div>
        <div className="banner-shape d-none d-lg-block">
          <img src="assets/css/img/banner-shape.png" alt="css" />
        </div>
      </section>
    )
}

export default Banner