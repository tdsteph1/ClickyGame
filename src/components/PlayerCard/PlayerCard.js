import React from "react";
import "./PlayerCard.css"

const PlayerCard = props => (


	<div className="box"> 
       <img alt={props.name} src={props.image} onClick={() => props.photoClick(props.id)} />
	</div>

);

export default PlayerCard;