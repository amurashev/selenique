const apiHost = process.env.NEXT_PUBLIC_API_HOST || "";

export type Response<T> = {
  data?: T;
  error?: { message: string; field: string; code: string };
  status: number;
};

export const apiRequest = async <T>(
  url: string,
  props: {
    data?: BodyInit;
    getParams?: Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
    method?: "GET" | "POST" | "PUT";
    cache?: "force-cache";
  }
): Promise<Response<T>> => {
  const { data, getParams, method = "GET", cache } = props || {};

  const getParamsData =
    method === "GET" && data ? new URLSearchParams(getParams).toString() : "";

  let body: BodyInit | undefined = "";

  if (method === "GET") {
    body = undefined;
  } else if (data) {
    body = data;
  }

  return fetch(
    `${apiHost}${url}${getParamsData.length ? `?${getParamsData}` : ""}`,
    {
      method,
      body,
      headers: {
        // 'Content-Type': 'application/vnd.api+json',
        // "Content-type": "multipart/form-data",
        // Authorization: `TOKEN`,
        // Accept: 'application/vnd.api+json',
      },
      cache,
    }
  ).then((res) => res.json());
};
