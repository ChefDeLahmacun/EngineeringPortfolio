const About = () => {
  return (
    <section id="about" className="section-padding px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
          About Me
        </h2>
        
        {/* Centered Photo */}
        <div className="flex justify-center mb-8">
          <div className="w-48 h-48 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
            <img 
              src="/profile.jpg" 
              alt="Emre Canogullari" 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if image doesn't exist yet
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400"><p class="text-center px-4 text-sm">Add your photo as<br/>public/profile.jpg</p></div>';
              }}
            />
          </div>
        </div>

        {/* Bio Text */}
        <div className="max-w-3xl mx-auto space-y-4 text-gray-600 leading-relaxed mb-8">
          <p>
            I'm a dedicated Electrical & Electronic Engineering student at University of Southampton, 
            passionate about designing and building innovative electronic systems. My academic 
            journey has equipped me with strong theoretical knowledge and practical skills in 
            circuit design, embedded systems, and software development.
          </p>
          
          <p>
            Throughout my studies, I've worked on diverse projects ranging from hardware design 
            to software development, always focusing on creating practical solutions to real-world 
            problems. I enjoy the challenge of integrating hardware and software to build complete 
            systems.
          </p>
          
          <p>
            I'm currently seeking internship and graduate opportunities where I can apply my skills, 
            learn from experienced professionals, and contribute to meaningful engineering projects.
          </p>
        </div>
        
        {/* Key Interests */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3 text-center">Key Interests</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded border border-gray-200">Circuit Design</span>
              <span className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded border border-gray-200">Embedded Systems</span>
              <span className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded border border-gray-200">PCB Design</span>
              <span className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded border border-gray-200">Software Development</span>
              <span className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded border border-gray-200">Chip Design</span>
              <span className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded border border-gray-200">Electronics Repairs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
