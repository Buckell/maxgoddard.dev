import styled from "styled-components";

export default styled.div`
    width: 100%;
    max-width: 1000px;

    background: #1c1c1c;

    font-family: 'Inter', sans-serif;
    text-align: left;
    
    filter: drop-shadow(0 0 5px #00000050);
    
    margin-bottom: 50px;
    padding-bottom: 20px;

    h2 {
        font-size: 20pt;
        padding: 0;
        margin: 0 20px 40px 20px;
        text-align: center;
    }
    
    p {
        font-size: 11pt;
        margin: 30px 30px 20px 30px;
        padding: 0;
        max-width: none;
        line-height: 2;
        text-align: center;
    }
    
    div.image {
        width: 64px;
        height: 64px;
        margin: 30px auto;
        
        background-position: center !important;
        background-size: contain !important;
        background-repeat: no-repeat !important;
        
        filter: drop-shadow(0 0 3px #00000060);
    }
    
    @media only screen and (min-width: 1100px) {
        border-radius: 7px;
        padding: 50px;
        
        h2 {
            margin: 40px 0 50px 0;
        }
        
        p {
            font-size: 13pt;
            margin-top: 50px;
            text-align: left;
            font-weight: 300;
        }
    }
`;