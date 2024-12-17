import { ICharacters } from "@interfaces/characters.interfaces";

export const getCharacters = async (page:number, limit:number) => {
    const response = await fetch(`https://dragonball-api.com/api/characters?page=${page}&limit=${limit}`);
    if (!response.ok) {
        throw new Error('Peticion API fallida');
    }
    const data: ICharacters = await response.json();
    return data.items;
}