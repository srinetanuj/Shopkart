import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { BannerData } from '../Constants/Data';

const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Banner =()=>{
    return(
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
        >
           {BannerData.map((item)=>(
            <img src={item.url} alt="banner" style={{width:"100%",height:"280px"}} />
           ))}
        </Carousel>
    )
}

export default Banner;