import React from 'react';
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";


export const Contact = () => {
  return (
 <footer  id="contact" className={styles.container}>
    <div  className={styles.text}>
        <h2 >contact</h2>
        <p>Reach out to presonal contact</p>
    </div>
    <ul  className={styles.links}>
        <li  className={styles.link}>
            <img 
            src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
            <a href="mailto: anandmoha.7970@gmail.com">anandmoha.7970@gmail.com </a>
        </li>
        <li className={styles.link}>
            <img 
            src={getImageUrl("contact/linkedinIcon.png")} alt="Linkdin Icon" />
            <a href="https://www.linkedin.com/anand-mohan73">linkedin.com/anandmohan73 </a>
        </li>
        <li className={styles.link}>
            <img 
            src={getImageUrl("contact/whatsappIcon.png")} alt="Whatsapp Icon" />
            <a href=" https://wa.me/+917970906978 ">  +91-7970906978 </a>
        </li>
    </ul>
 </footer>
  );
};

