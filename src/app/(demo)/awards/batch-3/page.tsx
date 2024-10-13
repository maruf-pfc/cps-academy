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

export default function AwardsBatch1() {
  return (
    <ContentLayout title="Batch 3 Award List">
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
              <Link href="/awards">Awards</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Batch 3</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="my-8 flex gap-4 flex-wrap flex-col">
        <Button asChild className="w-1/4">
          <Link
            href="https://docs.google.com/document/d/1J1ZERfLFOCS_3fCeMQmGCJqwZ2RzJux4G_UtMdd4EmA/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pupil
          </Link>
        </Button>
        <Button asChild className="w-1/4">
          <Link
            href="https://docs.google.com/document/d/1hBnUEkrNCFf8yGicm66Tul9OBMuGgsEn0GT0nXPVtig/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Specialist
          </Link>
        </Button>
        <Button asChild className="w-1/4">
          <Link
            href="https://docs.google.com/document/d/1bwMVOLm3HBKam-48DLi2GMskQGxCT_GteV7O3rKCK3A/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Expert
          </Link>
        </Button>
      </div>
    </ContentLayout>
  );
}
