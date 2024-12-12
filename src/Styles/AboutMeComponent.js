import styled from "styled-components";

export const DIVICONOS = styled.div`
    display: flex;
    gap: 10px;
    svg {
        width: 40px;
        height: 40px;
        padding-top:20px;
        margin-right:10px;
        color: rgb(153, 93, 174);
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.2);
        }
    }
    @media (max-width: 600px) {
        svg {
            width: 30px;
            height: 30px;
        }
    }
`;


export const DivContainer = styled.div`
    padding: 20px 0;
    height: 45vh;
    display: flex;
    justify-content: center;
    @media (max-width: 1400px) {
        background-color: rgb(245, 245, 245);
        height: 60vh;
    }
    @media (max-width: 1100px) {
        height: auto;
        padding: 20px;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        height: auto;
        padding: 15px;
    }
    div {
        max-width: 1300px;
    }
    p {
        font-size: 18px;
        line-height: 1.7;
        letter-spacing: 0.8px;
        @media (max-width: 768px) {
            font-size: 16px;
        }
    }
    .highlight {
        color: rgb(153, 93, 174); /* Violeta */
        font-weight: bold;
    }
`;


export const Titulo3 = styled.h3`
    font-size: 35px;
    padding-top:40px;
    color:black;
    @media (max-width:600px){
        font-size:24px;
    }`

export const IMG = styled.img`
   width:300px;
`