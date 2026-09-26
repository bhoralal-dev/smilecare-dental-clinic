import type { Metadata } from "next"; import "./globals.css";
export const metadata:Metadata={title:"SmileCare Dental Clinic | Umerkot",description:"Thoughtful dental care in Umerkot, Sindh."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
