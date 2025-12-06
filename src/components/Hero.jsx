const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          Emre Canogullari
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-6">
          Electrical & Electronic Engineering Student
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
          University of Southampton | Expected Graduation: July 2027
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="/Emre_Canogullari_CV.pdf"
            download
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
