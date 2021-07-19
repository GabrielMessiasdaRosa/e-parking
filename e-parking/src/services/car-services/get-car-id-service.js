import fetchApi from "../fetch-api";
const getCarIdService = ({id}) => {
        return fetchApi({url: `/cars/${id}`})
}
export default getCarIdService;



