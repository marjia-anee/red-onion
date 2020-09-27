import React from 'react';
import './FoodItem.css';

const FoodItem = (props) => {
    console.log(props);
    const { image, name, description, price } = props.food;

    return (

        <div className="food-items row my-5">

            <div className="col-md-4 mb-4">
                <div>
                    <div className="food-img">
                        <img src={image} alt="" />

                    </div>
                    <div className="food-info">
                        <br />

                        <h4> <strong> Name: {name}</strong></h4>
                        <br />
                        <p><strong> Description: {description} </strong></p>
                        <p> <strong> ${price} </strong> </p>
                        <br />
                        <button className="btn btn-success"
                            onClick={() => props.handleAddCourse(props.children)}
                        > Add Item</button>

                    </div>
                </div>

            </div>



        </div>
    );
};

export default FoodItem;