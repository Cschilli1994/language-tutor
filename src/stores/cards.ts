import { supabase } from "../supabase";
import { writable } from "svelte/store";

interface ICard {
    english: string
    portuguese: string
    image: string
}
export const cards = writable<ICard[]>([])

export const fetchCards = async (category: number | null): Promise<any> => {
    const query = supabase.from("cards").select();
    if (category) query.eq("category", category)
    const {data, error} = await query;
    if (error) return console.log(error)

    return cards.set(data);
}

export const createCard = async (card: ICard) => {
    const { data, error } = await supabase.from("cards").insert([card])
    if (error) return console.log(error)
}
