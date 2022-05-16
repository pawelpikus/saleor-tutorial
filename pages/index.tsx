import { Layout } from "@/components/Layout";
import { ProductCollection } from "@/components/ProductCollection";

const styles = {
  background: "min-h-screen bg-gray-100",
  container: "py-10 max-w-7xl mx-auto",
};

const Home = () => {
  return (
    <Layout>
      <ProductCollection />
    </Layout>
  );
};

export default Home;
