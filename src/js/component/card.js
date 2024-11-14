import React from "react";
import {useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";


export const ContactCard = (props) => {
    const {actions} = useContext(Context);
    return (
        <div className="card p-2 mb-3 w-100" style={{"maxWidth": "540px"}}>
            <div className="row g-0">
                <div className="col-4 py-1">
                    <img src={"https://i.pravatar.cc/150?img=" + props.name} className="img-fluid rounded-circle" alt="..." />
                </div>
                <div className="col-6">
                    <div className="card-body text-start m-2">
                        <h5 className="card-title mb-3">{props.name}</h5>
                        <p className="card-text">{props.phone}</p>
                        <p className="card-text">{props.address}</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="col-2">
                    <i
                        onClick={async () => {
                            await actions.deleteContact(props.id)
                        }}
                        className="fa-solid fa-trash fa-sm delete"
                    >
                    </i>
                    <button 
                        onClick={async () => {
                            await actions.updateContact(props)
                        }}
                        className="btn btn-secondary"
                    >
                        Edit
                    </button>
                </div>
            </div>
        </div>
    )
}