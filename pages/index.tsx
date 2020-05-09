import Head from "next/head";

import styles from "./index.module.scss";

import Layout from "../components/Layout";

import { Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Layout>
      <div className={styles.cover}>
        <Row>
          <Col lg={8} xl={{ span: 4, offset: 2 }}>
            Hello
          </Col>
        </Row>
      </div>
    </Layout>
  );
}
