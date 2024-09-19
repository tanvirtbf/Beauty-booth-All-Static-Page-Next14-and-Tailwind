import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function PageLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
