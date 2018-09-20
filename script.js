var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    
        decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.increment, className:'btn btn-success button'}, "+"),
	    React.createElement('button', {onClick: this.decrement, className:'btn btn-danger button'}, "-"),

        );
    }
});

var countersList = React.createClass({
	render: function() {
	return (
	  React.createElement('div', {className: 'app'},
	  	
		    React.createElement('div', {}, 
		    	React.createElement(Counter,{})
		    ),
		    React.createElement('div', {}, 
		    	React.createElement(Counter,{})
		    ),
		
		    React.createElement('div', {},
		    	React.createElement(Counter,{})
		    ),
		    React.createElement('div', {}, 
		    	React.createElement(Counter,{})
		    ),
		
		)
	)
	}
});



var app = React.createElement(countersList);
ReactDOM.render(app, document.getElementById('app'));
