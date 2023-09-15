import './Cart.css'

const Cart = () => {
    return (
        <div className="cart">
            <h2 className='credit'>Remaining Credit: 7hr</h2><hr />

            <h2 className='cart-title'>Selected Courses</h2>

            <ol className='course-list'>
                <li>Web Development Bootcamp</li>
                <li>Data Structure & Algorithm</li>
                <li>Mobile App Development</li>
            </ol><hr />

            <p className='cart-info'>Total Credit: 13hr</p><hr />
            <p className='cart-info'>Total Price: $359</p>
        </div>
    );
};

export default Cart;