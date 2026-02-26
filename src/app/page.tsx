import HomeEntry, { generateMetadata } from "./[lang]/page";

export { generateMetadata };
// eslint-disable-next-line @typescript-eslint/no-explicit-any, react/display-name
export default async (params: any) => <HomeEntry {...params} />;
