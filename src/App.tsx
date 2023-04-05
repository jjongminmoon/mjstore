import styled from "@emotion/styled";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import PageNavigator from "./PageNavigator";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./store/AuthProvider";
import { CartProvider } from "./store/CartProvider";
import ScrollToUp from "./components/Common/ScrollToUp";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <ScrollToUp />
          <MainContainer>
            <Navbar />
            <PageNavigator />
            <Footer />
          </MainContainer>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;

const MainContainer = styled.main`
  overflow: hidden;
  position: relative;
`;
