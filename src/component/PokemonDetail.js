import React from 'react'
import {ListGroup, Image, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function PokemonDetailComponent(props) {
    return (
        <div>
            {/* {console.log(props)} */}
            <h1>{props.data.name}</h1>
            <Image src={props.data.sprites.front_default}/>
            <ListGroup>
                <ListGroup.Item>ID No: {props.data.id} </ListGroup.Item>
                <ListGroup.Item>Type: {props.data.types.map(item => item.type.name + " ")}</ListGroup.Item>
                <ListGroup.Item>
                    Ability: {props.data.abilities.map(item => {
                        return item.is_hidden ? item.ability.name + "(hidden) " : item.ability.name + " "
                    })}
                </ListGroup.Item>
                <ListGroup.Item>Height: {props.data.height * 10} cm</ListGroup.Item>
                <ListGroup.Item>Weight: {props.data.weight / 10} kg</ListGroup.Item>
                <ListGroup.Item>Evolution: a -> b -> c kg</ListGroup.Item>
            </ListGroup>
            <Button variant="outline-primary"><Link to="/">Back</Link></Button>
        </div>
    )
}

export default PokemonDetailComponent