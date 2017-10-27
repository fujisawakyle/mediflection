import { injectGlobal } from 'styled-components';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Bungee+Hairline');

    body {
        background: linear-gradient(to left top, #1687c0, #040711) fixed;
        color: white;
        font-family: 'Bungee Hairline', cursive;
        margin: 0;
    }

    h1, h2, h3, h4 {
        margin: 0;
    }

    a {
        color: white;
        text-decoration: none;
    
    }
    a:hover {
        text-decoration: underline;
    }
`;
