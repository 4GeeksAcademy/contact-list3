const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			//importar contacto
			getContacts: async () => {
				const resp = await fetch(`https://playground.4geeks.com/contact/agendas/manu`);
				const data = await resp.json();
				console.log(data);
				setStore({ contacts: data.contacts })
			},

			createUser: async () => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/manu`, {
						method: "POST",
						headers: { "Content-Type": "application/json"}
					})
					if (response.status == 201) {
						getActions().getContacts()
						return true
					}
				} catch (error) {
					console.log(error)
					return false
				}
			},

			createContact: async (newContact) => {
				const resp = await fetch(`https://playground.4geeks.com/contact/agendas/manu/contacts`, {
					method: 'POST',
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(newContact)
				});
				if (resp.ok) {
					await getActions().getContacts()
				}
			},

			
			deleteContact: async (id) => {
				const resp = await fetch(`https://playground.4geeks.com/contact/agendas/manu/contacts/` + id, {
					method: 'DELETE'
				});
				if (resp.ok) {
					await getActions().getContacts()
				}
			},
			updateContact: async (contact) => {
				const resp = await fetch(`https://playground.4geeks.com/contact/agendas/manu/contacts/` + contact.id, {
					method: 'PUT',
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contact)
				});
				if (resp.ok) {
					await getActions().getContacts()
				}
			}
		}
	};
}
	export default getState;
