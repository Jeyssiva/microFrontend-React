import { Text, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

const Dashboard = (props: any) => {
    const { backToLogout } = props;
    const onLogout = () => {
        backToLogout();
    }
	return (
		<Flex color="#000" gap="1rem" direction="column">
			<Text>
				Welcome <strong>{localStorage.getItem('name')}</strong>
			</Text>
			<Button onClick={onLogout}>Logout</Button>
		</Flex>
	);
};

export default Dashboard;