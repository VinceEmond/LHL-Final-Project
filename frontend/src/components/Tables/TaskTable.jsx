import React from "react";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";

export default function TaskTable(props) {
  const { taskList } = props;
  const taskColumn = ["Name", "Project", "Due Date", "Status", "Priority"];

  const taskHeader = taskColumn.map((column, index) => {
    return <Th key={index}>{column}</Th>;
  });
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="blue" size="lg">
        <Thead>
          <Tr>{taskHeader}</Tr>
        </Thead>
        <Tbody>{taskList}</Tbody>
      </Table>
    </TableContainer>
  );
}