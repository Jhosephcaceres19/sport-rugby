
import ValidarArchivo from './ValidarFormulario';

const FormularioPrueba = () => {
    const handleFileSubmission = (file) => {
        console.log('Archivo válido:', file);
        // enviarlo a un servidor
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <ValidarArchivo onSubmit={handleFileSubmission} />
        </form>
    );
};

export default FormularioPrueba;
