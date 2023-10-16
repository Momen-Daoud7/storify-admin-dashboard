import Navbar from "@/components/navbar";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const { userId } = auth();

  // Check if the user exists
  if (!userId) {
    redirect("/sign-in");
  }

  try {
    const store = await prismadb.store.findFirst({
      where: { id: params.storeId, userId: userId },
    });
  } catch (error) {
    console.log(error);
    redirect("/");
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
