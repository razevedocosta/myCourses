
import React, { useState, useEffect,  useContext } from "react";
import { CoursesContext } from '../../CoursesContext';
import { Container } from "./styles";

import axios from 'axios';

interface CourseParams {
    id: number;
    title: string;
    category: string;
    date: string;
}

export function TableCourses() {
    const { courses } = useContext(CoursesContext);
    const [newCourses, setNewCourses] = useState<CourseParams[]>([]);
    
    useEffect(() => {
        axios.get('http://localhost:3333/courses')
            .then((response) => {
                setNewCourses(response.data);
            })
            .catch((error) =>{
                console.log(' Erro gerado:' + error);
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
                    {newCourses.map(course => (
                        <tr key={course.id}>
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