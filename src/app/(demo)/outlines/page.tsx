import Link from "next/link";

import PlaceholderContent from "@/components/demo/placeholder-content";
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
      <div className="my-8 flex gap-4 flex-wrap w-full">
        <Button asChild className="w-full">
          <Link
            href="https://docs.google.com/document/d/1fQh13gouu1m46GLrEUIu0smmBGd_l4shJSOnVK1kloE/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Batch 1 Course Outline
          </Link>
        </Button>
        <div className="flex flex-row gap-4 w-full">
          <Button asChild className="w-1/2">
            <Link
              href="https://docs.google.com/document/d/10pbqt3AluGKGGUPn_64hvfQKtl1sCQFM/edit?usp=sharing&ouid=102116855431773140531&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Batch 2 (New) Course Outline
            </Link>
          </Button>
          <Button asChild className="w-1/2">
            <Link
              href="https://docs.google.com/document/d/1IJ-_A6lV_K3Hl_Mo6EX8DmwiFSL7AYS1raBKODI9c1Q/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Batch 2 (Old) Course Outline
            </Link>
          </Button>
        </div>
        <div className="flex flex-row gap-4 w-full">
          <Button asChild className="w-1/2">
            <Link
              href="https://docs.google.com/document/d/1F1yEsAltIFZfbufBe-mAJnoXAkM-egqud6X8aMmWdhE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Batch 3 Course Outline
            </Link>
          </Button>
          <Button asChild className="w-1/2">
            <Link
              href="https://youtu.be/leZgGkt0IZI"
              target="_blank"
              rel="noopener noreferrer"
            >
              Batch 3 Details Video
            </Link>
          </Button>
        </div>
        <div className="flex flex-row gap-4 w-full">
          <Button asChild className="w-1/2">
            <Link
              href="https://docs.google.com/document/d/1F1yEsAltIFZfbufBe-mAJnoXAkM-egqud6X8aMmWdhE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Batch 4 Course Outline
            </Link>
          </Button>
          <Button asChild className="w-1/2">
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
