import { FileWarning, StepBack } from "lucide-react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="bg-midnight flex h-screen items-center justify-center">
      <div className="space-y-3">
        <h2 className="text-primary text-5xl">
          {" "}
          <FileWarning className="mr-2 inline-block" /> Not Found!
        </h2>
        <p>Could not find requested resource</p>
        <Link href="/" className="bg-primary inline-block px-6 py-3">
          {" "}
          <StepBack className="mr-2 inline-block" /> Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
