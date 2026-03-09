import type { IBaseModel } from './base.model';

export interface IProduct extends IBaseModel {
  title: string;
  slug: string;
  description: string;
  origin: string;
  variants: IVariant[];
}

export interface IAttribute extends IBaseModel {
  name: string;
  value: string;
}

export interface IImage extends IBaseModel {
  url: string;
  publicId: string;
  priority: number;
  thumbnail: boolean;
}

export interface IVariant extends IBaseModel {
  sku: string;
  price: number;
  active: boolean;
  default: boolean;
  attributes: IAttribute[];
  images: IImage[];
}

export interface ProductSearchRequest {
  collections?: string[];
}
