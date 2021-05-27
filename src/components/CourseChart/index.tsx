import { useContext } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { CoursesContext } from '../../CoursesContext';

import { Container } from "./styles";

// const data = [
//     { name: 'Front-end', value: 2 },
//     { name: 'Java', value: 1 },
//     { name: 'Banco de Dados', value: 1 },
//     { name: 'Mobile', value: 1 },
//     { name: 'Clojure', value: 1 },
// ];
// console.log(data);

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000', '#C3C3C3'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export function CourseChart() {
    const { categories, courses } = useContext(CoursesContext);
    const categoriesGraph = categories;

    const plotagem = [
        categoriesGraph.map(category => (
            {
                name: category.name,
                value: courses.reduce((acc, course) => {
                    if (course.category === category.id) {
                        acc += 1
                    }

                    return acc;
                }, 0)
            }
        ))
    ];
    const data = plotagem[0];
    console.log(data);

    return (
        <Container>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="10%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </Container>
    )
}

