const fetchApi = async ({ url, method = "GET", body }) => {
  const response = await fetch(`http://localhost:8080${url}`, {
    headers: { "Content-Type": "application/json" },
    method,
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};
export default fetchApi;

