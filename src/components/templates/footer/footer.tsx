// React
// Packages
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
// Context / Stores / Routers
// Components / Classes / Controllers / Services
import { Container } from '@src/components/shared/container';
// Assets / Constants
// Interfaces / Models / Types
// Utils / Decorators / Methods / Mocks
// Styles

export const Footer = () => {
   const { t } = useTranslation();

   return (
      <footer className="border-t-color mt-10 border-t border-gray200 bg-anl-red">
         <Container className="py-8">
            <h2 className="h4 mb-4">{t('footer.aboutUs')}</h2>
            <div className="max-w-4xl">{t('footer.description')}</div>
            <div className="mt-8">
               {t('footer.powerBy')}{' '}
               <Link
                  className="text-blue500"
                  href="https://www.contentful.com"
                  rel="noopener noreferrer"
                  target="_blank"
               >
                  Contentful
               </Link>
            </div>
         </Container>
      </footer>
   );
};
