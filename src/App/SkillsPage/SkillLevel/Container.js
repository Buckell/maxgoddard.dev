import styled from "styled-components";

export default styled.div`
    position: relative;
    height: 32px;
    width: calc(100% - 40px);
    margin: 20px;

    background: #303030;
    border-radius: 509px;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    filter: drop-shadow(0 0 3px #00000040);

    div.progress {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        background: #368ac3ff;
        border: solid 1px #368ac3ff;

        box-shadow: 10px 0 10px 10px #368ac3ff;
        filter: drop-shadow(20px 0 10px #368ac3ff);
        
        z-index: 1;
    }
    
    h3 {
        z-index: 2;
        padding: 0;
        font-size: 13pt;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
    }
`;