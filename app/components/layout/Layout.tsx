import { FunctionComponent, PropsWithChildren } from "react";
import Head from "next/head";
import Header from "@/components/layout/header/Header";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import styles from "./Layout.module.scss";

const Layout: FunctionComponent<PropsWithChildren<{ title: string }>> = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main className={styles.main}>
                <Sidebar />
                <section className={styles.content}>
                    <Header />
                    <div className={styles.wrapper}>
                        {children}
                    </div>
                </section>
            </main>
        </>
    );
};

export default Layout;