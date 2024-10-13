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
    <ContentLayout title="Batch 1 Award List">
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
            <BreadcrumbPage>Batch 1</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="my-8 flex gap-4 flex-wrap flex-col">
        <Button asChild className="lg:w-1/4">
          <Link
            href="https://docs.google.com/document/d/1kHfR6ZuzqWklI-qYOYrxpYAA0751ySoGCzvFsuBuYtw/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pupil
          </Link>
        </Button>
        <Button asChild className="lg:w-1/4">
          <Link
            href="https://docs.google.com/document/d/1VXaiWJIWgTcmKYz_K75QrC4oGhhLmPuo-C4NuUxx23M/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Specialist
          </Link>
        </Button>
        <Button asChild className="lg:w-1/4">
          <Link
            href="https://docs.google.com/document/d/1ZKeq8yFCHboAIWftU7FyyABxQopp68xX21ogNGh7Aw8/edit?usp=sharing"
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
