import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Character = (props) => {
    // get the character data from props
    const [character, setCharacter] = useState(props.character);

    return ( 
        <Link to={`/${character.id}`}>
            <div className="col d-flex flex-wrap justify-content-center mb-3" style={{marginTop:'50px'}}>
                <div className="character"> 
                    <div className="card border border-dark rounded-3 shadow-lg" style={{width: '24rem'}}>
                        {/* card image */}
                        <div className="d-flex align-items-center justify-content-center" style={{height:'400px', overflow:'hidden'}}>
                            <img 
                                src={character.image}
                                className="card-img-top" 
                                style={{maxWidth:'90%', maxHeight:'100%'}}
                                alt="..."
                            />
                        </div>

                        {/* card body */}
                        <div className="card-body text-center bg-light border-top border-dark">
                            <h4 className="fw-bolder d-flex justify-content-center align-items-center" style={{height:'50px'}}>
                                {character.name}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Character;