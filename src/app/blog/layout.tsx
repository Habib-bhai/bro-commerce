import Navbar from "@/Components/Navbar";

export default function Layout(props: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Navbar bgColor="bg-white" color="text-black"/>
      {props.children}
    </>
  );
}