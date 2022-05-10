import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { UseDetail } from './UseDetail';



const CharacterDetail = (props) => {
    // a Hool from react router to get the id from url
    const { id } = useParams();
    // custom Query Hook for useQuery
    const { error, data, loading } = UseDetail(id);

    return ( 
        <div>
            <header className="px-4 py-2 mb-2 d-flex flex-wrap justify-content-between align-items-center" style={{backgroundColor: 'rgb(34, 3, 128)'}}>
                <div className="d-flex flex-wrap justify-content-start align-items-center">
                    {/* back to default page */}
                    <Link to="/">
                        <button className="btn btn-light me-3">
                            <i className="material-icons">home</i>
                        </button>
                    </Link>

                    <h1 className="fw-bolder text-white">Rick and Morty GraphQL API</h1>
                </div>
            </header>

            {error && <div className="h1 m-2"> Something went wrong!</div>}

            {loading && <div className="h1 m-2"> Loading...</div>}

            {data && <div className="container-fluid my-2 text-center">
                <div className="d-flex justify-content-center my-3">
                    <div className="card border border-2 border-dark rounded-3" style={{width: '85%', boxShadow: '7px 7px 5px gray'}}>
                        <div className="row">
                            <div className="d-flex align-items-center col-md-6">
                                <img src={data.character.image} className="card-img-top ms-2" alt="user"/>
                            </div>

                            <div className="col-md-6">
                                <div className="card-body">
                                    <div className="row border-bottom border-dark">
                                        <div className="card-title">
                                            <span className="h1 fw-bolder">{data.character.name}</span>  ({data.character.gender})
                                        </div>
                                    </div>

                                    <div className="row" style={{height: '550px', overflow: 'auto'}}>
                                        <div>
                                            <h2 className="card-text fw-bold my-3">Episodes</h2>
                                            {data.character.episode.map((episode) => {
                                                return(
                                                    <div key={episode.episode}>
                                                        {episode.name} - <b>{episode.episode}</b>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>

        
    );
}

export default CharacterDetail;