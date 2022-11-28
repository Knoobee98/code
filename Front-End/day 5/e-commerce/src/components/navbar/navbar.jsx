import { Flex, Text, Spacer, Image, Button } from "@chakra-ui/react";

import "./navbar.css";

import { MdLocationOn } from "react-icons/md";

import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

let Navbar = () => {
  let location = useLocation();
  return (
    <>
      <Flex px="50px" py="20px" className="navbar">
        <Flex alignItems="center" w="50%">
          <Link to="/">
            <Image
              src="https://purwadhika.com/static/media/logopwdk-01.a09cf2fc.png"
              alt="logo"
              h="50px"
              w="50px"
            />
          </Link>

          {location.pathname === "/register" ? null : (
            <>
              <Text pl="30px" fontWeight="bold">
                Cards
              </Text>
              <Text pl="30px" fontWeight="bold">
                Orders
              </Text>
              <Text pl="30px" fontWeight="bold">
                Gift
              </Text>
            </>
          )}
        </Flex>
        <Spacer />
        <Flex alignItems="center">
          {location.pathname === "/register" ? null : (
            <>
              <MdLocationOn />
              <Text mr="30px" fontWeight="bold">
                Find a store
              </Text>
              <Link to="/login">
                <Button
                  mr="20px"
                  size="md"
                  borderRadius="full"
                  variant="ghost"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    border: "1px solid black",
                  }}
                >
                  Sign In
                </Button>
              </Link>

              <Link to="/register">
                <Button
                  mr="20px"
                  size="md"
                  borderRadius="full"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  Join Now
                </Button>
              </Link>
            </>
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
