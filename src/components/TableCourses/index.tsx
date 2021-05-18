import axios from "axios";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { CoursesContext } from '../../CoursesContext';
import { Container } from "./styles";

interface CourseParams {
    id: number;
    title: string;
    category: string;
    date: string;
}

export function TableCourses() {
    // const { courses } = useContext(CoursesContext);
    const [courses, setCourses] = useState<CourseParams[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3333/courses')
            .then((response) => {
                setCourses(response.data);
            });
    }, []);

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
                    {courses.map(course => (
                        <tr key={course?.id}>
                            <td>{course?.id}</td>
                            <td>{course?.title}</td>
                            <td>{course?.category}</td>
                            <td>{course?.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}