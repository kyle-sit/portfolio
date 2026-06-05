/** Smooth-scrolls to the element with the given id. */
export const scrollToId = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

/** Asset URL relative to the app base path (e.g. the public-folder favicon). */
export const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;
