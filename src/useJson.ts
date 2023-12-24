import {useEffect, useState} from "react";
import {JSON_URL} from "@src/constants";
import {Response} from "@src/types";
export const useJson = () => {
    const [response, setResponse] = useState<Response>({} as Response)
    useEffect(() => {
            fetch(JSON_URL)
                .then((res) => res.json())
                .then(setResponse)
                .catch()
        },
        []
    )
    return response
}
