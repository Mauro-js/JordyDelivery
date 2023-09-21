import { Box, Flex } from '@chakra-ui/react';

const themesJson = require("./themes.json");

const Buttons = ({themes}) => {
    return themes.map((theme) => {
        return <button key={theme.name} className="mr-5 bg-blue-500 hover:bg-slate-500 hover:text-white text-black font-bold mt-2 p-2 rounded bg-slate-300 dark:bg-slate-800	dark:text-white puntero dark:hover:bg-slate-950">
            {theme.name}
        </button>
    })
} 

const FilterProducts = ({ handleChangeTheme, theme }) => {

    return (
        <Flex
            as="nav"
            align="center"
            padding="1rem"
            color="white"
            className='p-5 pl-10 mr-10 bg-zinc-200 text-center dark:bg-slate-700 rounded w-full'
        >

            <Box
                flexBasis={{ base: '100%', md: 'auto' }}
            >
                <Buttons themes={themesJson} />
            </Box>
        </Flex>
    );
};

export default FilterProducts;
