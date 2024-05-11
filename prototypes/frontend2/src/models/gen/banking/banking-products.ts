// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { AccountFeatures } from '../banking/account-features.js';


export class BankingProducts {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):BankingProducts {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsBankingProducts(bb:flatbuffers.ByteBuffer, obj?:BankingProducts):BankingProducts {
  return (obj || new BankingProducts()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsBankingProducts(bb:flatbuffers.ByteBuffer, obj?:BankingProducts):BankingProducts {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new BankingProducts()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

products(index: number, obj?:AccountFeatures):AccountFeatures|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new AccountFeatures()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

productsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startBankingProducts(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addProducts(builder:flatbuffers.Builder, productsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, productsOffset, 0);
}

static createProductsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startProductsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endBankingProducts(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static finishBankingProductsBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset);
}

static finishSizePrefixedBankingProductsBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, undefined, true);
}

static createBankingProducts(builder:flatbuffers.Builder, productsOffset:flatbuffers.Offset):flatbuffers.Offset {
  BankingProducts.startBankingProducts(builder);
  BankingProducts.addProducts(builder, productsOffset);
  return BankingProducts.endBankingProducts(builder);
}
}