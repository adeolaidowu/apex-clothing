import React from 'react'
import { SpinnerOverlay, SpinnerContainer } from '../styled-components/withspinner.styles';

const WithSpinner = (WrappedComponent) => {
  const spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return spinner;
}

export default WithSpinner;