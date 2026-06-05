import { isVideo } from "../../../utils/media";
import type { MediaItem } from "../../../types";

/** Renders a project media item as an autoplaying video or a lazy image. */
export function Media({ item, alt }: { item: MediaItem; alt: string }) {
  if (isVideo(item.src)) {
    return (
      <video src={item.src} autoPlay loop muted playsInline preload="metadata" />
    );
  }
  return <img src={item.src} alt={alt} loading="lazy" />;
}
