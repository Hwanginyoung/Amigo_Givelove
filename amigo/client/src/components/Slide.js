import './Slide.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import money1 from '../image/money1.png';
import money2 from '../image/money2.jpg';
import money3 from '../image/money3.jpg';


function Slide(){
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
      };

    return (
        <Slider {...settings} id="slide">
            <img src={money1} className="money" alt="money1" />
            <img src={money2} className="money" alt="money2" />
            <img src={money3} className="money" alt="money3" />
        </Slider>
    );
}

export default Slide;