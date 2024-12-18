import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// import Application from "./application/page";

const mainSectionStyle = {
  // maxWidth: "calc(100% - 250px)",
  // width: "100%"
};

export default function DomainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  console.log(children, "childre");


  return (
    <div className="w-full h-auto ">
      <Navbar />
      <div className="flex ">
        <Sidebar />
        <main className="w-full h-full flex items-center justify-center mt-10">{children}</main>
      </div>
    </div>
  );
}