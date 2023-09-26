import NextLink from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text
} from "@chakra-ui/react";
import {formatDate} from "@/app/util/date-util";

const article = {
  slug: "my-first-article",
  title: "My first article!",
  cover: "https://i.ibb.co/0B0yqmc/back4app-geolocation-app-cover.png",
  shortContent: "This is my first article!",
  content: `
  This is my **article content**.
  
  It can have multiple lines.
  
  ## Markdown is awesome!
  
  It should be formatted as [Markdown](https://en.wikipedia.org/wiki/Markdown).
  
  And here's a list:
  1. One 
  2. Two
  3. Three
  
  And an unordered list:
  - One
  - Two
  `,
  createdAt: "2023-08-01T00:00:00.000Z",
  updatedAt: "2023-08-01T00:00:00.000Z",
};

export default function Article({params}) {
  return (
    <Stack>
      <Card>
        <CardBody>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink as={NextLink} href="/">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink as={NextLink} href="#">{article.title}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Stack>
            <Heading as="h2" size="lg">{article.title}</Heading>
            <Text>
              Posted on {formatDate(article.createdAt)}
              {article.createdAt !== article.updatedAt ? `, updated on: ${formatDate(article.updatedAt)}` : ""}
            </Text>
            <Image src={article.cover} alt={`${article.title} cover`} borderRadius="lg"/>
            <Text>{article.content}</Text>
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
}