import styled from "styled-components";

export const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    padding: 1rem 5rem;
    font-size: 0.8rem;

    table {
        width: 100%;
        border-spacing: 0 0.2rem;

        th {
            color: var(--text-title);
            font-weight: bold;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1rem;
        }

        td {
            padding: 0.8rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-title);
            border-radius: 0.25rem;
        }

        tbody {
            tr:hover {
                /* transform: translate(5px); */
                font-weight: bold;
                cursor: pointer;
            }
        }
    }
`;