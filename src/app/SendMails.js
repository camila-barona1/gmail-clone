import { Button } from "@material-ui/core";
import { Close, ErrorSharp } from "@material-ui/icons";
import React from "react";
import { useForm } from "react-hook-form";
import "./SendMails.css";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "../firebase";
import firebase from "firebase";


function SendMails() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (formData) => {
    db.collection('emails').add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),

    })
    console.log(formData);
    dispatch(closeSendMessage());
  };
  const dispatch = useDispatch();
  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>Nuevo Mensaje</h3>
        <Close
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          name="to"
          id=""
          placeholder="Para"
          ref={register({ required: true })}
        />
        {errors.to && (
          <p className="sendEmail__error">Este campo es requerido</p>
        )}
        <input
          type="text"
          name="subject"
          id=""
          placeholder="Asunto"
          ref={register({ required: true })}
        />
        {errors.subject && (
          <p className="sendEmail__error">Este campo es requerido</p>
        )}
        <input
          type="text"
          name="message"
          id=""
          placeholder="Mensaje..."
          className="sendEmail__masage"
          ref={register({ required: true })}
        />
        {errors.message && (
          <p className="sendEmail__error">Este campo es requerido</p>
        )}
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMails;
