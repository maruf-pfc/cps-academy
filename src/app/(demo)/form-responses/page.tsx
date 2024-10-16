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
import { Button } from "@/components/ui/button";

export default function FormResponses() {
  return (
    <ContentLayout title="Form Responses">
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
            <BreadcrumbPage>Form Responses</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="my-8 flex flex-col gap-4 flex-wrap w-full">
        <div className="flex flex-row items-center">
          <Button asChild>
            <Link
              href="https://docs.google.com/spreadsheets/d/1eBg7jNTR2xQFIq46z-sbsUD57BwS_uUVemTwBtDA53s/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center"
            >
              <Image
                src="/excel-logo.webp"
                alt="Excel Logo"
                width={50}
                height={100}
                className="-ml-2"
              />
              Batch 1 Form Response
            </Link>
          </Button>
        </div>
        <div className="flex flex-row items-center">
          <Button asChild>
            <Link
              href="https://docs.google.com/spreadsheets/d/1ANv9vNLN5qC4vnSIbdO2FxKflPIOD9A0PaMfCE4BmpY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center"
            >
              <Image
                src="/excel-logo.webp"
                alt="Excel Logo"
                width={50}
                height={100}
                className="-ml-2"
              />
              Batch 2 Form Response
            </Link>
          </Button>
        </div>
        <div className="flex flex-row items-center">
          <Button asChild>
            <Link
              href="https://docs.google.com/spreadsheets/d/1HFs664Tw3Tw861w7ASBmQBDm33bKfgE1CTFb3Hvgals/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center"
            >
              <Image
                src="/excel-logo.webp"
                alt="Excel Logo"
                width={50}
                height={100}
                className="-ml-2"
              />
              Batch 3 Form Response
            </Link>
          </Button>
        </div>
        <div className="flex flex-row items-center">
          <Button asChild>
            <Link
              href="https://docs.google.com/spreadsheets/d/1dXz-S7sT90qWmjy2_GTGoOSY4ZJH5iXeHfm2qNNRpzg/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center"
            >
              <Image
                src="/excel-logo.webp"
                alt="Excel Logo"
                width={50}
                height={100}
                className="-ml-2"
              />
              Batch 3 Form Response (Copy)
            </Link>
          </Button>
        </div>
        <div className="flex flex-row items-center">
          <Button asChild>
            <Link
              href="https://docs.google.com/spreadsheets/d/1EqH5GH0wvSO6Y0YdNQjhx41NyETOLkPw4sGWR9Rn1yI/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center"
            >
              <Image
                src="/excel-logo.webp"
                alt="Excel Logo"
                width={50}
                height={100}
                className="-ml-2"
              />
              Batch 4 Form Response
            </Link>
          </Button>
        </div>
        <div className="flex flex-row items-center">
          <Button asChild>
            <Link
              href="https://docs.google.com/spreadsheets/d/1eIf1fHRDlgKTMVo7ET9M6rcEiTWoKTyLy8YFXR0a9Nk/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center"
            >
              <Image
                src="/excel-logo.webp"
                alt="Excel Logo"
                width={50}
                height={100}
                className="-ml-2"
              />
              Batch 4 Form Response (Copy)
            </Link>
          </Button>
        </div>
      </div>
    </ContentLayout>
  );
}
