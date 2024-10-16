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

export default function GoogleClassroomBatch1() {
  return (
    <ContentLayout title="Batch 1 Google Classroom">
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
            <BreadcrumbLink asChild>
              <Link href="/google-drive">Google Classroom</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Batch 1</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-row flex-wrap gap-4 my-8">
        <Button asChild>
          <Link
            href="https://docs.google.com/document/d/1FUN_iCQuJpSFATAf10SkCC9c8UFPlikFCv3qtP-GhRw/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Batch 1 Classroom Invitation Link
          </Link>
        </Button>
      </div>
      <div className="flex gap-4 flex-col lg:w-[45%] md:w-[45%] xs:w-full sm:w-full">
        <h2>Batch-1 Google Classroom</h2>
        <hr />
        <div className="flex flex-col gap-4">
          <Button asChild>
            <Link
              href="https://classroom.google.com/c/NDk3MDEyMDQ2ODg1?cjc=oqb7j2e"
              target="_blank"
              rel="noopener noreferrer"
            >
              Module 1
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://classroom.google.com/c/NTA5MjI3NzYwMjI4?cjc=5dtysxp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Module 2
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://classroom.google.com/c/NjA2OTUyNjc2MTkx?cjc=l4ayjpx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Module 3
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://classroom.google.com/c/MTE2NTUzNTIxNDIx?cjc=kcdeyln"
              target="_blank"
              rel="noopener noreferrer"
            >
              Level 1
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://classroom.google.com/c/MTA4MTIzODY4MTQ5?cjc=guuxdrz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Level 2
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://classroom.google.com/c/MTQyOTU3MzY5NDc1?cjc=vxyf6xc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Level 3
            </Link>
          </Button>
        </div>
      </div>
    </ContentLayout>
  );
}
