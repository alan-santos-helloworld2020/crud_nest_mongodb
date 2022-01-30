import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Produto, ProdutoSchema } from './classe/produto';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Produto.name,
        schema: ProdutoSchema,
      },
    ]),
  ],
  providers: [ProdutoService],
  controllers: [ProdutoController],
})
export class ProdutoModule {}
