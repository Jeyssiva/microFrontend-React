import { Text, Button, Flex, Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons"

import { useState } from "react";
import {db} from '../../../firebase.config';

const RegisterEmployee = () => {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const [emailId, setEmailId] = useState('');
	const [password, setPassword] = useState('');

	const onSubmit = () => {
		if(emailId !== '' && name !== '' && age !== '' && password !== ''){
			db.collection('employees').add({
				name,
				age,
				phone,
				address,
				emailId,
				password
			})
			.then(() => {
				alert('Employee Added.')
			})
			.catch(() => {
				console.log("Error getting documents: ");
			})
		} else {
			alert('Mandatory fields are required');
		}
	}

	const onCancel = () => {
		setName('');
		setAge('');
		setPhone('');
		setAddress('');
		setEmailId('');
		setPassword('');
	}
	return (
		<Flex color="#000" gap="1rem" direction="column">
			<Text> Name: </Text>
			<Input value={name} onChange = {event => setName(event.target.value)}></Input>

			<Text>Age: </Text>
			<Input value={age} onChange = {event => setAge(event.target.value)} max={3} type='number' maxLength={2}></Input>

			<Text>Phone: </Text>
			<InputGroup>
				<InputLeftElement
					pointerEvents='none'
					children={<PhoneIcon color='gray.300' />}
				/>
				<Input type='tel' value={phone} placeholder='Phone number' onChange = {event => setPhone(event.target.value)} />
			</InputGroup>

			<Text>Address: </Text>
			<Input value={address} onChange = {event => setAddress(event.target.value)}></Input>

			<Text>EmailId: </Text>
			<Input value={emailId} onChange = {event => setEmailId(event.target.value)}></Input>

			<Text>Password: </Text>
			<Input value={password} type='password' onChange = {event => setPassword(event.target.value)}></Input>

			<Stack spacing={4} direction='row' align='center'>
			<Button colorScheme='blue' onClick={onSubmit}>Submit</Button>
			<Button colorScheme='blue' onClick={onCancel}>Cancel</Button>
			</Stack>
		</Flex>
	);
};

export default RegisterEmployee;