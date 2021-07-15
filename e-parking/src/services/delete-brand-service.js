import fetchApi from "./fetch-api";

const deleteBrandService = ({ id }) => {
  return fetchApi({ url: `/brands/${id}`, method: "DELETE" });
};
export default deleteBrandService;
