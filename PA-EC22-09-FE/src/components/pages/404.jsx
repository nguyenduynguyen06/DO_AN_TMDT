import "./notfound.css"
import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <section className="page_404">
            <div className="container">
                <div className="row">
                <div className="col-sm-12">
                    <div className="col-sm-10 col-sm-offset-1 text-center">
                    <div className="four_zero_four_bg">
                        <h1 className="main_text text-center">404</h1>
                    </div>
                    <div className="content_box_404">
                        <h5 className="show-text h2">Bạn Không Có Quyền Truy Cập Trang Này</h5>
                        <p>Trang này Không Tồn Tại</p>
                        <a href="/" className="back-home">Go to Home</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    )
}

export default PageNotFound