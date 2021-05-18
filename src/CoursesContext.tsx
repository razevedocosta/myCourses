import axios from "axios";
import { createContext, useEffect, useState, ReactNode } from "react";

interface Course {
    id: number;
    title: string;
    category: string;
    date: string;
}

// interface para tipagem do conteúdo recebido pelo provider
interface CoursesProviderProps {
    children: ReactNode;
}

type CourseInput = Omit<Course, 'id'>;

// interface para tipagem do conteúdo que o context irá fornecer
interface CoursesContextData {
    courses: Course[];
    createCourse: (course: CourseInput) => Promise<void>;
}

export const CoursesContext = createContext<CoursesContextData>({} as CoursesContextData);

export function CoursesProvider({ children }: CoursesProviderProps) {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3333/courses')
            .then((response) => {
                setCourses(response.data);
            });
    }, []);

    async function createCourse(courseInput: CourseInput) {
        const response = await axios.post('http://localhost:3333/courses', { ...courseInput });

        // para exibir na listagem 
        const { course } = response.data;
        setCourses([...courses, course]);
    }

    return (
        <CoursesContext.Provider value={{ courses, createCourse }}>
            {children}
        </CoursesContext.Provider>
    );
}