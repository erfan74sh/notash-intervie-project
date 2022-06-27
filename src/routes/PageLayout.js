import React from "react";
import { Outlet } from "react-router-dom";
// component
import Header from "../components/Header/Header";
// style
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
