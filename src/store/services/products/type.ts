export const ProductType = {
  Menstrual: 'Menstrual',
  Other: 'Other',
};

export interface SubProduct {
  _id: string;
  name: string;
  price: number;
}

export interface Product {
  _id: string;
  title: string;
  image: string;
  type: keyof typeof ProductType;
  subProducts: SubProduct[];
}

export interface Packet {
  _id: string;
  title: string;
  image: string;
}

export interface ProductAndPackets {
  products: Product[];
  packets: Packet[];
}
