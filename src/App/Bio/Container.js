import styled from "styled-components";

export default styled.div`
    div.primary {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;

        user-select: none;

        div.info {
            padding-top: 60px;
            max-width: 700px;

            color: white;
            text-align: center;
            font-family: 'Inter', sans-serif;

            h1 {
                font-weight: 600;
                margin: 0;
            }

            h2 {
                font-size: 14pt;
                font-weight: 300;
                margin: 0 0 5px 0;
            }
            
            p {
                font-weight: 300;
                margin: 70px 20px 10px 20px;
                line-height: 1.75;
            }
        }
    }

    div.secondary {
        background: #19191bff;
        margin: 0;
        padding-top: 1px;
        
        p {
            margin-top: 100px;
        }
    }

    @media only screen and (min-width: 1000px) {
        div.primary {
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            
            div.flipImage {
                margin-top: 100px;
                width: 300px;
                height: 300px;
            }

            div.info {
                text-align: left;
                margin-top: 100px;
                
                h1 {
                    font-size: 35pt;
                }
                
                h2 {
                    font-size: 16pt;
                }

                p {
                    display: inline-block;
                    margin: 25px 0 0 0;
                    user-select: text;
                    font-size: 13pt;
                }
            }

            & div:first-child {
                margin-right: 50px;
            }
        }
    }
`;