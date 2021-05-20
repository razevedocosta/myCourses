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

    > a {
        text-decoration: none;
    }

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

    div {
        a {
            color: #fff;
            background: var(--blue-light);
            padding: 0.4rem 0.8rem;
            border-radius: 0.25rem;
            margin-left: 0.5rem;
            text-decoration: none;

            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.9);
            }
        }
    }
`;