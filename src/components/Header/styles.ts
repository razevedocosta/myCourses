import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 960px;
    margin: 0 auto;

    padding: 2rem 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-size: 1.05rem;
        color: var(--shape);

        display: flex;
        align-content: center;
        align-items: center;

        svg {
            margin-right: 0.25rem;
        }
    }

    button {
        font-size: 0.8rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 1rem;
        border-radius: 0.25rem;
        height: 2rem;
        margin-left: 0.5rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;