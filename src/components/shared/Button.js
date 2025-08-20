import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, onClick, type = 'button', variant = 'primary', ...rest }) => (
  <button
    className={styles[variant] || styles.primary}
    onClick={onClick}
    type={type}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
