const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center text-gray-600 text-sm">
        <p>© {currentYear} Emre Canogullari. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
