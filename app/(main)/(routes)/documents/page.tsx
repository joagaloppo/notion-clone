"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

interface DocumentsPageProps {
    children?: React.ReactNode;
}

const DocumentsPage: React.FC<DocumentsPageProps> = () => {
    const { user } = useUser();

    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image src="/empty.png" height={300} width={300} alt="Empty" className="dark:hidden" />
            <Image src="/empty-darl.png" height={300} width={300} alt="Empty" className="dark:block hidden" />
            <h2 className="text-lg font-medium">Welcome to {user?.firstName}&apos;s documents page</h2>
            <Button>
                <PlusCircle className="h-4 w-4 mr-2" />
                Create a note
            </Button>
        </div>
    );
};

export default DocumentsPage;
