import React from "react";
import Header from "../Header/Header";
import s from "./Main.module.scss";

export const MainWrap = ({ children }) => {
    return (
        <>
            <Header />
            <main className={s.main}>{children}</main>
        </>
    );
};
