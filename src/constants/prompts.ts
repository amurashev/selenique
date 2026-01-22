import { PromptCategories } from "@/components/types";

export const PROMPT_CATEGORIES: PromptCategories[] = ["business"]

export const getPromptCategoryShortLabel = (category: PromptCategories) => `prompts.categories.${category}.short_label`
export const getPromptCategoryTitle = (category: PromptCategories) => `prompts.categories.${category}.title`
export const getPromptCategoryDescription = (category: PromptCategories) => `prompts.categories.${category}.description`
export const getPromptCategoryKeywords = (category: PromptCategories) => `prompts.categories.${category}.keywords`
export const getPromptCategoryH1 = (category: PromptCategories) => `prompts.categories.${category}.h1`
export const getPromptCategoryText = (category: PromptCategories) => `prompts.categories.${category}.text`
export const getPromptCategoryShortDescription = (category: PromptCategories) => `prompts.categories.${category}.short_description`
