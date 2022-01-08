import { Layout } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import netflix from "../netflix-logo.png";
import styles from "./Nav.module.css";

const Nav = () => {
    const { Header } = Layout;
    const [scrolled,setScrolled] = useState(0);

    const onscroll = () => {
        setScrolled(window.scrollY);
    }

    window.addEventListener("scroll",onscroll);
    return (
        <Layout>
            <Header className={scrolled>50 ? styles.scrollnav : styles.nav}>
                <Link to="/">
                    <img className={styles.net} src={netflix} />
                </Link>
            </Header>
        </Layout>
    );
}

export default Nav;