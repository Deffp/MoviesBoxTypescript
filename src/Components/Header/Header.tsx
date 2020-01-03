import React from 'react';
import classNames from 'classnames/bind';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { IRouteProps } from '../../Interface/Interface';
import './Header.css';

const Header = (props: IRouteProps) => {
  const toggleActive = () => {
    const {
      match: { isExact, path },
    } = props;
    return isExact && path === '/favorite_movies_list' ? (
      <Link to="/">
        <button type="button" className={classNames({ buttonShowFavoriteMovies: true }, { active: true })}>
          <span className={classNames({ buttonText: true }, { active: true })}>
            <FontAwesomeIcon className="headerIcon" icon={faStar} />
            Show favorite
          </span>
        </button>
      </Link>
    ) : (
      <Link to="/favorite_movies_list">
        <button type="button" className={classNames({ buttonShowFavoriteMovies: true }, { active: false })}>
          <span className={classNames({ buttonText: true })}>
            <FontAwesomeIcon className="headerIcon" icon={faStar} />
            Show favorite
          </span>
        </button>
      </Link>
    );
  };

  return (
    <div className="header">
      <Link className="wrapperTitleLogo" to="/">
        <span className="titleLogo">
          Themovie
          <span className="boldText">box</span>
        </span>
      </Link>
      <div className="wrapperBtn">{toggleActive()}</div>
    </div>
  );
};

export default withRouter(Header);
