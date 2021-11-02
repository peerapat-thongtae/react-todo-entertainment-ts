import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import DropdownProfile from './DropdownProfile';
import NavLeftMenu from './NavLeftMenu';
import SearchNavbar from './SearchNavbar';

const Header = (props: any) => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 ">
      <nav className="shadow-lg">
        <div className="container flex flex-col items-center justify-between px-4 py-6 mx-auto md:flex-row">
          <Link to="/">
            <span className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faFilm} size="lg" />
              <span className="text-2xl font-bold tracking-wide uppercase">
                Todozius
              </span>
            </span>
          </Link>
          <NavLeftMenu />
          <div className="relative z-50 mt-3 md:mt-0">
            <ul className="flex items-center flex-1 space-x-4 text-sm">
              <li className="mt-3 md:ml-6 md:mt-0">
                <SearchNavbar />
              </li>
              {props.user.isAuthenticated ? (
                <li className="mt-3 md:ml-6 md:mt-0">
                  <DropdownProfile profile={props.user.profile} />
                </li>
              ) : (
                <>
                  <li className="mt-3 md:ml-6 md:mt-0">
                    <Link to="signup">
                      <span className="text-gray-800 text-sm font-semibold px-4 py-1 hover:text-purple-600 hover:border-purple-600">
                        Sign up
                      </span>
                    </Link>
                  </li>
                  <li className="mt-3 md:ml-6 md:mt-0">
                    <Link to="/signin">
                      <span className="text-gray-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-purple-600 hover:border-purple-600">
                        Sign in
                      </span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
  errors: state.errors,
});

export default connect(mapStateToProps, {})(withRouter(Header));
