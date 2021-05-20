import { FiAward } from "react-icons/fi";

import { Card } from "./styles";

interface CourseParams {
    id: number;
    title: string;
    date: string;
}

export function CourseCard(props: CourseParams) {
    return (
        <Card>
            <div key={props.id}>
                <span>{props.title}</span>

                <p>
                    <span>
                        <a href="#">
                            <FiAward size={12} /> Certificado
                        </a>
                    </span>

                    <span>{props.date}</span>
                </p>
            </div>
        </Card>
    )
}