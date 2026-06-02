import { z } from "zod";

const aiModel = z.object({
   body: z.object({
     prompt: z
       .string({ required_error: "Prompt is required!" })
       .max(2000, "Prompt must not exceed 2000 characters"),
     language: z.string().max(50).optional(),
   }),
 });

const aiAlternateEndings = z.object({
   body: z.object({
    title: z
       .string({ required_error: "Title is required!" })
       .max(200, "Title must not exceed 200 characters"),
    content: z
       .string({ required_error: "Content is required!" })
      .max(10000, "Content must not exceed 10000 characters"),
    tag: z
       .string({ required_error: "Tag is required!" })
       .max(50, "Tag must not exceed 50 characters"),
     language: z.string().max(50).optional(),
   }),
 });



export const AIModelValidator = {
  aiModel,
  aiAlternateEndings,
};

