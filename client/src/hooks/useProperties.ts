import { useGetAllProperties } from "../features/property/queries";

export const useProperties = () => {
    const propertiesQuery = useGetAllProperties();

    return {
        properties: propertiesQuery.data,
        isLoading: propertiesQuery.isLoading,
        error: propertiesQuery.error,
    }
}