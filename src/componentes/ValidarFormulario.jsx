import { useState } from "react";

function ValidarFormulario(  ) {

    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const extenciones_validas = ['.jpg', '.pdf', '.uml'];

    const handleFileChange = (event) => {

        const seleccion_archivo = event.target.files[0];

        if (seleccion_archivo) {

            const extencion_archivo = seleccion_archivo.name.split('.').pop();
            const extencion_valida = extenciones_validas.includes(`.${extencion_archivo.toLowerCase()}`);

            if (!extencion_valida) {
                setError('El archivo debe ser una imagen con extensión: .jpg, .jpeg, .png o .gif');
                setFile(null);
            } else {
                setError('');
                setFile(seleccion_archivo);
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (file) {
            console.log('Archivo válido:', file);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit" disabled={!file}>Enviar</button>
        </form>
    );
}

export default ValidarFormulario