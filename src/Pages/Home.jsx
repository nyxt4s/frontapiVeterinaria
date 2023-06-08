import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from '../Components/Tabla'

function Home() {
  const [familia, setFamilia] = useState();
  const [persona, setPersona] = useState(); 
  const [raza, setRaza] = useState(); 
  const [mascota, setMascota] = useState([])
  

  const [data, setData] = useState([]);


  axios
  .get('https://pruebatecnicaveterinariaapi.onrender.com/persona')
  .then(response => {
    setData(response.data.data);
  })
  .catch(error => {
    console.log(error);
  });


axios
  .get('https://pruebatecnicaveterinariaapi.onrender.com/mascota')
  .then(response => {
    setMascota(response.data.data);
  })
  .catch(error => {
    console.log(error);
  });

  console.log('mascota',mascota);
  return (
    
    <>
    <div>
        <div>
          <h1>Tabla de personas</h1>
          <Table data={data} />
        </div>


        <h1>Tabla de mascotas</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>nombre</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
              </tr>
            ))}
          </tbody>
         </table>
    </div>
    </>
  )
}

export default Home 
