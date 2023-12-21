import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

const CardProfile = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="conta">
      {store.agenda.map((contact) => {
        return (
          <div className="cards my-5" key={contact.id}>
            <div className="imgBx">
              <img
                src="https://img.freepik.com/foto-gratis/ilustracion-3d-adolescente-cara-graciosa-gafas_1142-50955.jpg?w=900&t=st=1703098221~exp=1703098821~hmac=393ddf18f9082fb8fadd94fa33ad161e8910573ed7467655edd7b4ec8b7ec043"
                alt=""
              />
            </div>
            <div className="content">
              <div className="details">
                <h5 className="">{contact.full_name}</h5>
                <p className="text-secondary mb-2">{contact.email}</p>

                <div>
                  <p className="text-secondary">
                    {" "}
                    <i className="fa-solid fa-phone"></i> {contact.phone}
                  </p>
                  <p className="text-secondary mb-2 ">{contact.address}</p>
                </div>
                <hr className="mb-3" />
                <div className="d-flex gap-4 justify-content-center">
                  <Link
                    className="buttons btn-edit"
                    to={`editcontact/${contact.id}`}
                  >
                    <i className="fa-regular fa-pen-to-square"></i>
                  </Link>
                  <div
                    onClick={() => actions.deleteContactApi(contact.id)}
                    className="buttons btn-delete"
                  >
                    <i className="fa-regular fa-trash-can"></i>
                  </div>
                  <a
                    href={`https://wa.me/${contact.phone}`}
                    target="_blank"
                    className="buttons btn-whatsapp"
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardProfile;
