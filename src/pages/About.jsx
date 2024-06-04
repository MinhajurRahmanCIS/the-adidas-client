const About = () => {
  return (
    <div className="hero min-h-screen p-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.spartoo.eu/branding/U10652_responsive/images/main.jpg"
          className="w-[300px] h-[500px] shadow-2xl"
        />
        <div className="p-5">
          <h1 className="text-7xl font-bold text-center md:text-start">About</h1>
          <p className="py-6 text-justify">
            Adidas is a leading global brand in the sportswear industry, known for its innovative products and iconic three-stripe logo. Founded in 1949 by Adolf "Adi" Dassler in Herzogenaurach, Germany, Adidas has grown into a powerhouse in athletic footwear, apparel, and accessories.

            The company's mission is to be the best sports brand in the world. Adidas focuses on performance-driven design, constantly pushing the boundaries of technology and style. The brand collaborates with top athletes and designers to create products that enhance performance and appeal to a broad audience.

            Adidas has a rich history of involvement in major sports events, including the Olympics and the FIFA World Cup. It is also known for its partnerships with high-profile athletes and fashion influencers, blending sports and lifestyle seamlessly.

            Sustainability is a key focus for Adidas, with initiatives aimed at reducing environmental impact and promoting ethical practices. The company's commitment to innovation and sustainability continues to drive its success and influence in the global market.

            Today, Adidas remains at the forefront of the sportswear industry, celebrated for its quality, style, and dedication to improving athletic performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
