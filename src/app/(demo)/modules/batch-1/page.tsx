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

export default function ModulesBatch1() {
  return (
    <ContentLayout title="Batch 1 Course Modules">
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
              <Link href="/modules">Modules</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Batch 1</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="my-8 flex gap-4 flex-wrap flex-col">
        <h2>Batch 1 Course Modules</h2>
        <hr className="w-1/4" />
        <div className="flex flex-col w-1/4 gap-4">
          <div className="flex flex-row gap-4 justify-between">
            <Button asChild>
              <Link
                href="https://docs.google.com/document/d/16HNYThyymUEcBQx__rUBjJbKyP76uD7MB6ghhIVWyac/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 1 (Docs)
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://youtube.com/playlist?list=PLoa_roVVsxA2Rqa21grJ4jovQW3kFc3SE"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 1 (YouTube)
              </Link>
            </Button>
          </div>
          <div className="flex flex-row gap-4 justify-between">
            <Button asChild>
              <Link
                href="https://docs.google.com/document/d/1ahJXqzwb7vaxnFYEtnTWXwRrrzojClzuNy0wmxSOQYo/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                STL (Docs)
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://youtube.com/playlist?list=PLoa_roVVsxA0D1Kv_T7rbGHtSdYIUo4f5"
                target="_blank"
                rel="noopener noreferrer"
              >
                STL (YouTube)
              </Link>
            </Button>
          </div>
          <div className="flex flex-row gap-4 justify-between">
            <Button asChild>
              <Link
                href="https://docs.google.com/document/d/1NlLgRtd7rSs5rj9Am7lVrSSipY1GnBoctD_ivwwrYKg/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 2 (Docs)
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://youtube.com/playlist?list=PLoa_roVVsxA2C86GZV79HnB5ptSA-r6sv"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 2 (YouTube)
              </Link>
            </Button>
          </div>
          <div className="flex flex-row gap-4 justify-between">
            <Button asChild>
              <Link
                href="https://docs.google.com/document/d/1uJ-95zbfJJUUIn3JRQNOo_nhiN9GWqG9pPCT354Vrwc/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 3 (Docs)
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://youtube.com/playlist?list=PLoa_roVVsxA2XI2r7DoixYJHFU8oqWY_A"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 3 (YouTube)
              </Link>
            </Button>
          </div>
          <div className="flex flex-row gap-4 justify-between">
            <Button asChild>
              <Link
                href="https://docs.google.com/document/d/1mfouxn4YOppuUCkhwyOLjWFGs9Wl2RDYjIq0uLgXQ80/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Level 1 (Docs)
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://youtube.com/playlist?list=PLoa_roVVsxA1CJu4DsOljb9d7FJkMCynM"
                target="_blank"
                rel="noopener noreferrer"
              >
                Level 1 (YouTube)
              </Link>
            </Button>
          </div>
          <div className="flex flex-row gap-4 justify-between">
            <Button asChild>
              <Link
                href="https://docs.google.com/document/d/13qtRS_jiuNRNoEQ8_qeHElECL5Sa97-rXS_YMj5b8SM/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Level 2 (Docs)
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://youtube.com/playlist?list=PLoa_roVVsxA1hNTFt0fO9-DNsX_STaR3h"
                target="_blank"
                rel="noopener noreferrer"
              >
                Level 2 (YouTube)
              </Link>
            </Button>
          </div>
          <div className="flex flex-row gap-4 justify-between">
            <Button asChild>
              <Link
                href="https://docs.google.com/document/d/1oS4ApWiezeGQ1V3SOin7wJErMvsXLbkR-HXG3-E_aFc/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Level 3 (Docs)
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://youtube.com/playlist?list=PLoa_roVVsxA094Nb0xdyXmI0yTsj42zDz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Level 3 (YouTube)
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
