import './Home.css'
import { FiDollarSign } from 'react-icons/fi';
import { BsBook } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Home = () => {
    const [allCourses, setAllCourses] = useState([])

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllCourses(data));
    }, [])

    console.log(allCourses);

    return (
        <div className='main'>
            <div className="card-container">
                {allCourses.map(course =>
                    <div key={course.id} className="card">
                        <img src={course.img} alt="" />
                        <h2 className='title'>{course.title}</h2>

                        <p className='description'>{course.description}</p>

                        <div className='info'>
                            <div>
                                {<FiDollarSign></FiDollarSign>}
                                <p className='info-item'>Price: ${course.price}</p>
                            </div>

                            <div>
                                {<BsBook></BsBook>}
                                <p className='info-item'>Credit: {course.duration_hours}hr</p>
                            </div>
                        </div>

                        <button className='select'>Select</button>
                    </div>)
                }
            </div>

            <Cart></Cart>
        </div>
    );
};

export default Home;