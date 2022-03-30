import React from "react";
import {
    Flex,
    useColorModeValue,
    ButtonGroup,
    IconButton,
    Table,
    Thead,
    Tr,
    Th,
    Td,
    Tbody,
} from "@chakra-ui/react";
import { AiFillEdit } from "react-icons/ai";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";

import { Authenticator } from "@security";

export default function ListView() {
    const header = ["name", "created", "actions"];
    const data = [
        { name: "Daggy", created: "7 days ago" },
        { name: "Anubra", created: "23 hours ago" },
        { name: "Josef", created: "A few seconds ago" },
        { name: "Sage", created: "A few hours ago" },
    ];
    const color1 = useColorModeValue("gray.400", "gray.400");
    const color2 = useColorModeValue("gray.400", "gray.400");

    return (
        <Authenticator>
            <Flex
                w="full"
                bg="gray.600"
                p={50}
                alignItems="center"
                justifyContent="center"
            >
                <Table
                    w="full"
                    bg={useColorModeValue("white", "gray.800")}
                    display={{
                        base: "block",
                            md: "table",
                    }}
                    sx={{
                        "@media print": {
                            display: "table",
                    },
                    }}
                >
                    <Thead
                        display={{
                            base: "none",
                                md: "table-header-group",
                        }}
                        sx={{
                            "@media print": {
                                display: "table-header-group",
                        },
                        }}
                    >
                        <Tr>
                            {header.map((x) => (
                                <Th key={x}>{x}</Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody
                        display={{
                            base: "block",
                                lg: "table-row-group",
                        }}
                        sx={{
                            "@media print": {
                                display: "table-row-group",
                        },
                        }}
                    >
                        {data.map((token: any, tid) => {
                            return (
                                <Tr
                                    key={tid}
                                    display={{
                                        base: "grid",
                                            md: "table-row",
                                    }}
                                    sx={{
                                        "@media print": {
                                            display: "table-row",
                                    },
                                    gridTemplateColumns: "minmax(0px, 35%) minmax(0px, 65%)",
                                    gridGap: "10px",
                                    }}
                                >
                                    {Object.keys(token).map((x) => {
                                        return (
                                            <React.Fragment key={`${tid}${x}`}>
                                                <Td
                                                    display={{
                                                        base: "table-cell",
                                                            md: "none",
                                                    }}
                                                    sx={{
                                                        "@media print": {
                                                            display: "none",
                                                    },
                                                    textTransform: "uppercase",
                                                    color: color1,
                                                    fontSize: "xs",
                                                    fontWeight: "bold",
                                                    letterSpacing: "wider",
                                                    fontFamily: "heading",
                                                    }}
                                                >
                                                    {x}
                                                </Td>
                                                <Td
                                                    color={"gray.500"}
                                                    fontSize="md"
                                                    fontWeight="hairline"
                                                >
                                                    {token[x]}
                                                </Td>
                                            </React.Fragment>
                                        );
                                    })}
                                    <Td
                                        display={{
                                            base: "table-cell",
                                                md: "none",
                                        }}
                                        sx={{
                                            "@media print": {
                                                display: "none",
                                        },
                                        textTransform: "uppercase",
                                        color: color2,
                                        fontSize: "xs",
                                        fontWeight: "bold",
                                        letterSpacing: "wider",
                                        fontFamily: "heading",
                                        }}
                                    >
                                        Actions
                                    </Td>
                                    <Td>
                                        <ButtonGroup variant="solid" size="sm" spacing={3}>
                                            <IconButton
                                                colorScheme="blue"
                                                aria-label=""
                                                icon={<BsBoxArrowUpRight />}
                                            />
                                            <IconButton colorScheme="green" icon={<AiFillEdit />} aria-label=""/>
                                            <IconButton
                                                aria-label=""
                                                colorScheme="red"
                                                variant="outline"
                                                icon={<BsFillTrashFill />}
                                            />
                                        </ButtonGroup>
                                    </Td>
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
            </Flex>
        </Authenticator>
    );
}
