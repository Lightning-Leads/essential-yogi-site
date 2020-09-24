import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Layout.module.scss";

import { Container, Jumbotron, Button, Navbar, Nav } from "react-bootstrap";

const links = [
  {
    id: "free-wellness-consultation",
    label: "Which Are Right for Me?",
  },
  {
    id: "start-here",
    label: "Get Started",
  },
  {
    id: "essential-oil-education",
    label: "Blog Articles",
  },
  {
    id: "build-your-essential-oil-business",
    label: "Work with Me",
  },
  {
    id: "free-resources",
    label: "Free Resources",
  },
];

const checkRoute = (id) => {
  const currentRoute = useRouter().route;
  if (!currentRoute.includes(id)) {
    return false;
  }

  if (currentRoute === "/" && id === "") {
    return true;
  }

  if (currentRoute.includes(id) && id != "") {
    return true;
  }
};

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Essential Yogi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar expand="lg" className={styles.navbar}>
        <Container>
          <Navbar.Brand href="/" className={styles.flexBrand}>
            <img
              src="/logo.png"
              width="69"
              height="69"
              alt="React Bootstrap logo"
            />
            <div className={styles.brandTextContainer}>
              <h1 className={styles.brandTitle}>@essential.yogi</h1>
              <h2 className={styles.brandSubtitle}>
                Holistic Health & Abundance <br /> Empowerment with Essential
                Oils
              </h2>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {links.map(({ id, label }, i) => (
              <Nav.Item key={i}>
                <Link href={`/${id}`}>
                  <a className={`nav-link${checkRoute(id) ? " active" : ""}`}>
                    {label}
                  </a>
                </Link>
              </Nav.Item>
            ))}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
