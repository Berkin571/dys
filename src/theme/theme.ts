/* eslint-disable @typescript-eslint/no-explicit-any */
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  blue: {
    50: '#ebf8ff',
    100: '#bee3f8',
    200: '#90cdf4',
    300: '#63b3ed',
    400: '#4299e1',
    500: '#3182ce',
    600: '#2b6cb0',
    700: '#2c5282',
    800: '#2a4365',
    900: '#1A365D',
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
          bg: props.colorMode === 'dark' ? 'blue.700' : 'blue.700',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'blue.600' : 'blue.600',
          },
        }),
        outline: (props: any) => ({
          borderColor: props.colorMode === 'dark' ? 'blue.700' : 'blue.700',
          color: props.colorMode === 'dark' ? 'blue.700' : 'blue.700',
          _hover: {
            bg: props.colorMode === 'dark' ? 'blue.600' : 'blue.600',
            borderColor: 'transparent',
            color: 'white',
          },
        }),
        ghost: (props: any) => ({
          color: props.colorMode === 'dark' ? 'blue.700' : 'blue.700',
          _hover: {
            bg: props.colorMode === 'dark' ? 'blue.600' : 'blue.600',
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
            borderColor: 'blue.700',
            boxShadow: '0 0 0 1px blue.700',
          },
        },
      },
    },
    Select: {
      baseStyle: {
        field: {
          _focus: {
            borderColor: 'blue.700',
            boxShadow: '0 0 0 1px blue.700',
          },
        },
      },
    },
  },
});

export default theme;
