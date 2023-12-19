import React from "react";
import CardProfile from "../component/CardProfile.jsx";

export const Home = () => (
  <div>
    <section className="container">
      <div className="row">
        <CardProfile />
        <CardProfile />
        <CardProfile />
        <CardProfile />
      </div>
    </section>
  </div>
);
