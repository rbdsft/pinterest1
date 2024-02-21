import { useState } from "react";
import Logo1 from "../componets/logo1.jsx";
import Logo2 from "../componets/logo2.jsx";
import Logo3 from "../componets/logo3.jsx";
import { useNavigate } from "react-router-dom";
import { animalsData } from "../img.js";




export default function CrearPages() {
    const [showNavigation, setShowNavigation] = useState(false);
    const [query, setQuery] = useState("");
  const [image, setImage] = useState(null);
  const [filteredAnimals, setFilteredAnimals] = useState([]);

  const handleArrowClick = () => {
    setShowNavigation(!showNavigation);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const lowercasedQuery = query.toLowerCase();
    const newAnimals = animalsData.filter((animal) =>
      animal.name.toLowerCase().includes(lowercasedQuery)
    );
    if (image) {
      const newAnimal = { id: Date.now(), name: "New Ping", photo: image };
      setFilteredAnimals([newAnimal, ...newAnimals]);
      // reset the image state after adding it to the array
      setImage(null);
      setQuery("");
    } else {
      setFilteredAnimals(newAnimals);
    }
  };
  const handleImageUrl = (event) => {
    setImage(event.target.value);
  };

  return (
    <>
    <nav className="bg-white shadow-md p-4 flex items-center">
            <div className="flex items-center ml-5 w-[2%]">
              <Logo1 className="" />
            </div>
            <div className="flex items-center ml-2">
              <div className="">
                <a
                  href="#"
                  className="text-lg text-black font-medium hover:bg-black hover:text-white p-3 rounded-full duration-500"
                >
                  Inicio
                </a>
                <a
                  href="#"
                  className="text-lg text-black font-medium hover:bg-black hover:text-white p-3 rounded-full duration-500"
                >
                  Explorar
                </a>
                <a
                  onClick={() => navigate("/crear")}
                  className="text-lg text-black font-medium hover:bg-black hover:text-white p-3 rounded-full duration-500"
                >
                  Crear
                </a>
              </div>
              <form onSubmit={handleSubmit}>
  <input
    type="text"
    placeholder="Buscar"
    className="search ml-5 border text-black rounded-full bg-gray-200 hover:bg-gray-300 pl-14 px-2 py-2 focus:outline-none focus:ring focus:border-blue-300"
    value={query}
    onChange={(e) => setQuery(e.target.value.toLowerCase())}
  />
</form>
              <div className="flex items-center gap-7 ml-10">
                <Logo2 className="bg-gray-200 ml-10" />
                <Logo3 className="bg-gray-200 ml-10" />
                <div className="rounded-full text-white bg-orange-600 pl-2 pr-2">
                  k
                </div>
                <div className="relative">
                  <button
                    onClick={handleArrowClick}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {showNavigation && (
                    <div className="navigation absolute right-0 mt-5 bg-white border rounded shadow-md h-96">
                      <p className="text-black ml-4 mt-4 bre">Actualmente en</p>
                      <div className="hover:bg-gray-100 h-20 rounded-lg tre duration-500 p-2 w-[95%] ml-2 flex focus:outline-none focus:ring focus:border-blue-300">
                        <div className=" rounded-full text-white text-4xl bg-orange-600 text-center pt-2 pb-3 w-[23%]">
                          R
                        </div>
                        <div className="ml-3">
                          <p className="text-black text-xl ">Ricardo bruges</p>
                          <p className="text-gray-500 taxe">Personal</p>
                          <p className="text-gray-500 taxe">
                            Ricardobruges23@gmail.com
                          </p>
                        </div>
                      </div>
                      <p className="text-black ml-4 mt-4 bre">Tus cuentas</p>
                      <ul className="py-1 px-3">
                        <li className="text-black tre hover:bg-gray-300 hover:rounded-lg duration-500 p-2 font-medium focus:outline-none focus:ring focus:border-blue-300">
                          Agregar cuenta
                        </li>
                        <li className="text-black tre hover:bg-gray-300 hover:rounded-lg duration-500 p-2 font-medium focus:outline-none focus:ring focus:border-blue-300">
                          Convertir en cuenta de empresa
                        </li>
                      </ul>
                      <p className="text-black ml-4 mt-4 bre">Mas opciones</p>
                      <ul className="py-1 px-3">
                        <li className="text-black tre hover:bg-gray-300 hover:rounded-lg duration-500 p-2 font-medium focus:outline-none focus:ring focus:border-blue-300">
                          Configuracion
                        </li>
                        <li className="text-black tre hover:bg-gray-300 hover:rounded-lg duration-500 p-2 font-medium  focus:border-blue-300">
                          Mejora tu feed de inicio
                        </li>
                        <li className="text-black tre hover:bg-gray-300 hover:rounded-lg duration-500 p-2 font-medium  focus:border-blue-300">
                          Instalar la aplicacion de Windows
                        </li>
                        <li className="text-black tre hover:bg-gray-300 hover:rounded-lg duration-500 p-2 font-medium  focus:border-blue-300">
                          Tus derechos de privacidad
                        </li>
                        <li className="text-black tre hover:bg-gray-300 hover:rounded-lg duration-500 p-2 font-medium  focus:border-blue-300">
                          Obtener ayuda
                        </li>
                        <li className="text-black tre hover:bg-gray-300 hover:rounded-lg duration-500 p-2 font-medium  focus:border-blue-300">
                          Ver condiciones de servicio
                        </li>
                        <li className="text-black tre hover:bg-gray-300 hover:rounded-lg duration-500 p-2 font-medium  focus:border-blue-300">
                          Ver polílita de privacidad
                        </li>
                        <li className="text-black tre hover:bg-gray-300 hover:rounded-lg duration-500 p-2 font-medium  focus:border-blue-300">
                          Sé un valor beta
                        </li>
                        <li className="text-black tre hover:bg-gray-300 hover:rounded-lg duration-500 p-2 font-medium  focus:border-blue-300">
                          Salir
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </nav>
          <div  className="mt-8 flex">
          {filteredAnimals.map((image, index) => (
  <div key={image.id || index}>
    <img
      className="w-72 h-60 rounded-lg mt-2"
      key={index}
      src={image.photo}
      alt={image.name}
    />
  </div>
))}
          </div>
    <div>
        <h1 className="text-2xl ml-10">
            crear ping
        </h1>
        <hr/>
      <input type="file" accept="image/*" className="ml-10 w-52 h-52 mt-32 rounded-lg" placeholder="ingrese su archivo" onChange={handleImageUpload} />
      <input
        type="text"
        placeholder="O ingresa la URL de la imagen"
        onChange={handleImageUrl}
      />
      {image && <img src={image} alt="Imagen seleccionada" />}
    </div>
    </>
  );
}