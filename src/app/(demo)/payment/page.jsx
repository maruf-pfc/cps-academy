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

export default function Payment() {
  return (
    <ContentLayout title="Categories">
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
            <BreadcrumbPage>Payment</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="my-8 flex gap-4 flex-wrap flex-col">
        <Button asChild className="w-1/4">
          <Link
            href="https://docs.google.com/spreadsheets/d/19TbY9Fab_CPbNlkuX1ErzoqUN3VrNy1S_W194HZLAHA/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trainer Details and Payment
          </Link>
        </Button>
        <div className="flex flex-col gap-4">
          <h2 className="mt-8">Batch 3 Payment History</h2>
          <hr className="w-1/4" />
          <Button asChild className="w-1/4">
            <Link
              href="https://docs.google.com/spreadsheets/d/1qCL9deG7yJ6p5yH3Nr7qnE5NZE_dbzPHw-IlDYmXlPk/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Module 1
            </Link>
          </Button>
          <Button asChild className="w-1/4">
            <Link href="#" target="_blank" rel="noopener noreferrer">
              Module 2
            </Link>
          </Button>
          <Button asChild className="w-1/4">
            <Link href="#" target="_blank" rel="noopener noreferrer">
              Module 3
            </Link>
          </Button>
          <Button asChild className="w-1/4">
            <Link href="#" target="_blank" rel="noopener noreferrer">
              Module 4
            </Link>
          </Button>
          <Button asChild className="w-1/4">
            <Link href="#" target="_blank" rel="noopener noreferrer">
              Module 5
            </Link>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="mt-8">Batch 4 Payment History</h2>
          <hr className="w-1/4" />
          <Button asChild className="w-1/4">
            <Link href="#" target="_blank" rel="noopener noreferrer">
              Module 1
            </Link>
          </Button>
          <Button asChild className="w-1/4">
            <Link href="#" target="_blank" rel="noopener noreferrer">
              Module 2
            </Link>
          </Button>
          <Button asChild className="w-1/4">
            <Link href="#" target="_blank" rel="noopener noreferrer">
              Module 3
            </Link>
          </Button>
          <Button asChild className="w-1/4">
            <Link href="#" target="_blank" rel="noopener noreferrer">
              Module 4
            </Link>
          </Button>
          <Button asChild className="w-1/4">
            <Link href="#" target="_blank" rel="noopener noreferrer">
              Module 5
            </Link>
          </Button>
        </div>
      </div>
    </ContentLayout>
  );
}
