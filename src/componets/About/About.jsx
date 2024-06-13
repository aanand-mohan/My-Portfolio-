import React from "react";
import {getImageUrl} from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
   <section className={styles.container} id="about">
    <h2 className={styles.title}>
        About
    </h2>
    <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt="me" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>
                    As a passionate Front End Developer, I thrive on creating seamless and visually appealing user experiences. My expertise lies at the intersection of design and technology, where I transform wireframes and mockups into interactive web interfaces.
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="cursor" />
                <div className={styles.aboutItemText}>
                <h3>UI Designer</h3>
                    <p>As a passionate UI Designer, I blend creativity, empathy, and technical skills to craft intuitive and visually captivating digital interfaces. My mission is to enhance user experiences by seamlessly connecting form and function.</p>
                </div>
            </li>
           
        </ul>
    </div>
   </section>
  )
};

 
