export type CartItem = {
  _id: string;
  count: number;
};

export type CartContextType = {
  cart: CartItem[];
  addToCart: (_id: string) => void;
  removeFromCart: (_id: string) => void;
  deleteItemsFromCart: (ids: string[]) => void;
};
