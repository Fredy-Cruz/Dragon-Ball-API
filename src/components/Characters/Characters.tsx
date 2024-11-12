import style from './Characters.module.css';
import { useEffect } from 'react';
import { useState } from 'react';

export interface ICharacters {
    items: Item[];
    meta:  Meta;
    links: Links;
}

export interface Item {
    id:          number;
    name:        string;
    ki:          string;
    maxKi:       string;
    race:        string;
    gender:      Gender;
    description: string;
    image:       string;
    affiliation: Affiliation;
    deletedAt:   null;
}

export enum Affiliation {
    ArmyOfFrieza = "Army of Frieza",
    Freelancer = "Freelancer",
    ZFighter = "Z Fighter",
}

export enum Gender {
    Female = "Female",
    Male = "Male",
}

export interface Links {
    first:    string;
    previous: string;
    next:     string;
    last:     string;
}

export interface Meta {
    totalItems:   number;
    itemCount:    number;
    itemsPerPage: number;
    totalPages:   number;
    currentPage:  number;
}


export const Characters = () => {

    const [characters, setCharacters] = useState<Item[]>([]);

    useEffect(() =>{
        const getCharacters = async () =>{
            const response = await fetch('https://dragonball-api.com/api/characters');
            const data:ICharacters = await response.json();
            setCharacters(data.items);
        }

        getCharacters();
    })

  return (
    <div>
        <h2>Dragon Ball Characters</h2>
        <div className={style.cont}>
            {characters.map((character) => (
                //Cada personaje debe tener un atributo unico, por eso usamos key
                <div key={character.id} className={style.container}>
                    <figure>
                        <img src={character.image} alt={character.name}  className={style.containerImg}></img>
                    </figure>
                    <div>
                        <h2>{character.name}</h2>
                        <h3>Gender: {character.gender}</h3>
                        <h3>Ki: {character.ki}</h3>
                    </div>
                </div>

            ))}
        </div>
    </div>
  )
}
