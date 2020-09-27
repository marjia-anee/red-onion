import React, {useState} from 'react';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import FoodItem from '../FoodItem/FoodItem';
import './CurrentFood.css';

const CurrentFood = () => {
    
    const [lunch, setLunch] = useState(fakeData);
    const [cart, setCart] = useState([]);

    // const food = fakeData.filter(fd => fd.category === lunch );
    // setLunch(food);




    const handleAddFood = (food) => {
        const newCart = [...cart, food];
        setCart(newCart);

    }

    return (
        <div className="container">
            <div className="food-container">

                {
                    lunch.map(lunchItems => <FoodItem
                        handleAddFood={handleAddFood}
                        food={lunchItems}>
                    </FoodItem>)
                }


            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    {/* <Link to="/review">
                        <button className="button">Review Order</button>

                    </Link> */}
                </Cart>

            </div>


        </div>
    );
};

export default CurrentFood;