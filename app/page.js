import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import prisma from "@/lib/prisma";

async function getProjects() {
  return await prisma.project.findMany();
}

async function getSkills() {
  return await prisma.skill.findMany();
}

export default async function Home() {
  const projects = await getProjects();
  const skills = await getSkills();

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4   ">
        <div className="flex flex-col md:flex-row md:pt-0 items-center justify-between gap-8 pt-20">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold mb-6">
              Hi 👋 I'm <span className="text-[#FFB800]">Mill</span>
            </h1>
            <p className="text-2xl text-gray-400 mb-8">
              A passionate Full Stack Web Developer based in Bangkok
            </p>
            <div className="flex gap-4">
              <Button className="bg-[#FFB800] hover:bg-[#FFB800]/90 text-black">
                <a
                  href="/resume.pdf"
                  download="Suparit_Pantasanyakul.pdf"
                  className="w-full h-full"
                >
                  Download CV
                </a>
              </Button>

              <Button
                variant="outline"
                className="border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-black"
              >
                Let's Talk
              </Button>
            </div>
          </div>

          <div className="relative w-[500px] h-[500px] md:w-[800px] md:h-[800px]">
            <Image
              src="https://res.cloudinary.com/ddcjkc1ns/image/upload/v1733736422/portfolio/mikctxox6bwfq0zwmepj.png"
              alt="Profile Picture"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              quality={75}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </section>

      <Separator className="bg-gray-800" />

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12">
          Selected <span className="text-[#FFB800]">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-[#1A1A1A] border-none hover:scale-105 transition-transform duration-300"
            >
              <CardContent className="p-6">
                {project.image && (
                  <div className="aspect-video bg-gray-800 rounded-lg mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={225}
                      className="rounded-lg"
                    />
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button
                      variant="outline"
                      className="border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-black"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.sourceUrl && (
                    <Button
                      variant="outline"
                      className="border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-black"
                    >
                      <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="bg-gray-800" />

      {/* Skills Section - Updated */}
      <section id="skills" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12">
          My <span className="text-[#FFB800]">Skills</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <Card
              key={skill.id}
              className="bg-[#1A1A1A] border-none p-6 text-center hover:bg-[#FFB800] hover:text-black transition-colors"
            >
              <CardContent className="p-0">
                <p className="font-bold">{skill.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="bg-gray-800" />

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12">
          Get In <span className="text-[#FFB800]">Touch</span>
        </h2>
        <div className="flex flex-col items-center gap-6">
          <p className="text-xl text-gray-400 text-center max-w-2xl">
            I'm currently available for freelance work or full-time positions. If you have a project
            that you want to get started or think you need my help, then get in touch.
          </p>
          <Button className="bg-[#FFB800] hover:bg-[#FFB800]/90 text-black px-8">Contact Me</Button>
        </div>
      </section>
    </div>
  );
}
