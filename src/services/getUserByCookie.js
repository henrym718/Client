import axiosUnauthenticated from "../interceptors/axiosUnauthenticated"

export const getUserByCookie = async () => {
    const { data } = await axiosUnauthenticated.get("/user/getuserbycookie")
    return data
}

