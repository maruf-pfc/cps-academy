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

export default function ContestsBatch2() {
  return (
    <ContentLayout title="Batch 2 Contests">
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
              <Link href="/contests">Contests</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Batch 2</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="my-8 flex gap-4 flex-wrap flex-col">
        <h2>Batch 2 Contests</h2>
        <hr className="lg:w-1/3" />
        <h2>Module 1</h2>
        <hr className="lg:w-1/3" />
        <Button asChild className="lg:w-1/3">
          <Link
            href="https://vjudge.net/contest/566680"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vjudge Practice Contest
          </Link>
        </Button>
        <Button asChild className="lg:w-1/3">
          <Link
            href="https://vjudge.net/contest/594716"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vjudge Speed Contest
          </Link>
        </Button>
        <Button asChild className="lg:w-1/3">
          <Link
            href="https://www.hackerrank.com/contests/cpc-batch-2-module-1-assignment-contest/challenges"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hackerrank Practice Contest
          </Link>
        </Button>
        <h2>Module 2</h2>
        <hr className="lg:w-1/3" />
        <Button asChild className="lg:w-1/3">
          <Link
            href="https://vjudge.net/contest/600571"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vjudge Practice Contest
          </Link>
        </Button>
        <Button asChild className="lg:w-1/3">
          <Link
            href="https://www.hackerrank.com/cpc-batch-2-module-2-assignment-contest"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hackerrank Practice Contest
          </Link>
        </Button>
      </div>
    </ContentLayout>
  );
}
