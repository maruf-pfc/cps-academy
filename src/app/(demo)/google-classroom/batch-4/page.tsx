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
    <ContentLayout title="Batch 4 Google Classroom">
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
            <BreadcrumbPage>Batch 4</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-row flex-wrap gap-4 my-8">
        <Button asChild>
          <Link
            href="https://docs.google.com/document/d/1XU2oTmZBjTAFke4ZVc2GJHAgXYKldbuJVZR35io2Dvc/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Batch 41 Classroom Invitation Link
          </Link>
        </Button>
        <Button asChild>
          <Link href="#" target="_blank" rel="noopener noreferrer">
            Batch 42 Classroom Invitation Link (Coming Soon)
          </Link>
        </Button>
      </div>
      <div className="flex flex-row flex-wrap gap-4 w-full my-4">
        <div className="flex gap-4 flex-col lg:w-[45%] md:w-[45%] xs:w-full sm:w-full">
          <h2>Batch-41 Google Classroom (Previous Batch)</h2>
          <hr />
          <div className="flex flex-col gap-4">
            <Button asChild>
              <Link
                href="https://classroom.google.com/c/NzA2MTI3Mjc0MzE2?cjc=st5gs7e"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 1
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://classroom.google.com/c/NzA2MTI3Mzg0Njcw?cjc=zpaqrdo"
                target="_blank"
                rel="noopener noreferrer"
              >
                STL (Video Course)
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://classroom.google.com/c/NzEzMDMyNzEzOTQx?cjc=ayotpig"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 2
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://classroom.google.com/c/NzA2MTI3MjcyMDQz?cjc=fkyvduf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 3
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://classroom.google.com/c/NzEzMDM0NTI5Mjc5?cjc=xs3znoa"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 4
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://classroom.google.com/c/NzEzMDMzNDg2MzIy?cjc=qbzlows"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 5
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex gap-4 flex-col lg:w-[45%] md:w-[45%] xs:w-full sm:w-full">
          <h2>Batch-41 Google Classroom (Current Batch)</h2>
          <hr />
          <div className="flex flex-col gap-4">
            <Button asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                Module 1 (Coming Soon)
              </Link>
            </Button>
            <Button asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                STL (Coming Soon)
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
      <div className="flex flex-row flex-wrap gap-4 w-full my-4">
        <div className="flex gap-4 flex-col lg:w-[45%] md:w-[45%] xs:w-full sm:w-full">
          <h2>Batch-42 Google Classroom (Previous Batch)</h2>
          <hr />
          <div className="flex flex-col flex=wrap gap-4">
            <Button asChild>
              <Link href="" target="_blank" rel="noopener noreferrer">
                Module 1 (Coming Soon)
              </Link>
            </Button>
            <Button asChild>
              <Link href="" target="_blank" rel="noopener noreferrer">
                STL (Video Course)
              </Link>
            </Button>
            <Button asChild>
              <Link href="" target="_blank" rel="noopener noreferrer">
                Module 2 (Coming Soon)
              </Link>
            </Button>
            <Button asChild>
              <Link href="" target="_blank" rel="noopener noreferrer">
                Module 3 (Coming Soon)
              </Link>
            </Button>
            <Button asChild>
              <Link href="" target="_blank" rel="noopener noreferrer">
                Module 4 (Coming Soon)
              </Link>
            </Button>
            <Button asChild>
              <Link href="" target="_blank" rel="noopener noreferrer">
                Module 5 (Coming Soon)
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex gap-4 flex-col lg:w-[45%] md:w-[45%] xs:w-full sm:w-full">
          <h2>Batch-42 Google Classroom (Current Batch)</h2>
          <hr />
          <div className="flex flex-col gap-4">
            <Button asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                Module 1 (Coming Soon)
              </Link>
            </Button>
            <Button asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                STL (Coming Soon)
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
