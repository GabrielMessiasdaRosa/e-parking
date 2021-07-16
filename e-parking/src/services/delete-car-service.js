import fetchApi from "./fetch-api";

const deleteCarService = ({ id }) => {
  return fetchApi({ url: `/cars/${id}`, method: "DELETE" });
};
export default deleteCarService;
