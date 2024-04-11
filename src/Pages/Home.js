import Banner from "../components/Banner";
import TopCourses from "../components/TopCourses";
import PopularCourses from "../components/PopularCourses";
import Categories from "../components/Categories";
import NewCourses from "../components/NewCourses";
import Certification from "../components/Certification";
import Counter from "../components/Counter";
import Carousel from "../components/Carousel";
import Newsletter from "../components/newsletter";
import React from "react";
import { courses } from "../constants";
function Home(){
    const [selectedCourse, setSelectedCourse] = React.useState(null);
    return(
        <div class="">
            <Banner />
            <TopCourses />
            <PopularCourses courses={courses} setSelectedCourse={setSelectedCourse} selectedCourse={selectedCourse}/>
            {/* <Categories />
            <NewCourses />
            <Certification /> */}
            <Counter/>
            {/* <Carousel/> */}
            <Newsletter/>
        </div>
    );
}

export default Home;