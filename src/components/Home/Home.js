import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import cardImg1 from '../../images/2nd row photo-1.png';
import cardImg2 from '../../images/2nd row photo-2.png';
import cardImg3 from '../../images/2nd row photo-3.png';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div>
                <h1>this is home</h1>

            </div>
            <div>
                <h1>Why you choose us</h1>
                <h4>Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashboards at. Boy prosperous increasing surrounded.  </h4>
                <br />
                <br />
                <div className = "info">
                    <div>
                        <img src={cardImg1} alt="" />
                    </div>
                    <div>
                        <img src={cardImg2} alt="" />
                    </div>
                    <div>
                        <img src={cardImg3} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;