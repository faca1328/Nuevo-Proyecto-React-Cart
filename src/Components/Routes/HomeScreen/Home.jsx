import { HomeCards } from "./HomeCards";
import '../../../Styles/HomeScreenStyle.css'

export function Home() {
    return (
        <div className="home-scree-container">
            <div className="carousel-wrapper">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="../../img/electronics-carousel.jpg" alt="Tec" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="../../img/book-carousel.jpg" alt="Books" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="../../img/Beauty-carousel.jpg" alt="Beauty" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </a>
                </div>
            </div>
            
                <HomeCards />

            <div className="home-separate">
                <hr />
            </div>
            
        </div>
    )
}