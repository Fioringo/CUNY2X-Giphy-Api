import React, { Component } from 'react';
import axios from 'axios';
import '..Global.css';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = ({
			search: "",
			error: ""
		});
	}

	updateSearch = (event) => {
		this.setState({
			search: event.target.value,
		});
	}

	componentDidMount(){
		let a = this.state.search.replace(/ /g, "+");
		let modifiedSearch = a.toUpperCase();
		this.fetchSearch("http://api.giphy.com/v1/gifs/search?q=" + modifiedSearch + "&api_key=" + this.props.apikey);
	}

	fetchSearch = (input) => {
		axios.get(input)
		.then(response => {
			this.setState({
				data: response.data,
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
		if(String(this.state.error) === "") {
			this.setState({
				error: ""
			});
			return({
				<div>
					<div className="navigation">
						<input type="" onChange={this.updateSearch}/>
					</div>
					<div className="main">
						No Results!
					</div>
					<div></div>
				</div>
			});
		} else {
			const Gifs = this.state.data.map((gif, index) =>
				{
					<GifCard data={gif} key={index}/>
				}
			);
			return({
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
			});
		}
	}
}

extends default SearchBar;