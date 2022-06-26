import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import style from "./style.module.scss";
const PageLayout = () => {
	return (
		<>
			<Header />
			<main className={style.container}>
				<Outlet />
			</main>
		</>
	);
};

export default PageLayout;
