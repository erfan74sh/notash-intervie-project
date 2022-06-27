import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icons
import {
	faCircleCheck,
	faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
// constants
import { tasks } from "../../data/constants";
// style
import style from "./style.module.scss";

const Home = () => {
	return (
		<div className="content">
			<h2 className={style.title}>Tasks</h2>
			<ul className={style.items}>
				{tasks.map((task) => (
					<li className={style.item} key={task.id}>
						<div className={style.item__header}>
							<span
								className={`${style.item__header__status} ${
									task.status === "done"
										? style["status--done"]
										: style["status--not-done"]
								}`}
							>
								<FontAwesomeIcon
									icon={task.status === "done" ? faCircleCheck : faCircleXmark}
									size="lg"
								/>
							</span>
							<h3
								className={style.item__header__title}
							>{`${task.id}. ${task.title}`}</h3>
						</div>
						<p className={style.item__description}>
							{task.processDesscription}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
