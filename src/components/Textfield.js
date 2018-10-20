import React from 'react';

const Textfield = ({headline, paragraph}) => {
   /* const testFunction = (event) => {

    } */

    return (
        <section className="text-field">
            <h3>{ headline }</h3>
            <p>{ paragraph }</p>
        </section>
    )
}

Textfield.propTypes = {
    text: React.PropTypes.string.isRequired
}

export default Textfield;