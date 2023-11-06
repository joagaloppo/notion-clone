"use client";
import Spinner from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import Navigation from "./_components/navigation";
import { redirect } from "next/navigation";

interface MainLayoutProps {
    children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const { isAuthenticated, isLoading } = useConvexAuth();

    if (isLoading) {
        return (
            <div className="h-full flex items-center justify-center">
                <Spinner size="lg" />
            </div>
        );
    }

    if (!isAuthenticated) return redirect("/");

    return (
        <div className="h-full flex dark:bg-[#1F1F1f]">
            <Navigation />
            <main className="flex-1 h-full overflow-y-auto">{children}</main>
        </div>
    );
};

export default MainLayout;