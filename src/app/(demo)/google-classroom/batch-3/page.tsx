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
    <ContentLayout title="Batch 3 Google Classroom">
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
            <BreadcrumbPage>Batch 3</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-row flex-wrap gap-4 my-8">
        <Button asChild>
          <Link href="https://docs.google.com/document/d/1p6onLPb-cIrpFuuTz_Nt0XIzf8RgRRlg2WevwbJT6p8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            Batch 31 Classroom Invitation Link
          </Link>
        </Button>
        <Button asChild>
          <Link href="https://docs.google.com/document/d/1rb73pX1L-sTamWKw_WVphmTOJwj4qwWVbeERL_qfv5c/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            Batch 32 Classroom Invitation Link
          </Link>
        </Button>
      </div>
      <div className="flex flex-row flex-wrap gap-4 w-full">
        <div className="flex gap-4 flex-col lg:w-[45%] md:w-[45%] xs:w-full sm:w-full">
          <h2>Batch-31 Google Classroom (Previous Batch)</h2>
          <hr />
          <div className="flex flex-wrap flex-col gap-4">
            <Button asChild>
              <Link href="https://classroom.google.com/c/NjU4NTQ3OTU1NDU1?cjc=rj5fhto">
                Module 1
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://classroom.google.com/c/NjU4NTUyNDc0MjEz?cjc=bkhmozl"
                target="_blank"
                rel="noopener noreferrer"
              >
                STL
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://classroom.google.com/c/NjU4NTUxODI4MTgx?cjc=tx3fcue"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 2
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://classroom.google.com/c/NjU4NTUyMTM0MzE5?cjc=fwhtddf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 3
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://classroom.google.com/c/NjU4NTUxMjM4Mzgx?cjc=w2smfax"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 4
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://classroom.google.com/c/NjU4NTUyNzY1ODY4?cjc=k5ih2ta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 5
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex gap-4 flex-col lg:w-[45%] md:w-[45%] xs:w-full sm:w-full">
          <h2>Batch-31 Google Classroom (Current Batch)</h2>
          <hr />
          <div className="flex flex-col gap-4">
            <Button asChild>
              <Link
                href="https://classroom.google.com/c/NjkyNTY2NDk2NTky?cjc=vp7xm4r"
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
      <hr />
      <div className="flex flex-row flex-wrap gap-4 w-full">
        <div className="flex gap-4 flex-col lg:w-[45%] md:w-[45%] xs:w-full sm:w-full">
          <h2>Batch-32 Google Classroom (Previous Batch)</h2>
          <hr />
          <div className="flex flex-col gap-4">
            <Button asChild>
              <Link href="https://classroom.google.com/c/Njc5NDE0MDQ1MzI0?cjc=5g4c5ns" target="_blank" rel="noopener noreferrer">
                Module 1
              </Link>
            </Button>
            <Button asChild>
              <Link href="https://classroom.google.com/c/NjgzMjkzNzIzMjUx?cjc=rjbytaf" target="_blank" rel="noopener noreferrer">
                STL
              </Link>
            </Button>
            <Button asChild>
              <Link href="https://classroom.google.com/c/Njc5NDEyNjEzNzAy?cjc=2bsbapq" target="_blank" rel="noopener noreferrer">
                Module 2
              </Link>
            </Button>
            <Button asChild>
              <Link href="https://classroom.google.com/c/Njc5NDEzNTA1Mzkz?cjc=arnradm" target="_blank" rel="noopener noreferrer">
                Module 3
              </Link>
            </Button>
            <Button asChild>
              <Link href="https://classroom.google.com/c/Njc5NDEyNTY2NDY4?cjc=gngve6m" target="_blank" rel="noopener noreferrer">
                Module 4
              </Link>
            </Button>
            <Button asChild>
              <Link href="https://classroom.google.com/c/Njc5NDA5NzU2NTY5?cjc=jvocr3i" target="_blank" rel="noopener noreferrer">
                Module 5
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex gap-4 flex-col lg:w-[45%] md:w-[45%] xs:w-full sm:w-full">
          <h2>Batch-32 Google Classroom (Current Batch)</h2>
          <hr />
          <div className="flex flex-col gap-4">
            <Button asChild>
              <Link href="https://classroom.google.com/c/NjkyNTY5MDM0NTAz?cjc=j3p2sms" target="_blank" rel="noopener noreferrer">
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
