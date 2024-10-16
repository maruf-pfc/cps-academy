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
    <ContentLayout title="Batch 2 Google Classroom">
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
            <BreadcrumbPage>Batch 2</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-row flex-wrap gap-4 my-8">
        <Button asChild>
          <Link
            href="https://docs.google.com/document/d/1mOoVJn3FkPT_hGASpWa-9dIG8DbDD3IZ0x85QqhdGJw/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Batch 2 Classroom Invitation Link
          </Link>
        </Button>
        <Button asChild>
          <Link
            href="https://docs.google.com/document/d/1GkQhA340oh4_U-7F9W0qSCVTGR5DouogKCKwG26c-Oc/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Batch 3 Classroom Invitation Link
          </Link>
        </Button>
      </div>
      <div className="flex flex-row flex-wrap gap-4 w-full my-4">
        <div className="flex gap-4 flex-col lg:w-[45%] md:w-[45%] xs:w-full sm:w-full">
          <h2>Batch-2 Google Classroom</h2>
          <hr />
          <div className="flex flex-col gap-4">
            <Button asChild>
              <Link
                href="https://classroom.google.com/c/Njc5ODI1ODg5MzA2?cjc=kroczra"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 1
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://classroom.google.com/c/Njc5ODI3Mzk2MjY4?cjc=tpjgqt7"
                target="_blank"
                rel="noopener noreferrer"
              >
                STL (Video Course)
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://classroom.google.com/c/Njc5ODI2Mjg5ODA3?cjc=igsvhqe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 2
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://classroom.google.com/c/Njc5ODI1OTY1NjM5?cjc=v3bd3w7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 3
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://classroom.google.com/c/Njc5ODA2NDQ5NTE0?cjc=hd6hddr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 4
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://classroom.google.com/c/Njc5ODI3Mzc4Njk3?cjc=4rq2djj"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 5
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex gap-4 flex-col lg:w-[45%] md:w-[45%] xs:w-full sm:w-full">
          <h2>Batch-2 Google Classroom</h2>
          <hr />
          <div className="flex flex-col gap-4">
            <Button asChild>
              <Link
                href="https://classroom.google.com/c/NjkyOTI3MDk4MDkx?cjc=aivwze5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 1
              </Link>
            </Button>
            <Button asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                STL (Video Course)
              </Link>
            </Button>
            <Button asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                Module 2 (Coming Soon)
              </Link>
            </Button>
            <Button asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                Module 3 (Coming Soon)
              </Link>
            </Button>
            <Button asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                Module 4 (Coming Soon)
              </Link>
            </Button>
            <Button asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                Module 5 (Coming Soon)
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
