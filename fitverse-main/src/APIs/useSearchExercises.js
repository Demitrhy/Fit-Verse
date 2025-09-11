import axios from "axios";

const dataOption = (muscleChoice) => {
  const options = {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${muscleChoice}`,
    qs: {
      limit: '100',
      offset: '0'
    },
    headers: {
      'x-rapidapi-key': 'b2d26080c6msh57cd06a97a41acfp1613afjsn1f1f3dbc272a',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };
  return options;
};

const getData = async (muscle) => {
  try {
    const response = await axios.request(dataOption(muscle));
    return response.data;
  } catch (error) {
    console.error(error?.response?.data || error.message);
  }
};

export default getData;
