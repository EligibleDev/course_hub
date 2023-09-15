/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import './Cart.css'

const Cart = ({selectedCourses}) => {

    console.log(selectedCourses)

    return (
        <div className="cart">
            <h2 className='credit'>Remaining Credit: 7hr</h2><hr />

            <h2 className='cart-title'>Selected Courses</h2>

            <ol className='course-list'>
                {selectedCourses.map(item => <li key={item.id}>{item.title}</li>)}
            </ol><hr />

            <p className='cart-info'>Total Credit: 13hr</p><hr />
            <p className='cart-info'>Total Price: $359</p>
        </div>
    );
};

export default Cart;