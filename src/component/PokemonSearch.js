import React from 'react'
import {ListGroup} from 'react-bootstrap'

function PokemonSearch(props) {
    return (
        <div>
            <p>Result of: {this.state.searchKey}</p>
            <ListGroup>
                {props.data}
            </ListGroup>
        </div>
    )
}

export default PokemonSearch