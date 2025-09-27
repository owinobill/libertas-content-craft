import { Helmet } from "react-helmet-async";
import { CriticalCSS } from "@/components/CriticalCSS";
import { EnhancedSEO } from "@/components/EnhancedSEO";

interface ProductionReadyAppProps {
  children: React.ReactNode;
}

export const ProductionReadyApp = ({ children }: ProductionReadyAppProps) => {
  return (
    <>
      {children}
    </>
  );
};