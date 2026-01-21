export default function FilterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      {children}
    </section>
  );
}
