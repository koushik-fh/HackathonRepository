import axios from "axios"

export const LOGIN_NETWORK = {

    loginUser : (data) =>{
        const formData = new FormData();

        formData.append('emp_code', data);
       return axios.post("http://10.15.14.201/efms/api/validateemployee.php", formData)
    }


}