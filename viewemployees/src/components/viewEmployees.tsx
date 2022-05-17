import { Button, Flex, Table,
  Thead,
  Tbody ,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer, } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {db} from '../../../firebase.config';

const Counter = () => {
  const [employees, setEmployees] = 
  useState<{ id: string, name: string, age: string, emailId: string, phone: string, address: string }[]>([]);

  const getEmployeeDetails = () => {
    const empDatas: any[] | PromiseLike<any[]> = [];
    db.collection("employees")
    .get()
    .then(result => {
      result.forEach(sub => {
        console.log(sub.data());
        console.log(sub.id);
        const { name, age, emailId, phone, address} = sub.data();
        empDatas.push({ id: sub.id, name,age,emailId,phone,address })
      })
      setEmployees(empDatas);
      console.log('employee list', empDatas);
    })
    .catch(error => { 
      console.log("Error getting documents: ", error);
    });
  };

  const onRestart = () => {
    getEmployeeDetails();
  }

  useEffect(() => {
    getEmployeeDetails();
  }, [])

  return (
    <Flex color="#000" gap="1rem" direction="column">
     <Button colorScheme='blue' onClick={onRestart}>Restart</Button>
     <TableContainer>
      <Table size='sm'>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th isNumeric>Age</Th>
            <Th>Phone</Th>
            <Th>Address</Th>
            <Th>EmailId</Th>
          </Tr>
        </Thead>
        <Tbody>
          {employees.map(emp => {
            return (      
            <Tr>
              <Td>{emp.name}</Td>
              <Td>{emp.age}</Td>
              <Td>{emp.phone}</Td>
              <Td>{emp.address}</Td>
              <Td>{emp.emailId}</Td>
            </Tr>
            )
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Name</Th>
            <Th isNumeric>Age</Th>
            <Th>Phone</Th>
            <Th>Address</Th>
            <Th>EmailId</Th>
          </Tr>
        </Tfoot>
      </Table>
</TableContainer>
    </Flex>
  );
};

export default Counter;