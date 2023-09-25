---
title: "Type-Safe Requests with TypeScript and Zod"
subtitle: "Whoop!"
date: "2023-09-18"
tags: ["typescript", "nodejs"]
---

## Introduction
This is an introduction to `zod` with TypeScript.

```typescript
import { z, ZodSchema, ZodType } from "zod";
import { Request, RequestHandler } from "express";

export type RequestSchema<TParams, TQuery, TBody> = {
  params?: ZodSchema<TParams>;
  query?: ZodSchema<TQuery>;
  body?: ZodSchema<TBody>;
};

export type ValidatedRequest<TSchema> = TSchema extends RequestSchema<
  infer TParams,
  infer TQuery,
  infer TBody
>
  ? Request<
      z.infer<ZodType<TParams>>,
      any,
      z.infer<ZodType<TBody>>,
      z.infer<ZodType<TQuery>>
    >
  : never;
```
