import React from 'react'
import cn from 'classname';
import styles from './input.css';

export default ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled,
}) => (
  <div className={styles.inputContainer}>
    <label
      htmlFor={name}
    >
      {label}
    </label>
    <input
      type={type}
      className={cn(
        styles.input,
        error ? styles.invalid : null,
      )}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
    {info && <small className={styles.text}>{info}</small>}
    {error && <div className={styles.invalidFeedback}>{error}</div>}
  </div>
);
