import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditContact = () => {
  const params = useParams();

  const { store, actions } = useContext(Context);

  const contactFilter = store.agenda.find(
    (user) => user.id === parseInt(params.id)
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    store.contactId = params.id;
    const nombre = event.target.userName.value;

    if (nombre.trim() === "") {
      toast.error(`el nombre no puede estar vacio`, {
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

    actions.editContactApi(
      {
        full_name: event.target.userName.value,
        email: event.target.email.value,
        agenda_slug: "byroncanga",
        address: event.target.address.value,
        phone: event.target.phone.value,
      },
      params.id
    );
    toast.success(`Editado con exito - ${event.target.userName.value}`, {
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
      <div className="d-flex justify-content-center align-items-center">
        <form
          onSubmit={handleSubmit}
          className="col-12 col-md-6 bg-dark bg-opacity-10 p-5 shadow-lg"
        >
          <h4 className="mb-3">
            {" "}
            <i className="fa-solid fa-user-pen"></i> Edicion de Contacto
          </h4>
          <div className="mb-3">
            <label className="form-label ">Name</label>
            <input
              name="userName"
              type="text"
              className="form-control mb-3 border-0"
              defaultValue={contactFilter.full_name}
            />
            <label className="form-label">Email address</label>
            <input
              name="email"
              type="text"
              className="form-control mb-3 border-0"
              defaultValue={contactFilter.email}
            />

            <label className="form-label">Phone</label>
            <input
              name="phone"
              type="text"
              className="form-control mb-3 border-0"
              defaultValue={contactFilter.phone}
            />
            <label className="form-label">Address</label>
            <input
              name="address"
              type="text"
              className="form-control mb-4 border-0"
              defaultValue={contactFilter.address}
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

export default EditContact;
