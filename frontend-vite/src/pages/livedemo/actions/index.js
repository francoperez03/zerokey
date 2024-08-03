import axios from "axios";

const url_server = 'http://localhost:3000/proofs'

export const postTest = async (json) => {
  try {
    console.log("Datos enviados:", json);

    // Realiza la solicitud POST con el JSON en el cuerpo
    const response = await axios.post(url_server, json);

    // La respuesta ya está en formato JSON
    const data = response.data;
    console.log("Respuesta del servidor:", data);

    return data; // Devuelve los datos si es necesario
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
    throw error; // Vuelve a lanzar el error si es necesario
  }
};
