"use client";

import NextLink from "next/link";
import {useContext, useEffect, useState} from "react";
import ParseContext from "@/app/context/parseContext";
import {Card, CardBody, Heading, Link, Spinner, Stack, Text} from "@chakra-ui/react";

export default function Home() {

  const parse = useContext(ParseContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const query = new parse.Query("Article");
        query.descending("createdAt");
        const articles = await query.find();
        setArticles(articles);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <Spinner size="lg"/>;
  }

  if (error) {
    return <Text color="red">{error}</Text>
  }

  return (
    <>
      <Stack>
        {articles.map((article) => (
          <Card key={article.get("slug")}>
            <CardBody>
              <Stack>
                <Heading size="lg">
                  <Link as={NextLink} href={article.get("slug")}>
                    {article.get("title")}
                  </Link>
                </Heading>
                <Text>{article.get("title")}</Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Stack>
    </>
  );
}
