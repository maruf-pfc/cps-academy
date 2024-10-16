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

export default function GoogleDriveBatch2() {
  return (
    <ContentLayout title="Batch 2 Google Drive">
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
            <BreadcrumbPage>Batch 2</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-row flex-wrap gap-4 my-8">
        <Button asChild>
          <Link href="https://drive.google.com/drive/folders/14Vge9Y6bsMMT7rx9eJVUZu8s9Qmm1UY2?usp=sharing"  target="_blank" rel="noopener noreferrer">
            Batch 2 Google Drive Link
          </Link>
        </Button>
      </div>
      <div className="my-8 flex gap-4 flex-wrap flex-col">
        <h2>Batch 2 Google Drive (Previous Batch)</h2>
        <hr className="lg:w-1/4" />
        <div className="flex flex-col lg:w-1/4 gap-4">
          <Button asChild>
            <Link
              href="https://drive.google.com/drive/folders/1NcTGf1UFd3EjNvzm7F_grwJnj3zOwHdf?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Module 1
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://drive.google.com/drive/folders/1YIGeI7vce1YUanrxcXH7oHPuk_VYOuzG?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              STL
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://drive.google.com/drive/folders/1PezZYH62PwpAOZpFYWcgY7_DtaxcHYTS?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Module 2
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://drive.google.com/drive/folders/1IWCDXJ-acmUBb4wSlqkRCCv_kIojvCFJ?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Module 3
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://drive.google.com/drive/folders/1USmV7hZ1yZxBSL3xfRsCRlyeQSVfIb1F?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Module 4
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://drive.google.com/drive/folders/1g2hTy3PHEdOwo30en4IgReCZuFYXHCYp?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Module 5
            </Link>
          </Button>
        </div>
      </div>
      <div className="my-8 flex gap-4 flex-wrap flex-col">
        <h2>Batch 2 Google Drive (Current Batch)</h2>
        <hr className="lg:w-1/4" />
        <div className="flex flex-col lg:w-1/4 gap-4">
          <Button asChild>
            <Link
              href="https://drive.google.com/drive/folders/1NcTGf1UFd3EjNvzm7F_grwJnj3zOwHdf?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Module 1
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://drive.google.com/drive/folders/1YIGeI7vce1YUanrxcXH7oHPuk_VYOuzG?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              STL
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Module 2 (Coming Soon)
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Module 3 (Coming Soon)
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Module 4 (Coming Soon)
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Module 5 (Coming Soon)
            </Link>
          </Button>
        </div>
      </div>
    </ContentLayout>
  );
}
