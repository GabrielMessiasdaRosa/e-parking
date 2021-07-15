import fetchApi from "./fetch-api";

const getBrandsService = () => {
  return fetchApi({ url: "/brands" });
};

export default getBrandsService;
