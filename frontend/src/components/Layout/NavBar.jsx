import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Input,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import SpeechRecognition from "react-speech-recognition";
import { useEffect, useContext } from "react";
import Message from "../Message/Message";
import { usersContext } from "../../Providers/UsersProvider";

const Links = ["Dashboard", "Projects", "Tasks"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    // Set url based on Links array
    href={`/${children === "Dashboard" ? "" : children.toLowerCase()}`}
  >
    {children}
  </Link>
);

export default function NavBar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { transcript, resetTranscript } = props;
  const { login, logout, cookies, currentUser, getUserByID } =
    useContext(usersContext);

  // const testGetUser = () => {
  //   setCurrentUser(getUserByID(cookies.id));
  //   console.log("The user:", getUserByID(cookies.id));
  // };

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      if (e.key === "1") {
        SpeechRecognition.startListening();
      } else if (e.key === "2") {
        SpeechRecognition.stopListening();
        resetTranscript();
      }
    });
  }, []);

  // const testGetUser = () => {
  //   console.log("Retreived user from ID", getUserByID(cookies.id));
  // };

  // console.log("Current user", currentUser);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link
                href="/welcome"
                rounded={"md"}
                _focus={{ boxShadow: "none" }}
                _hover={{ textDecoration: "none" }}
              >
                blueprint.
              </Link>
            </Box>
            {cookies.id && (
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
                <div style={{ marginLeft: "2em" }}>
                  <p>Command Transcript History: {transcript}</p>
                  <p>Logged in as: {currentUser && currentUser.first_name}</p>
                </div>
              </HStack>
            )}
          </HStack>

          <Flex alignItems={"center"}>
            {cookies.id && <Message />}
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>

              <MenuList>
                <a href="/">
                  <MenuItem onClick={() => login(1)}>Dylan</MenuItem>
                </a>
                <a href="/">
                  <MenuItem onClick={() => login(3)}>Vince</MenuItem>
                </a>
                <a href="/">
                  <MenuItem onClick={() => login(2)}>Pablo</MenuItem>
                </a>
                <a href="/welcome">
                  <MenuItem onClick={() => logout()}>Logout</MenuItem>
                </a>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}