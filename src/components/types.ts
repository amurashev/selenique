export type PossibleLocales = "en" | "ru"

export type PriceType = Record<string, number>

export type PromptBookRaw  = {
  name: string
  price: PriceType
  text: string
  links: Record<"cm" | "patreon", string>
  image: string
}

export type PromptBook  = PromptBookRaw & {
  slug: string
}