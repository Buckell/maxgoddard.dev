import styled from "styled-components";

export default styled.div`
    width: 100%;
    max-width: 1000px;

    background: #1c1c1c;

    font-family: 'Inter', sans-serif;
    text-align: left;
    
    filter: drop-shadow(0 0 5px #00000050);
    
    margin-bottom: 50px;

    h2 {
        font-size: 24pt;
        margin: 30px 20px 20px 20px;
        padding: 0;
    }
    
    p {
        font-size: 11pt;
        margin: 20px;
        padding: 0;
        max-width: none;
        line-height: 1.75;
    }
    
    @media only screen and (min-width: 1100px) {
        border-radius: 7px;
        padding: 50px;
        
        h2 {
            margin: 0 0 30px 0;
        }
        
        p {
            font-size: 13pt;
            margin: 0 0 20px 0;
        }
    }
`;