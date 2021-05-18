import styled from 'styled-components';

export const Container = styled.form`
    max-width: 960px;
    margin: 0 auto;

    padding: 2rem 5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
        width: 80%;
        padding: 0 0.5rem;
        margin-right: 0.5rem;
        height: 2.5rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        /* background: #e7e9ee; */

        font-weight: 400;
        font-size: 0.8rem;

        &::placeholder {
            color: var(--text-body);
        }
    }

    button[type="submit"] {
        width: 50%;
        padding: 0 0.5rem;
        height: 2.5rem;
        border-radius: 0.25rem;

        border: 0;
        background: var(--green);

        color: #fff;
        font-weight: 600;
        font-size: 0.8rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;

export const Error = styled.span`
    max-width: 960px;
    margin: 0 auto;
    
    padding: 0 5rem;
    display: block;
    color: #c53030;
    margin-top: 5px;
    font-weight: normal;
    font-size: 14px;
`;