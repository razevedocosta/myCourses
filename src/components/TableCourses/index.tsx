import axios from "axios";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { CoursesContext } from '../../CoursesContext';
import { FiTrash } from 'react-icons/fi';

import api from '../../services/api';
import { Container } from "./styles";

interface CourseParams {
    id: number;
    title: string;
    category: number;
    date: string;
}

export function TableCourses() {
    const {courses, categories} = useContext(CoursesContext);
    const [course, setCourse] = useState<CourseParams[]>([]);

    useEffect(() => {
        api.get('http://localhost:3333/courses')
            .then((response) => {
                setCourse(response.data);
            });
    }, [courses]);

    const handleDelete = async (id: number) => {
        await api.delete(`/courses/${id}`);

        const coursesFiltered = courses.filter(course => course.id !== id);

        setCourse(coursesFiltered);
    }

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Título</th>
                        <th>Categoria</th>
                        <th>Conclusão</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {course.map(course => (
                        <tr key={course.id}>
                            <td>{course.id}</td>
                            <td>{course.title}</td>
                            <td>
                                {categories.map(c => c.id === course.category ? c.name : '')}
                            </td>
                            <td>{course.date}</td>
                            <td>
                                <button onClick={() => (handleDelete(course.id))}>
                                    <FiTrash size={16} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}