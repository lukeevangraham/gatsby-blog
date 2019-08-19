import React from 'react';
import PropTypes from 'prop-types';
import { WrapperOuter, WrapperInner } from './styled';
import Wave from './wave.jpg';

const styles = {
  wrapperStyles: {
    textAlign: 'center',
    color: 'white',
    backgroundImage: `url(${Wave})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  },
};

const Wrapper = ({
  children,
}) => (
  <WrapperOuter style={styles.wrapperStyles}>
    <WrapperInner>
      {children}
    </WrapperInner>
  </WrapperOuter>
);

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
  ]),
};

Wrapper.defaultProps = {
  children: null,
};

export default Wrapper;
