import React from 'react'
import {Armchair} from "lucide-react";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <>
      <div className={styles.card}>
        <h1>{props.user}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, labore. <Armchair /></p>
        <button>View Profile</button>
      </div>
    </>
  )
}

export default Card
