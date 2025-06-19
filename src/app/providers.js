"use client";

import {CacheProvider} from "@chakra-ui/next-js";
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import {extendTheme} from "@chakra-ui/react";
import Parse from "parse/dist/parse";
import ParseContext from "@/app/context/parseContext";

Parse.initialize(
  process.env.NEXT_PUBLIC_PARSE_APPLICATION_ID,
  process.env.NEXT_PUBLIC_PARSE_JAVASCRIPT_KEY
);
Parse.serverURL = "https://parseapi.back4app.com/";

export const theme = extendTheme({});

export function Providers({children}) {
  return (
    <CacheProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <ChakraProvider theme={theme}>
        <ParseContext.Provider value={Parse}>
          {children}
        </ParseContext.Provider>
      </ChakraProvider>
    </CacheProvider>
  );
}