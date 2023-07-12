import React from "react";
import PropTypes from "prop-types";
const Section = (props) => {
  return (
    <>
      <section id={props.id}>
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className={"col-lg-6 order-lg-" + (props.order ==="right" ? "2" : "1")}>
              <div className="p-5">
                <img
                  className="img-fluid rounded-circle"
                  src={props.image}
                  alt="..."
                />
              </div>
            </div>
            <div className={"col-lg-6 order-lg-" + (props.order ==="right" ? "1" : "2")}>
              <div className="p-5">
                <h2 className="display-4">{props.title}</h2>
                <p>{props.text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;

Section.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  
};
