import styled from "styled-components";

export default styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 0;
    z-index: 700;

    user-select: none;
    
    transition: background-color 200ms ease-in-out;
    
    &.opened {
        width: 100%;
        background-color: #000000C0;
    }
`;