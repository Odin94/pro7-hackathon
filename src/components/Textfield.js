import React from 'react';


const Textfield = ({headline, paragraph}) => {
   /* const testFunction = (event) => {

    } */

    return (
        <section className="text-field" style={{marginTop: '5px'}}>
            <h3>{ headline }</h3>
            <p style={{fontSize: '14px'}}>{ paragraph }</p>
        </section>
    )
}

export default Textfield;