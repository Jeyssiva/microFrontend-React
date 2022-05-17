import { Box } from "@chakra-ui/react";
import React from "react";
import RegisterEmployee from "./components/registerEmployee";

const App = () => (
	<Box margin="1.2rem">
		<Box>APP-1</Box>
		<Box>
			<RegisterEmployee />
		</Box>
	</Box>
);

export default App;