import styled from "styled-components";

export default styled.div`
    color: white;
    font-family: 'Inter', sans-serif;
    
    h1 {
        text-align: center;
        font-size: 24pt;
        margin-top: 40px;
        margin-bottom: 40px;
    }
    
    p {
        max-width: 800px;
        font-size: 11pt;
        margin: 20px;
    }
    
    div.flipImage {
        width: 200px;
        height: 200px;
    }
    
    @media only screen and (min-width: 800px) {
        div.flipImage {
            width: 300px;
            height: 300px;
        }
        
        h2 {
            padding: 20px;
        }
        
        p {
            margin: 0 auto;
            font-size: 13pt;
        }
    }
`;