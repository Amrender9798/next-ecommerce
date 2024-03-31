import Settings from "./settings";

export default function RootLayout({ children }) {
  return (
    <>
      <Settings />
      {children}
    </>
  );
}
