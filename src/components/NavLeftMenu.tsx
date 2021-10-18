import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const checkActiveMenu = (pathname: string, link: string) => {
  if (pathname === link) {
    return true;
  }
  return false;
};

const NavLeftMenu = (props: any) => {
  return (
    <ul className="flex items-center flex-1 space-x-4 text-sm">
      <li className="mt-3 md:ml-16 md:mt-0">
        <Link to="/movie">
          <span
            className={`tracking-wide uppercase link-to
                    font-bold
                    ${props.location.pathname === '/movie' && 'text-orange-500'}
                `}
          >
            Movies
          </span>
        </Link>
      </li>
      <li className="mt-3 md:ml-16 md:mt-0">
        <Link to="/tv">
          <span
            className={`tracking-wide uppercase link-to
                    font-bold
                    ${props.location.pathname === '/tv' && 'text-orange-500'}
                `}
          >
            TV
          </span>
        </Link>
      </li>
      <li className="mt-3 md:ml-16 md:mt-0">
        <Link to="/person">
          <span className={`tracking-wide uppercase link-to font-bold `}>
            Person
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default withRouter(NavLeftMenu);
