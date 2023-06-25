import ViewLayout from "@/app/components/layout/ViewLayout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function CompanyViewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ViewLayout>{children}</ViewLayout>;
}
