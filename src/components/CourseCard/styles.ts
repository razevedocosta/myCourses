import styled from "styled-components";

export const Card = styled.div`
    div {
        width: 12rem;
        height: 5rem;
        font-size: 0.8rem;
        color: var(--text-body);
        background: var(--shape);
        margin-right: 0.5rem;
        margin-bottom: 0.8rem;
        padding: 0.5rem;

        border-radius: 0.25rem;
        border: 1px solid var(--gray-line);
        box-shadow: 0px 0px 10px 0px rgba(197,197,197,0.85);
        -webkit-box-shadow: 0px 0px 10px 0px rgba(197,197,197,0.85);
        -moz-box-shadow: 0px 0px 10px 0px rgba(197,197,197,0.85);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-align: center;

        &:nth-child(4) {
            margin-right: 0;
        }

        &:hover {
            transform: translateY(2px);
            box-shadow: 0px 0px 0px 0px rgba(197,197,197,0.85);
            -webkit-box-shadow: 0px 0px 0px 0px rgba(197,197,197,0.85);
            -moz-box-shadow: 0px 0px 0px 0px rgba(197,197,197,0.85);
            transition: all .2s ease;
            -webkit-transition: all .2s ease;
        }

        > span {
            color: var(--text-title);
            font-weight: bold;
        }

        p { 
            font-size: 0.6rem;
            text-transform: uppercase;
            width: 100%;
            
            display: flex;
            align-items: center;
            justify-content: space-between;

            span a {
                text-decoration: none;
                color: var(--text-body);

                display: flex;
                align-items: center;
                flex-direction: row;

                &:hover {
                    color: var(--text-title);
                }
            }
        }
    }
`;