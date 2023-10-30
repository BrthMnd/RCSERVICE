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

                <option value="C.C">Cédula de Ciudadanía</option>
                <option value="C.E">Cédula de Extranjería</option>
            </select>
            
        </>
    );
}

export default TypeDocumentInput;