import dayjs from 'dayjs';
import React from 'react';
import tmdbSVG from './tmdbSVG.svg';

const Footer = () => {
  return (
    <footer className="footer bg-gray-200 pt-1">
      <div className="container mx-auto px-6">
        <div className="container mx-auto px-6">
          <div className="mt-4 flex flex-col items-center">
            <div className="text-center">
              <img src={tmdbSVG} width="200" height="100" />
              <p className="text-sm text-blue-700 font-bold mb-2">
                © {dayjs().format('YYYY')} by Welbz
              </p>
            </div>
            <span className="mb-4">
              A React based project to discover movies using TMDB API
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
