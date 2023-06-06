import Navbar from "@/components/navbar/Navbar"

type layoutProps =  {
  children: React.ReactNode,
}

export default function Layout({ children }: layoutProps) {
  return (
    <div className="h-screen py-20">
      <div className="">
      {children}
      </div>
    </div>
  )
}