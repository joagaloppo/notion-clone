interface DocumentIdPageProps {
    children?: React.ReactNode;
    params: {
        documentId: string;
    };
}

const DocumentIdPage: React.FC<DocumentIdPageProps> = ({ children, params }) => {
    return (
        <>
            <div>{params.documentId}</div>
        </>
    );
};

export default DocumentIdPage;
