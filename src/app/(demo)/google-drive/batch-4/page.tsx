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

export default function GoogleDriveBatch4() {
  return (
    <ContentLayout title="Batch 4 Google Drive">
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
              <Link href="/google-drive">Google Drive</Link>
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
            href="https://drive.google.com/drive/folders/1mmBBIt24P0SWSSJkJeBieyxiVePH-j6H?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Batch 41 Google Drive Link
          </Link>
        </Button>
        <Button asChild>
          <Link
            href="https://drive.google.com/drive/folders/1u7aCwE0ixNympP5BZ60KVzec6dxG-dG-?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Batch 42 Google Drive Link
          </Link>
        </Button>
      </div>
      <div className="flex flex-row flex-wrap gap-4 w-full my-4">
        <div className="flex gap-4 flex-col lg:w-[45%] md:w-[45%] xs:w-full sm:w-full">
          <h2>Batch-41 Google Drive (Previous Batch)</h2>
          <hr />
          <div className="flex flex-col gap-4">
            <Button asChild>
              <Link
                href="https://drive.google.com/drive/folders/1sYfgNeRjVDoNaVf0ASBdx7-fB-bFrAyy?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 1
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://drive.google.com/drive/folders/1KY3M_QX4PqZX-yz_SPdL54emplbJ5Cls?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                STL
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://drive.google.com/drive/folders/1DFAH5l_Km29akLnZoNX3xRHbbpwyy-LM?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 2
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://drive.google.com/drive/folders/12sWOFLI5x1di--YTTM7o8ycGy2kVJ9pg?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 3
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://drive.google.com/drive/folders/1q0dkFUz8ey9zPenBAdrHr7C5SwAzb4T-?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 4
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://drive.google.com/drive/folders/1SvP-2Owpnn33JtLR8B1Y5JGiLdNZQycE?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 5
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex gap-4 flex-col lg:w-[45%] md:w-[45%] xs:w-full sm:w-full">
          <h2>Batch-41 Google Drive (Current Batch)</h2>
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
          <h2>Batch-42 Google Drive (Previous Batch)</h2>
          <hr />
          <div className="flex flex-col gap-4">
            <Button asChild>
              <Link href="" target="_blank" rel="noopener noreferrer">
                Module 1 (Coming Soon)
              </Link>
            </Button>
            <Button asChild>
              <Link href="" target="_blank" rel="noopener noreferrer">
                STL (Coming Soon)
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
          <h2>Batch-42 Google Drive (Current Batch)</h2>
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
