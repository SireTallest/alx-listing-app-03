import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center py-4 text-gray-600 text-sm">
      &copy; {new Date().getFullYear()} Your Company. All rights reserved.
    </footer>
  );
};

export default Footer;
