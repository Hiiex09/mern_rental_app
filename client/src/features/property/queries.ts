import { useQuery } from "@tanstack/react-query"
import { apiProperties } from "./api"


export const useGetAllProperties = () => {
    return useQuery({
        queryKey: ["property"],
        queryFn: apiProperties.getAll
    })
}