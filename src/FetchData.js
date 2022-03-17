const API_URL = "https://www.breakingbadapi.com/api/characters?limit=10&offset=";
async function FetchData(page) {
  try {
    const response = await fetch(`${API_URL}${page * 10}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export default FetchData;