import { PromptCategories, PromptModels } from "@/components/types";

export const PROMPT_CATEGORIES: PromptCategories[] = [
  "business",
  "fashion",
  "product",
  "lifestyle",
  "fantasy",
  "red_carpet",
  "beauty",
  "jewelry",
  "headshot",
  "men",
  "women",
  "studio",
  "design",
  "avatar",
];

export const PROMPT_MODELS: PromptModels[] = [
  "gemini",
  "nano_banana",
  "midjourney",
  "chat_gpt",
];

export const getPromptCategoryShortLabel = (category: PromptCategories) =>
  `prompts.categories.${category}.short_label`;
export const getPromptCategoryTag = (category: PromptCategories) =>
  `prompts.categories.${category}.tag`;
export const getPromptCategoryTitle = (category: PromptCategories) =>
  `prompts.categories.${category}.title`;
export const getPromptCategoryDescription = (category: PromptCategories) =>
  `prompts.categories.${category}.description`;
export const getPromptCategoryKeywords = (category: PromptCategories) =>
  `prompts.categories.${category}.keywords`;
export const getPromptCategoryH1 = (category: PromptCategories) =>
  `prompts.categories.${category}.h1`;
export const getPromptCategoryText = (category: PromptCategories) =>
  `prompts.categories.${category}.text`;
export const getPromptCategoryShortDescription = (category: PromptCategories) =>
  `prompts.categories.${category}.short_description`;

export const getPromptModelShortLabel = (category: PromptModels) =>
  `prompts.models.${category}.short_label`;
export const getPromptModelTag = (category: PromptModels) =>
  `prompts.models.${category}.tag`;
export const getPromptModelTitle = (category: PromptModels) =>
  `prompts.models.${category}.title`;
export const getPromptModelDescription = (category: PromptModels) =>
  `prompts.models.${category}.description`;
export const getPromptModelKeywords = (category: PromptModels) =>
  `prompts.models.${category}.keywords`;
export const getPromptModelH1 = (category: PromptModels) =>
  `prompts.models.${category}.h1`;
export const getPromptModelText = (category: PromptModels) =>
  `prompts.models.${category}.text`;
export const getPromptModelShortDescription = (category: PromptModels) =>
  `prompts.models.${category}.short_description`;
