import React from 'react'
import {ListGroup, Button, Image, Form, FormControl} from 'react-bootstrap'
import PokemonList from './component/PokemonList';
import {Link} from 'react-router-dom'
// import ContentComponent from './ContentComponent';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
            searchKey: '',
        }
        // this.handleSelect = this.handleSelect.bind(this);
        // this.handleBack = this.handleBack.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        fetch("https://pokeapi.co/api/v2/pokemon-species?limit=807")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result.results
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                    isLoaded: true,
                    error
                    });
                }
            )
    }

    componentWillUnmount(){}

    handleChange(event){
        this.setState({
            searchKey: event.target.value
        })
    }

    render(){
        const {isLoaded} = this.state;
        if(isLoaded) {
            //list
            const {searchKey} = this.state;
            let list = this.state.data;
            if(searchKey.length > 0) {
                list = list.filter(pokemon => pokemon.name.indexOf(searchKey) > -1)
            }
            const data = list.map((item, id) => 
                <ListGroup.Item>
                    <Link to={`/pokemon/${item.url.split('/')[6]}`}>
                        {item.name} <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.split('/')[6]}.png`} rounded />
                    </Link>
                </ListGroup.Item>
            )
            return (
                <div>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleChange}/>
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <p>Result of: {this.state.searchKey}</p>
                    <PokemonList data={data} />
                </div>
            )
        }
        return (
            <div>
                <ListGroup>
                    <ListGroup.Item>Loading...</ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}

export default Content