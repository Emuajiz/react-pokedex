import React from 'react'
import {ListGroup, Image, Button} from 'react-bootstrap'

function ContentComponent(props) {
    const {data, isLoaded, currentPok} = props;
    if(currentPok) {
        if(isLoaded) {
            console.log(data)
            return (
                <div>
                    <h1>{data.name}</h1>
                    <Image src={data.sprites.front_default}/>
                    <ListGroup>
                        <ListGroup.Item>ID No: {data.id} </ListGroup.Item>
                        <ListGroup.Item>Type: {data.types.map(item => item.type.name + " ")}</ListGroup.Item>
                        <ListGroup.Item>
                            Ability: {data.abilities.map(item => {
                                return item.is_hidden ? item.ability.name + "(hidden) " : item.ability.name + " "
                            })}
                        </ListGroup.Item>
                        <ListGroup.Item>Height: {data.height * 10} cm</ListGroup.Item>
                        <ListGroup.Item>Weight: {data.weight / 10} kg</ListGroup.Item>
                    </ListGroup>
                    <Button variant="outline-primary" onClick={props.handleBack}>Back</Button>
                </div>
            )
        }
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    if(isLoaded) {
        const data = data.map((item, id) => <ListGroup.Item onClick={() => props.handleSelect(item, id+1)}>{item.name} <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id+1}.png`} rounded /></ListGroup.Item>)
        return (
            <div>
                <ListGroup>
                    {data}
                </ListGroup>
            </div>
        )
    }
    return (
        <div>
            <ContentComponent />
        </div>
    )
}

export default ContentComponent;