import style from './Characters.module.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Loading } from '../Loading/Loading';
import { ErrorIcon } from '../ErrorIcon/ErrorIcon';
import { Like } from '../Like/Like';
import { getCharacters } from '@services/characters.services';
import { Item } from '@interfaces/characters.interfaces';



export const Characters = () => {

    const [characters, setCharacters] = useState<Item[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            try{
                const data = await getCharacters()
                setCharacters(data)
            }catch (error){
                if(error instanceof Error){
                    setError(error.message);
                }
            } finally{
                setLoading(false);
            }
        })()
    }, [])

    return (
        <div>
            <h2 className={style.sub_title}>Dragon Ball Characters</h2>
            {
                error && <div className={style.div_load}><ErrorIcon /></div>
            }
            {
                loading && <div className={style.div_load}><Loading /></div>
            }
            <div className={style.cont}>
                {characters.map((character) => (
                    //Cada personaje debe tener un atributo unico, por eso usamos key
                    <div key={character.id} className={style.container}>
                        <figure>
                            <img src={character.image} alt={character.name} className={style.containerImg}></img>
                        </figure>
                        <div>
                            <h2>{character.name}</h2>
                            <h3>Gender: {character.gender}</h3>
                            <h3>Ki: {character.ki}</h3>
                        </div>
                        <div className={style.footer}>
                            <Like />
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}
