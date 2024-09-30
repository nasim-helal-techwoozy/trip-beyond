import Logo from "@/components/common/Logo";
import Header from "@/components/tb-b2b/header/Header";
import Sidebar from "@/components/tb-b2b/sidebar/Sidebar";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="grid grid-cols-10 grid-rows-[85px_auto] h-screen ">
      <Logo className="col-span-2 flex items-center justify-center bg-metal-800" />
      <Header className="col-span-8" />
      <Sidebar className="col-span-2" />
      <main className="col-span-8 bg-gray-200 overflow-y-auto">{children}</main>
    </section>
  );
}
