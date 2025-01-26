import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-foreground">
        <nav className="flex w-full justify-between px-[50px] py-8 bg-accent text-sm">
          <div className="flex items-center space-x-4">
            <p className="">divinewisdom.dev@gmail.com</p>
            <button className="font-medium px-5 py-1 rounded-full bg-background">
              Copy
            </button>
            <button className="font-medium px-5 py-1 rounded-full bg-background">
              CV
            </button>
          </div>

          <div className="flex space-x-3">
            <p className="cursor-pointer">LinkedIn</p>
            <p>/</p>
            <p className="cursor-pointer">Twitter(X)</p>
            <p>/</p>
            <p className="cursor-pointer">Instagram</p>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
