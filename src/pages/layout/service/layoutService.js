import axiosUnauthenticated from "../../../interceptors/axiosUnauthenticated"

class LayoutService {
    loginUser = async (credentials) => {
        const { data } = await axiosUnauthenticated.post("/auth/logincredentials", credentials);
        return data
    };

    registerUser = async (credentials) => {
        const { data } = await axiosUnauthenticated.post("/auth/registercredentials", credentials);
        return data
    };
}


export default new LayoutService();

