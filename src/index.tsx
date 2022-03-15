import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Rotas from "./router";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./styles/global";


ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<Router>
				<Rotas />
			</Router>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root"),
);
