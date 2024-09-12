import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// import Application from "./application/page";

const mainSectionStyle = {
  maxWidth: "calc(100% - 250px)",
};

export default function DomainLayout ({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="w-full h-auto ">
      <Navbar />
        <div className="flex ">
          <Sidebar />
          <main style={mainSectionStyle}>{children}</main>
        </div>
    </div>
  );
}