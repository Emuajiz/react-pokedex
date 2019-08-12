import React from 'react'
import {ListGroup} from 'react-bootstrap'

function PokemonList(props) {
    return (
        <ListGroup>
            {props.data}
        </ListGroup>
    )
}

export default PokemonList