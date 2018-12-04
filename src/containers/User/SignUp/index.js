import React from 'react';
import styles from "./signup.css";

const Signup = ({
  handleSubmit,
  email,
  username,
  password1,
  password2,
  placeholder1,
  placeholder2,
  placeholder3,
  placeholder4,
  handleChange,
}) => (
  <div className={styles.container}>
    <div className={styles.signup}>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <div className={styles.input}>
          <label>Email</label>
          <input
            value={email}
            type="email"
            placeholder={placeholder1}
            onChange={handleChange}
          />
        </div>
        <div className={styles.input}>
          <label>Username</label>
          <input
            value={username}
            type="text"
            placeholder={placeholder2}
            onChange={handleChange}
          />
        </div>
        <div className={styles.input}>
          <label>Password</label>
          <input
            value={password1}
            type="password"
            placeholder={placeholder3}
            onChange={handleChange}
          />
        </div>
        <div className={styles.input}>
          <label>Password repeat</label>
          <input
            value={password2}
            type="password"
            placeholder={placeholder4}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            className={styles.formSubmit}
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  
);

export default Signup;
