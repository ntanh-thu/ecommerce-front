import Featured from "@/components/Featured";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongooes";
import { Product } from "@/models/Products";

export default function HomePage({ product }) {
  console.log(product);
  return (
    <div>
      <Header />
      <Featured product={product} />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "666eb08db283e4dee46e0b11";
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  return {
    props: { product: JSON.parse(JSON.stringify(product)) },
  };
}
