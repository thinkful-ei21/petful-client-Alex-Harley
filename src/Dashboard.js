import React from 'react';

export default function Dashboard(props) {
    return (
        <div class="Dashboard">
            <section class="cat">
                <header>
                    <h2 class="cat-name">{props.catToAdopt.name}</h2>
                    <img src={props.catToAdopt.imageURL} alt={props.catToAdopt.imageDescription}></img>
                </header>
                <main>
                    <h3>More about {props.catToAdopt.name}</h3>
                    <dl class="cat-attributes">
                        <dt class="term-sex">Sex</dt>
                        <dd class="def-sex">{props.catToAdopt.sex}</dd>
                        <dt class="term-age">Age</dt>
                        <dd class="def-age">{props.catToAdopt.age}</dd>
                        <dt class="term-breed">Breed</dt>
                        <dd class="def-breed">{props.catToAdopt.breed}</dd>
                        <dt class="term-story">Story</dt>
                        <dd class="def-story">{props.catToAdopt.story}</dd>
                    </dl>
                    <button>Adopt</button>
                </main>
            </section>
            <section class="dog">
                <header>
                    <h2 class="dog-name">{props.dogToAdopt.name}</h2>
                    <img src={props.dogToAdopt.imageURL} alt={props.dogToAdopt.imageDescription}></img>
                </header>
                <main>
                    <h3>More about {props.dogToAdopt.name}</h3>
                    <dl class="dog-attributes">
                        <dt class="term-sex">Sex</dt>
                        <dd class="def-sex">{props.dogToAdopt.sex}</dd>
                        <dt class="term-age">Age</dt>
                        <dd class="def-age">{props.dogToAdopt.age}</dd>
                        <dt class="term-breed">Breed</dt>
                        <dd class="def-breed">{props.dogToAdopt.breed}</dd>
                        <dt class="term-story">Story</dt>
                        <dd class="def-story">{props.dogToAdopt.story}</dd>
                    </dl>
                    <button>Adopt</button>
                </main>
            </section>
        </div>
    );
}