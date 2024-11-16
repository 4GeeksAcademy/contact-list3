	import React from "react";
	import "../../styles/home.css";
	import { useContext} from "react";
	import { Context } from "../store/appContext"
	import { ContactCard } from "../component/card"

	export const Home = () => {

		const {store } = useContext(Context);

		return (
			<div className="container-fluid d-flex flex-column align-items-center mt-5">
				{
					store.contacts.map((item) => {
						return <ContactCard
							key={item.id}
							name={item.name}
							phone={item.phone}
							id={item.id}
							address={item.address}
							email={item.email}
						/>
					})
				}
			</div>
		)
	}

