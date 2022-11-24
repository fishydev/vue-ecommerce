export type Category = {
  id: number;
  uuid: string;
  type: string;
  imageUrl: string;
  alt: string;
};

export type Product = {
  uuid: string;
  productTitle: string;
  brand: string;
  color: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  reviews: number;
  imageUrl: string;
  alt: string;
  categories: string;
};

export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
};

export type ProductFilter = {
  types?: string[];
  colors?: string[];
  query?: string;
  sort?: "htl" | "lth";
};
export type CategoryOption = Pick<Category, "uuid" | "type">;
