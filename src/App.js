import ProductList from "./components/productList/productList";
import { CatalogueProvider } from "./providers/catalogue";
import { CartProvider } from "./providers/cart";
import { Container } from "./style";

function App() {
  return (
    <Container>
      <CatalogueProvider>
        <CartProvider>
          <ProductList type="catalogue" />
          <ProductList type="cart" />
        </CartProvider>
      </CatalogueProvider>
    </Container>
  );
}

export default App;
