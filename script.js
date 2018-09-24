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

	getDefaultProps: function() {
    	console.log('Metoda wywoływana w fazie inicjalizacji. Ustawia domyślne wartości propsów.')
    };
	
	componentWillMount : function() {
    	console.log('Metoda, która działa, ale wg dokumentacji już się od niej odchodzi. Metoda wywoływana tylko w momencie inicjalizacji komponentu.  Wywoływana zaraz przed wykonaniem metody render. Ustawienie stanu w tej metodzie nie spowoduje przerenderowania komponentu. ')
    },  
	
	componentDidMount: function() {
    	console.log('Faza inicjalizacji. Metoda wywoływana tylko w momencie inicjalizacji komponentu. Wywoływana PO wywolaniu metody render. Może służyć do wczytania danych z serwera')
    },  
	
	componentWillReceiveProps: function() {
    	console.log('Faza aktualizacji. Metoda, która działa, ale wg dokumentacji już się od niej odchodzi. Metoda zostanie wywołana tylko wtedy, gdy komponent otrzyma nowe właściwości i nie jest to faza pierwszego renderowania (montowanie komponentu). Metoda pozwala aktualizować stan na podstawie nadchodzących właściwości.  ')
    },
	shouldComponentUpdate: function() {
    	console.log('Faza aktualizacji. Metoda ta jest wywoływana tuż PRZED wywołaniem metody render i pozwala sprawdzić, czy faktycznie trzeba jeszcze raz przerysować komponent. Zwracana jest tutaj wartość true/false. Metodę tę możemy zastosować, kiedy bardzo zależy nam na optymalizacji aplikacji ')
    },
	componentWillUpdate: function() {
    	console.log('Faza aktualizacji. Metoda, która działa, ale wg dokumentacji już się od niej odchodzi. Wywoływana, jeśli metoda shouldComponentUpdate zwróci wartość true. Powinna zostać wywoływana tylko do przygotowania na nadchodzące zmiany. nie wolno w tym miejscu modyfikować stanu (metoda setState nie działa). ')
    },

 	componentDidUpdate: function() {
    	console.log('Faza aktualizacji. wywołuje się jako ostatnia po przerysowaniu komponentu. możemy wykonać np.  manipulacje DOM (analogicznie do metody componentDidMount). Można sprawdzić czy wywołanie zaplanowanych efektów ubocznych jest potrzebne.  ')
    },
	componentWillUnmount: function() {
	console.log( 'faza usuwania. możemy wykonywać wszystkie rzeczy związane z odpinaniem liczników czy odłączaniem event listenerów'
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
