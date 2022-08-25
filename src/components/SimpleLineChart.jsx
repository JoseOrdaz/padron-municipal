import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function SimpleLineChart() {
    const [isLoading, setIsLoading] = useState([]);
    const [datos, setDatos] = useState([]);
    const [datosHombres, setDatosHombres] = useState([]);
    const [datosMujeres, setDatosMujeres] = useState([]);

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
  
           console.log(datos)
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

        <LineChart
          width={1000}
          height={300}
          data={datos}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
 
          <CartesianGrid strokeDasharray="5 5" />
          {datos.map((s) => (
          <XAxis dataKey="Anyo" data={s.Data} name={s.Anyo} key={s.Anyo} allowDuplicatedCategory={false} />
          ))}
          <YAxis dataKey="Valor" />
          <YAxis />
          <Tooltip />
          <Legend />
          {datos.map((e) => (
          <Line type="monotone" dataKey="Valor" data={e.Data} name="Total habitantes" key={e.Valor} stroke="#82ca9d"  activeDot={{ r: 8 }}/>
          ))}
          {datosMujeres.map((m) => (
          <Line type="monotone" dataKey="Valor" data={m.Data} name="Mujeres" key={m.Valor} stroke="#8884d8"  activeDot={{ r: 8 }}/>
            
          ))}
          {datosHombres.map((h) => (
          <Line type="monotone" dataKey="Valor" data={h.Data} name="Hombres" key={h.Valor} stroke="#ffc658"  activeDot={{ r: 8 }}/>
            
          ))}
          
        </LineChart>
   
  );
}
