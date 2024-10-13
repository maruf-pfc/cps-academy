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

export default function ContestsBatch1() {
  return (
    <ContentLayout title="Batch 1 Contests">
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
            <BreadcrumbPage>Batch 1</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="my-8 flex gap-4 flex-wrap flex-col">
        <h2>Batch 1 Contests</h2>
        <hr className="lg:w-1/3" />
        <h2>Module 1</h2>
        <hr className="lg:w-1/3" />
        <Button asChild className="lg:w-1/3">
          <Link
            href="https://vjudge.net/contest/510845"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vjudge Practice Contest
          </Link>
        </Button>
        <Button asChild className="lg:w-1/3">
          <Link
            href="https://www.hackerrank.com/cpbc-assignments-batch-1"
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
            href="https://vjudge.net/contest/536767"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vjudge Practice Contest
          </Link>
        </Button>
        <Button asChild className="lg:w-1/3">
          <Link
            href="https://www.hackerrank.com/contests/competitive-programing-complete-course-batch1-contest/challenges"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hackerrank Practice Contest
          </Link>
        </Button>
        <h2>Module 3</h2>
        <hr className="lg:w-1/3" />
        <Button asChild className="lg:w-1/3">
          <Link
            href="https://vjudge.net/contest/555815"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vjudge Practice Contest
          </Link>
        </Button>
      </div>
    </ContentLayout>
  );
}
