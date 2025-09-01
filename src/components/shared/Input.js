import React from 'react';
import styles from './Input.module.scss';

const Input = ({ label, type = 'text', value, onChange, placeholder, ...rest }) => (
  <div className={styles.inputGroup}>
    {label && <label className={styles.label}>{label}</label>}
    <input
      className={styles.input}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...rest}
    />
  </div>
);

export default Input;

