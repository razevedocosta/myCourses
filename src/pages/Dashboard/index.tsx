import React, { useContext } from "react";

import { Header } from '../../components/Header';
import { CourseChart } from '../../components/CourseChart';
import { Button } from '../../components/Button';
import { CourseCard } from '../../components/CourseCard';

import { Content } from "./styles";
import { CoursesContext } from "../../CoursesContext";

const Dashboard: React.FC = () => {
    const {
        categories, handleClickButton, selectedCategoryId, courses
    } = useContext(CoursesContext);

    return (
        <>
            <Header />

            <CourseChart />

            <Content>
                <div>
                    {categories.map(category => (
                        <Button
                            key={String(category.id)}
                            title={category.name}
                            onClick={() => handleClickButton(category.id)}
                            selected={selectedCategoryId === category.id}
                        />
                    ))}
                </div>

                <section>
                    {courses.map(course => (
                        <CourseCard id={course.id} title={course.title} date={course.date} />
                    ))}
                </section>
            </Content>
        </>
    )
}

export default Dashboard;