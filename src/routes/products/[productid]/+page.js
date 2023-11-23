import { foodList } from "../../../lib/data";

export const load = ({ params }) => {
const post = foodList.find((post) => post.id === params.productid);
 
return{
  post
}
}