import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      bg="teal.500"
      color="white"
      className='p-5 ml-10 mr-10'
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          Logo
        </Heading>
      </Flex>
      <Spacer />
      <Box>
        <a href="#" style={{ marginRight: '1rem' }}>
          Home
        </a>
        <a href="#">About</a>
      </Box>
    </Flex>
  );
};

export default Navbar;
