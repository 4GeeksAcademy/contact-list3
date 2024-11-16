import React, { useContext } from "react";
import { useNavigate} from 'react-router-dom';
import { Context } from "../store/appContext";
import "../../styles/index.css";


export const ContactCard = (props) => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    
    return (
        <div className="contacto ps-3 mb-4 w-100" style={{ "maxWidth": "540px" }}>
            <div className="row g-0">
                <div className="col-3 d-flex align-items-center ">
                    <img src={"https://i.pravatar.cc/150?img=" + props.id} className="img-fluid rounded-circle"/>
                </div>
                <div className="col-7">
                    <div className="card-body text-start m-2">
                        <h5 className="card-title mb-3 ms-1">{props.name}</h5>
                        <p className="m-1"><i className="fa-solid fa-phone me-2"></i>{props.phone}</p>
                        <p className="m-1"><i className="fa-solid fa-envelope me-2"></i>{props.email}</p>
                        <p className="m-1"><i className="fa-solid fa-location-dot me-2"></i> {props.address}</p>
                    </div>
                </div>
                <div className="col mt-4">
                    <i 
                        onClick={() => { 
                            navigate("/create", { state: { contact: props } }); 
                        }} 
                        className="fa-solid fa-pencil edit me-3"></i>
                    <i
                        onClick={async () => {
                            await actions.deleteContact(props.id)
                        }}
                        className="fa-solid fa-trash fa-sm edit me-2"
                    >
                    </i>
                </div>
            </div>
        </div>
    )
}