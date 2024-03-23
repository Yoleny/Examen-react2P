import React, { useState } from "react";
import axios from "axios";

const Estudiantes = ({ agregarEstudiantes }) => {
  const [nombre, setNombre] = useState("");
  const [estudiante_id, setEstudianteId] = useState("");
  const [imagen, setImagen] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("estudiante_id", estudiante_id);
    formData.append("imagen", imagen);

    try {
      const res = await axios.post('http://localhost:3000/api/estudiante', formData);
      agregarEstudiantes(res.data);
    } catch (err) {
      console.log(err);
    }

    setNombre("");
    setEstudianteId("");
    setImagen(null);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Estudiante ID"
        value={estudiante_id}
        onChange={(e) => setEstudianteId(e.target.value)}
      />
      <input type="file" onChange={(e) => setImagen(e.target.files[0])} />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default Estudiantes;