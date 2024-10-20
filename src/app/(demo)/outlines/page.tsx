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
import { Button } from "@/components/ui/button";

export default function Outlines() {
  return (
    <ContentLayout title="Outlines">
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
            <BreadcrumbPage>Outlines</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="my-8 flex gap-4 flex-col flex-wrap w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
        <h2 className="text-2xl text-orange-600 border-b-white border py-2 my-2 border-t-0 border-l-0 border-r-0">
          Batch 1
        </h2>
        <Button asChild>
          <Link
            href="https://docs.google.com/document/d/1fQh13gouu1m46GLrEUIu0smmBGd_l4shJSOnVK1kloE/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Batch 1 Course Outline
          </Link>
        </Button>
        <h2 className="text-2xl text-orange-600 border-b-white border py-2 my-2 border-t-0 border-l-0 border-r-0">
          Batch 2
        </h2>
        <div className="flex flex-col gap-4 w-full flex-wrap">
          <Button asChild>
            <Link
              href="https://docs.google.com/document/d/10pbqt3AluGKGGUPn_64hvfQKtl1sCQFM/edit?usp=sharing&ouid=102116855431773140531&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Batch 2 (New) Course Outline
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://docs.google.com/document/d/1IJ-_A6lV_K3Hl_Mo6EX8DmwiFSL7AYS1raBKODI9c1Q/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Batch 2 (Old) Course Outline
            </Link>
          </Button>
        </div>
        <h2 className="text-2xl text-orange-600 border-b-white border py-2 my-2 border-t-0 border-l-0 border-r-0">
          Batch 3
        </h2>
        <div className="flex flex-col gap-4 w-full flex-wrap">
          <Button asChild>
            <Link
              href="https://docs.google.com/document/d/1F1yEsAltIFZfbufBe-mAJnoXAkM-egqud6X8aMmWdhE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Batch 3 Course Outline
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://youtu.be/leZgGkt0IZI"
              target="_blank"
              rel="noopener noreferrer"
            >
              Batch 3 Details Video
            </Link>
          </Button>
        </div>
        <h2 className="text-2xl text-orange-600 border-b-white border py-2 my-2 border-t-0 border-l-0 border-r-0">
          Batch 4
        </h2>
        <div className="flex flex-col gap-4 w-full flex-wrap">
          <Button asChild>
            <Link
              href="https://docs.google.com/document/d/1F1yEsAltIFZfbufBe-mAJnoXAkM-egqud6X8aMmWdhE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Batch 4 Course Outline
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://youtu.be/2xZ2TMfUx7c"
              target="_blank"
              rel="noopener noreferrer"
            >
              Batch 4 Details Video
            </Link>
          </Button>
        </div>
      </div>
    </ContentLayout>
  );
}
