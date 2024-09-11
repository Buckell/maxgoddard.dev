import styled from "styled-components";

export default styled.div`
    color: white;
    font-family: 'Inter', sans-serif;

    h1 {
        text-align: center;
        font-size: 24pt;
        margin-top: 100px;
        margin-bottom: 80px;
    }

    p {
        max-width: 800px;
        font-size: 11pt;
        margin: 20px;
    }

    @media only screen and (min-width: 800px) {
        h2 {
            padding: 20px;
        }

        p {
            margin: 0 auto;
            font-size: 13pt;
            max-width: none;
        }
    }
`;