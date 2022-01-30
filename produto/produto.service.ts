import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Produto } from './classe/produto';
import { Model } from 'mongoose';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectModel(Produto.name) private produtoModel: Model<Produto>,
  ) {}

  async listarProdutos(): Promise<Produto[]> {
    return this.produtoModel.find().exec();
  }
  async pesquisarProduto(id: string): Promise<Produto> {
    return this.produtoModel.findById(id).exec();
  }
  async salvarProduto(produto: Produto): Promise<Produto> {
    const pd = new this.produtoModel(produto);
    return pd.save();
  }
  async editarProduto(id: string, produto: Produto): Promise<Produto> {
    return this.produtoModel.findByIdAndUpdate(id, produto).exec();
  }
  async deletarProduto(id: string): Promise<Produto> {
    return this.produtoModel.findByIdAndDelete({ _id: id }).exec();
  }
}
