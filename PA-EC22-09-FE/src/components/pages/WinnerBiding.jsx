import Header from "../Header/Header";
import { Link } from "react-router-dom";

const WinnerBiding = () => {
    return (
        <>
            <Header />
            <div className="hero-section style-2">
  <div className="container">
    <ul className="breadcrumb">
      <li>
        <a href="index.html">Home</a>
      </li>
      <li>
        <a href="#0">Pages</a>
      </li>
      <li>
        <span>winning Bids</span>
      </li>
    </ul>
  </div>
  <div className="bg_img hero-bg bottom_center" data-background="./assets/images/banner/hero-bg.png" />
            </div>
            

     <section className="dashboard-section padding-bottom mt--240 mt-lg--440 pos-rel">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-sm-10 col-md-7 col-lg-4">
        <div className="dashboard-widget mb-30 mb-lg-0 sticky-menu">
          <div className="user">
            <div className="thumb-area">
              <div className="thumb">
                <img src="assets/images/dashboard/user.png" alt="user" />
              </div>
              <label htmlFor="profile-pic" className="profile-pic-edit"><i className="flaticon-pencil" /></label>
              <input type="file" id="profile-pic" className="d-none" />
            </div>
            <div className="content">
              <h5 className="title"><Link>Nguyen Van A</Link></h5>
              <span className="username"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="650f0a0d0b250208040c094b060a08">[email&nbsp;protected]</a></span>
            </div>
          </div>
          <ul className="dashboard-menu">
            <li>
              <Link className="active text-none"><i className="flaticon-dashboard" />Dashboard</Link>
            </li>
            <li>
              <Link className="text-none"><i className="flaticon-settings" />Personal Profile </Link>
            </li>
            <li>
              <Link className="text-none"><i className="flaticon-auction" />My Bids</Link>
            </li>
            <li>
              <Link className="text-none"><i className="flaticon-best-seller" />Winning Bids</Link>
            </li>
            <li>
              <Link className="text-none"><i className="flaticon-alarm" />My Alerts</Link>
            </li>
            <li>
              <Link className="text-none"><i className="flaticon-star" />My Favorites</Link>
            </li>
            <li>
              <Link className="text-none"><i className="flaticon-shake-hand" />Referrals</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="dash-bid-item dashboard-widget mb-40-60">
          <div className="header">
            <h4 className="title">Đồ đấu giá thành công</h4>
          </div>
          <div className="button-area justify-content-between">
            <form className="product-search">
              <input type="text" placeholder="Item Name" />
              <button type="submit"><i className="fas fa-search" /></button>
            </form>
            <div className="sort-winning-bid">
              <div className="item">Sort By : </div>
              <select name="sort-by" className="select-bar">
                <option value="all">All</option>
                <option value="name">Name</option>
                <option value="date">Date</option>
                <option value="type">Type</option>
                <option value="car">Car</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row mb-30-none justify-content-center">
          <div className="col-sm-10 col-md-6">
            <div className="auction-item-2">
              <div className="auction-thumb">
                <a className="text-none"><img src="assets/images/auction/car/auction-3.jpg" alt="car" /></a>
                <Link className="rating text-none"><i className="far fa-star" /></Link>
                <Link className="bid text-none"><i className="flaticon-auction" /></Link>
              </div>
              <div className="auction-content">
                <h6 className="title">
                  <Link className="text-none">2018 Hyundai Sonata</Link>
                </h6>
                <div className="bid-area">
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-auction" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Giá </div>
                      <div className="amount">$876.00</div>
                    </div>
                  </div>
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-money" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Mua Ngay</div>
                      <div className="amount">$5,00.00</div>
                    </div>
                  </div>
                </div>
                <div className="countdown-area">
                  <div className="countdown">
                    <div id="bid_counter26" />
                  </div>
                  <span className="total-bids">30 Người đấu giá</span>
                </div>
                <div className="text-center">
                  <a href="#0" className="custom-button">Thành Công</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-md-6">
            <div className="auction-item-2">
              <div className="auction-thumb">
                <a href="product-details.html"><img src="assets/images/auction/product/08.png" alt="car" /></a>
                <a href="#0" className="rating"><i className="far fa-star" /></a>
                <a href="#0" className="bid"><i className="flaticon-auction" /></a>
              </div>
              <div className="auction-content">
                <h6 className="title">
                  <a href="#0">2018 Nissan Versa, S</a>
                </h6>
                <div className="bid-area">
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-auction" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Giá </div>
                      <div className="amount">$876.00</div>
                    </div>
                  </div>
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-money" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Mua Ngay</div>
                      <div className="amount">$5,00.00</div>
                    </div>
                  </div>
                </div>
                <div className="countdown-area">
                  <div className="countdown">
                    <div id="bid_counter27" />
                  </div>
                  <span className="total-bids">30 Người đấu giá</span>
                </div>
                <div className="text-center">
                  <a href="#0" className="custom-button">Thành Công</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-md-6">
            <div className="auction-item-2">
              <div className="auction-thumb">
                <a href="product-details.html"><img src="assets/images/auction/product/04.png" alt="product" /></a>
                <a href="#0" className="rating"><i className="far fa-star" /></a>
                <a href="#0" className="bid"><i className="flaticon-auction" /></a>
              </div>
              <div className="auction-content">
                <h6 className="title">
                  <a href="#0">2019 Mercedes-Benz C, 300</a>
                </h6>
                <div className="bid-area">
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-auction" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Giá </div>
                      <div className="amount">$876.00</div>
                    </div>
                  </div>
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-money" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Mua Ngay</div>
                      <div className="amount">$5,00.00</div>
                    </div>
                  </div>
                </div>
                <div className="countdown-area">
                  <div className="countdown">
                    <div id="bid_counter1" />
                  </div>
                  <span className="total-bids">30 Người đấu giá</span>
                </div>
                <div className="text-center">
                  <a href="#0" className="custom-button">Thành Công</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-md-6">
            <div className="auction-item-2">
              <div className="auction-thumb">
                <a href="product-details.html"><img src="assets/images/auction/product/07.png" alt="product" /></a>
                <a href="#0" className="rating"><i className="far fa-star" /></a>
                <a href="#0" className="bid"><i className="flaticon-auction" /></a>
              </div>
              <div className="auction-content">
                <h6 className="title">
                  <a href="#0">2017 Harley-Davidson XG750,</a>
                </h6>
                <div className="bid-area">
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-auction" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Giá </div>
                      <div className="amount">$876.00</div>
                    </div>
                  </div>
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-money" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Mua Ngay</div>
                      <div className="amount">$5,00.00</div>
                    </div>
                  </div>
                </div>
                <div className="countdown-area">
                  <div className="countdown">
                    <div id="bid_counter2" />
                  </div>
                  <span className="total-bids">30 Người đấu giá</span>
                </div>
                <div className="text-center">
                  <a href="#0" className="custom-button">Thành Công</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}

export default WinnerBiding;