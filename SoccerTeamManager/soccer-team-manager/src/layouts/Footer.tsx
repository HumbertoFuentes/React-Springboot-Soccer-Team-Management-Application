import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer mt-auto bg-light text-center text-lg-start">
      <div className="text-center p-3">
        © {new Date().getFullYear()} TeamTactix
      </div>
    </footer>
  );
};

export default Footer;