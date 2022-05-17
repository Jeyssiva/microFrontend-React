import { Box } from "@chakra-ui/react";
import React from "react";
import Account from "./components/account";

const App = () => (
	<Box margin="1.2rem">
		<Box>Account</Box>
		<Box>
			<Account />
		</Box>
	</Box>
);

export default App;