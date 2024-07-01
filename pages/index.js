import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProduct from "@/components/NewProduct";
import { mongooseConnect } from "@/lib/mongooes";
import { Product } from "@/models/Products";

export default function HomePage({ featureProduct, newProducts }) {
  return (
    <div>
      <Header />
      <Featured featureProduct={featureProduct} />
      <NewProduct newProducts={newProducts} />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "6682ba3633e39a7b5aecef4a";
  await mongooseConnect();
  const featureProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, { sort: { _id: -1 }, limit: 10 });
  return {
    props: {
      featureProduct: JSON.parse(JSON.stringify(featureProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
