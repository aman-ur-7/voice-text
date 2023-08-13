import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
    }

    main{
        background: linear-gradient(45deg, #003F62 0%, #0ABF9F 100%);
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
    }

    .sweet-loading {
        display: block;
        margin: 0 auto;
        }

        .main-section{
            background: #f4f4f4;
            height: 100vh;
            display: flex;

            &>section{
                width: 50%;
                margin: auto;
                display: flex;
                flex-direction: column;
                gap: 40px;
                text-align: center;

                .main-content{
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                    &>h1{
                        font-size: 30px;
                    }
                    &>p{
                        color: #454444;
                    }
                }

                .voice-area{
                    display: flex;
                    flex-direction: column;
                    background: white;
                    box-shadow: 0 29px 52px rgba(58, 57, 57, 0.1), 0 25px 16px rgba(60, 59, 59, 0.1);

                    padding: 20px;
                    border-radius: 12px;
                    gap: 10px;

                    textarea{
                        outline: none;
                        border: none;
                        resize: none;
                    }

                    .buttons{
                        display: flex;
                        justify-content: space-evenly;

                        &>button{
                            padding: 8px;
                            color: white;
                            background: #09a386;
                            outline: none;
                            border: none;
                            border-radius: 3px;
                            cursor: pointer;
                        }

                        :active{
                            background:#0ABF9F;
                        }
                    }
                }
            }
        }
`;
