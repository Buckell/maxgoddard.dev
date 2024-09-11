import styled from "styled-components";

export default styled.div`
    position: fixed;
    top: 25px;
    right: 30px;
    width: 40px;
    height: 40px;
    
    overflow: hidden;
    
    z-index: 900;
    
    filter: drop-shadow(0 0 3px #00000090);
    
    div {
        position: relative;
        width: 100%;
        height: 100%;

        input {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            
            opacity: 0;
            
            z-index: 1000;
            
            cursor: pointer;
        }

        span {
            position: absolute;
            left: 0;
            right: 0;
            
            display: block;
            height: 3px;
            
            background: #ffffff;
            
            border: hidden;
            border-radius: 4px;
            
            z-index: 900;
            
            transition: all 200ms linear;
        }
        
        span:nth-of-type(1) {
            top: 4px;
        }
        
        span:nth-of-type(2) {
            top: calc((100% - 4px) / 2);
        }

        span:nth-of-type(3) {
            bottom: 4px;
        }
        
        &.opened {
            span:nth-of-type(1) {
                width: calc(sqrt(2) * 100% - 4px);
                transform: translate(-6px, 14px) rotate(45deg);
            }

            span:nth-of-type(2) {
                transform: translateX(-100%);
            }

            span:nth-of-type(3) {
                width: calc(sqrt(2) * 100% - 4px);
                transform: translate(-6px, -14px) rotate(-45deg);
            }
        }
    }
`;