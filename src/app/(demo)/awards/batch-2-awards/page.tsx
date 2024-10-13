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
    <ContentLayout title="Batch 2 Course Modules">
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
            <BreadcrumbPage>Batch 2</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="my-8 flex gap-4 flex-wrap flex-col">
        <Button asChild className="w-1/4">
          <Link
            href="https://docs.google.com/document/d/1Qmbx6HET5LviGADj41s0TfxjGDNxoAopyZSHKVKPC_I/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pupil
          </Link>
        </Button>
        <Button asChild className="w-1/4">
          <Link
            href="https://docs.google.com/document/d/1hvVbPYik6n9W0sW54SF6N5eAKDetL9OiQ68nVoRNlro/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Specialist
          </Link>
        </Button>
        <Button asChild className="w-1/4">
          <Link
            href="https://docs.google.com/document/d/1yeW2ZIOAA6FEgj8ZGEfZ90CYv3JFu-x_rdIsf2CrAbg/edit?usp=sharing"
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
