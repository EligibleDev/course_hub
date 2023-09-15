import './Home.css'
import { FiDollarSign } from 'react-icons/fi';
import { BsBook } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Swal from 'sweetalert2';

const Home = () => {
    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllCourses(data));
    }, [])

    const doublePurchaseError = () => {
        Swal.fire({
            title: 'Error!',
            text: "You've alreaty purchased this course",
            icon: 'error',
            confirmButtonText: 'Cancel'
        })
    }

    const handleSelectCourse = (course) => {
        const doesExist = selectedCourses.find(item => item.id === course.id);
        doesExist
            ? doublePurchaseError()
            : setSelectedCourses([...selectedCourses, course]);
        console.log(doesExist);

    }


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

                        <button onClick={() => handleSelectCourse(course)} className='select'>Purchase</button>
                    </div>)
                }
            </div>

            <Cart selectedCourses={selectedCourses}></Cart>
        </div>
    );
};

export default Home;