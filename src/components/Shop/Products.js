import ProductItem from './ProductItem';
import classes from './Products.module.css';
import {useSelector} from "react-redux";
const Products = (props) => {
  const productObj = useSelector((state) => state.products)
  const ProductItems = []
  for(const[key,value] of Object.entries(productObj)){
    console.log(`data -->, ${key}:${value}`)
    ProductItems.push(
      <ProductItem data={value}/>
    )
  }
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
       
        {ProductItems}
      </ul>
    </section>
  );
};

export default Products;
