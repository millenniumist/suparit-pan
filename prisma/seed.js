const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  // Clean existing data
  await prisma.$transaction([
    prisma.contact.deleteMany(),
    prisma.skill.deleteMany(),
    prisma.project.deleteMany(),
  ])

  // Seed Projects
  await prisma.project.createMany({
    data: [
      {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration.',
        image: '/projects/ecommerce.png',
        liveUrl: 'https://demo-ecommerce.com',
        sourceUrl: 'https://github.com/username/ecommerce'
      },
      {
        title: 'Task Management App',
        description: 'A React-based task management application with real-time updates.',
        image: '/projects/taskapp.png',
        liveUrl: 'https://demo-taskapp.com',
        sourceUrl: 'https://github.com/username/taskapp'
      }
    ]
  })

  // Seed Skills
  await prisma.skill.createMany({
    data: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'Python' },
      { name: 'MongoDB' },
      { name: 'Git' }
    ]
  })

  // Seed Contacts (Sample data)
  await prisma.contact.createMany({
    data: [
      {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Interested in collaboration'
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        message: 'Would love to discuss a project'
      }
    ]
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
