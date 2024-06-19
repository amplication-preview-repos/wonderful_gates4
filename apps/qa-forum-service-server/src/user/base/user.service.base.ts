/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  User as PrismaUser,
  Answer as PrismaAnswer,
  Like as PrismaLike,
  Question as PrismaQuestion,
} from "@prisma/client";

export class UserServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.UserCountArgs, "select">): Promise<number> {
    return this.prisma.user.count(args);
  }

  async users(args: Prisma.UserFindManyArgs): Promise<PrismaUser[]> {
    return this.prisma.user.findMany(args);
  }
  async user(args: Prisma.UserFindUniqueArgs): Promise<PrismaUser | null> {
    return this.prisma.user.findUnique(args);
  }
  async createUser(args: Prisma.UserCreateArgs): Promise<PrismaUser> {
    return this.prisma.user.create(args);
  }
  async updateUser(args: Prisma.UserUpdateArgs): Promise<PrismaUser> {
    return this.prisma.user.update(args);
  }
  async deleteUser(args: Prisma.UserDeleteArgs): Promise<PrismaUser> {
    return this.prisma.user.delete(args);
  }

  async findAnswers(
    parentId: string,
    args: Prisma.AnswerFindManyArgs
  ): Promise<PrismaAnswer[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .answers(args);
  }

  async findLikes(
    parentId: string,
    args: Prisma.LikeFindManyArgs
  ): Promise<PrismaLike[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .likes(args);
  }

  async findQuestions(
    parentId: string,
    args: Prisma.QuestionFindManyArgs
  ): Promise<PrismaQuestion[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .questions(args);
  }
}
