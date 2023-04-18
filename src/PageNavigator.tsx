import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";
import OrderPage from "./pages/OrderPage";
import TradePage from "./pages/TradePage";
import TrendPage from "./pages/TrendPage";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import Mypage from "./pages/Mypage";
import RafflePage from "./pages/RafflePage";
import AdminPage from "./pages/AdminPage";

export default function PageNavigator() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/trade" element={<TradePage />} />
      <Route path="/trade/:id" element={<DetailPage />} />
      <Route path="/trade/cart" element={<CartPage />} />
      <Route path="/trade/order" element={<OrderPage />} />
      <Route path="/user/login" element={<LoginPage />} />
      <Route path="/user/join" element={<JoinPage />} />
      <Route path="/user/mypage" element={<Mypage />} />
      <Route path="/trend" element={<TrendPage />} />
      <Route path="/raffle" element={<RafflePage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}
