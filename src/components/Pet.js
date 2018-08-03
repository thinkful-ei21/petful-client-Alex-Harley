import React from 'react';
import deleteCat from '../actions/cat'
import deleteDog from '../actions/dog'
import {connect} from 'react-redux'

export function Pet(props) {
    return (
    <section className="pet">
        <header>
            <h2 className="pet-name">{props.petToAdopt.name}</h2>
            <img src={props.petToAdopt.imageURL} alt={props.petToAdopt.imageDescription}></img>
        </header>
        <main>
            <h3>More about {props.petToAdopt.name}</h3>
            <dl className="pet-attributes">
                <dt className="term-sex">Sex</dt>
                <dd className="def-sex">{props.petToAdopt.sex}</dd>
                <dt className="term-age">Age</dt>
                <dd className="def-age">{props.petToAdopt.age}</dd>
                <dt className="term-breed">Breed</dt>
                <dd className="def-breed">{props.petToAdopt.breed}</dd>
                <dt className="term-story">Story</dt>
                <dd className="def-story">{props.petToAdopt.story}</dd>
            </dl>
            <button onClick={()=>props.adoptPet()}>Adopt</button>
        </main>
    </section>
    );
}

export default connect () (Pet)