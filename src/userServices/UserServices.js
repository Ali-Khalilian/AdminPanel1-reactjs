import swal from "sweetalert";
import jpAxios from "../jpAxios";

export const setUserService = async (url,data) => {
    const res = await jpAxios.post(`/${url}`, data);
    if (res) {
        if(url == "users"){
            swal("User has been created successfully!", {
                icon: "success",
            });
        }else if(url == "posts"){
            swal("Post has been created successfully!", {
                icon: "success",
            });
        }else{
            swal("Item has been created successfully!", {
                icon: "success",
            });
        }
    }
};

export const updateUserService = async (url, data, userId) => {
    const res = await jpAxios.put(`/${url}/${userId}`, data);
    if (res) {
        if(url == "users"){
            swal("User has been changed successfully!", {
                icon: "success",
            });
        }else if(url == "posts"){
            swal("Post has been changed successfully!", {
                icon: "success",
            });
        }else{
            swal("Item has been changed successfully!", {
                icon: "success",
            });
        }
    }
};

export const deleteUserHandler = async (userId, type, setType, url) => {
    const res = await jpAxios({
        method: "DELETE",
        url: `/${url}/${userId}`
    });
    if (res.status == 200) {
        const newArr = type.filter(user => user.id != userId);
        setType(newArr);
        if (url == "posts") {
            swal("Post has been deleted successfully !", {
                icon: "success",
            });
        } else if (url == "users") {
            swal("User has been deleted successfully !", {
                icon: "success",
            });
        } else if (url == "todos") {
            swal("Todo has been deleted successfully !", {
                icon: "success",
            });
        }
    } else {
        swal("Error !!!", {
            icon: "error",
            button: "Ok"
        });
    }
};