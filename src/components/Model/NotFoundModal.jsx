import React from "react";
import NotFound from "../../images/not-found.png";

const NotFoundModal = () => {
  return (
    <section className="jobs cant-find-modal-container">
      <article className="cant-find-modal">
        <p>Searching Job results</p>
        <img
          src={NotFound}
          className="cant-find-modal-img"
          alt="item not found img"
        />
      </article>
    </section>
  );
};

export default NotFoundModal;
