import axiosInstance from "../../shared/instance";

export const getUserProfile = async () => {
    try {
        const token = localStorage.getItem("token")
        const response = await axiosInstance.get("/user/profile", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}