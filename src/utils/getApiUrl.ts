export function getApiUrl(): string | undefined {
  const apiUrls: Record<string, string> = {};
  try {
    const tmpUrls = JSON.parse(localStorage.getItem("api-urls") ?? "{}");
    if (typeof tmpUrls === "object") {
      Object.keys(tmpUrls).forEach((apiKey) => {
        if (typeof tmpUrls[apiKey] === "string") {
          apiUrls[apiKey] = tmpUrls[apiKey];
        }
      });
    }
  } catch {}

  return apiUrls["auth_api"];
}
