import Logo1 from "../componets/logo1.jsx";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { google } from "../firebase/auth"
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function App() {
  const navigate = useNavigate();
  const handleLogin = async () => {
    const result = await google();
    const token = await result.user.getIdToken(true);
    sessionStorage.setItem("token", JSON.stringify(token));
    navigate("/");
  };
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <nav className="mt-6 ml-7 flex justify-between ">
        <div>
          <ul className="flex items-end">
            <li>
              <a className="flex items-end">
                <Logo1 className="bg-red-700 w-2" />
                <h1 className="text-red-700 font-medium ml-2">Pinterest</h1>
              </a>
            </li>
            <li>
              <a className="hover:bg-gray-300 hover:rounded-lg font-medium duration-300 p-2 ml-3">
                Hoy
              </a>
            </li>
            <li>
              <a className="hover:bg-gray-300 hover:rounded-lg font-medium duration-300 p-2 ml-6">
                Explorar
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex items-center">
            <li>
              <a className="hover:underline font-medium duration-300 p-2 mr-3">
                Información
              </a>
            </li>
            <li>
              <a className="hover:underline font-medium duration-300 p-2 mr-3">
                Empresa
              </a>
            </li>
            <li>
              <a className="hover:underline font-medium duration-300 p-2 mr-3">
                Blog
              </a>
            </li>
            <li>
              <button onClick={handleLogin} className="bg-red-600 p-2 rounded-full ml-5  hover:bg-red-900 text-white font-medium">
                Iniciar sesión
              </button>
            </li>
            <li>
              <button onClick={handleLogin} className="bg-gray-200 p-2 rounded-full ml-5  hover:bg-gray-300 mr-4 font-medium">
                Regístrate
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <div>
          <h1 className="text-6xl text-center font-medium mt-16">
            Descubre tu próxima
          </h1>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide className="justify-between">
          <h1 className="text-blue-600 mt-7 text-6xl font-medium text-center">
            idea de atuendos de verano
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="text-teal-700 mt-7 text-6xl font-medium text-center">
            actividad para niños
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="text-amber-600 mt-7 text-6xl font-medium text-center">
            idea para una cena especial
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="text-green-700 mt-7 text-6xl font-medium text-center">
            {" "}
            Proyecto de bricolaje
          </h1>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg ref={progressCircle}></svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      <section className="bg-amber-200 h-screen text-center mt-36 ">
        <h1>Aquí te mostramos como funciona</h1>
        <div className="flex">
          <img
            className="w-[15%] h-[15%] ml-24 mt-52 relative"
            src="https://s.pinimg.com/webapp/left-ccce7532.png"
          />
          <img
            className="w-[20%] h-[60%] p mt-36 absolute ml-52"
            src="https://s.pinimg.com/webapp/center-2d76a691.png"
          />
          <button className="bg-white p-2 w-72 ml-40 h-24 text-2xl mt-72 absolute text-rose-900 font-bold rounded-full ">
            receta fácil con pollo
          </button>
          <div className="ml-28">
            <img
              className="w-[70%] mt-14 h-[40%] "
              src="https://s.pinimg.com/webapp/topRight-6902088a.png"
            />
            <img
              className="w-[70%] mt-24 h-[40%] "
              src="https://s.pinimg.com/webapp/right-2bd1edfc.png"
            />
          </div>
          <div className="mt-40">
            <h1 className="text-rose-600 text-6xl font-bold">Busca una idea</h1>
            <p className="text-rose-600 text-2xl w-[52%] ml-44 mt-6">
              ¿Qué quieres probar ahora? Piensa en algo que te guste, como
              “receta fácil con pollo”, y ve lo que encuentras.
            </p>
            <button className="bg-red-600 mt-5 rounded-full p-3 text-white">
              Explorar
            </button>
          </div>
        </div>
      </section>
      <section className="bg-teal-100 flex h-screen ">
        <div className="w-[50%] mt-36 text-center">
          <h1 className=" text-6xl w-[99%]  font-bold text-emerald-700">
            Guarda las ideas que te gusten
          </h1>
          <p className="text-2xl w-[62%] ml-36 mt-6 text-emerald-700">
            Recopila tus favoritos para volver a verlos después
          </p>
          <button className=" bg-red-600 mt-5 rounded-full p-3 text-white">
            Explorar
          </button>
        </div>
        <div className="mt-5 ml-5 w-[45%]">
          <img
            className="w-[25%] absolute ml-52"
            src="https://s.pinimg.com/webapp/future-home-vibes-adb19e98.png"
          />
          <h1 className="text-center font-bold ml-52 text-white text-5xl mt-10 leading-normal w-[60%] relative">
            Mi futuro hogar con helechos
          </h1>
          <div className="flex relative mt-[2%] ml-64 gap-2">
            <img
              className="w-[35%]"
              src="https://s.pinimg.com/webapp/future-home1-b8bc36e8.png"
            />
            <img
              className="w-[35%]"
              src="https://s.pinimg.com/webapp/future-home2-31c812cc.png"
            />
            <img
              className="w-[35%]"
              src="https://s.pinimg.com/webapp/future-home3-037e8d49.png"
            />
          </div>
          <img
            className="absolute w-[15%] ml-72 mt-24"
            src="https://s.pinimg.com/webapp/serve-my-drinks-4de83489.png"
          />
          <h1 className="text-white text-2xl font-medium relative ml-[65%] mt-52">
            Tragos con
          </h1>
        </div>
        <div className="ml-10">
          <img
            className="w-[15%] ml-20 h-[40%] absolute"
            src="https://s.pinimg.com/webapp/scandinavian-bedroom-696dfba5.png"
          />
          <h1 className="relative text-white text-2xl w-[10%] font-medium mt-28 ml-24">
            Mi dormitorio descavinado
          </h1>
          <img
            className="w-[11%] mt-28 ml-14 absolute"
            src="https://s.pinimg.com/webapp/deck-of-dreams-205a139e.png"
          />
          <h1 className="relative font-medium w-[30%] mt-52 ml-20 text-white">
            El deck de mis sueños
          </h1>
          <img
            className="absolute w-[15%] ml-7 mt-16"
            src="https://s.pinimg.com/webapp/bathroom-upgrade-02599fd4.png"
          />
          <h1 className="text-white relative text-2xl font-medium ml-14 mt-36">
            nuestra
          </h1>
        </div>
      </section>
      <section className="bg-rose-100 relative h-screen ">
        <div className="flex">
          <div>
            <img
              className="absolute w-[50%]"
              src="https://s.pinimg.com/webapp/shop-de8ddf10.png"
            />
            <img
              className="absolute w-[17%] h-[60%] ml-16 mt-28 rounded-lg"
              src="https://s.pinimg.com/webapp/creator-pin-img-3bed5463.png"
            />
            <img
              className="absolute w-[7%] mt-[33%] ml-8"
              src="https://s.pinimg.com/webapp/creator-avatar-262dfeba.png"
              alt=""
            />
            <p className="text-white font-medium absolute mt-[37%] ml-36">
              Scout the City
            </p>
            <p className="text-white absolute mt-[39%] ml-32 w-[10%]">
              56.7 mil seguidores
            </p>
          </div>
          <div className="ml-[60%] mt-14">
            <h1 className="text-6xl text-rose-600 text-center w-[80%] font-bold">
              Míralo, créalo, pruébalo, hazlo
            </h1>
            <p className="text-rose-600 w-[73%] text-center mt-10 text-2xl">
              Lo mejor de Pinterest es descubrir cosas e ideas nuevas de
              personas de todo el mundo.
            </p>
            <button className=" bg-red-600 mt-7 ml-44  rounded-full p-3 text-white">
              Explorar
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center bg-gray-100 rounded-lg">
          <h1 className=" text-2xl ml-[40%] font-medium w-[22%] mt-5">Te damos la bienvenida a pinterest</h1>
          <p className="w-[15%] ml-[43%]">Encuentra nuevas ideas para experimentar</p>
          <p className="text-left ml-[43%]">correo electrónico</p>
          <input className="border border-gray-600 rounded-lg p-3 hover:border-blue-500" placeholder="Correo electrónico"/>
          <p className="text-left  ml-[43%]">contraseña</p>
          <input className="border border-gray-600 rounded-lg p-3 hover:border-blue-500" placeholder="Crea una contraseña"/>
          <p className="text-left  ml-[43%]">Fecha de nacimiento</p>
          <input className="border border-gray-600 rounded-lg p-3 hover:border-blue-500" placeholder="dd/mm/aaaa"/>
          <button className="bg-red-600 hover:bg-red-900 rounded-full p-3 block text-white font-medium  ml-[46%] mt-3">Continuar</button>
          <p>o</p>
          <button className="bg-blue-600 p-4 rounded-full text-white font-medium">Continuar con facebook</button>
        </div>
      </section>
    </>
  );
}

export default App;
