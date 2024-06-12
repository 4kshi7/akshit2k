import Image from "next/image";
import square from "../../public/square.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import canva from "../../public/tech-icons/canva.svg";
import cloudflare from "../../public/tech-icons/cloudflare.svg"
import mongodb from "../../public/tech-icons/mongodb-icon-2.svg"
import react from "../../public/tech-icons/react.svg"
import next from "../../public/tech-icons/next-js.svg"
import prisma from "../../public/tech-icons/prisma-2.svg"
import postgresql from "../../public/tech-icons/postgresql.svg"
import vscode from "../../public/tech-icons/vscode.svg"
import html from "../../public/tech-icons/html-1.svg"
import css from "../../public/tech-icons/css.svg"
import tailwind from "../../public/tech-icons/tailwind.svg"
import js from "../../public/tech-icons/js.svg"
import ts from "../../public/tech-icons/ts.svg"
import nodejs from "../../public/tech-icons/nodejs-1.svg"

import chatgpt from "../../public/tech-icons/chatgpt.svg";
import github from "../../public/tech-icons/github.svg";
import discord from "../../public/tech-icons/discord.svg";
import youtube from "../../public/tech-icons/youtube.svg";
import twitter from "../../public/twitter.svg";
import insta from "../../public/insta.svg";
import linkedin from "../../public/linkedin.svg"
import { Button } from "@/components/ui/button";

const icons = [
  html,
  css,
  tailwind,
  js,
  ts,
  react,
  nodejs,
  next,
  prisma,
  mongodb,
  postgresql,
  cloudflare,
  github,
  vscode,
  chatgpt,
  discord,
];

const socialMedia = [
  {
    id: 1,
    icon: insta,
    name: "Instagram",
    username: "@akshit.ffs",
    link: "https://instagram.com/akshit.ffs",
  },
  {
    id: 2,
    icon: twitter,
    name: "X / Twitter",
    username: "@akshit2k",
    link: "https://twitter.com/akshit2k",
  },
  {
    id: 3,
    icon: linkedin,
    name: "Linkedin",
    username: "@hey-akshit",
    link: "https://www.linkedin.com/in/hey-akshit/",
  },
];

export function SectionTwo() {
  return (
    <div className="grid gird-cols-1 lg:grid-cols-3 gap-4 mt-10">
      <div className="w-full relative col-span-1">
        <Image
          src={square}
          alt="square"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
        <Card className="bg-gray-100 border-none">
          <CardHeader>
            <CardTitle>Explore my stack</CardTitle>
            <CardDescription>Check out the tools & frameworks i use daily</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            {icons.map((item, index) => (
              <Image key={index} src={item} alt="Icon" className="w-16 h-16" />
            ))}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
          {socialMedia.map((item) => (
            <Card
              key={item.id}
              className="p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none"
            >
              <Image src={item.icon} alt="Icon" className="w-16 h-16" />
              <h1 className="text-2xl font-medium pt-3">{item.name}</h1>
              <p className="text-muted-foreground">{item.username}</p>
              <Button className="mt-4" size="sm" asChild>
                <a href={item.link}>Follow</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
