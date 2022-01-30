import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Produto extends Document {
  @Prop()
  id: string;
  @Prop()
  data: string;
  @Prop()
  nome: string;
  @Prop()
  descricao: string;
}

export const ProdutoSchema = SchemaFactory.createForClass(Produto);
