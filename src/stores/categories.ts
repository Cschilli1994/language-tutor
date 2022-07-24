import { supabase } from "../supabase";
import { writable } from "svelte/store";

interface ICategories {
    id?: number
    name: string
}
export const categories = writable<ICategories[]>([])

export const fetchCategories = async (): Promise<any> => {
    const { data, error } = await supabase.from("categories").select();

    if (error) return console.log(error)

    return categories.set(data);
}

export const createCategory = async (category: ICategories) => {
    const { data, error } = await supabase.from("categories").insert([category])
    if (error) return console.log(error)
}
