import React, { createContext, ReactNode, useContext, useState } from 'react';

import {
  CartContextType,
  CartItem,
} from '@/components/[products]/@helpers/hooks/use-cart-context/type';

const payloadAmount = 10;
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (id: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item._id === id);
      if (existing) {
        return prev.map((item) =>
          item._id === id ? { ...item, count: item.count + payloadAmount } : item,
        );
      }
      return [...prev, { _id: id, count: payloadAmount }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item._id === id ? { ...item, count: item.count - payloadAmount } : item,
        )
        .filter((item) => item.count > 0),
    );
  };

  const deleteItemsFromCart = (ids: string[]) => {
    setCart((prev) => prev.filter((item) => !ids.includes(item._id)));
  };

  const clearCart = () => {
    setCart(() => []);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, deleteItemsFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
