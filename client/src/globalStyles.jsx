import { createGlobalStyle } from 'styled-components';
import Ragiel from '../fonts//Ragiel/Ragiel.otf';
import Bagola from '../fonts/Bagola/Bagola.woff2';
import Beautica from '../fonts/Beautica.otf';
import GambarinoRegular from '../fonts/Gambarino-Regular.woff2';


const GlobalFonts = createGlobalStyle`
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
    div {
        font-family: 'Gambarino-Regular';
        letter-spacing: 0.1em;
        color:#fbcde59d;
    }

`;

export default GlobalFonts;



