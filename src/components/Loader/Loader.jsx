import React from 'react';
import { RotatingTriangles } from 'react-loader-spinner';

export const Loader = () => (
  <div style={styles.loaderContainer}>
    <RotatingTriangles
      visible={true}
      width={80}
      height={80}
      color="#fff"
    />
  </div>
);

const styles = {
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
};
