import React from 'react';
import {getImageUrl} from "../../utils";
import styles from "./Hero.module.css";


export const Hero = () => {
  return (
   <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>
            Hi, I'm Anand Mohan
        </h1>
        <p className={styles.description}>I,m Front-end developer along with 6 months Internship in MERN STACK. </p>
        
        <div>
          <a 
        href="mailto: anandmoha.7970@gmail.com"  className={styles.contactBtn} >Contact me</a>
        <a 
        href=" assets/hero/Anand-cv.pdf"  target="_blank" className={styles.contactBtnCv} >My Resume</a>
        </div>
    </div>
    <img src={getImageUrl("hero/herooImage.png")} alt="my dp"  className={styles.heroImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
   </section>
  );
};



