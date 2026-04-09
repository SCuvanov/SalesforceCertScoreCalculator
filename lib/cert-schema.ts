import { z } from "zod";

export const certificationSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  questionCount: z.number().int().positive(),
  passingScore: z.number().int().min(0).max(100),
  roles: z.array(z.string().min(1)).min(1),
  categories: z
    .record(z.string(), z.number())
    .refine(
      (c) => Object.values(c).reduce((a, b) => a + b, 0) === 100,
      "Category weights must sum to 100",
    ),
  officialExamGuideUrl: z.string().url(),
  dataVerifiedDate: z.string().optional(),
  examGuideVersion: z.string().optional(),
  retired: z.boolean().optional(),
  replacedBy: z.string().optional(),
});

export type Certification = z.infer<typeof certificationSchema>;

export const certificationsArraySchema = z.array(certificationSchema);
