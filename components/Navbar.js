import { useState } from 'react';
import { Box, Flex, Heading, Spacer, IconButton, Collapse } from '@chakra-ui/react';
import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const Navbar = ({ handleChangeTheme, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      color="white"
      className='p-5 pl-10 mr-10 z-50 bg-zinc-200 dark:bg-blue-950 rounded border-black dark:border-white w-full'
      position="fixed"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" className='text-black font-black text-2xl italic dark:text-white'>
          Jordi Delivery
        </Heading>
      </Flex>
      <Spacer />
      <button onClick={handleChangeTheme} className="mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold pt-1 p-2 rounded dark:bg-yellow-500 puntero dark:hover:bg-yellow-400">
            {
              theme !== "dark" ?
                <SunIcon className='hidden dark:block' />
                :
                <MoonIcon className='hidark:hidden' />
            }
          </button>
      <Box className='sm:hidden text-black dark:text-white' display={{ base: 'block', md: 'none' }}>
        <IconButton
          icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={handleToggleMenu}
          variant="ghost"
          aria-label="Toggle Menu"
        />
      </Box>
      
      <Box
        display={{ base: isMenuOpen ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
        className='hidden sm:block'
      >
        <Flex align="center" justify={{ base: 'center', md: 'flex-end' }}>
          
          <Link href="/" className='pr-5 text-black dark:text-white'>
            Inicio
          </Link>
          <Link href="/sobre-mi" className='text-black dark:text-white pr-10'>
            Sobre Mi
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
