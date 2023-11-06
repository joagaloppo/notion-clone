import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Balancer from "react-wrap-balancer";

interface HeadingProps {
    children?: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                <Balancer>
                    Your ideas, documents & plans unified.
                </Balancer>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                <Balancer>
                    Notion is the connected workspace wher <br />
                    better, faster work happens.
                </Balancer>
            </h3>
            <Button>
                Get started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </div>
    );
};

export default Heading;
