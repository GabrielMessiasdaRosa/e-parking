import fetchApi from "./fetch-api";
const getBrandsIdService = ({id}) => {
        return fetchApi({url: `/brands/${id}`})
}
export default getBrandsIdService;




