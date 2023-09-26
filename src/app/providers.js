"use client";

import {CacheProvider} from "@chakra-ui/next-js";
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import ParseContext from "./context/parseContext";

import Parse from "parse/dist/parse";

export const theme = extendTheme({});

const PARSE_APPLICATION_ID = process.env.NEXT_PUBLIC_PARSE_APPLICATION_ID;
const PARSE_JAVASCRIPT_KEY = process.env.NEXT_PUBLIC_PARSE_JAVASCRIPT_KEY;
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = "https://parseapi.back4app.com/";

export function Providers({children}) {
  return (
    <CacheProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <ParseContext.Provider value={Parse}>
          {children}
        </ParseContext.Provider>
      </ChakraProvider>
    </CacheProvider>
  );
}