import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-2 md:py-0 border-t border-border/40 sticky bottom-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
          All rights reserved by{" "}
          <Link
            href="https://www.facebook.com/bd.cpsacademy"
            target="_blank"
            rel="noopener noreferrer"
          >
            CPS Academy
          </Link>
        </p>
      </div>
    </footer>
  );
}
