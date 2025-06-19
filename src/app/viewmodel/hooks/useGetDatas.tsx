import { useAuth } from "@/app/viewmodel/context/AuthContext";
import { API_URL } from "@/app/viewmodel/utils/server/enpoint";
import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr"


export const useGetDatas = (endpoint: string | any) => {

    //const [data, setdata] = useState([]);

    //if(!endpoint) return {data: null, error: null, status: null}

    const { user } = useAuth();

    const fetcher = async (url: string) => {
        const { data } = await axios.get(`${API_URL}${endpoint}`, {
            headers: {
                Authorization: `Bearer ${user?.authorizationToken}`
            }
        })

        return data;
    }

    const {data, error} = useSWR(`${API_URL}${endpoint}`, fetcher);

    const status = error?.status;

    return { data, error, status}
}

/*import { useAuth } from "@/app/viewmodel/context/AuthContext";
import { API_URL } from "@/app/viewmodel/utils/server/enpoint";
import axios from "axios";
import { useEffect, useState } from "react";


export const useGetDatas = (endpoint: string | any) => {

    const [data, setdata] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const { data } = await axios.get(`${API_URL}${endpoint}`, {
                headers: {
                    Authorization: `Bearer ${user?.authorizationToken}`
                }
            })
            setdata(data)

        } catch (error) {
            console.log("Epah ta mal isso aqui", error)
        }

    }

    const fetcher = async (url: string) => {
        const { data } = await axios.get(`${API_URL}${endpoint}`, {
            headers: {
                Authorization: `Bearer ${user?.authorizationToken}`
            }
        })

        return data;
    }

    const {data, error} = useSWR(`${API_URL}${endpoint}`, fetcher);

    const status = error?.status;


    return {data,
        error,
        status
    }
}*/