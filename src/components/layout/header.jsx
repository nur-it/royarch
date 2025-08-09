import Link from "next/link";
import { EmailIcon, PhoneIcon } from "../shared/svgs";

const InfoBox = () => {
  return (
    <div className="bg-midnight flex h-25 w-full justify-end">
      <div className="absolute top-[30px] right-[30px] z-[2] flex items-center justify-center gap-3 bg-white/5 p-[11px] text-sm font-[300] tracking-wider">
        <Link
          href="tel:123456789"
          className="inline-flex items-center gap-1 text-white/80"
        >
          <PhoneIcon className="size-4" /> +1 234 5678 90 00
        </Link>
        <span className="inline-block h-4 w-[1px] bg-[#4c4c4c]" />
        <Link
          href="mailto:royarch@domain"
          className="inline-flex items-center gap-1 text-white/80"
        >
          <EmailIcon className="size-4" /> royarch@domain.com
        </Link>
      </div>
    </div>
  );
};

export default InfoBox;
