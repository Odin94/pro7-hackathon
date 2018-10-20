import React from 'react';


const Textfield = ({headline, paragraph}) => {
   /* const testFunction = (event) => {

    } */

    return (
        <section className="text-field row">
            <h3>{ headline }</h3>
            <p>{ paragraph }</p>
        </section>
    )
}

export default Textfield;