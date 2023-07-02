import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="text-center">
          &copy; {currentYear} Abdelrahman Mohammed. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
