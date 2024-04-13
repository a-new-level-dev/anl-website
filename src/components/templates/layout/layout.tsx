// React
import { ReactNode } from 'react';
// Packages
// Context / Stores / Routers
// Components / Classes / Controllers / Services
import { Footer } from '../footer';
import { Header } from '../header';
// Assets / Constants
// Interfaces / Models / Types
// Utils / Decorators / Methods / Mocks
// Styles

interface LayoutPropsInterface {
   children: ReactNode;
}

export const Layout = ({ children }: LayoutPropsInterface) => {
   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   );
};
