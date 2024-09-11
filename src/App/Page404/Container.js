import styled from "styled-components";

export default styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    z-index: 100;
    
    color: white;
    font-family: 'Inter', sans-serif;
    text-align: center;
    
    max-width: 600px;
    
    h1 {
        font-size: 30pt;
        margin-bottom: 40px;
    }
    
    h2 {
        font-size: 20pt;
        margin-bottom: 40px;
    }
    
    p {
        font-size: 13pt;
    }
    
    a {
        display: block;
        color: white;
        margin-top: 60px;
    }
`;