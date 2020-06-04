import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}
	
  html {
    font-size: 62.5%;
  }

	button {
		cursor: pointer;
	}

	body {
    font-size: 1.6rem;
		font-family: Inconsolata, sans-serif;
		-webkit-font-smoothing: antialiased;
	}

	#root {
		/* margin: 0 auto; */
		/* padding: 0px 20px; */
	}

	@media (max-width: 768px) {
		html {
			font-size: 50%;
		}
	}
`;
