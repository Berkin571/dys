/* eslint-disable @typescript-eslint/no-explicit-any */
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
ed < s;
const colors = {
  brand: {
    50: '#E1F6FA',
    100: '#B3E7F0',
    200: '#84D8E5',
    300: '#55C9DA',
    400: '#27BBD0',
    500: '#0E7490',
    600: '#0B5A70',
    700: '#083F50',
    800: '#052430',
    900: '#021010',
  },
};

const theme = extendTheme({
  config,
  colors,
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.800',
      },
      '.dark': {
        bg: 'gray.800',
        color: 'white',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'md',
      },
      sizes: {
        md: {
          h: 10,
          minW: 10,
          fontSize: 'lg',
          px: 4,
        },
      },
      variants: {
        solid: (props: any) => ({
          bg: props.colorMode === 'dark' ? 'brand.500' : 'brand.500',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.600' : 'brand.600',
          },
        }),
        outline: (props: any) => ({
          borderColor: props.colorMode === 'dark' ? 'brand.500' : 'brand.500',
          color: props.colorMode === 'dark' ? 'brand.500' : 'brand.500',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.600' : 'brand.600',
            borderColor: 'transparent',
            color: 'white',
          },
        }),
        ghost: (props: any) => ({
          color: props.colorMode === 'dark' ? 'brand.500' : 'brand.500',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.600' : 'brand.600',
            color: 'white',
          },
        }),
      },
      defaultProps: {
        size: 'md',
        variant: 'solid',
      },
    },
    Input: {
      baseStyle: {
        field: {
          _focus: {
            borderColor: 'brand.500',
            boxShadow: '0 0 0 1px brand.500',
          },
        },
      },
    },
    Select: {
      baseStyle: {
        field: {
          _focus: {
            borderColor: 'brand.500',
            boxShadow: '0 0 0 1px brand.500',
          },
        },
      },
    },
  },
});

export default theme;
