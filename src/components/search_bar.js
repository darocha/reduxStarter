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

		this.state = { term: 'default value' };
	}

	render() {
		return (
			<div>
				<input 
					value={this.state.term}
					onChange={event => this.setState({ term: event.target.value })}
				/>
				<span>
					El valor ingresado es: {this.state.term}
				</span>
			</div>
		)
	}
};

export default SearchBar;