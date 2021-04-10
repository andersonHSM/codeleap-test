import BasicPostModel from "./basic-post.model";


export default interface Post extends BasicPostModel {
  id: string;
  created_datetime: string;
}
