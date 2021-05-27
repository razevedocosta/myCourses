import axios from "axios";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { CoursesContext } from '../../CoursesContext';

import { Container } from "./styles";

interface CourseParams {
    id: number;
    title: string;
    category: number;
    date: string;
}

export function TableCourses() {
    const { courses, categories } = useContext(CoursesContext);
    const [newCourse, setNewCourse] = useState<CourseParams[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3333/courses')
            .then((response) => {
                setNewCourse(response.data);
            });
    }, [courses]);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Título</th>
                        <th>Categoria</th>
                        <th>Data de Conclusão</th>
                    </tr>
                </thead>
                <tbody>
                    {newCourse.map(course => (
                        <tr key={course.id}>
                            <td>{course.id}</td>
                            <td>{course.title}</td>
                            <td>
                                {categories.map(c => c.id === course.category ? c.name : '')}
                            </td>
                            <td>{course.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}