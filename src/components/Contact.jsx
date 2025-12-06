import { HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section-padding px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
          Contact
        </h2>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="text-center mb-8">
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm currently seeking internship and graduate opportunities. 
              Feel free to reach out if you'd like to discuss potential 
              opportunities or collaborations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-3 text-gray-600">
                <HiMail className="text-primary-600" size={20} />
                <a href="mailto:emrecanogullari@gmail.com" className="hover:text-primary-600">
                  emrecanogullari@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <HiLocationMarker className="text-primary-600" size={20} />
                <span>Southampton, United Kingdom</span>
              </div>
            </div>

            {/* Email Button */}
            <div className="mb-8">
              <a
                href="mailto:emrecanogullari@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-lg hover:bg-primary-700 transition-all hover:shadow-lg"
              >
                <HiMail size={24} />
                Send Me an Email
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com/ChefDeLahmacun"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/emre-canogullari"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
