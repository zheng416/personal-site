import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Jacky Zheng</h2>
        <p><a href="mailto:jackyzheng@yahoo.com">jackyzheng@yahoo.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Jacky. I geek out on innovative technologies, global trends,
        and new inspirations.
        I am currently a senior at <a href="https://purdue.edu/">Purdue University </a> studying
        Computer Science with a minor in Economics.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Jacky Zheng <Link to="/">jackyzheng.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
