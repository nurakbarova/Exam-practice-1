import React from "react";
import styles from "./ourservices.module.css";
import { Card } from "antd";
const { Meta } = Card;

const OurServices = () => {
  return (
    <>
      <div className={styles.OurServices}>
        <h3>Our Offered Services</h3>
        <p>Who are in extremely love with eco friendly system.</p>
      </div>
      <Card
        hoverable
        style={{
          width: 240,
          marginLeft: "20%",
        }}
        cover={
          <img
            alt="example"
            src="https://preview.colorlib.com/theme/security/img/s1.jpg.webp"
          />
        }
      >
        <Meta
          title="Basic & Common Repairs"
          description="
Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical."
        />
      </Card>
    </>
  );
};

export default OurServices;
