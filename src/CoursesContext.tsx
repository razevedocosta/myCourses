import axios from "axios";
import { createContext, useEffect, useState, ReactNode } from "react";

interface CourseCategoryProps {
    id: number;
    name: 'Front-end' | 'Java' | 'Banco de Dados' | 'Mobile' | 'Clojure';
    title: string;
}

interface Course {
    id: number;
    title: string;
    category: number;
    date: string;
}

// interface para tipagem do conteúdo recebido pelo provider
interface CoursesProviderProps {
    children: ReactNode;
}

type CourseInput = Omit<Course, 'id'>;

interface CoursesContextData {
    categories: CourseCategoryProps[];
    selectedCategoryId: number; 
    selectedCategory: CourseCategoryProps;
    handleClickButton: (id: number) => void;
    courses: Course[];
}

// interface para tipagem do conteúdo que o context irá fornecer
interface CoursesContextData {
    courses: Course[];
    createCourse: (course: CourseInput) => Promise<void>;
}

export const CoursesContext = createContext<CoursesContextData>({} as CoursesContextData);

export function CoursesProvider({ children }: CoursesProviderProps) {
    const [selectedCategoryId, setSelectedCategoryId] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState<CourseCategoryProps>({} as CourseCategoryProps);

    const [categories, setCategories] = useState<CourseCategoryProps[]>([]);
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3333/courses').then((response) => {
            setCourses(response.data);
        });

        axios.get<CourseCategoryProps[]>('http://localhost:3333/categories').then(response => {
            setCategories(response.data);
        });
    }, []);

    useEffect(() => {
        axios.get<Course[]>(`http://localhost:3333/courses/?category=${selectedCategoryId}`).then(response => {
            setCourses(response.data);
            console.log(response.data);
        });

        axios.get<CourseCategoryProps>(`http://localhost:3333/categories/${selectedCategoryId}`).then(response => {
            setSelectedCategory(response.data);
        })
    }, [selectedCategoryId]);

    async function createCourse(courseInput: CourseInput) {
        const response = await axios.post('http://localhost:3333/courses', { ...courseInput });

        // para exibir na listagem 
        const { course } = response.data;
        setCourses([...courses, course]);
    }

    function handleClickButton(id: number) {
        setSelectedCategoryId(id);
        console.log(id);
    }

    return (
        <CoursesContext.Provider 
            value={{ courses, createCourse, handleClickButton, categories, selectedCategoryId, selectedCategory }}>
            {children}
        </CoursesContext.Provider>
    );
}