import React from 'react';
import cn from 'classname';
import styles from './input.css';

export default ({
  name,
  label,
  value,
  error,
  info,
  onChange,
  options,
}) => {
  const selectOptions = options.map(option => (
    <option
      key={encodeURIComponent(option.name)}
      value={option.value}
      date={option.date}
    >
      {option.name}
    </option>
  ));
  return (
    <div className={styles.inputContainer}>
      <label
        htmlFor={name}
      >
        {label}
      </label>
      <select
        className={cn(
          styles.selectitem,
          error ? styles.invalid : null,
        )}
        name={name}
        value={value}
        onChange={onChange}
      >
        {selectOptions}
      </select>
      {info && <small className={styles.text}>{info}</small>}
      {error && <div className={styles.invalidFeedback}>{error}</div>}
    </div>
  );
};
