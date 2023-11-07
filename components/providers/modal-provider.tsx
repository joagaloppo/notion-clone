"use client";

import { useEffect, useState } from "react";
import SettingsModal from "@/components/modals/settings-modal";

interface ModalProviderProps {
    children?: React.ReactNode;
}

const ModalProvider: React.FC<ModalProviderProps> = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            <SettingsModal />
        </>
    );
};

export default ModalProvider;
