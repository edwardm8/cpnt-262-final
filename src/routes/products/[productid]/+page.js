import { foodList } from "../../../lib/data";

// route parameters from svelte tutorial
export const load = ({ params }) => {
const post = foodList.find((post) => post.id === params.productid);

//throw not found if invalid route https://learn.svelte.dev/tutorial/page-data
if (!post) throw error(404);

return{
  post
}
}