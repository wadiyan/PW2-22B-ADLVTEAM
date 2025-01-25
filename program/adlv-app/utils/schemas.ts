import * as z from "zod";
import { ZodSchema } from "zod";

export const validateAddCatalogWithZod = z.object({
  title: z.string().max(20, { message: "max length is 20" }),
  description: z.string().max(20, { message: "max length is 20" }),
  image: z.string().max(20, { message: "max length is 20" }),
  price: z.string().max(20, { message: "max length is 20" }),
  category: z.string().max(20, { message: "max length is 20" }),
});

export const profileSchema = z.object({
  // firstName: z.string().max(5, { message: 'max length is 5' }),
  firstName: z.string().min(2, {
    message: "first name must be at least 2 characters",
  }),
  lastName: z.string().min(2, {
    message: "last name must be at least 2 characters",
  }),
  username: z.string().min(2, {
    message: "username must be at least 2 characters",
  }),
  // description: z.string().min(2, {
  //   message: "username must be at least 2 characters",
  // }),
  // price: z.string().min(2, {
  //   message: "username must be at least 2 characters",
  // }),
  // image: z.string().min(2, {
  //   message: "username must be at least 2 characters",
  // }),
  // category: z.string().min(2, {
  //   message: "username must be at least 2 characters",
  // }),
});

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(","));
  }
  return result.data;
}

function validateFile({
  maxUploadSize = 1024 * 1024, // Default: 1 MB
  acceptedFileTypes = ["image/"],
} = {}) {
  return z
    .instanceof(File, { message: "Input must be a valid File object" })
    .refine((file) => file.size <= maxUploadSize, {
      message: `File size must be less than ${
        maxUploadSize / (1024 * 1024)
      } MB`,
    })
    .refine(
      (file) => acceptedFileTypes.some((type) => file.type.startsWith(type)),
      { message: "File must be an accepted image type" }
    );
}

export const imageSchema = z.object({
  image: validateFile(),
});

//  id          String @id @default(uuid())
//   name        String
//   description String
//   price       String
//   category    String
//   image       String
//   createdAt   DateTime @default(now())
//   updateAt    DateTime @updatedAt
//   user     User @relation(fields: [UserId], references: [clerkId],onDelete: Cascade)
//   UserId   String
export const propertySchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "name must be at least 2 characters.",
    })
    .max(100, {
      message: "name must be less than 100 characters.",
    }),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: "description must be between 10 and 1000 words.",
    }
  ),
  price: z.string(),
  category: z.string(),
});
