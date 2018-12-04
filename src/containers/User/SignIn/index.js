import React from 'react';
import styles from "./signin.css";

const Signin = ({
  handleSubmit,
  username,
  password,
  placeholder1,
  placeholder2,
  handleChange,
}) => (
  <div className={styles.container}>
    <div className={styles.signin}>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <div className={styles.input}>
          <label>Username</label>
          <input
            value={username}
            type="text"
            placeholder={placeholder1}
            onChange={handleChange}
          />
        </div>
        <div className={styles.input}>
          <label>Password</label>
          <input
            value={password}
            type="password"
            placeholder={placeholder2}
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

export default Signin;
