"use client";

import {formatDate} from "@/app/util/date-util";
import {Card, CardBody, Heading, Image, Stack, Text} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

const article = {
  "slug": "android",
  "title": "What is Android?",
  "shortContent": "Explore the transformative power of Android, the world's most popular mobile operating system. Discover why Android is the preferred choice for billions of users worldwide due to its open-source nature, vast app ecosystem, and unmatched customization options.",
  "content": "Android, the **pioneer** of modern mobile operating systems, has transformed the way we interact with our devices. With its open-source architecture, **flexible customization**, and a vast ecosystem of apps, Android has become the **go-to choice** for smartphones and tablets globally.\n\nHere are some compelling reasons why Android stands out:\n\n1. **Open Source Freedom**: Android's open-source nature means that it's constantly evolving and improving, thanks to a dedicated community of developers. This openness fosters **innovation** and ensures that Android devices are always at the cutting edge of technology.\n\n2. **Diverse Hardware**: Android runs on a **myriad of devices**, from budget-friendly options to high-end flagships, catering to a wide range of users. This **versatility** allows you to choose a device that suits your needs and budget.\n\n3. **App Ecosystem**: The Google Play Store boasts a massive library of apps, ranging from productivity tools to games. With over 3 million apps to choose from, you can find almost anything you need, making Android a hub of **creativity and productivity**.",
  "createdAt": "2023-09-26T21:11:53.050Z",
  "updatedAt": "2023-09-26T21:29:39.423Z"
};

export default function Article({params}) {
  return (
    <>
      {article && (
        <Stack>
          <Card>
            <CardBody>
              <Stack>
                <Heading as="h2" size="lg">{article["title"]}</Heading>
                <Text>Posted on {formatDate(article["createdAt"])}</Text>
                {article["cover"] && (
                  <Image src={article["cover"]} alt={`${article["title"]} cover`} borderRadius="lg"/>
                )}
                <ReactMarkdown components={ChakraUIRenderer()} children={article["content"]} skipHtml/>
              </Stack>
            </CardBody>
          </Card>
        </Stack>
      )}
    </>
  );
}