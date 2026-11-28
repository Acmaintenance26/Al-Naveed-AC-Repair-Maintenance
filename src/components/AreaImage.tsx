import Image from "next/image";
import { AreaSceneArt } from "@/components/illustrations/AreaScenes";
import type { Area } from "@/content/areas";
import { areaPhotos } from "@/content/media";

/**
 * The picture for an area: a real photo from `areaPhotos` when one has been supplied,
 * otherwise the drawn landmark scene. The parent sets the size and aspect ratio.
 */
export function AreaImage({
  area,
  sizes = "(min-width: 1024px) 704px, 100vw",
  priority = false,
}: {
  area: Area;
  sizes?: string;
  priority?: boolean;
}) {
  const photo = areaPhotos[area.slug];
  if (photo) {
    return (
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes={sizes}
        priority={priority}
        className="size-full object-cover"
      />
    );
  }
  return <AreaSceneArt scene={area.landmark.scene} label={area.landmark.alt} className="size-full" />;
}
