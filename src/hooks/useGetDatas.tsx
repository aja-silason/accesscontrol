import { useAuth } from "@/context/AuthContext";
import { API_URL } from "@/utils/server/enpoint";
import axios from "axios";
import { useEffect, useState } from "react";


export const useGetDatas = (endpoint: string) => {

    const [data, setdata] = useState([]);

    const {user} = useAuth();

    useEffect(() => {
        getData();
    }, [])

    const authToken = `Bearer ${user.authorizationToken}`
    
    const getData = async () => {
        try {
            const { data } = await axios.get(`${API_URL}${endpoint}`, {
                headers: {
                Authorization: `Bearer ${user.authorizationToken}`
                }
            })
            setdata(data)

        } catch (error) {
            console.log("Epah ta mal", error)
        }

    }


    return {
        data
    }
}