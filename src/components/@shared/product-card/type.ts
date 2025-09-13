import { ProductType } from '@/store/services/products/type';

type Props = {
  _id: string;
  title: string;
  image: string;
  type?: keyof typeof ProductType;
};

export default Props;
