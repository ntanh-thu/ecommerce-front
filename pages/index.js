import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProduct from "@/components/NewProduct";
import { mongooseConnect } from "@/lib/mongooes";
import { Product } from "@/models/Products";

export default function HomePage({ featureProduct, newProducts }) {
  console.log(newProducts);
  return (
    <div>
      <Header />
      <Featured featureProduct={featureProduct} />
      <NewProduct newProducts={newProducts} />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "666eb08db283e4dee46e0b11";
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
