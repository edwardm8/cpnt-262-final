import { foodList } from "../../../lib/data";

// route parameters
export const load = ({ params }) => {
const post = foodList.find((post) => post.id === params.productid);

if (!post) throw error(404);

return{
  post
}
}