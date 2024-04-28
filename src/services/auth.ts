import { PrismaClient } from "@prisma/client";
import { User } from "../models/user";

const prisma = new PrismaClient();

export const getUser = async (email: string) => {
	return prisma.user.findUnique({
		where: {
			email,
		},
	});
};

export const createUser = async (user: User) => {
    return prisma.user.create({
        data: user,
    });
};

export const updateUser = async (id: number, user: User) => {
    return prisma.user.update({
        where: {
            id,
        },
        data: user,
    });
};

export const deleteUser = async (id: number) => {
    return prisma.user.delete({
        where: {
            id,
        },
    });
};