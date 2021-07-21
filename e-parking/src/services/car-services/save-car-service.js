import fetchApi from "../fetch-api";

const saveCarService = ({ id, name, color, plate, brandId, brandName }) => {
  return fetchApi({
    url: `/cars${id ? `/${id}` : ""}`,
    method: id ? "PUT" : "POST",
    body: { name, color, plate, brandId, brandName},
  });
};
export default saveCarService;
