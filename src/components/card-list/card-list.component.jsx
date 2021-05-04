import React from "react";
import { Card } from "../card/card.component.jsx";

export const CardList = (props) => {
	const monsters = props.monsters;
	return (
		<div className="card-list">
			{monsters.map((monster) => (
				<Card key={monster.id} monster={monster} />
			))}
		</div>
	);
};
