const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button>Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img
              src="./images/Flipkart.png"
              alt="Flipkart-logo"
              style={{ width: "48px", height: "30px" }}
            />
            <img
              src="./images/amazon.png"
              alt="amazon-logo"
              style={{ width: "33px" }}
            />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="./images/shoes.png"
          alt="shoes-image"
          style={{ width: "800px" }}
        />
      </div>
    </main>
  );
};
export default Hero;
