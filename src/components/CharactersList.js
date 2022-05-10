import React, { useState, useEffect } from 'react';
import { UseList } from './UseList';
import Character from './Character';


const CharactersList = (props) => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState("");
    // custom Query Hook for useLazyQuery, search results is sent as variables for filter
    const { SearchCharacters, error, data, loading, called } = UseList(results);

    // query to GraphQL when component mounts
    useEffect(() => {
        // execute the return function of useLazyQuery
        SearchCharacters();
      }, []);

    // search the character results
    const onSearch = (e) =>{
        e.preventDefault();
    
        setResults(search);
        SearchCharacters();
        setSearch('');
    };

    // clear the search results to show all data from query (home page)
    const homePage = () =>{
        setResults('');
        SearchCharacters();
    }

    return (
        <div>
            <header className="px-4 py-2 mb-2 d-flex flex-wrap justify-content-between align-items-center" style={{backgroundColor: 'rgb(34, 3, 128)'}}>
                <div className="d-flex flex-wrap justify-content-start align-items-center">
                    <button className="btn btn-light me-3">
                        <i className="material-icons" onClick={homePage}>home</i>
                    </button>

                    <h1 className="fw-bolder text-white">Rick and Morty GraphQL API</h1>
                </div>
                
                {/* search input */}
                <form onSubmit={onSearch}>
                    <input 
                        className="p-2 border border-light text-white rounded-pill bg-transparent" 
                        type="text" 
                        placeholder="Find Characters..." 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
            </header>

            {error && <div className="h1 m-2"> Something went wrong!</div>}

            {loading && <div className="h1 m-2"> Loading...</div>}

            {data && 
                <div className="d-flex flex-wrap justify-content-around">
                    {data.characters.results.map((character) => {
                        return (
                            <Character  key={character.id} character={character} />
                        );
                    })}
                </div>
            }
        </div>
    );
}

export default CharactersList;