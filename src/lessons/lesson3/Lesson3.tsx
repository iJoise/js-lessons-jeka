import React, {useState} from 'react';
import API, {ApiType} from './API';
import './lesson_3';
import s from "./Lesson3.module.scss";


const Lesson3 = () => {
   const [searchName, setSearchName] = useState('');
   const [serachResult, setSearchResult] = useState<ApiType[]>([]);
   const [searchNameByType, setSearchNameByType] = useState('');
   const [serachResultByType, setSerachResultByType] = useState('');

   const searchFilm = async () => {
      // try {
      //    const response = await API.searchFilmsByTitle(searchName);
      //    if (response.data.Response === 'True') {
      //       setSearchResult(response.data.Search)
      //    } else {
      //       setSearchResult(response.data.Error)
      //    }
      // } catch (err) {
      //    console.log(err)
      // }
      try {
         const {data} = await API.searchFilmsByTitle(searchName);
         const {Response, Search, Error} = data;
         if (Response === 'True') {
            setSearchResult(Search)
         } else {
            setSearchResult(Error)
         }
      } catch (err) {
         console.log(err)
      }

   };

   const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
      const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
      API.searchFilmsByType(searchNameByType, type)
   }

   return (
      <div>
         <h1>Promises</h1>
         <div>
            <h3><p>Search by name:</p></h3>
            <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
            <button onClick={searchFilm}>Search</button>
            <div className={s.menu}>
               {
                  Array.isArray(serachResult)
                  ? serachResult.map(f => {
                        return <Films
                           Poster={f.Poster}
                           Title={f.Title}
                           Type={f.Type}
                           Year={f.Year}
                           imdbID={f.imdbID}
                        />
                     })
                     : <div>{serachResult}</div>
               }
            </div>
         </div>

         <div>
            <h3><p>Search by type:</p></h3>
            <input type="text" value={searchNameByType} onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
            <button onClick={searchByType} data-t='movie'>Movie</button>
            <button onClick={searchByType} data-t='series'>Series</button>
            <div>
               {serachResultByType}
            </div>
         </div>
      </div>
   );
}
export default Lesson3;

type FilmsPropsType = {
   Poster: string
   Title: string
   Type: string
   Year: string
   imdbID: string
}

const Films: React.FC<FilmsPropsType> = (props) => {
   const {Type, Poster, Title, imdbID, Year} = props;
   return (
      <div className={s.menu__column}>
         <div className={s.menu__item}>
            <img src={Poster} alt="vegy"/>
            <h3 className={s.menu__item_subtitle}>{Title}</h3>
            <div className={s.menu__item_descr}>
               {Type}
            </div>
            <div className={s.menu__item_price}>
               <div className={s.menu__item_cost}>{Year}</div>
               <div className={s.menu__item_total}>{imdbID}</div>
            </div>
         </div>
      </div>
   )
}