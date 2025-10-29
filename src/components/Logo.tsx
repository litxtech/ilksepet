import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group" aria-label="İlkSepet Home">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2563EB" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <path d="M12 2l8 4.5v10.9L12 22l-8-4.6V6.5L12 2z" stroke="url(#g)" strokeWidth="1.5" fill="rgba(59,130,246,0.08)" />
        <path d="M8 12h8" stroke="url(#g)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 8v8" stroke="url(#g)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:opacity-90 transition">
        İlkSepet
      </span>
    </Link>
  );
}


