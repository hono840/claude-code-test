import { ReactNode } from "react";
import { BackNavigation } from "../molecules";
import { MainLayout } from "./MainLayout";

export interface BlogTemplateProps {
  children: ReactNode;
  title?: string;
  backHref?: string;
  backText?: string;
  showBackButton?: boolean;
  className?: string;
}

export function BlogTemplate({
  children,
  title,
  backHref = "/",
  backText = "ブログに戻る",
  showBackButton = true,
  className = "",
}: BlogTemplateProps) {
  return (
    <MainLayout className={className}>
      {showBackButton && (
        <BackNavigation href={backHref} className="mb-8">
          {backText}
        </BackNavigation>
      )}

      {title && (
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {title}
          </h1>
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        {children}
      </div>
    </MainLayout>
  );
}
