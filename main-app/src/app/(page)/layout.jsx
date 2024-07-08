import StaticDropDown from "@/components/StaticDropDown";


export default function PageLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StaticDropDown />
        {children}
      </body>
    </html>
  );
}
