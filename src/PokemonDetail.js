import React from 'react'
import PokemonDetailComponent from './component/PokemonDetail'

class PokemonDetail extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: props.id,
            data: [],
            isLoaded: false,
        }
    }

    componentDidMount(){
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result
                    })
                }
            )
            .then(() => {
                console.log('done')
            })
    }

    render(){
        const {data, isLoaded} = this.state;
        return (
            <div>
                {/* {console.log(data)} */}
                {isLoaded ? <PokemonDetailComponent data={data} />: "Loading..."}
            </div>
        )
    }
}

export default PokemonDetail