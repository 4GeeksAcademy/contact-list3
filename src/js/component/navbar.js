import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 px-5 ">
			<div className="container col-12 col-md-8">
				<Link to="/">
					<span className="navbar-brand text-center mb-0 h1">Contact list</span>
				</Link>
				<div className="ml-auto">
					<Link to="/create">
						<button className="btn btn-success">Create contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
