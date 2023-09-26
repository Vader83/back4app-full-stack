"use client";

import {CacheProvider} from "@chakra-ui/next-js";
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({});

export function Providers({children}) {
  return (
    <CacheProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}