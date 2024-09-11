import styled from "styled-components";

export default styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    background: #151515;

    z-index: 0;

    overflow-y: scroll;
    
    ::-webkit-scrollbar {
        width: 7px;
    }

    ::-webkit-scrollbar-track {
        background: none;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: #4592c1;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #377498;
    }
    
    :root body {
        scrollbar-color: #4592c1 #377498;
    }
`;
