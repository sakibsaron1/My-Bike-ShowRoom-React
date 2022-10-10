
// import Bike from '../Bike/Bike';
import './Cart.css';



const Cart = (props) => {
    const { cart } = props;
    const { reset, math } = props;

    

    return (

       
        <div className='cart'>
            <h2>View Cart</h2>
           

            <div className="view-pro" id='cart-again'>

                {
                    cart.map(bike => <h4 key={bike.id} >{bike.name}</h4>) 
                }
                
            </div>

           
            <button className='btn-text' onClick={() => math(cart)}> Chose One for me</button><br/><br/>
            <button className='btn-text'> Chose Again</button>
            <h1 id='choosen'> </h1>
        </div>
    );
};

export default Cart;