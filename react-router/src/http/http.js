const BASE_URL = "https://dummyjson.com";

const GET = async (resource) => {
  const res = await fetch(`${BASE_URL}/${resource}`);
  const data = await res.json();

  return data;
};

export { GET };
