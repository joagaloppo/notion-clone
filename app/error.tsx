"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ErrorProps {
  children?: React.ReactNode;
}

const Error: React.FC<ErrorProps> = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/error.png"
        alt="Error"
        height={300}
        width={300}
        className="dark:hidden"
      />
      <Image
        src="/error-dark.png"
        alt="Errorr"
        height={300}
        width={300}
        className="dark:block hidden"
      />
      <h2 className="text-xl font-medium">Something went wrong!</h2>
      <Button asChild>
        <Link href="/documents"><ArrowLeft className="h-4 w-4 mr-2" />Go back</Link>
      </Button>
    </div>
  );
};

export default Error;
