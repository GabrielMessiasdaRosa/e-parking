import fetchApi from "../fetch-api";

const saveCarService = ({ id, name, color, plate }) => {
  return fetchApi({
    url: `/cars${id ? `/${id}` : ""}`,
    method: id ? "PUT" : "POST",
    body: { name, color, plate },
  });
};
export default saveCarService;
