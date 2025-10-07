export interface INewProductResponse {
  message: string;
  date: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    status: string;
    imageBase64: string;
  }[]
}