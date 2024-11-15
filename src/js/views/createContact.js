import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Context } from '../store/appContext';

export const CreateContact = () => {
    const location = useLocation();
    const { actions } = useContext(Context);
    const { contact } = location.state || {}
    const [newContact, setNewContact] = useState(contact || {});
    const navigate = useNavigate();

    useEffect(() => {
        if (contact) {
            setNewContact(contact);
        }
    }, [contact]);

    const handleSave = async () => {
        if (contact && contact.id) {
            await actions.updateContact(newContact);
        } else {
            await actions.createContact(newContact);
        }
        navigate("/");
    };

    return (
        <div className="container col-8 col-md-3">
            <div className="mb-3 form-outline">
                <label className="form-label"><b>Full Name</b></label>
                <input 
                    onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                    value={newContact.name || ""}
                    type="text" 
                    className="form-control" 
                    placeholder="Full Name"
                />
            </div>
            <div className="mb-3">
                <label><b>Email</b></label>
                <input 
                    onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
                    value={newContact.email || ""}
                    type="text" 
                    className="form-control" 
                    placeholder="Email" 
                />
            </div>
            <div className="mb-3">
                <label><b>Phone</b></label>
                <input 
                    onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                    value={newContact.phone || ""}
                    type="text" 
                    className="form-control" 
                    placeholder="Phone" 
                />
            </div>
            <div className="mb-3">
                <label><b>Address</b></label>
                <input 
                    onChange={(e) => setNewContact({ ...newContact, address: e.target.value })}
                    value={newContact.address || ""}
                    type="text" 
                    className="form-control" 
                    placeholder="Address" 
                />
            </div>
            <div className="mb-2">
                <button 
                    onClick={handleSave}
                    type="submit" 
                    className="btn btn-primary form-control"
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