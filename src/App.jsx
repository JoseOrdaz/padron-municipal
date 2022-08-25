import { useEffect, useState } from "react";
import "tw-elements";
import SimpleLineChart from "./components/SimpleLineChart";



export const App = () => {
  const [isLoading, setIsLoading] = useState([]);
  const [datos, setDatos] = useState([]);
  const [datosHombres, setDatosHombres] = useState([]);
  const [datosMujeres, setDatosMujeres] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      await fetch(
        `https://servicios.ine.es/wstempus/js/ES/DATOS_METADATAOPERACION/22?p=12&g1=19:932&g2=18:451&nult=20&page=1`
      )
        .then((response) => response.json())
        .then((datos) => {
          setDatos(datos);
          //  setData(data.Data[0].Valor);
          setIsLoading(false);

         
        });
    }
    fetchData();
  }, []);


  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      await fetch(
        `https://servicios.ine.es/wstempus/js/ES/DATOS_METADATAOPERACION/22?p=12&g1=19:932&g2=18:452&nult=20&page=1`
      )
        .then((response) => response.json())
        .then((datosHombres) => {
          setDatosHombres(datosHombres);
          //  setData(data.Data[0].Valor);
          setIsLoading(false);

        });
    }
    fetchData();
  }, []);

  
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      await fetch(
        `https://servicios.ine.es/wstempus/js/ES/DATOS_METADATAOPERACION/22?p=12&g1=19:932&g2=18:453&nult=20&page=1`
      )
        .then((response) => response.json())
        .then((datosMujeres) => {
          setDatosMujeres(datosMujeres);
          //  setData(data.Data[0].Valor);
          setIsLoading(false);

        });
    }
    fetchData();
  }, []);


  return (
    <>
          
    <div className=" bg-white max-w-6xl mt-10 p-10 shadow rounded-xl items-center relative mb-10 m-auto min-h-screen">
          <div
        id="total-habitantes"
        className="max-w-7xl mx-auto mb-5"
      >
        <div className="accordion" id="accordionExample">
          <div className="accordion-item bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="headingOne">
              <button
                className="
   accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Nº Total de habitantes del municipio por años
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body py-4 px-5">
                {datos.map((dato) => (
                  <div
                    key={dato.Data[0].Valor}
                    className="overflow-x-auto relative"
                  >
                    <table className="w-full text-sm border rounded-md bg-gray-800 text-center text-gray-500 dark:text-gray-400">
                      <thead className="text-xs rounded-md text-white uppercase bg-gray-800">
                        <tr>
                          <th scope="col" className="py-3 px-6">
                            Año
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Periodo
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Municipio
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Numero de habitantes
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {dato.Data.map((dato) => (
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <>
                              <td className="py-4 px-6">
                                <p>{dato.Anyo}</p>
                              </td>
                              <td className="py-4 px-6">
                                <p>Anual</p>
                              </td>

                              <td className="py-4 px-6">
                                <p>Burjassot</p>
                              </td>
                              <td className="py-4 px-6">
                                <p>{dato.Valor}</p>
                              </td>
                            </>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="total-habitantes-mujeres"
        className="max-w-7xl mx-auto mb-5"
      >
        <div class="accordion-item bg-white border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingTwo">
      <button class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
        aria-controls="collapseTwo">
        Nº Total de mujeres del municipio por años
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample">
        <div className="accordion-body py-4 px-5">
                {datosMujeres.map((dato) => (
                  <div
                    key={dato.Data[0].Valor}
                    className="overflow-x-auto relative"
                  >
                    <table className="w-full text-sm border rounded-md bg-gray-800 text-center text-gray-500 dark:text-gray-400">
                      <thead className="text-xs rounded-md text-white uppercase bg-gray-800">
                        <tr>
                          <th scope="col" className="py-3 px-6">
                            Año
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Periodo
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Municipio
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Numero de habitantes
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {dato.Data.map((dato) => (
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <>
                              <td className="py-4 px-6">
                                <p>{dato.Anyo}</p>
                              </td>
                              <td className="py-4 px-6">
                                <p>Anual</p>
                              </td>

                              <td className="py-4 px-6">
                                <p>Burjassot</p>
                              </td>
                              <td className="py-4 px-6">
                                <p>{dato.Valor}</p>
                              </td>
                            </>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
    </div>
  </div>
      </div>
      <div
        id="total-habitantes-hombres"
        className="max-w-7xl mx-auto mb-5"
      >
        <div class="accordion-item bg-white border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingThree">
      <button class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
        aria-controls="collapseTwo">
        Nº Total de hombres del municipio por años
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
      data-bs-parent="#accordionExample">
        <div className="accordion-body py-4 px-5">
                {datosHombres.map((dato) => (
                  <div
                    key={dato.Data[0].Valor}
                    className="overflow-x-auto relative"
                  >
                    <table className="w-full text-sm border rounded-md bg-gray-800 text-center text-gray-500 dark:text-gray-400">
                      <thead className="text-xs rounded-md text-white uppercase bg-gray-800">
                        <tr>
                          <th scope="col" className="py-3 px-6">
                            Año
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Periodo
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Municipio
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Numero de habitantes
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {dato.Data.map((dato) => (
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <>
                              <td className="py-4 px-6">
                                <p>{dato.Anyo}</p>
                              </td>
                              <td className="py-4 px-6">
                                <p>Anual</p>
                              </td>

                              <td className="py-4 px-6">
                                <p>Burjassot</p>
                              </td>
                              <td className="py-4 px-6">
                                <p>{dato.Valor}</p>
                              </td>
                            </>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
    </div>
    
  </div>
      </div>
      <>
      <div className=" max-w-2xl mx-auto lg:max-w-none">
    <div className="relative pt-8 pb-10 px-4 sm:px-6 lg:px-8 mx-auto md:grid items-center">
      <h1 className="text-gray-600 font-black text-4xl text-center ">
        Gráfica de número de habitantes
      </h1>
      <p className="mt-4 text-center text-xl text-gray-500">
        Encuentra información del mundo de la informática.
      </p>
    </div>
    </div>
      </>
      <SimpleLineChart></SimpleLineChart>
      </div>
      
    </>


  );


};

export default App;
