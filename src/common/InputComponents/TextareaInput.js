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
  row,
  onChange,
}) => (
  <div className={styles.inputContainer}>
    <label
      htmlFor={name}
    >
      {label}
    </label>
    <textarea
      className={cn(
        styles.textarea,
        error ? styles.invalid : null,
      )}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      rows={row}
    />
    {info && <small className={styles.text}>{info}</small>}
    {error && <div className={styles.invalidFeedback}>{error}</div>}
  </div>
);
