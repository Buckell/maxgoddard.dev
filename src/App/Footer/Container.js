import styled from "styled-components";

export default styled.div`
    width: 100%;
    height: 100px;
    margin-top: 200px;
    
    div.body {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding: 30px;
        
        font-family: 'Inter', sans-serif;
        color: white;
        
        p.copyright {
            margin: 0 0 5px 0;
            font-size: 10pt;
        }
    }
    
    @media only screen and (min-width: 1200px) {
        height: 150px;
        margin-top: 300px;

        div.body {
            padding: 0;
        }
    }
`;