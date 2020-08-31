import React from "react"

class Pizza extends React.Component {

  vegetarianPizza=()=>{
    
    if (this.props.pizza.vegetarian){
      return 'yes'
    } else{
       return'no'
    }
} 

  editClickHandler=()=>{
    return this.props.editClickHandler(this.props.pizza)

  }


  render(){

    return(
      <tr>
        <td>{this.props.pizza.topping}</td>
        <td>{this.props.pizza.size}</td>
        <td>{this.vegetarianPizza()}</td>
        <td><button onClick={this.editClickHandler}type="button" className="btn btn-primary">Edit Pizza</button></td>
      </tr>
    )
  }

}

export default Pizza
