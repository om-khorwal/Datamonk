export interface Blog {
  id: number;
  title: string;
  slug: string;
  content: string;
  created_at: string;
  updated_at: string;
  author: string;
  tags: string;
  share_link: string | null;
  img: string ;
}


export default Blog