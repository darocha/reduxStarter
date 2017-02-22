import React, { Component } from 'react'

// Componente funcional (no tiene state)
// const SearchBar = () => {
// 	return <input />;
// };

// Componente tipo class (tiene state)
class SearchBar extends Component {
	constructor(props) {
		//'super' se utiliza para traer propiedades de la clase 'Component', de la cual extiende SearchBar
		super(props);

		this.state = { term: '' };
	}

	render() {
		return <input onChange={event => this.setState({ term: event.target.value })}/>;
	}
};

export default SearchBar;