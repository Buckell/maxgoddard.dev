import styled from "styled-components";

export default styled.div`
    position: fixed;
    right: 0;
    top: 150px;
    bottom: 0;
    
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-end;

    transform: translateX(100%);
    transition: transform 100ms linear 100ms;

    color: white;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    text-align: right;
    text-transform: uppercase;
    font-size: 20pt;

    div {
        margin-bottom: 30px;
            
        transform: translateX(100%);
        transition: transform 200ms ease-in-out;
        
        filter: drop-shadow(0 0 10px #000000FF);
        
        cursor: pointer;
            
        ${[...new Array(10).keys()].map((index) => (`
            &:nth-of-type(${index + 1}) {
                transition: transform ${(index + 1) * 100}ms ease-in-out;
            }
        `))}
    }
    
    &.opened {
        transform: translateX(0);
            
        div {
            transform: translateX(-50px);
        }
            
        div::after {
            content: '';
            display: block;
            width: 0;
            height: 1px;
            background: white;
            margin-top: 3px;
            margin-left: 50%;
            transition: width 150ms linear, margin-left 150ms linear;
        }
    
        div:hover::after {
            width: 100%;
            margin-left: 0;
        }
    }
        
    @media only screen and (min-height: 700px) {
        top: 200px;
            
        div {
            margin-bottom: 50px;
            font-size: 22pt;
        }
    }
`;