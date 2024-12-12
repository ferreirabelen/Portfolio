import styled, {keyframes} from "styled-components";
import Slider from "react-slick";

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

export const DIV = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    background-color: white;
    @media (max-width:1400px){
        width: fit-content;
    }
    @media (max-width:600px){
        width:auto;
    }
`
export const DivContainer = styled.div`
    width:700px;
    height:480px !important;
    padding:14px;
    text-align:center;
    cursor:pointer;
    img{
        width:600px;
    }
    div{
        width:600px;
        height:80px;
        padding:5px;
        text-align:center;
        margin-left:40px;
    }
    p{
        font-size:17px;
    }
    @media (max-width:600px){
        width:550px;
        height:auto;
        div{
            width:350px;
            height:150px;
            padding:5px;
            margin-left:45px;
            p{
                font-size:16px;
            }
        }
        img{
            width:350px;
            margin-left:0px;
        }
        a button{
            margin-top:5px;
            font-size:16px;
        }
    }
`
export const Titulo3 = styled.h3`
    animation: ${InUp} 2s ease-out;
    font-size: 35px;
    padding:20px;
    padding-top:40px;
    background-color: white;
    padding-left:280px;
    @media (max-width:1200px){
        padding-left:170px;
    }
    @media (max-width:900px){
        padding-left:10px;
        font-size:24px;
    }
    @media (max-width:600px){
        font-size:22px;
    }
`
export const Button = styled.button`
    width:200px;
    font-size:18px;
    margin-right:20px;
    margin-top:35px;
    padding:5px;
    background-color: rgb(153, 93, 174);
    border:2px solid rgb(153, 93, 174);
    color:#fff;
    cursor:pointer;

    &:hover {
        background-color:#AB47BC;
        border-color:#AB47BC;
        color:white;
    }
`
export const SliderContainer = styled(Slider)`
    width:1380px;
    @media (max-width:1500px){
        margin-left:0px;
    }
    @media (max-width:1100px){
        width:1100px;
    }
    
    .slick-prev:before, .slick-next:before{
        display:none;
    }
    .slick-arrow.slick-next{
        display:none !important;
        right:0px !important;
    }
    .slick-slide.slick-active.slick-center.slick-current{
        width:auto !important;
    }
    .slick-slide slick-cloned{
        width:auto !important;
    }
`