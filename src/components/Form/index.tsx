import { FormEvent, useState, useContext } from 'react';
import { CoursesContext } from '../../CoursesContext';

import { Container, Error } from './styles';

export function Form() {
    const { createCourse } = useContext(CoursesContext);

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [inputError, setInputError] = useState('');

    async function handleAddNewCourse(event: FormEvent) {
        event.preventDefault();

        if (!title) {
            setInputError('Informe o título do curso');
            return;
        }

        await createCourse({
            title, category, date
        });

        setTitle('');
        setCategory('');
        setDate('');
    }

    return (
        <>
            <Container onSubmit={handleAddNewCourse}>
                <input placeholder="Titulo" value={title}
                    onChange={event => setTitle(event.target.value)} />

                <input placeholder="Categoria" value={category}
                    onChange={event => setCategory(event.target.value)} />

                <input placeholder="Data de Conclusão" value={date}
                    onChange={event => setDate(event.target.value)} />

                <button type="submit">Cadastrar</button>
            </Container>

            {inputError && <Error>{inputError}</Error>}
        </>
    );
}