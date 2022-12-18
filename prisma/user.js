import prisma from "./prisma";

export async function getAllUser() {
  const users = await prisma.user.findMany({});
  return users;
}

export async function getUser(id) {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
}

export async function createUser(f_name, l_name, password, email) {
  const user = await prisma.user.create({
    data: {
      f_name,
      l_name,
      password,
      email,
    },
  });
  return user;
}

export async function loginUser(email, password) {
  const user = await prisma.user.findFirstOrThrow({
    where: { email, password },
  });
  return user;
}
