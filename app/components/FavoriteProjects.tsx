import Image from "next/image";
import { ProjectsCard } from "../lib/interface";
import { GithubIcon } from "lucide-react";

async function getData() {
  const data: ProjectsCard[] = [
    {
      title: "Kaagaz App",
      github: "https://github.com/4kshi7/Kaagaz",
      _id: "1",
      link: "https://kaagaz-2k.vercel.app/",
      description:
        "Developed a Medium-based blogging app with a serverless backend using Cloudflare. Utilized Postgres DB with Prisma as an ORM, and built with Hono, a fast web framework for various JavaScript runtimes. Integrated Zod for TypeScript-first schema validation and Groq for generative AI content",
      tags: ["React", "Hono", "Cloudflare Workers", "PostgreSQL", "Prisma"],
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/kaagazstorage.appspot.com/o/images%2FScreenshot%202024-06-04%20005122.png?alt=media&token=ea996bfe-89a1-4bf3-a061-c8c058e8769f",
    },
    {
      title: "Muscle Up",
      _id: "2",
      link: "https://muscleup-2k.vercel.app/",
      github: "https://github.com/4kshi7/MuscleUp",
      description:
        "Developed an AI-powered gym and diet planner with personalized recommendations based on user metrics. Built a responsive React frontend and used Gemini API for data analysis.",
      tags: [
        "React",
        "Hono",
        "Cloudflare Workers",
        "Firebase Auth",
        "Tailwind CSS",
      ],
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/kaagazstorage.appspot.com/o/images%2FScreenshot%202024-06-04%20011405.png?alt=media&token=ab6aa655-3ffd-4d30-b80c-7da2aad49a7d",
    },
    {
      title: "PlugWatch",
      _id: "3",
      link: "https://plugwatch.vercel.app/",
      github: "https://github.com/4kshi7/plugwatch-app",
      description:
        "Created a movie database site with a React frontend and Tailwind CSS for styling, fetching movie data using the TMDB API.",
      tags: ["React", "Tailwind CSS", "TMDB API"],
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/kaagazstorage.appspot.com/o/images%2FScreenshot%202024-06-04%20011546.png?alt=media&token=7020fa85-c662-4bef-9712-b8f6f8d1639d",
    },
  ];

  return data;
}

export async function FavoriteProjects() {
  const data: ProjectsCard[] = await getData();

  console.log(data);
  return (
    <div className="py-10 grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1">
      {data.map((item) => (
        <div key={item._id}>
          <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl relative">
            <a
              href={item.link}
              key={item._id}
              className="group block"
              target="_blank"
            >
              <Image
                src={item.imageUrl}
                alt="Image Description"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl"
              />
            </a>
          </div>
          <div className="mt-4">
            <div className="flex items-center gap-4">
              <h2 className="font-medium text-lg hover:underline">
                {item.title}
              </h2>
              <a
                href={item.github}
                key={item._id}
                target="_blank"
                className="group block hover:scale-110 duration-150"
              >
                <GithubIcon/>
              </a>
            </div>
            <p className="mt-1 text-muted-foreground line-clamp-3">
              {item.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tagItem, index) => (
                <span
                  className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-2 ring-inset ring-primary/20"
                  key={index}
                >
                  {tagItem}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
