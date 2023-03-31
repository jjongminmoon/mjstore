import React, { useContext, useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { dbService } from "../firebase";
import { AuthContext } from "./AuthProvider";

interface CartProviderProps {
  children: React.ReactNode;
}

export const UserDataIdContext = React.createContext<string>("");
export const UserCartContext = React.createContext<any | null>(null);

export const CartProvider = ({ children }: CartProviderProps) => {
  const userInfo = useContext(AuthContext);
  const [userData, setUserData] = useState<any>([]);
  const userDataId = userData?.map((data: any) => data.id).join();
  const userCart = userData?.map((data: any) => data.cart);

  useEffect(() => {
    const q = query(collection(dbService, "user"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setUserData(arr.filter((data: any) => data.email === userInfo?.email));
    });
    return () => {
      unsubscribe();
    };
  }, [userInfo]);

  return (
    <UserDataIdContext.Provider value={userDataId}>
      <UserCartContext.Provider value={userCart}>{children}</UserCartContext.Provider>
    </UserDataIdContext.Provider>
  );
};
