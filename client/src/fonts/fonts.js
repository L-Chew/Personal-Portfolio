import { createGlobalStyle } from 'styled-components';
import Ragiel from './Ragiel/Ragiel.otf';
import Bagola from './Bagola/Bagola.ttf';


export default createGlobalStyle`
    @font-face {
        font-family: 'Bagola';
        src: url('./Bagola/Bagola.ttf') format('truetype');
    }
    @font-face {
        font-family: 'Ragiel';
        src: url('./Ragiel/Ragiel.otf') format('opentype');
    }
    h1 {
        font-family: 'Ragiel'
    }
    h2 {
        font-family: 'Bagola'
    }
`;



