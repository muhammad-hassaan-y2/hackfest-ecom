import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from 'sanity';
import { dataset, projectId } from '../env';
import { client } from '@/lib/sanityClient';

export const imageBuilder = createImageUrlBuilder(client)

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source)
}
