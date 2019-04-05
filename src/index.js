import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



class HelloString extends React.Component {
	render(props) {
		return (
			<div className="querry-string">
				Hello {this.props.name} !
			</div>
		)
	}
}

class SayHello extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Stranger"
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			name: e.target.value
		})
		console.log(this.state.name);
	}

	render() {
		var heroName = (this.state.name.length > 0) ? this.state.name : "Stranger";
		return (
			<div className="hello-string">
				<input type='text' onChange={this.handleChange} />
				<div>
					<HelloString
						name={heroName}
					/>

				</div>
			</div>
		)
	}


}


ReactDOM.render(<SayHello />, document.getElementById('root'));