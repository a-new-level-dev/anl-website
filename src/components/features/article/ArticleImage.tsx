import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { twMerge } from 'tailwind-merge';

import { CtfImage } from '@src/components/features/contentful';
import { ComponentRichImage } from '@src/lib/__generated/sdk';

interface ArticleImageProps {
   image: ComponentRichImage;
}

const getClasses = (image: ComponentRichImage): string => {
   const imageClasses: string = image.fullWidth
      ? 'md:w-screen md:max-w-[calc(100vw-40px)] md:shrink-0'
      : 'rounded-2xl border border-gray300 shadow-lg';

   return twMerge('mt-0 mb-0 ', imageClasses);
};

export const ArticleImage = ({ image }: ArticleImageProps) => {
   const inspectorProps = useContentfulInspectorMode({ entryId: image.sys.id });

   return image.image ? (
      <figure>
         <div className="flex justify-center" {...inspectorProps({ fieldId: 'image' })}>
            <CtfImage
               nextImageProps={{
                  className: getClasses(image),
               }}
               {...image.image}
            />
         </div>
         {image.caption && (
            <figcaption className="mt-4" {...inspectorProps({ fieldId: 'caption' })}>
               {image.caption}
            </figcaption>
         )}
      </figure>
   ) : null;
};
