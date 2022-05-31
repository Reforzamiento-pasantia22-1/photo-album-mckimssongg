import { FETCH_IMAGES_SUCCESS, FETCH_IMAGES_FAILURE } from "../constants/index";
import  FetchData  from '../../services/Api'
import authUser from "../../utils/auth";

const getData = FetchData.getInstance();
const auth = authUser.getInstance()

const fetchImagesSuccess = (data) => {
    return {
        type: FETCH_IMAGES_SUCCESS,
        data
    }
}

const fetchImagesFailure = (error) => {
    return {
        type: FETCH_IMAGES_FAILURE,
        error
    }
}

// const fetchImages = () => {
//     return async (dispatch) => {
//         try {
//         const data = await getData.fetch(`albums/searchImage/?userId=${auth.dataUser.id}`);
//         dispatch({ type: FETCH_IMAGES_SUCCESS, data });
//         } catch (error) {
//         dispatch({ type: FETCH_IMAGES_FAILURE, error });
//         }
//     };
// }
