import { Text, Button, Flex, Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";

import { useState } from "react";
import {db} from '../../../firebase.config';

import Dashboard from "../components/dashboard";

const LoginEmployee = () => {
	const [emailId, setEmailId] = useState('');
	const [password, setPassword] = useState('');
    const [movetoBoard, setMovetoBoard] = useState(false);

	const onLogin = () => {
		if(emailId !== '' && password !== ''){
        db.collection("employees")
          .where("emailId", "==", emailId)
          .where("password", "==", password)
          .get()
          .then(loggedInEmp => {
              if(loggedInEmp.empty){
                  setMovetoBoard(false);
                  alert("Invalid Credentials");
              } else {
                loggedInEmp.forEach(doc => {
                    console.log(`${doc.id} => ${doc.data()}`)
                    const { name } = doc.data();
                    localStorage.setItem('name', name);
                })
                localStorage.setItem('emailId', emailId);
                localStorage.setItem('password', password);
                setEmailId('');
		        setPassword('');
                setMovetoBoard(true);
              } 
          })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    } else {
        alert("Username/Password is required");
        setMovetoBoard(false);
    }
	}

	const onCancel = () => {
		setEmailId('');
		setPassword('');
	}

    const backToLogout = (): void => {
        setMovetoBoard(false);
        localStorage.setItem('name', '');
        localStorage.setItem('emailId', '');
        localStorage.setItem('password', '');
    }

	return (
		<Flex color="#000" gap="1rem" direction="column">
            {
                movetoBoard ? (<Dashboard backToLogout = {backToLogout}/>)
                :
                <>
                    <Text>EmailId: </Text>
                    <Input value={emailId} onChange = {event => setEmailId(event.target.value)}></Input>

                    <Text>Password: </Text>
                    <Input value={password} type='password' onChange = {event => setPassword(event.target.value)}></Input>

                    <Stack spacing={4} direction='row' align='center'>
                        <Button colorScheme='blue' onClick={onLogin}>Login</Button>
                        <Button colorScheme='blue' onClick={onCancel}>Cancel</Button>
                    </Stack>
                </>
            }
		</Flex>
	);
};

export default LoginEmployee;