import pic from '../assets/image/hero-img.png';

function HeroSection() {
  return (
    <section className="px-4 pt-10 md:px-8 md:pt-16 md:flex lg:px-16 lg:pt-24">
      <div>
        <p className="text-dark-green text-sm mb-3 md:text-lg md:mb-6 mb:mt-6 lg:text-2xl lg:mb-8">
          WELCOME TO SOLANA SOCIAL MEDIA.
        </p>
        <h1 className="text-white text-2xl font-semibold mb-3 md:text-4xl md:mb-6 lg:text-5xl lg:mb-6">
          Rock the world with masterpiece
        </h1>
        <p className="text-white text-sm md:text-lg lg:text-lg">
          the ultimate destination for Solana crypto enthusiasts to socialize
          and save!
        </p>
        <button className="text-white bg-light-purple mt-4 text-sm p-3 rounded-3xl md:mt-6 md:px-6 md:text-base lg:mt-8 lg:text-lg lg:px-10">
          <a href="/">Get Started</a>
        </button>
      </div>
      <div className="flex justify-center ">
        <img src={pic} alt="pic" className="" />
      </div>
    </section>
  );
}

export default HeroSection