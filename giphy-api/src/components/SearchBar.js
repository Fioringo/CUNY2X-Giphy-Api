import React, { Component } from 'react';
import axios from 'axios';
import '../Global.css';
import GifCard from './GifCard';

class SearchBar extends Component {
	
	constructor(props){
		super(props);
		this.state = ({
			data: [],
			search: "",
			error: ""
		});
	}

	updateSearch = (event) => {
		this.setState({
			search: event.target.value,
		});
		let modifiedSearch = this.state.search.trim().replace(/ /g, "+");
		let a = String.fromCharCode(event.keyCode);
		if(event.keyCode != 13 && String.fromCharCode(event.keyCode)){
			modifiedSearch = modifiedSearch + a;
		}
		this.fetchSearch("http://api.giphy.com/v1/gifs/search?q=" + modifiedSearch + "&api_key=" + this.props.apikey);
	}

	componentDidMount(){
		this.fetchSearch("http://api.giphy.com/v1/gifs/trending?api_key=" + this.props.apikey);
	}



	fetchSearch = (input) => {
		axios.get(input)
		.then(response => {
			this.setState({
				data: response.data.data,
			});
		})
		.catch( err => {
			this.setState({
				error: err,
			});
			console.log(err)
		});
	}

	render(){
		if(String(this.state.error) === "Error: Request failed with status code 404") {
			this.setState({
				error: ""
			});
			return(
				<div>
					<div className="navigation">
						<input type="" onChange={this.updateSearch}/>
					</div>
					<div className="main">
						No Results!
					</div>
					<div></div>
				</div>
			);
		} else {
			console.log(this.state.data);
			const Gifs = this.state.data.map((gif, index) => (
				<GifCard data={gif} key={index} />
			)
					
			);
			return(
			<div>
				<div className="navigation">
					<input type="" onChange={this.updateSearch}/>
				</div>
				<div className="main">
					<div className="empty">
						{Gifs}
					</div>
				</div>
			</div>
			);
		}
	}
}

export default SearchBar;