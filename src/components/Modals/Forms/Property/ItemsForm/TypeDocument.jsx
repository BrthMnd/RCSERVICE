import React, { useState, useEffect } from 'react';

function TypeDocumentInput({ onDocumentChange }) {
    const [tipoDocumento, setTypeDocument] = useState('');


    useEffect(() => {
        onDocumentChange(tipoDocumento); // Llama a la función proporcionada para pasar la 
    }, [tipoDocumento]);

    return (

        <>
            <select value={tipoDocumento}
                className="col-md-2 form-select"
                onChange={(e) => setTypeDocument(e.target.value)} >

                <option value="C.C" title='Cédula de Ciudadanía'>C.C</option>
                <option value="C.E" title='Cédula de Extranjería'>C.E</option>
            </select>
            
        </>
    );
}

export default TypeDocumentInput;