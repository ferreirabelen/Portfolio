import styled from "styled-components";

export const Presentacion = styled.div`
  height: 75vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;

  @media (max-width: 1400px) {
    justify-content: center;
    height: 60vh;
    gap: 20px;
  }

  @media (max-width: 1024px) { 
    flex-direction: column;
    height: auto;
    padding: 20px;
    text-align: center;
  }

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }
`;


export const DivPresentacion = styled.div`
  padding: 10px;
  width: 700px;

  h3 {
    font-size: 25px;
  }

  p {
    font-size: 18px;
    line-height: 1.7;
  }

  @media (max-width: 1400px) {
    width: 600px;
    h3 {
      font-size: 22px;
    }
    p {
      font-size: 16px;
    }
  }

  @media (max-width: 1024px) {
    width: 90%;
    p {
      font-size: 15px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
  }
`;

export const H2 = styled.h2`
  color: black;
  font-size: 70px;

  .highlight {
    color: rgb(153, 93, 174); /* titulo en violeta*/
  }

  @media (max-width: 1400px) {
    font-size: 60px;
  }

  @media (max-width: 1024px) {
    font-size: 50px;
  }

  @media (max-width: 768px) {
    font-size: 35px;
  }
`;

export const IMG = styled.img`
  width: 350px;

  @media (max-width: 1400px) {
    width: 200px;
  }

  @media (max-width: 1024px) {
    width: 150px;
  }

  @media (max-width: 768px) {
    width: 120px;
  }
`;

export const ButtonCV = styled.button`
  background-color: rgb(153, 93, 174);
  border: 1px solid rgb(153, 93, 174);
  padding: 10px;
  margin-top: 20px;
  display: block;
  width: 160px;
  font-size: 16px;
  cursor: pointer;

  a {
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    background-color: #ab47bc;
    a {
      color: white;
    }
  }

  @media (max-width: 1024px) {
    width: 140px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    width: 120px;
    font-size: 12px;
  }
`;

