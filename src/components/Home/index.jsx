import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Wrapper from '~/components/Common/Wrapper';
import SimpleWrapper from '~/components/Common/SimpleWrapper';
import PortfolioCard from '~/components/Common/PortfolioCard';
import About from '../About';
import { TITLE } from '~/constants';
import {
  Title,
  LeadIn,
} from './styled';
import '../../resources/bootstrap.min.css';
import './Home.css';


const Home = ({ portfolios }) => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="og:title" content={TITLE} />
    </Helmet>
    <Wrapper isHome>
      <div className="masthead">
        <div className="container">
          <div className="intro-text">
            <LeadIn className="intro-lead-in mg-5">Full-Stack Web Developer</LeadIn>
            <Title className="mt-n3">Luke Graham</Title>
          </div>
        </div>
      </div>
    </Wrapper>

    <About />

    {portfolios.length >= 4 ? (
      <SimpleWrapper>
        {portfolios
          .slice(0, 4)
          .map(({ node: { frontmatter: { path, title, images } } }) => {
            const image = Array.isArray(images) ? images[0] : null;

            if (image !== null) {
              return (
                <PortfolioCard key={path}>
                  <Link to={path}>
                    {image.includes('//') ? (
                      <img src={image} alt="portfolio" />
                    ) : (
                      <img
                        src={require(`~/resources/${image}`)}
                        alt="portfolio"
                      />
                    )}
                    <h6>{title}</h6>
                  </Link>
                </PortfolioCard>
              );
            }

            return (
              <PortfolioCard key={path}>
                <Link to={path}>
                  <h4>{title}</h4>
                </Link>
              </PortfolioCard>
            );
          })}
      </SimpleWrapper>
    ) : null}
  </>
);

Home.propTypes = {
  portfolios: PropTypes.arrayOf(PropTypes.shape({})),
};

Home.defaultProps = {
  portfolios: [],
};

export default Home;
