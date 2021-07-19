import fetchApi from "../fetch-api";

const saveBrandService = ({ id, name }) => {
  return fetchApi({
    url: `/brands${id ? `/${id}` : ""}`,
    method: id ? "PUT" : "POST",
    body: { name },
  });
};
export default saveBrandService;
