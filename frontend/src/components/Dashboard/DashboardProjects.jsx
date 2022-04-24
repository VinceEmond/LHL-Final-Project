import { Container, Heading, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import ProjectsCarousel from "./ProjectsCarousel";

export default function Projects({ setModalState, onOpen, onEdit }) {
  return (
    <Container
      border="2px"
      borderRadius="2em"
      mt="3em"
      mb="3em"
      width="100%"
      maxWidth="100%"
      style={{
        backgroundColor: "rgba(10,23,30,0.8)",
        color: "white",
      }}
    >
      <Container
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        maxWidth="100%"
      >
        <Heading size="md" textAlign="left">
          Projects
        </Heading>
        <IconButton
          aria-label="Search database"
          borderRadius="50%"
          icon={<AddIcon />}
          onClick={() => {
            setModalState("projects");
            onOpen();
          }}
        />
      </Container>
      <ProjectsCarousel onEdit={onEdit} />
    </Container>
  );
}
