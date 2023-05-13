import { useEffect, useRef, useState } from "react";
import MainSection from "./MainSection";

let apiURL = "https://api.github.com/users/";

function Card() {
	const [input, setInput] = useState("");
	const [data, setData] = useState({});
	let inputRef = useRef(null)

	const searchUser = (user) => {
		fetch(apiURL + user)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setData(data);
			})
			.catch((error) => console.log(error));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		searchUser(input);
	};

	useEffect(() => {
		inputRef.current.focus()
	})

	return (
		<div className="card">
			<header>
				<form onSubmit={handleSubmit}>
					<ion-icon name="search-outline"></ion-icon>
					<input
						type="text"
						placeholder="Search Github username..."
						value={input}
						onChange={(e) => setInput(e.target.value)}
						ref={inputRef}
					/>
					<button className="searchBtn">Search</button>
				</form>
			</header>
			<MainSection searchUser={searchUser} user={data} />
		</div>
	);
}

export default Card;
