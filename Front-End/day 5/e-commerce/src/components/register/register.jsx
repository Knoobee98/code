import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";

let Register = () => {
  return (
    <Flex flexDirection="column" alignItems="center" py="50px">
      <Heading size="lg">Create an account</Heading>
      <Heading size="xs" mt="30px" className="my-grey">
        Starbucks Rewards
      </Heading>
      <Text mt="30px" style={{ maxWidth: "700px", textAllign: "center" }}>
        Join Starbucks Rewards to earn Stars for free food and drinks, any way
        you pay. Get access to mobile ordering, a birthday Reward, and moremore.
      </Text>
      <Card mt="30px" w="800px" px="100px">
        <CardBody>
          <Text>* input required</Text>
          <Heading size="md" mt="30px">
            Personal Information
          </Heading>
          <Input placeholder="username*" size="md" mt="10px" />
          <Heading size="md" mt="30px">
            Security Information
          </Heading>
          <Input placeholder="email*" size="md" mt="10px" />
          <Input placeholder="password*" size="md" mt="10px" />
          <Flex justifyContent="end">
            <Button
              mt="30px"
              size="md"
              borderRadius="full"
              variant="ghost"
              style={{ backgroundColor: "#00704A", color: "white" }}
            >
              Register now
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default Register;
