import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class BankAccountsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany(findManyDto: Prisma.BankAccountFindManyArgs) {
    return this.prismaService.bankAccount.findMany(findManyDto);
  }
  findFirst(findManyDto: Prisma.BankAccountFindFirstArgs) {
    return this.prismaService.bankAccount.findFirst(findManyDto);
  }
  create(createDto: Prisma.BankAccountCreateArgs) {
    return this.prismaService.bankAccount.create(createDto);
  }
  update(updateDto: Prisma.BankAccountUpdateArgs) {
    return this.prismaService.bankAccount.update(updateDto);
  }
  delete(deleteDto: Prisma.BankAccountDeleteArgs) {
    return this.prismaService.bankAccount.delete(deleteDto);
  }
}
