import PropTypes from 'prop-types'
import React from "react";


//el el argumentos de Header, voy a hacer un destructurin con la props
// (porque es un objeto) y le voy a pasar las 4 propiedades que quiero que tenga el componente.
//y sustituiré la info de cada elemento por las props. por ejemplo, en h1, voy a sacar el texto que tiene y lo reeemplazaré por dos llaves y en su interior escribiré la props que ya definí ({titulo})

const Header = ({ titulo, subtitle, url, label, color}) => {
  return (
    <>
      <header className="masthead text-center text-white">
        <div className="masthead-content">
          <div className="container px-5">
            <h1 className="masthead-heading mb-0">{titulo}</h1>
            <h2 className="masthead-subheading mb-0">
            {subtitle}
            </h2>
            <a
              className={`btn btn-${color} btn-xl rounded-pill mt-5`}
              href={url}
            >
              {label}   
            </a>
          </div>
        </div>
        <div className="bg-circle-1 bg-circle"></div>
        <div className="bg-circle-2 bg-circle"></div>
        <div className="bg-circle-3 bg-circle"></div>
        <div className="bg-circle-4 bg-circle"></div>
      </header>
    </>
  );
};

export default Header;


//estas 4 propiedades las va a recibir el componente como argumento mediante props

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}