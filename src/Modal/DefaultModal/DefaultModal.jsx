import ModalContext from "contexts/Modal";
import { useContext, useRef } from "react";

import emailjs from '@emailjs/browser';

import "./DefaultModal.sass"

const DefaultModal = () => {

    const {show, handleClick} = useContext(ModalContext);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_rlo5dbj', 'template_iislufd', form.current, 'user_faZFrRHERAVdRdADdvl2l')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };


    const modalClass = (!show) ? `modal modal__hide` : `modal`;

    return (<div>
        <button onClick={(e) => handleClick(e)}>Nous contacter</button>
        <div className={modalClass}>
            <div className="modal-content">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="modal-header">
                        <h4>Nous contacter</h4>
                    </div>

                    <div className="modal-body">
                            <div>
                                <div className="form-group">
                                    <label htmlFor="name">Nom</label>
                                    <input type="text" name="name" id="name" placeholder="Nom"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Email"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Votre message</label>
                                <textarea name="message" id="message" placeholder="Votre message"></textarea>
                            </div>
                    </div>

                    <div className="modal-footer">
                        <button type="submit">Envoyer</button>
                        <button onClick={(e) => handleClick(e)}>Fermer</button>
                    </div>
                </form>
            </div>
        </div>
    </div>);
}

export default DefaultModal;