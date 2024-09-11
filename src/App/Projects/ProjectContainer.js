import styled from "styled-components";

export default styled.div`
    width: 100%;
    height: 350px;
    
    border-radius: 7px;
    overflow: hidden;
    background: #222;
    
    filter: drop-shadow(1px 1px 5px #00000070);
    transition: width 200ms ease-in-out, transform 500ms ease-in-out, text-wrap 300ms linear 300ms;
    
    z-index: 100;
    
    color: white;
    font-family: 'Inter', sans-serif;
    
    cursor: pointer;
    user-select: none;
    
    .image {
        width: 100%;
        height: 150px;
        background: #511;
        background-size: cover !important;
        background-position: center !important;
    }
    
    h2 {
        margin: 20px 20px 10px 20px;
        font-size: 15pt;
    }
    
    p {
        margin: 0 20px 20px 20px;
        line-height: 1.4;
        font-size: 11.5pt;
        color: #bbbbbb;
    }
    
    &.invisible {
        width: 0;
    }
    
    @media only screen and (min-width: 1000px) {
        height: 300px;
    }
    
    &.visible:hover {
        transition: transform 100ms ease-in-out;
        transform: scale(103%);
        filter: drop-shadow(0 0 3px #bbbbbb30);
    }   
`;