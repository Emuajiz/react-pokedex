import React from 'react'
import Content from './Content'
import PokemonDetail from './PokemonDetail'
// import Detail from './Detail'
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Jumbotron} from 'react-bootstrap'

function Pokemon({match}){
    return (
        <PokemonDetail id={match.params.id}/>
    )
}

function ContentComponent(){
    return (
        <Content />
    )
}

function App(){
    return (
        <Router>
            <div className="container">
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a Pokedex
                    </p>
                </Jumbotron>
                {/* <Detail /> */}
                <Route exact path="/" component={ContentComponent} />
                <Route path="/pokemon/:id" component={Pokemon} />
            </div>
        </Router>
    )
}

export default App