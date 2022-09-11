import { FunctionComponent } from "react";
import Search from "@/components/layout/header/search/Search";
import IconsRight from "@/components/layout/header/icons-right/IconsRight";
import styles from "./Header.module.scss";

const Header: FunctionComponent = () => {
    return (
        <header className={styles.header}>
            <Search />
            <IconsRight />
        </header>
    );
};

export default Header;