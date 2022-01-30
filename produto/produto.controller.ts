import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Produto } from './classe/produto';
import { ProdutoService } from './produto.service';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  async findAll(): Promise<Produto[]> {
    return this.produtoService.listarProdutos();
  }
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Produto> {
    return this.produtoService.pesquisarProduto(id);
  }
  @Post()
  async save(@Body() pd: Produto): Promise<Produto> {
    return this.produtoService.salvarProduto(pd);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() pd: Produto): Promise<Produto> {
    return this.produtoService.editarProduto(id, pd);
  }
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Produto> {
    return this.produtoService.deletarProduto(id);
  }
}
