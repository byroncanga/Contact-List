import React from "react";

const CardProfile = () => {
  return (
    <div className="col-12 col-md-3">
      <div className="cards">
        <div className="imgBx">
          <img
            src="https://elcomercio.pe/resizer/GAPMWudC0zvATQTK-nZG_OoMApI=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/XDWLU6KHD5BCBNWJYES4SSSVGE.jpg"
            alt=""
          />
        </div>
        <div className="content">
          <div className="details">
            <h5 className="">Byron Canga</h5>
            <p className="text-secondary mb-2">byroncanga@gmail.com</p>

            <div>
              <p className="text-secondary">
                {" "}
                <i class="fa-solid fa-phone"></i> 0983363161
              </p>
              <p className="text-secondary mb-2 ">Calle Saraguro y Gualaceo</p>
            </div>
            <hr className="mb-3" />
            <div className="d-flex gap-4 justify-content-center">
              <button className="btn btn-secondary">Editar</button>
              <button className="btn btn-danger">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
