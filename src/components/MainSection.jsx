import React, { useEffect } from "react";

function MainSection({ user, searchUser }) {
	useEffect(() => {
		searchUser("octocat");
	}, []);

	return (
		<main>
			{user.message ? (
				<p style="text-align: center;">Github user not found</p>
			) : (
				<>
					<div className="image">
						<img src={user.avatar_url} alt={user.name} />
					</div>
					<div className="info">
						<h1 className="name">{user.name}</h1>
						<p className="userLogin">#{user.login}</p>
						<p className="bio">
							{user.bio === null ? "This profile has no bio" : user.bio}
						</p>
						<div className="addInfo">
							<div className="repos">
								<p>Repos</p>
								<h2>{user.public_repos}</h2>
							</div>
							<div className="followers">
								<p>Followers</p>
								<h2>{user.followers}</h2>
							</div>
							<div className="following">
								<p>Following</p>
								<h2>{user.following}</h2>
							</div>
						</div>
						<div className="personalInfo">
							<div
								className={user.location === null ? "item unavailable" : "item"}
							>
								<ion-icon name="location"></ion-icon>
								<p>
									{user.location === null ? "Not Available" : user.location}
								</p>
							</div>
							<div
								className={
									user.twitter_username === null ? "item unavailable" : "item"
								}
							>
								<ion-icon name="logo-twitter"></ion-icon>
								<p>
									{user.twitter_username === null
										? "Not Available"
										: user.twitter_username}
								</p>
							</div>
							<div className={user.blog === "" ? "item unavailable" : "item"}>
								<ion-icon name="link"></ion-icon>
								<p>{user.blog === "" ? "Not Available" : user.blog}</p>
							</div>
							<div
								className={user.company === null ? "item unavailable" : "item"}
							>
								<ion-icon name="business"></ion-icon>
								<p>{user.company === null ? "Not Available" : user.company}</p>
							</div>
						</div>
					</div>
				</>
			)}
		</main>
	);
}

export default MainSection;
