import style from './Characters.module.css';
/* import { useEffect } from 'react';*/
import { useState } from 'react';
import { Loading } from '../Loading/Loading';
import { ErrorIcon } from '../ErrorIcon/ErrorIcon';
/* import { Like } from '../Like/Like'; */
import { getCharacters } from '@services/characters.services';
/* import { Item } from '@interfaces/characters.interfaces'; */
import useSWR from 'swr';

export const Characters = () => {

    //Creando un UseState para el cambio de pagina
    const[page, setPage] = useState<number>(1)

    //SWR no permite enviar parametros, asi que hacemos esto
    const fetcher = () => getCharacters(page,10);

    //Utilizando SWR para manejar la data de la API
    const {data:characters, error, isLoading} = useSWR(`api/characters?page=${page}`, fetcher)
    //data: characters  es un alias

    //Cambio de Pagina
    const nextPage = () =>{
        if(page == 6){
            return setPage(page);
        }
        else{
            setPage(page+1);
        }
    }

    const PreviousPage = () =>{
        if(page == 1){
            return setPage(page);
        }
        else{
            setPage(page-1);
        }
    }

    /* const [characters, setCharacters] = useState<Item[]>([]);
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
    }, []) */

    return (
        <div className={style.main}>
            <h2 className={style.sub_title}>Dragon Ball Characters</h2>
            {
                error && <div className={style.div_load}><ErrorIcon /></div>
            }
            {
                isLoading && <div className={style.div_load}><Loading /></div>
            }
            <div className={style.cont}>
                {characters?.map((character) => (
                    //Cada personaje debe tener un atributo unico, por eso usamos key
                    <div key={character.id} className={style.container}>
                        <figure>
                            <img src={character.image} alt={character.name} className={style.containerImg}></img>
                        </figure>
                        <div className={style.character_info}>
                            <h2>{character.name}</h2>
                            <h3>Gender: {character.gender}</h3>
                            <h3>Ki: {character.ki}</h3>
                        </div>
                        {/* <div className={style.footer}>
                            <Like />
                        </div> */}
                    </div>

                ))}
            </div>

            <div className={style.pagination}>
                <button onClick={PreviousPage} className={style.paginationButton}>Previous</button>
                <span className={style.paginationText}>Page {page} / 6</span>
                <button onClick={nextPage} className={style.paginationButton}>Next</button>
            </div>
        </div>
    )
}
