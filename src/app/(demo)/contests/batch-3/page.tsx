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
    <ContentLayout title="Batch 3 Contests">
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
            <BreadcrumbPage>Batch 3</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-row flex-wrap gap-4 my-8">
        <Button asChild>
          <Link
            href="https://docs.google.com/spreadsheets/d/1KQzIhatG_9Oeb8nmdXbNH2zQuoiqGqZWc4wxwYC9lGY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            All Contests (Final)
          </Link>
        </Button>
        <Button asChild>
          <Link
            href="https://docs.google.com/spreadsheets/d/1e1ZD1RNd6OpTp9pMkSHMWFa_tyU0WKeai8tfSzIhOnE/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Track Contests Fees
          </Link>
        </Button>
      </div>
      <div className="my-8 flex gap-4 flex-wrap flex-col">
        <h2>Batch 3 Contests</h2>
        <hr className="lg:w-1/3" />
        <h2>Module 1</h2>
        <hr className="lg:w-1/3" />
        <Button asChild className="lg:w-1/3">
          <Link
            href="https://vjudge.net/contest/637856"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vjudge - Data types, Variables, Operators
          </Link>
        </Button>
        <Button asChild className="lg:w-1/3">
          <Link
            href="https://vjudge.net/contest/647681"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vjudge - Conditional Statements
          </Link>
        </Button>
        <Button asChild className="lg:w-1/3">
          <Link
            href="https://vjudge.net/contest/654036"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vjudge - Loops
          </Link>
        </Button>
        <Button asChild className="lg:w-1/3">
          <Link
            href="https://vjudge.net/contest/656409"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vjudge - Arrays
          </Link>
        </Button>
        <Button asChild className="lg:w-1/3">
          <Link
            href="https://vjudge.net/contest/657177"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vjudge - Multi Dimentional Array
          </Link>
        </Button>
        <Button asChild className="lg:w-1/3">
          <Link
            href="https://vjudge.net/contest/657199"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vjudge - String
          </Link>
        </Button>
        <Button asChild className="lg:w-1/3">
          <Link
            href="https://vjudge.net/contest/659946"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vjudge - Bruteforce
          </Link>
        </Button>
        <Button asChild className="lg:w-1/3">
          <Link
            href="https://vjudge.net/contest/662977"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vjudge - Greedy
          </Link>
        </Button>
        <Button asChild className="lg:w-1/3">
          <Link
            href="https://vjudge.net/contest/665424"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vjudge - Constructive Algorithm
          </Link>
        </Button>
      </div>
    </ContentLayout>
  );
}
