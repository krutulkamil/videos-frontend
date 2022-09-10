import { FunctionComponent } from "react";
import Link from "next/link";
import Menu from "@/components/layout/sidebar/menu/Menu";
import styles from "./Sidebar.module.scss";
import { menu } from "@/components/layout/sidebar/menu/menu.data";

const Sidebar: FunctionComponent = () => {
    // TODO: get profile

    return (
        <aside className={styles.sidebar}>
            <Link href="/">
                <a className={styles.logo}>
                    Videos 1.0
                </a>
            </Link>

            <Menu title="Menu" items={menu} />

            <div className={styles.copy}>
                © 2022 VIDEOS 1.0 for learning purposes.
            </div>
        </aside>
    );
};

export default Sidebar;