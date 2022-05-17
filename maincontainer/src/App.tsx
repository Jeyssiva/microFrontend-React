import { Box, Center, Flex, Heading, Spinner, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

const RegisterEmployee = React.lazy(() => import("registerEmployee/RegisterEmployee"));
const ViewEmployees = React.lazy(() => import("viewEmployees/ViewEmployees"));
const Login = React.lazy(() => import("account/Login"));

const App = () => (
	<>
		<Center
			height="100vh"
			width="100%"
			backgroundColor="#1B1A29"
			margin="0"
			p="0"
			flexDirection="column"
		>
			<Flex
				border="1px solid #151421"
				height="100vh"
				width="100%"
				backgroundColor="#6F60EA"
			>
				<Flex width="99%" p='1rem' justifyContent="space-around">
					<React.Suspense fallback={<Spinner size="xl" />}>
						<Box
							p="1rem"
							mr="2rem"
							border="1px solid #aeaeae"
							borderRadius="1rem"
							backgroundColor="#fff"
							width="25%"
						>
							<Heading color="#6F60EA" mb="1rem">
								Registration
							</Heading>
							<RegisterEmployee />
						</Box>
					</React.Suspense>
					<React.Suspense fallback={<Spinner size="xl" />}>
						<Box p="1rem" mr="2rem" border="1px solid #aeaeae" width="40%" borderRadius="1rem" backgroundColor="#fff">
							<Heading color="#6F60EA" mb="1rem">
								View Employess
							</Heading>
							<ViewEmployees />
						</Box>
					</React.Suspense>
					<React.Suspense fallback={<Spinner size="xl" />}>
						<Box p="1rem" border="1px solid #aeaeae" borderRadius="1rem" width="40%" backgroundColor="#fff">
							<Heading color="#6F60EA" mb="1rem">
								Account
							</Heading>
							<Login />
						</Box>
					</React.Suspense>
				</Flex>
			</Flex>
		</Center>
	</>
);

export default App;