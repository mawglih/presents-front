import React from 'react'
import cn from 'classname';
import SVGIcon from 'components/SVGIcon';
import styles from './input.css';

export default ({
  name,
  placeholder,
  value,
  label,
  error,
  icon,
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
    <div className={styles.inputGroup}>
      <div className={styles.icon}>
        <SVGIcon
          className={styles.iconImage}
          icon={icon}
        />
      </div>
      <div className={styles.inputText}>
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
      </div>
    </div>
    
    {info && <small className={styles.text}>{info}</small>}
    {error && <div className={styles.invalidFeedback}>{error}</div>}
  </div>
);
