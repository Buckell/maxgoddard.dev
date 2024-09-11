import styled from "styled-components";

export default styled.div`
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
        width: calc(100% - 90px);
        position: relative;
        display: flex;
        justify-content: center;
        padding: 10px 45px;

        div.nav {
            position: absolute;
            color: white;
            font-size: 40px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            z-index: 200;
        }

        div.next {
            right: 10px;
        }
        
        div.previous {
            left: 10px;
        }
    }
    
    @media only screen and (min-width: 1400px) {
        h1 {
            margin-top: 200px;
        }

        div.carousel {
            max-width: 1300px;
            margin: 0 auto;

            div.next {
                right: -10px;
            }

            div.previous {
                left: -10px;
            }
        }
    }
`;