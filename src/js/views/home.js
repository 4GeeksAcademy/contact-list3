import React from "react";
import "../../styles/home.css";
import { useContext, useState } from "react";
import { Context } from "../store/appContext"
import {ContactCard} from "../component/card"

export const Home = () => {

	const { actions, store } = useContext(Context);

	return (
		<div className="container-fluid d-flex flex-column align-items-center mt-5">
			{
				store.contacts.map((item, index) => {
					return <ContactCard 
								key={index} 
								name={item.name} 
								phone={item.phone} 
								id={item.id}
								adress={item.address}
							/>
				})
			}
		</div>
	)
}

