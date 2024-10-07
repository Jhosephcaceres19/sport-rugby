
import { useFormik } from 'formik';

// eslint-disable-next-line react/prop-types
const ValidarArchivo = ({ onSubmit }) => {
    const extenciones_validas = ['.jpg', '.pdf', '.uml'];

    const formik = useFormik({
        initialValues: {
            file: null,
        },
        validate: values => {
            const errors = {};
            if (!values.file) {
                
                errors.file = 'Se requiere un archivo.';
            } else {
                const extencion_archivo = values.file.name.split('.').pop();
                const extencion_valida = extenciones_validas.includes(`.${extencion_archivo.toLowerCase()}`);

                if (!extencion_valida) {
                    errors.file = 'El archivo debe ser una imagen o un archivo .pdf o .uml.';
                }
            }
            return errors;
        },
        onSubmit: values => {
            onSubmit(values.file); 
        },
    });

    const handleFileChange = (event) => {
        const selectedFile = event.currentTarget.files[0];
        formik.setFieldValue('file', selectedFile);
    };

    return (
        <div>
            <input
                type="file"
                onChange={handleFileChange}
            />
            {formik.errors.file ? (
                <p style={{ color: 'red' }}>{formik.errors.file}</p>
            ) : null}
            <button type="submit" onClick={formik.handleSubmit} disabled={!formik.values.file}>
                Enviar
            </button>
        </div>
    );
};

export default ValidarArchivo;
