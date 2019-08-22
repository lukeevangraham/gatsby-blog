import React from 'react';
import { Link } from 'gatsby';
import team2 from '../../resources/images/team2.jpg';
import 'font-awesome/css/font-awesome.min.css';
import './style.css';

const styles = {
  blackText: {
    color: '#000000',
    fontWeight: 700,
    fontSize: '40px',
    fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
  },
  name: {
    fontSize: '1.5rem',
    color: '#000000',
    fontWeight: 700,
    fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
  },
  roboSlab: {
    fontFamily: 'Roboto Slab',
    lineHeight: 1.75,
    color: '#6c757d',
    fontWeight: 400,
  },
};

const About = () => (
  <div className="bg-light">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase mt-5" style={styles.blackText}>About Me</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="team-member">
            <img src={team2} alt="" className="mx-auto rounded-circle" />
            <h4 style={styles.name} className="text-dark">Luke Graham</h4>
            <p style={styles.roboSlab} className="text-muted">Web Developer</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <Link to="https://github.com/lukeevangraham" target="_blank">
                  <i className="fa fa-github" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="https://stackoverflow.com/users/11031903/luke-graham" target="_blank">
                  <i className="fa fa-stack-overflow" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="https://www.linkedin.com/in/luke-graham-1865693/" target="_blank">
                  <i className="fa fa-linkedin" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mb-5 p-2">
          <div className="col-md-8 mx-auto new-about text-center">
            <p style={styles.roboSlab} className="large about-p text-muted">
              A husband and father I have been building websites since 1995. In
              addition to web development I help non-profits plan experiences
              where thoughtful people receive wisdom and camaraderie.
            </p>
            <p style={styles.roboSlab} className="large about-p text-muted">
              Organizations depend on me to deliver high-quality customer
              experiences. My positivity, attention to detail, and pro-action
              help to inspire people. I consider feedback a breakfast of
              champions and continually strive to increase my usefulness to
              others.
            </p>
            <p style={styles.roboSlab} className="large about-p text-muted">
              I value resourcefulness, optimism and dependability. I caught the
              travel-bug in 2016 and enjoy posting video highlights of my
              travels on YouTube. I have a great Instant Pot recipe for garlic
              chicken. My mission is to inspire others and help them enjoy life
              more.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
