export default function ComponentGrid({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className=" py-3 grid gap-3">{children}</div>;
}
