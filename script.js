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

//	getDefaultProps: function() {
//    	console.log('Faza inicjalizacji. pomysl na uzycie? ')
//    },
	
//	componentWillMount : function() {
//    	console.log('Faza inicjalizacji. metoda wywoływane tylko w momencie inicjalizacji komponentu.  wywoływana zaraz przed wykonaniem metody render. 
	//Ustawienie stanu w tej metodzie nie spowoduje przerenderowania komponentu. pomysl na uzycie? ')
//    },  
	
//	componentDidMount: function() {
//    	console.log('Faza inicjalizacji. metoda wywoływane tylko w momencie inicjalizacji komponentu. wywoływana PO wywoalniu metody render.Pomyslna uzycieie? ')
//    },  
//	
//	componentWillReceiveProps: function() {
//    	console.log('Faza aktualizacji.  Metoda zostanie wywołana tylko wtedy, gdy komponent otrzyma nowe właściwości i nie jest to faza pierwszego renderowania (montowanie komponentu). Metoda ta pozwala aktualizować stan na podstawie nadchodzących właściwości.  góry", czyli od rodzica komponentu.pomysl na uzycie ')
//    },
//	shouldComponentUpdate: function() {
//    	console.log('Faza aktualizacji. Metoda ta jest wywoływana tuż PRZED wywołaniem metody render i pozwala sprawdzić, 
	//czy faktycznie trzeba 
	//jeszcze raz przerysować komponent. Zwracana jest tutaj wartość true/false, czyli typ boolean. 
	//Metodę tę możemy zastosować, kiedy bardzo zależy nam na optymalizacji naszej aplikacji pomysl na uzycie? ')
//    },
//	componentWillUpdate: function() {
//    	console.log('Faza aktualizacji. Wywoływana, jeśli metoda shouldComponentUpdate zwróci wartość true. Powinna zostać wywoływana tylko do przygotowania na nadchodzące zmiany. 
	//Nie wolno w tym miejscu modyfikować stanu (metoda setState tutaj nie działa).pomysl na uzycie ')
//    },
//
// 	componentDidUpdate: function() {
//    	console.log('Faza aktualizacji. wywołuje się jako ostatnia po przerysowaniu komponentu.
	//w niej możemy wykonać np. jakieś manipulacje DOM (analogicznie do metody componentDidMount).pomysl na uzycie ')
//    },
//	componentWillUnmount: function() {
//	console.log( faza usuwania. 
//	możemy wykonywać wszystkie rzeczy związane z odpinaniem timerów czy nasłuchiwania zdarzeń na elementach DOM. Pomyslna uzycie?
//    };

	
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
