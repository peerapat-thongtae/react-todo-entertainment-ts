import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const linkExternal = (type: string, external: string) => {
  switch (type) {
    case 'facebook':
      return {
        icon: faFacebook,
        link: `https://facebook.com/${external}`,
      };
    case 'instagram':
      return {
        icon: faInstagram,
        link: `https://instagram.com/${external}`,
      };
    case 'twitter':
      return {
        icon: faTwitter,
        link: `https://twitter.com/${external}`,
      };
    default:
      return {
        icon: faQuestion,
        link: `/`,
      };
  }
};
const SocialLink = ({ external, type }: any) => {
  const linkDetail = linkExternal(type, external);
  return external ? (
    <Link
      to={{
        pathname: `${linkDetail.link}`,
      }}
      target="_blank"
      className="text-gray-500 ml-2 hover:text-red-600"
    >
      <FontAwesomeIcon icon={linkDetail.icon} size="lg" />
    </Link>
  ) : (
    <div className="text-gray-500 cursor-not-allowed ml-2">
      <FontAwesomeIcon icon={linkDetail.icon} size="lg" />
    </div>
  );
};

export default SocialLink;
