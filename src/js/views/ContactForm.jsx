import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const { store, actions } = useContext(Context);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nombre = event.target.userName.value;

    if (nombre.trim() === "") {
      toast.error(`El nombre no puede estar vacio`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    actions.addContactApi({
      full_name: event.target.userName.value,
      email: event.target.email.value,
      agenda_slug: "byroncanga",
      address: event.target.address.value,
      phone: event.target.phone.value,
    });

    toast.success(`agregado - ${event.target.userName.value}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="row my-5 ">
      <div className="d-flex justify-content-center align-items-center  ">
        <form
          onSubmit={handleSubmit}
          className="col-12 col-md-6 bg-dark bg-opacity-10 p-5 shadow-lg"
        >
          <h4 className="mb-3">
            <i className="fa-solid fa-user-pen"></i> Crear Contacto
          </h4>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              name="userName"
              type="text"
              className="form-control mb-3 border-0  "
              placeholder="Add your fullname"
            />
            <label className="form-label">Email address</label>
            <input
              name="email"
              type="text"
              className="form-control mb-3 border-0"
              placeholder="xxxxxxo@xxxxxx.com"
            />

            <label className="form-label">Phone</label>
            <input
              name="phone"
              type="text"
              className="form-control mb-3 border-0"
              placeholder="+0000000000000"
            />
            <label className="form-label">Address</label>
            <input
              name="address"
              type="text"
              className="form-control mb-4 border-0"
              placeholder="Add tour address"
            />
          </div>
          <div className="d-flex justify-content-between mx-4">
            <Link className="btn btn-secondary" to={"/"}>
              <i className="fa-solid fa-angle-left"></i> back
            </Link>
            <button type="submit" className="btn btn-primary">
              <i className="fa-solid fa-paper-plane"></i> Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
