import styled from 'styled-components';

export const CategoryButton = styled.button`
    max-width: 8rem;
    width: 100%;

    font-size: 0.8rem;
    color: #000;
    background: var(--shape);
    padding: 0.5rem;
    border-radius: 0.25rem;
    margin-right: 0.25rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
    border: none;

    &:hover {
        color: var(--shape);
        background: var(--text-title);
    }

    transition: background-color 500ms;

    &.selected {
    color: var(--shape);
    background: var(--text-title);
    }
`;