// React
// Packages
import { appWithTranslation } from 'next-i18next';
import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import { Urbanist } from 'next/font/google';
import { useRouter } from 'next/router';
// Context / Stores / Routers
// Components / Classes / Controllers / Services
import { Layout } from '@src/components/templates/layout';
// Assets / Constants
// Interfaces / Models / Types
import type { AppProps } from 'next/app';
// Utils / Decorators / Methods / Mocks
import './utils/globals.css';
// Styles

const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' });

const App = ({ Component, pageProps }: AppProps) => {
   const { locale } = useRouter();

   return (
      <ContentfulLivePreviewProvider
         enableInspectorMode={pageProps.previewActive}
         enableLiveUpdates={pageProps.previewActive}
         locale={locale || 'en-US'}
      >
         <>
            <main className={`${urbanist.variable} bg-anl-blue font-sans text-c-gray`}>
               <Layout>
                  <Component {...pageProps} />
               </Layout>
            </main>
            <div id="portal" className={`${urbanist.variable} font-sans`} />
         </>
      </ContentfulLivePreviewProvider>
   );
};

export default appWithTranslation(App);
