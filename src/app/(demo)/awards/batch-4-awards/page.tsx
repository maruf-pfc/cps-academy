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

export default function AwardsBatch4() {
  return (
    <ContentLayout title="Batch 4 Course Modules">
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
            <BreadcrumbPage>Batch 4</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="my-8 flex gap-4 flex-wrap flex-col">
        <Button asChild className="w-1/4">
          <Link
            href="https://docs.google.com/document/d/1aaHU9PZUCPjDJKs0V5-xR6l6R8NGYOGJEj0H_ByIdKs/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pupil
          </Link>
        </Button>
        <Button asChild className="w-1/4">
          <Link
            href="https://docs.google.com/document/d/1lOQIAuz8luJiHOrNvAYKEO8PfOqZIG3Ug2eVCWlH9QY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Specialist
          </Link>
        </Button>
        <Button asChild className="w-1/4">
          <Link
            href="https://docs.google.com/document/d/14qORA9IoFvXZoJvdL21mICqT7vibJAPtuF4lzmqnV7Q/edit?usp=sharing"
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
