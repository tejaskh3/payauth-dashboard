import React from 'react';
import styles from './Landing.module.css';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <hero className={styles.container}>
      <h1 className={styles.title}>
      Streamline authentication process with our cutting-edge PayAuth component.
      </h1>
      <p className={styles.description}>
        PayAuth is revolutionizing the way users authenticate online. With a
        simple and secure solution based on the Paymail protocol, we bring
        seamless authentication to the world of blockchain technology. Our
        powerful React component empowers developers to effortlessly integrate
        PayAuth into their applications, providing users with a hassle-free
        login experience. Whether you're a small business or a large enterprise,
        PayAuth's blockchain-agnostic approach ensures compatibility with
        various blockchain networks, allowing users to authenticate with their
        preferred blockchain-based wallets.
      </p>
      <div className={styles.buttonContainer}>
        <Link className={styles.link}>Get Started</Link>
        <span>npm i payauth</span>
      </div>
    </hero>
  );
};

export default Landing;
