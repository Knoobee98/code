import {
  Heading,
  Text,
  Flex,
  Input,
  Card,
  CardBody,
  Button,
} from "@chakra-ui/react";


let Register = () => {
  return (
    <>
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
          <Input type='password' placeholder="password*" size="md" mt="10px" />
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
{/*    
      <center>
        <stack spacing={5}>
          <Heading>Create an account</Heading>
          <br />
          <Text fontSize="lg" color="grey" padding="10px">
            Starbucks Rewards
          </Text>
          <Text fontSize="sm" color="grey">
            Join Starbucks Rewards to earn Stars for free food and drinks, any
            way you pay. Get access to mobile ordering, a birthday Reward, and
            moremore.
          </Text>
        </stack>
        <br />
        <Box h="100%" w="50%" padding="20px">
          <Stack spacing={4}>
            <Text fontSize="md">* input required</Text>
            <br />
            <Text fontSize="lg">Personal Information</Text>
            <br />
            <Input placeholder="First Name*" size="md"></Input>
            <Input placeholder="Last Name*" size="md"></Input>
            <br />
            <Text fontSize="lg">Account Security</Text>
            <br />
            <Input placeholder="Email Address*" size="md"></Input>
            <Text fontSize="sm" color="grey">
              This will be your username
            </Text>
            <br />
            <InputGroup>
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Password*"
                size="md"
              />
              <InputRightElement w="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Text fontSize="sm" color="grey">
              Create a password 8 to 25 characters long that includes at least 1
              uppercase and 1 lowercase letter, 1 number and 1 special character
              like an exclamation point or asterisk.
            </Text>
            <br />
            <Text fontSize="lg">COLLECT MORE STARS & EARN REWARDS</Text>
            <br />
            <Text size="sm" color="grey">
              Email is a great way to know about offers and what’s new from
              Starbucks.
            </Text>
            <br />
            <center>
              <CheckboxGroup>
                <Checkbox value="1" size="lg">
                  Yes, I'd like email from starbucks
                </Checkbox>
              </CheckboxGroup>
            </center>
            <br />
            <Text fontSize="lg">Terms of Use</Text>
            <br />
            <center>
              <CheckboxGroup>
                <Checkbox value="1" size="lg">
                  I agree to the Terms of Use
                </Checkbox>
              </CheckboxGroup>
            </center>
            <br />
            <Button size="md" borderRadius="25px" w="100" h="50">
              Create Account
            </Button>
          </Stack>
          <br />
          <br />
        </Box>
      </center> */}
    </>
  );
};

export default Register;
