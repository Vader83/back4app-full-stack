"use client";

import {Card, CardBody, Heading, Image, Stack, Text} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import {formatDate} from "@/app/util/date-util";

const article = {
  slug: "my-first-article",
  title: "My first article!",
  cover: "https://i.ibb.co/tqGXfGZ/android-app-cover.png",
  shortContent: "This is my first article!",
  content: `
  This is my **article content**.
  
  It can have multiple lines.
  
  #### Markdown is awesome!
  
  It should be formatted as [Markdown](https://en.wikipedia.org/wiki/Markdown).
  
  And here's a list:
  1. One 
  2. Two
  3. Three
  
  And an unordered list:
  - One
  - Two
  
  Here's a picture of a cute cat:
  
  ![Cute Cat](https://i.ibb.co/wYnFtpy/cute-cat.png)
  `,
  createdAt: "2023-08-01T00:00:00.000Z",
  updatedAt: "2023-08-01T00:00:00.000Z",
};

export default function Article({params}) {
  return (
    <Stack>
      <Card>
        <CardBody>
          <Stack>
            <Heading as="h2" size="lg">{article.title}</Heading>
            <Text>
              Posted on {formatDate(article.createdAt)}
              {article.createdAt !== article.updatedAt ? `, updated on: ${formatDate(article.updatedAt)}` : ""}
            </Text>
            <Image src={article.cover} alt={`${article.title} cover`} borderRadius="lg"/>
            <ReactMarkdown components={ChakraUIRenderer()} children={article.content} skipHtml/>
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
}