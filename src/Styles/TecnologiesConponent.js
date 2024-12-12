import styled, { keyframes } from "styled-components";

const InUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(40px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Titulo3 = styled.h3`
    animation: ${InUp} 2s ease-out;
    font-size: 35px;
    margin-left: auto; 
    margin-right: auto;
    max-width: 1300px; 
    padding-left: 0; 
    padding-bottom: 20px;

    @media (max-width: 1200px) {
        padding-left: 20px; 
    }

    @media (max-width: 768px) {
        font-size: 30px;
        padding-left: 10px;
    }

    @media (max-width: 480px) {
        font-size: 24px;
        padding-left: 10px;
    }
`;

export const DIV = styled.div`
    padding: 20px;
    margin-bottom:30px;
    @media (max-width: 1100px) {
        padding: 15px;
    }

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

export const DivContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    div {
        text-align: center;
        flex: 1 1 calc(33.33% - 20px); 
        max-width: 180px;

        @media (max-width: 1100px) {
            flex: 1 1 calc(50% - 20px);
        }

        @media (max-width: 768px) {
            flex: 1 1 calc(100% - 20px);
        }

        h3 {
            font-size: 16px;
            margin-bottom: 10px;
        }
    }

    img {
        width: 90px;
        height: auto;

        @media (max-width: 1100px) {
            width: 80px;
        }

        @media (max-width: 768px) {
            width: 60px;
        }
    }
`;
