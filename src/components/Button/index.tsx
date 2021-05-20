import { ButtonHTMLAttributes } from 'react';

import { CategoryButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    selected: boolean;
}

export function Button({ title, selected, ...rest }: ButtonProps) {
    return (
        <CategoryButton type="button" {...(selected && { className: 'selected' })} {...rest}>
            {title}
        </CategoryButton>
    );
}