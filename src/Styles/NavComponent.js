import styled from "styled-components";

export const ButtonHamburger = styled.div`
    font-size: 20px;
    display: none;
    cursor: pointer;
    @media (max-width: 950px) {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        position: absolute;
        right: 20px;
        top: 15px;
    }
`;

export const Nav = styled.nav`
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    padding: 10px 0;
    ul {
        display: flex;
        list-style: none;
        align-items: center;

        @media (max-width: 950px) {
            flex-direction: column; /* Menú lateral */
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            width: 100%;
            background-color: rgb(153, 93, 174);
            transform: ${({ isMenuOpen }) => (isMenuOpen ? "translateX(0)" : "translateX(100%)")};
            transition: transform 0.3s ease-in-out;
            padding: 20px;
        }
    }

    li {
        margin: 0 20px;
        font-size: 17px;
        text-align: center;
        color: black;
        &:hover {
            color:#6e3fce;
        }
        @media (max-width: 950px) {
            margin: 15px 0;
        }
    }

    a {
        text-decoration: none;
        color: black;

        &:hover {
            color: rgb(153, 93, 174);
        }
        
        @media (max-width: 950px) {
            color: white !important;
        }
    }
`;

export const Select = styled.select`
    font-size: 15px;
    border: none;
    width: 90px;
    color: white;
    background-color: rgb(153, 93, 174);
    cursor: pointer;

    @media (max-width: 950px) {
        margin: 10px 0;
    }
`;
