import NextLink from "next/link";
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, Card, CardBody, Heading, Link, Stack, Text} from "@chakra-ui/react";

const articles = [
  {
    slug: "my-first-article",
    title: "My first article!",
    cover: "https://i.ibb.co/0B0yqmc/back4app-geolocation-app-cover.png",
    shortContent: "This is my first article!",
    content: "",
    createdAt: "2023-08-01T00:00:00.000Z",
    updatedAt: "2023-08-01T00:00:00.000Z",
  },
  {
    slug: "my-second-article",
    title: "My second article!",
    cover: "https://i.ibb.co/0B0yqmc/back4app-geolocation-app-cover.png",
    shortContent: "This is my second article!",
    content: "",
    createdAt: "2023-08-01T00:00:00.000Z",
    updatedAt: "2023-08-01T00:00:00.000Z",
  },
  {
    slug: "my-third-article",
    title: "My third article!",
    cover: "https://i.ibb.co/0B0yqmc/back4app-geolocation-app-cover.png",
    shortContent: "This is my third article!",
    content: "",
    createdAt: "2023-08-01T00:00:00.000Z",
    updatedAt: "2023-08-01T00:00:00.000Z",
  }
];

export default function Home() {
  return (
    <>
      <Stack>
        {articles.map((article) => (
          <Card key={article.slug}>
            <CardBody>
              <Stack>
                <Heading size="lg">
                  <Link as={NextLink} href={article.slug}>
                    {article.title}
                  </Link>
                </Heading>
                <Text>{article.title}</Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Stack>
    </>
  );
}
