export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;



export type PropertyCardProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
};