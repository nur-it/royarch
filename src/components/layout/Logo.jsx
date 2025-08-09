import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="inline-flex items-center justify-center">
      <Image
        src="/logo-image.png"
        alt="Logo"
        width={250}
        height={39}
        className="h-auto w-auto"
      />
    </Link>
  );
};

export default Logo;
