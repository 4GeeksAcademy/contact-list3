import React, { useContext, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Context } from '../store/appContext';
import "../../styles/index.css";

export const CreateContact = () => {
    const location = useLocation();
    const { actions } = useContext(Context);
    const contact = location.state?.contact || {};
    const [newContact, setNewContact] = useState(contact);

    const navigate = useNavigate();

    const handleSave = async () => {
        if (!newContact.name || !newContact.email || !newContact.phone || !newContact.address) {
            alert("Some fields are missing"); 
            return;
        }
        if (contact && contact.id) {
            await actions.updateContact(newContact);
        } else {
            await actions.createContact(newContact);
        }
        navigate("/");
    };

    return (
        <div className="container col-8 col-md-3">
            <div className="mb-3">
                <label className="form-label"><b>Full Name</b></label>
                <input
                    onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                    value={newContact.name || ""}
                    type="text"
                    className="form-control shadow-none"
                    placeholder="Full Name"
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label"><b>Email</b></label>
                <input
                    onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
                    value={newContact.email || ""}
                    type="email"
                    className="form-control shadow-none"
                    placeholder="Email"
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label"><b>Phone</b></label>
                <input
                    onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                    value={newContact.phone || ""}
                    type="number"
                    className="form-control shadow-none"
                    placeholder="Phone"
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label"><b>Address</b></label>
                <input
                    onChange={(e) => setNewContact({ ...newContact, address: e.target.value })}
                    value={newContact.address || ""}
                    type="text"
                    className="form-control shadow-none"
                    placeholder="Address"
                    required
                />
            </div>
            <div className="mb-2">
                <button
                    onClick={handleSave}
                    type="submit"
                    className="btn btn-primary form-control shadow-none"
                >
                    Save
                </button>
            </div>
            <Link to="/">
                <span>Or get back to contacts</span>
            </Link>
        </div>
    );
};