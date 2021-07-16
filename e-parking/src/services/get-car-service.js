import fetchApi from "./fetch-api";

const getCarsService = () => {
  return fetchApi({ url: "/cars" });
};

export default getCarsService;
