export default function Hero() {

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/30"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Discover Beautiful Places
          <br />
          <span className="text-blue-400">Around the World</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Embark on unforgettable journeys to the world's most breathtaking
          destinations. Let us help you create memories that will last a lifetime.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("#destinations")}
            className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg 
                       hover:bg-blue-700 transition-all duration-300 shadow-lg 
                       hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore Destinations
          </button>

          <button
            onClick={() => scrollToSection("#packages")}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-lg font-semibold rounded-lg 
                       border-2 border-white/30 hover:bg-white/20 transition-all duration-300
                       transform hover:-translate-y-1"
          >
            View Packages
          </button>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-white/70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

    </section>
  );
}