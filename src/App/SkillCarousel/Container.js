import styled from "styled-components";

export const iconSize = 125;
export const iconSpacing = 50;

export default styled.div`
    width: 100%;

    overflow: hidden;

    h1 {
        font-family: 'Inter', sans-serif;
        color: #bbbbbb;
        font-size: 18pt;
        text-transform: uppercase;
        text-align: center;
        margin-top: 100px;
        margin-bottom: 50px;
    }

    div.carousel {
        position: relative;
        width: 100%;
        height: 160px;
        padding: 5px 0;
    
        div.item {
            position: absolute;
            width: ${iconSize}px;
            height: ${iconSize}px;
            right: -${iconSize}px;
            top: 0;
            background-position: center !important;
            background-size: contain !important;
            background-repeat: no-repeat !important;
            border-radius: 7px;
            cursor: pointer;
        }
        
        div.item:hover {
            filter: drop-shadow(0 0 5px #ffffff50);
            margin-right: -2.5px;
            margin-top: -2.5px;
            width: ${iconSize + 5}px;
            height: ${iconSize + 5}px;
        }
    }
`;