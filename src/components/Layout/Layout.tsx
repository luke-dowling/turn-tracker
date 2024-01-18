import { ReactNode } from 'react';
import Header from '../Header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      {children}
    </div>
  );
};
