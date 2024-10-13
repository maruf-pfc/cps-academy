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

export default function Commons() {
  return (
    <ContentLayout title="Commons">
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
            <BreadcrumbPage>Commons</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="my-8 flex gap-4 flex-wrap">
        <Button asChild>
          <Link
            href="https://business.facebook.com/latest/home?asset_id=103542411167326"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meta Business Suite
          </Link>
        </Button>
        <Button asChild>
          <Link
            href="https://vjudge.net/groups"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vjudge Groups
          </Link>
        </Button>
        <Button asChild>
          <Link
            href="https://www.facebook.com/groups/bd.cpsacademy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook Group
          </Link>
        </Button>
        <Button asChild>
          <Link
            href="https://www.facebook.com/bd.cpsacademy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook Page
          </Link>
        </Button>
        <Button asChild>
          <Link
            href="https://studio.youtube.com/channel/UC3S_jVMwhUrF6jjkFCQvyuA?c=UC3S_jVMwhUrF6jjkFCQvyuA"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube Studio
          </Link>
        </Button>
        <Button asChild>
          <Link
            href="https://discord.com/channels/939568027597406288/1206310259996491826"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord Server
          </Link>
        </Button>
        <Button asChild>
          <Link
            href="https://linkedin.com/company/cps-academy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </Link>
        </Button>
        <Button asChild>
          <Link
            href="https://drive.google.com/drive/u/0/folders/1TWpwYAIuP37mh_OLt9vHOFLwSOZmzthY"
            target="_blank"
            rel="noopener noreferrer"
          >
            CPS Contents
          </Link>
        </Button>
        <Button asChild>
          <Link
            href="https://classroom.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Classroom
          </Link>
        </Button>
      </div>
    </ContentLayout>
  );
}
