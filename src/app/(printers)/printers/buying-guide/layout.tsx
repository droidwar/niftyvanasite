

export default function Layout({
    children,
  }:{children: React.ReactNode}){
    return (
        <div  className="bg-white py-6 ">
            <div className="container mx-auto px-4">
                <main className="flex-1">{children}</main>
            </div>
        </div>
    )
}