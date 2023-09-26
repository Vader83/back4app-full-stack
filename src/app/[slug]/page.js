"use client";

import {formatDate} from "@/app/util/date-util";
import {useContext, useEffect, useState} from "react";
import ParseContext from "@/app/context/parseContext";
import {Card, CardBody, Heading, Image, Spinner, Stack, Text} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

export default function Article({params}) {

  const parse = useContext(ParseContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [article, setArticle] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const query = new parse.Query("Article");
        query.equalTo("slug", params.slug);
        const article = await query.first();
        if (!article) {
          setError("This article does not exist.");
        } else {
          setArticle(article);
        }
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
      {article && (
        <Stack>
          <Card>
            <CardBody>
              <Stack>
                <Heading as="h2" size="lg">{article.get("title")}</Heading>
                <Text>
                  Posted on {formatDate(article.get("createdAt"))}
                  {article.get("createdAt") !== article.get("updatedAt") ? `, updated on: ${formatDate(article.get("updatedAt"))}` : ""}
                </Text>
                <Image src={article.get("cover")} alt={`${article.get("title")} cover`} borderRadius="lg"/>
                <ReactMarkdown components={ChakraUIRenderer()} children={article.get("content")} skipHtml/>
              </Stack>
            </CardBody>
          </Card>
        </Stack>
      )}
    </>
  );
}