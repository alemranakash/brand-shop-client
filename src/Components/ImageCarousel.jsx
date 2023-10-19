import Navbar from "./Navbar";

const ImageCarousel = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="carousel w-full h-56 md:h-96 lg:h-80 xl:h-96">
        <div id="slide1" className="carousel-item relative w-full h-3/4">
          <img src="https://i.ibb.co/Kq8gNPj/iphone-13.jpg" className="w-full" />
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-3/4">
          <img src="https://i.ibb.co/Kq8gNPj/iphone-13.jpg" className="w-full" />
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-3/4">
          <img src="https://i.ibb.co/Kq8gNPj/iphone-13.jpg" className="w-full" />
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
