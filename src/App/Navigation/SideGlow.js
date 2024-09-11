import styled from "styled-components";

export default styled.div`
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;

    z-index: 500;

    box-shadow: 0 0 200px 30px rgba(255,255,255,0.30);

    transition: all 250ms linear;
    transform: translateX(500px);
    
    &.opened {
        transform: translateX(0);
    }
`;