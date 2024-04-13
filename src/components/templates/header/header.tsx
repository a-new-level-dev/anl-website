// React
// Packages
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
// Context / Stores / Routers
// Components / Classes / Controllers / Services
import { Container } from '@src/components/shared/container';
import { LanguageSelector } from '@src/components/features/language-selector';
// Assets / Constants
// import BlogLogo from '@icons/blog-logo.svg';
// Interfaces / Models / Types
// Utils / Decorators / Methods / Mocks
// Styles

export const Header = () => {
   const { t } = useTranslation();

   return (
      <header className="mb-14 border-b border-gray200 bg-anl-red py-5">
         <nav>
            <Container className="flex items-center justify-between">
               <Link
                  className="py-4 text-4xl font-bold text-c-gray"
                  href="/"
                  title={t('common.homepage')}
               >
                  {/* <BlogLogo /> */}A New Level Media
               </Link>
               <LanguageSelector />
            </Container>
         </nav>
      </header>
   );
};
