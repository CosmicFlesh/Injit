 
 
 function Slider() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="slider-container">
      <button className="arrow left" onClick={scrollLeft}>
        ◀
      </button>
      <div className="slider" ref={sliderRef}>
        {[...Array(10)].map((_, i) => (
          <div className="product" key={i}>
            Producto {i + 1}
          </div>
        ))}
      </div>
      <button className="arrow right" onClick={scrollRight}>
        ▶
      </button>
    </div>
  );
}

export default Slider