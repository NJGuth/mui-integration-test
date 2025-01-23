export default function ComponentCell({
  children,
  title,
}: Readonly<{
  children?: React.ReactNode;
  title?: string;
}>) {
  return (
    <div className="border border-slate-200 p-3 space-y-3 space-x-3 rounded-lg  min-h-[240px]">
      <p>{title}</p>
      {children}
    </div>
  );
}
