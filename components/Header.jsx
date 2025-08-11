import { useState } from 'react';
import Link from 'next/link';
import iconMenu from '../public/assets/icons/icon-menu.svg';
import iconClose from '../public/assets/icons/icon-close.svg';
import Image from 'next/image';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navIcon, setNavIcon] = useState(iconMenu);
  const [isStatusOpen, setIsStatusOpen] = useState(false);

  const message = 'available';
  const availabilityStatuses = {
    available: {
      status: 'Available',
      message: 'Ready to begin immediately. Contact me now to get started!',
    },
    busy: {
      status: 'Busy',
      message:
        'Currently on a project, available after completion. Contact me to discuss starting afterward.',
    },
    vacation: {
      status: 'Vacation',
      message: `Will start upon return from vacation. Reach out, and we'll plan once I'm back!`,
    },
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setNavIcon(isNavOpen ? iconMenu : iconClose);
  };

  const toggleStatus = () => {
    setIsStatusOpen(!isStatusOpen);
  };

  return (
    <nav className="nav">
      <div className="container nav__container">
        <button
          className="nav__toggle"
          aria-controls="primary-nav"
          aria-expanded={isNavOpen}
          onClick={toggleNav}
        >
         

          <Image 
          src={navIcon.src} alt="Menu toggle open"
          width={32} height={32} />
        </button>

        <ul className="nav__list" id="primary-nav" aria-expanded={isNavOpen}>
          <li className="nav__list-item">
            <Link href="/" onClick={toggleNav} title="Home">
             Home
            </Link>
          </li>
          <li className="nav__list-item">
            <Link href="/about" onClick={toggleNav} title="About">
              About
            </Link>
          </li>
          <li className="nav__list-item">
            <Link href="/work" onClick={toggleNav} title="Work"> 
           Work
            </Link>
          </li>
          <li className="nav__list-item">
            <Link href="/contact" onClick={toggleNav} title="Contact">
            Contact
            </Link>
          </li>
        </ul>

        {/* <div className="nav__availability-status">
          <div
            className="nav__availability-status--toggle"
            aria-controls="availability-status-message"
            aria-expanded={isStatusOpen}
            onClick={toggleStatus}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                toggleStatus();
              }
            }}
          >
            <p className="body-s">Current Status:</p>
            <p
              className={
                'body-m color--' +
                availabilityStatuses[message].status.toLowerCase() +
                ' font-weight--medium'
              }
            >
              {availabilityStatuses[message].status}
            </p>
          </div>

          <div
            className="nav__availability-status--message"
            id="availability-status-message"
            aria-expanded={isStatusOpen}
            
          >
            <p className="nav__availability-status__title">
              Project Availability Status
            </p>

            <p
              className={
                'body-s color--' +
                availabilityStatuses[message].status.toLowerCase()
              }
            >
              {availabilityStatuses[message].message}
            </p>
          </div>
        </div> */}

<div className="nav__availability-status">
          <button
            className="nav__availability-status--toggle"
            aria-controls="availability-status-message"
            aria-expanded={isStatusOpen}
            aria-label={
              isStatusOpen
                ? 'Hide availability status'
                : 'Show availability status'
            }
            onClick={toggleStatus}
          >
            <p className="body-s">Current Status:</p>
            <p
              className={
                'body-m color--' +
                availabilityStatuses[message].status.toLowerCase() +
                ' font-weight--medium'
              }
            >
              {availabilityStatuses[message].status}
            </p>
          </button>

          <div
            id="availability-status-message"
            className={`nav__availability-status--message ${
              isStatusOpen ? 'is-open' : 'is-closed'
            }`}
            role="region"
            aria-hidden={!isStatusOpen}
          >
            <p className="nav__availability-status__title">
              Project Availability Status
            </p>

            <p
              className={
                'body-s color--' +
                availabilityStatuses[message].status.toLowerCase()
              }
            >
              {availabilityStatuses[message].message}
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
