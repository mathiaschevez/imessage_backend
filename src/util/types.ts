import { PrismaClient } from "@prisma/client";
import { ISODateString } from "next-auth";

export interface Session {
  user?: User
  expires: ISODateString
}

export interface GraphQLContext {
  session: Session | null
  prisma: PrismaClient
  // pubsub
}

// USER INTERFACES
export interface User {
  id: string
  username: string
  email: string
  emailVerified: boolean
  image: string
  name: string
}

export interface CreateUsernameResponse {
  success?: boolean
  error?: string
}
