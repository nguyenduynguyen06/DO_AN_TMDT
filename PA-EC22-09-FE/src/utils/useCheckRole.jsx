import { useNavigate, useParams } from "react-router";
import axios from "../lib/axios";
import { useEffect, useState } from "react";
import { getDataLocalStorage } from "./ImageUpload";
import Login from "../components/pages/Login";
import PageNotFound from "../components/pages/404";

const useCheckRole = (Component) => ({ ...props }) => {
    const [isOk, setIsOk] = useState(false);
    const { id } = useParams();
    const user = getDataLocalStorage();

    useEffect(() => {
        if (user.role !== 'Coder') {
            setIsOk(true);
        } else {
            new Promise(async() => {
                await fetchCheck();
           }) 
        }
    },[id])

    const fetchCheck = async() => {
        try {
            const res = await axios.get(`/users/belong-to-department/${id}/${user._id}`);
            if (res.status === 200) {
                setIsOk(true);
            }
        } catch (error) {
            setIsOk(false);
        }
    }

    return (        
        isOk ? (
            <Component {...props}/>
        ) : (
                <PageNotFound/>
        )
        )
}

export default useCheckRole;