'use client'
import { createContext, ReactNode, useContext, useState } from "react";
import { CartItem } from '../utils/types';

interface CartBookingsContextType {
   cart: CartItem[];
   setCart: (cartItems: CartItem[]) => void;

}

type Props = {
  children: ReactNode;
};

const CartBookingsContext = createContext<CartBookingsContextType | undefined>(undefined);


export const CartBookingsProvider = ({ children }: Props) => {
   const [cartItems, setCartItems] = useState<CartItem[]>([]);
   return (
     <CartBookingsContext.Provider value={{ cart: cartItems, setCart: setCartItems }}>
       {children}
     </CartBookingsContext.Provider>
   );
};

export const useCartBookings = () => {
   const context = useContext(CartBookingsContext);
   if (!context) {
     throw new Error("useCartBookings must be used within a CartBookingsProvider");
   }
   return context;
};


