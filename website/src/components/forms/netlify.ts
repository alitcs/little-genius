const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Posts a submission to Netlify Forms. The matching static form must exist in
 * index.html so Netlify detects it at build time.
 */
export async function submitToNetlify(formName: string, fields: Record<string, string>) {
  if (import.meta.env.DEV) {
    console.info(`[netlify form: ${formName}]`, fields);
    await wait(900);
    return;
  }

  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ "form-name": formName, ...fields }).toString(),
  });

  if (!response.ok) {
    throw new Error(`Form submission failed with status ${response.status}`);
  }
}
