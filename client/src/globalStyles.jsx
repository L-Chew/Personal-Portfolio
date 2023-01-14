import { createGlobalStyle } from 'styled-components';
import Ragiel from '../fonts//Ragiel/Ragiel.otf';
import Bagola from '../fonts/Bagola/Bagola.woff2';
import Beautica from '../fonts/Beautica.otf';
import GambarinoRegular from '../fonts/Gambarino-Regular.woff2';


const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Ragiel';
        src: url(${Ragiel}) format('opentype');
    }
    @font-face {
        font-family: 'Bagola';
        src: local(''), url(${Bagola}) format('woff2');
    }
    @font-face {
        font-family: 'Beautica';
        src: url(${Beautica}) format('opentype');
    }
    @font-face {
        font-family: 'Gambarino-Regular';
        src: local(''), url(${GambarinoRegular}) format('woff2');
    }

    body {
        min-height: 100vh;
        margin: 0;
    }

    div {
        font-family: 'Gambarino-Regular';
        letter-spacing: 0.1em;
        color:#fbcde59d;
    }

    //About
    .text {
        font-size: 25px;
    }
    .sections {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 80px;
        color: #c2c2c2;
        grid-area: cont;
        font-family: Beautica;
        letter-spacing: 0.5rem;
    }
    .sectionNums {
        color: #ff79be9d;
        padding-right: 0.5rem;
        font-size: 40px;
    }

    //Contact
    .inputs {
        background-color: #c2c2c2;
        font-family: 'Gambarino Regular';
        font-size: 20px;
    }
`;

export default GlobalStyles;



