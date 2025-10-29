import prisma from '../config/db.js';

export async function findAll() {
  return prisma.task.findMany();
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}

export async function getById(id) {
  const task = await prisma.task.findUnique({
    where: { id },
    select: {
      id: true,
      title: true,
      completed: true,
    },
  });
  return task;
}
