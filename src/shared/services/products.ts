import { axiosInstance } from "./instance";
import { ApiRoutes } from './constants';
import { Product } from "@prisma/client";

export const search = async (query: string) : Promise<Product[]> => {
    const { data } = await axiosInstance.get(ApiRoutes.SEARCH_PRODUCTS, { params: { query } });
    return data;
}