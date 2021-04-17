import Post from "./post.model";

export default interface PostsGetReturn {
  next: string;
  previous: string;
  results: Post[];
}
