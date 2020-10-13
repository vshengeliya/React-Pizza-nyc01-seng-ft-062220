import React from "react"

const PizzaForm = (props) => {

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" 
            value={props.pizzaTop} onChange={props.changeTop}/>
        </div>
        <div className="col">
          <select value={props.pizzaSize} onChange={props.changeSize} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={props.isVeggie === true? true : false} onChange={props.changeVeg}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={props.isVeggie === false? true : false} onChange={props.changeVeg}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.submitChanges}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
