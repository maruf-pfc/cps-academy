import Link from "next/link";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";

export default function Emails() {
  return (
    <ContentLayout title="Emails">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Emails</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="my-8 flex flex-col gap-8 flex-wrap w-full">
        <div className="lg:w-1/2">
          <Link
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center"
          >
            <Image
              src="/gmail.png"
              alt="Excel Logo"
              className="mr-4"
              width={35}
              height={35}
            />
            Batch 1 Emails
          </Link>
        </div>
        <div className="lg:w-1/2">
          <Link
            href="https://docs.google.com/document/d/12qRjZuCOCDlIe910x1IX92xjbHu_DoXtdRs9fl1L1wE/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center"
          >
            <Image
              src="/gmail.png"
              alt="Excel Logo"
              className="mr-4"
              width={35}
              height={35}
            />
            Batch 2 Emails
          </Link>
        </div>
        <div className="lg:w-1/2">
          <Link
            href="https://docs.google.com/document/d/13-8iDmqxso7zKuI6XkFlTyPEfToIALacbGDrUWRqwGw/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center"
          >
            <Image
              src="/gmail.png"
              alt="Excel Logo"
              className="mr-4"
              width={35}
              height={35}
            />
            Batch 3 Emails
          </Link>
        </div>
        <div className="lg:w-1/2">
          <Link
            href="https://docs.google.com/document/d/1SklfvXkJUvppNae6SZuEOoC_iy8axRe7QIGPRTauLWQ/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center"
          >
            <Image
              src="/gmail.png"
              alt="Excel Logo"
              className="mr-4"
              width={35}
              height={35}
            />
            Batch 4 Emails
          </Link>
        </div>
      </div>
    </ContentLayout>
  );
}
