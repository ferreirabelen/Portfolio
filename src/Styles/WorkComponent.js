import styled from "styled-components";

export const Spanfecha = styled.span`
    font-size: 16px;
    svg {
        color: rgb(153, 93, 174);
    }
    @media (max-width: 600px) {
        font-size: 14px;
    }
`;

export const H2 = styled.h2`
    font-size: 35px;
    @media (max-width: 900px) {
        font-size: 24px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    padding: 30px;
    background-color: white;
    max-width: 1300px; 
    margin: 0 auto; 

    @media (max-width: 1200px) {
        padding: 20px; 
    }

    @media (max-width: 768px) {
        flex-direction: column; 
        gap: 15px;
    }
`;

export const DivEducacion = styled.div`
    font-size: 16px;
    padding: 15px;
    background-color: #fff;
    width: 100%;
    max-width: 1300px; 
    h5 {
        font-size: 18px;
        padding: 5px;
    }

    @media (max-width: 1200px) {
        max-width: 100%; 
    }

    @media (max-width: 768px) {
        padding: 10px; 
    }

    @media (max-width: 480px) {
        h5 {
            font-size: 16px;
        }
    }
`;

export const DivWork = styled.div`
    padding: 15px;
    background-color: #fff;
    width: 100%;
    max-width: 1300px; 
    h3 {
        font-size: 20px;
        svg {
            color: rgb(153, 93, 174);
        }
    }
    h4 {
        font-size: 18px;
    }
    p {
        font-size: 18px;
    }

    @media (max-width: 1200px) {
        max-width: 100%;
    }

    @media (max-width: 768px) {
        padding: 10px; 
    }

    @media (max-width: 480px) {
        h3 {
            font-size: 18px; 
        }
        h4 {
            font-size: 16px;
        }
        p {
            font-size: 16px;
        }
    }
`;
