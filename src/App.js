import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state={
    pizzaList: [],
    pizzaTopping:'',
    pizzaSize:'',
    isVeggie: null,
    id:null
  }

  componentDidMount(){

    fetch("http://localhost:3000/pizzas")
    .then(resp=> resp.json())
    .then(data=> this.setState({pizzaList:data})
      )
    }

    editClickHandler=(pizza_obj)=>{

      this.setState({id: pizza_obj.id})
      this.setState({pizzaTopping: pizza_obj.topping})
      this.setState({pizzaSize: pizza_obj.size})
      this.setState({isVeggie: pizza_obj.vegetarian})
    }

    changeTop=(e)=>{
      this.setState({pizzaTopping: e.target.value})
      this.setState({pizzaSize: e.target.value})
    }

    changeSize=(e)=>{
      this.setState({pizzaSize: e.target.value})
    }

    changeVeg=(e)=>{
      this.setState({isVeggie: e.target.checked})
    }

    submitChanges=(e)=>{
      console.log(this.state.pizzaTopping)

      e.preventDefault()

      let topping = this.state.pizzaTopping
      let size = this.state.pizzaSize
      let vegetarian = this.state.isVeggie
      let id = this.state.id

      let options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({topping: topping, size:size, vegetarian:vegetarian})
      }

      fetch(`http://localhost:3000/pizzas/${id}`,options )
      .then(resp=>resp.json())
      .then(()=>{
         
        fetch(`http://localhost:3000/pizzas` )
        .then(resp=>resp.json())
        .then(pizzaData => this.setState({pizzaList: pizzaData}))

      }) 
    }

    render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm editClickHandler={this.editClickHandler}
         pizzaTop = {this.state.pizzaTopping}
         pizzaSize = {this.state.pizzaSize}
         isVeggie={this.state.isVeggie}

         changeTop={this.changeTop}
         changeSize={this.changeSize}
         changeVeg={this.changeVeg}
         submitChanges={this.submitChanges}
         
         />
        <PizzaList 
        pizzaList={this.state.pizzaList}
        editClickHandler={this.editClickHandler}
        
        />
      </Fragment>
    );
  }
}

export default App;
