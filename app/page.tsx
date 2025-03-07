import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
export default function Home() {
  return (
    <div className="border border-gray-500">
    <Navbar/>
    <Toaster richColors position="top-center"/>
    <Main/>
    <Footer/>
    </div>
  );
}
