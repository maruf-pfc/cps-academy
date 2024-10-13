import Link from "next/link";
import Image from "next/image";
import { PanelsTopLeft } from "lucide-react";
import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="container h-14 flex items-center">
          <Link
            href="/"
            className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
          >
            <PanelsTopLeft className="w-6 h-6 mr-3" />
            <span className="font-bold">CPS Academy</span>
            <span className="sr-only">CPS Academy</span>
          </Link>
          <nav className="ml-auto flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-8 h-8 bg-background"
              asChild
            >
              <Link href="https://github.com/maruf-pfc/cps-academy">
                <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
              </Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="min-h-[calc(100vh-57px-97px)] flex-1">
        <div className="container relative pb-10">
          <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              CPS Academy Resource Center
            </h1>
            <span className="max-w-[750px] text-center text-lg font-light text-foreground">
              Here you can find all the frequently used links and resources for
              CPS Academy
            </span>
            <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-6">
              <Button variant="default" asChild>
                <Link href="/dashboard">
                  Go to Dashboard <ArrowRightIcon className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="https://cpsacademy.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Our Website
                </Link>
              </Button>
            </div>
          </section>
          <div className="w-full flex justify-center relative">
            <Image
              src="/cps-academy.png"
              width={1080}
              height={608}
              alt="demo"
              priority
              className="rounded-xl shadow-sm dark:hidden"
            />
            <Image
              src="/cps-academy.png"
              width={1080}
              height={608}
              alt="demo-dark"
              priority
              className="rounded-xl shadow-sm hidden dark:block dark:shadow-gray-500/5"
            />
            <Image
              src="/cps-academy.png"
              width={228}
              height={494}
              alt="demo-mobile"
              className="absolute bottom-0 right-0 hidden lg:block dark:hidden"
            />
            <Image
              src="/cps-academy.png"
              width={228}
              height={494}
              alt="demo-mobile"
              className="rounded-xl absolute bottom-0 right-0 hidden dark:lg:block"
            />
          </div>
        </div>
      </main>
      <footer className="py-2 md:py-0 border-t border-border/40 bottom-0">
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
    </div>
  );
}
