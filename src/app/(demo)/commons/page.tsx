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
      <div className="my-8 flex gap-4 flex-col flex-wrap w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
        <h2 className="text-2xl text-orange-600 border-b-white border-b py-2 my-2">
          Awards
        </h2>
        <Button asChild>
          <Link
            href="https://docs.google.com/document/d/1HuTh-2hKTMvJiY_nau2Pkd-OK9mDwpTk75s4T35z_IQ/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pupil
          </Link>
        </Button>
        <Button asChild>
          <Link
            href="https://docs.google.com/document/d/1RYORdvnwoSyn__hQ2j5H0uJhcs0cqm89rymfsIBPAx0/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Specialist
          </Link>
        </Button>
        <Button asChild>
          <Link
            href="https://docs.google.com/document/d/1zYKa_Wpqoi-SZbqsv44zooN0j3MgQ8u3dkATkAmUblQ/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Expert
          </Link>
        </Button>
        <h2 className="text-2xl text-orange-600 border-b-white border-b py-2 my-2">
          Discord
        </h2>
        <Button asChild>
          <Link
            href="https://discord.com/channels/939568027597406288/1206310259996491826"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord Server
          </Link>
        </Button>
        <h2 className="text-2xl text-orange-600 border-b-white border-b py-2 my-2">
          Drive & Classroom
        </h2>
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
        <h2 className="text-2xl text-orange-600 border-b-white border-b py-2 my-2">
          Facebook
        </h2>
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
        <h2 className="text-2xl text-orange-600 border-b-white border-b py-2 my-2">
          Linkedin
        </h2>
        <Button asChild>
          <Link
            href="https://linkedin.com/company/cps-academy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </Link>
        </Button>
        <h2 className="text-2xl text-orange-600 border-b-white border-b py-2 my-2">
          Vjudge
        </h2>
        <Button asChild>
          <Link
            href="https://vjudge.net/groups"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vjudge Groups
          </Link>
        </Button>
        <h2 className="text-2xl text-orange-600 border-b-white border-b py-2 my-2">
          YouTube
        </h2>
        <Button asChild>
          <Link
            href="https://studio.youtube.com/channel/UC3S_jVMwhUrF6jjkFCQvyuA?c=UC3S_jVMwhUrF6jjkFCQvyuA"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube Studio
          </Link>
        </Button>
      </div>
    </ContentLayout>
  );
}
