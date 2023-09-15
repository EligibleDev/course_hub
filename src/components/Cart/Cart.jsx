/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import './Cart.css'

const Cart = ({selectedCourses, remaining, total}) => {


    return (
        <div className="cart">
            <h2 className='credit'>Remaining Credit: {remaining}hr</h2><hr />

            <h2 className='cart-title'>Selected Courses</h2>

            <ol className='course-list'>
                {selectedCourses.map(item => <li key={item.id}>{item.title}</li>)}
            </ol><hr />

            <p className='cart-info'>Total Credit: {total}hr</p>
        </div>
    );
};

export default Cart;