import React from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";


function MessageSender(){

	const handleSubmit = (e) => {
		e.preventDefault();
	}

	return <div className="messageSender">
		<div className="messageSender__top">
			<Avatar />
			<form>
				<input className="messageSender__input" placeholder={`What on your mind`}/>
				<input placeholder="image URL(Optional)" />
				<button onClick={handleSubmit} type="submit">
					Hidden Submit
				</button>
			</form>
		</div>

		<div className="messageSender__bottom">

		</div>
	</div>;
}

export default MessageSender;