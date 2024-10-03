import React from "react";

export const Article = () => {
  return (
    <div className="p-5 mt-10 mx-auto sm:p-10 md:p-16 ">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img
          src="https://res.cloudinary.com/dcyr5qkhg/image/upload/v1727982180/461752157_377988012075132_9023246275303271490_n_yvn1bw.jpg"
          alt=""
          className=" h-60 sm:h-96 "
        />
        <div className="p-6 pb-12 m-4 bg-teal-500/70 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md ">
          <div className="space-y-2">
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-block text-2xl font-semibold sm:text-3xl"
            >
              Equipo UMLCode: Transformando Diagramas UML en Código
            </a>
            <p className="text-xs ">
              By
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline"
              >
                Teams UMSS
              </a>
            </p>
          </div>
          <div className="dark:text-gray-800">
            <p>Descubre UMLCode, la herramienta que transforma tus diagramas UML en código funcional con solo un clic. Olvídate de las complejidades del desarrollo: ahorra tiempo, reduce errores y acelera tu proceso de creación de software. ¡Únete a la revolución del desarrollo automatizado y lleva tus proyectos al siguiente nivel con UMLCode!</p>
          </div>
        </div>
      </div>
    </div>
  );
};
