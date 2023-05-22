import React from "react";
import styles from "./some.module.css";
import { Card, Col,Row } from "antd";

const Some = () => {
  return (
    <section>
      <div className={styles.main_div}>
        <h3>Some Features that Made us Unique</h3>
        <p>Who are in extremely love with eco friendly system.</p>
      </div>
      <Row >
        <Col style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}} xs={2} sm={4} md={6} lg={8} xl={10}>
            <Card
            title="Card title"
            bordered={false}
            style={{
              width: 300,
            }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <Card
            title="Card title"
            bordered={false}
            style={{
              width: 300,
            }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card> <Card
            title="Card title"
            bordered={false}
            style={{
              width: 300,
            }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card> <Card
            title="Card title"
            bordered={false}
            style={{
              width: 300,
            }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card> <Card
            title="Card title"
            bordered={false}
            style={{
              width: 300,
            }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <Card
            title="Card title"
            bordered={false}
            style={{
              width: 300,
            }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        
     
        </Col>
      </Row>
    </section>
  );
};

export default Some;
