// Compiledger Database Client
// Shared Prisma client with connection management

import { PrismaClient } from './generated';

export * from './generated';

// Singleton pattern for Prisma client
let prismaInstance: PrismaClient | null = null;

export function getPrismaClient(): PrismaClient {
  if (!prismaInstance) {
    prismaInstance = new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    });
  }
  return prismaInstance;
}

export async function disconnectPrisma() {
  if (prismaInstance) {
    await prismaInstance.$disconnect();
    prismaInstance = null;
  }
}

// Export singleton instance
export const prisma = getPrismaClient();
