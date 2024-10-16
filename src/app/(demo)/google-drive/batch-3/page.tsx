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

export default function GoogleDriveBatch3() {
  return (
    <ContentLayout title="Batch 3 Google Drive">
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
              <Link href="/google-drive">Google Drive</Link>
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
            href="https://drive.google.com/drive/folders/1rsilnv395pC9YXm05tXAOsGner8A8EKs?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Batch 31 Google Drive Link
          </Link>
        </Button>
        <Button asChild>
          <Link
            href="https://drive.google.com/drive/folders/1fqL5pRqoskEdXSGx57gggjA0Iix3nkFn?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Batch 32 Google Drive Link
          </Link>
        </Button>
      </div>
      <div className="flex flex-row flex-wrap gap-4 w-full my-4">
        <div className="flex gap-4 flex-col lg:w-[45%] md:w-[45%] xs:w-full sm:w-full">
          <h2>Batch-31 Google Drive (Previous Batch)</h2>
          <hr />
          <Button asChild>
            <Link
              href="https://drive.google.com/drive/folders/1-ylTuTXHLe5eLH5jCUPGC-zB-FNdeWr4?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Module 1
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://drive.google.com/drive/folders/1E8dnoTqx_gzC4X0jBene5fdCuKEuyKDL?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              STL
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://drive.google.com/drive/folders/1oMVeJbNhH_c8_GRuKG_6MzKZypYwE6fN?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Module 2
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://drive.google.com/drive/folders/10XgD0k-vIfOmrLBNxUraWz72In51pE5W?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Module 3
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://drive.google.com/drive/folders/1VZLvvEme4Rm4N_yD7IMZeOX4V_CurqQc?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Module 4
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://drive.google.com/drive/folders/1f3uGWh3CxTu4rRZi1xPTD-H2EOhYdeL8?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Module 5
            </Link>
          </Button>
        </div>
        <div className="flex gap-4 flex-col lg:w-[45%] md:w-[45%] xs:w-full sm:w-full">
          <h2>Batch-31 Google Drive (Current Batch)</h2>
          <hr />
          <div className="flex flex-col gap-4">
            <Button asChild>
              <Link
                href="https://drive.google.com/drive/folders/1i92waen2_vS3vdTGj5oicOlLZMEXU-8C?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 1
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://drive.google.com/drive/folders/1Q4JK_DZsZz5XhlwZZL1tR0NuCCcrDdEG?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                STL
              </Link>
            </Button>
            <Button asChild>
              <Link href="" target="_blank" rel="noopener noreferrer">
                Module 2 (Coming Soon)
              </Link>
            </Button>
            <Button asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                Module 3 (Coming Soon)
              </Link>
            </Button>
            <Button asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                Module 4 (Coming Soon)
              </Link>
            </Button>
            <Button asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                Module 5 (Coming Soon)
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-row flex-wrap gap-4 w-full my-4">
        <div className="flex gap-4 flex-col lg:w-[45%] md:w-[45%] xs:w-full sm:w-full">
          <h2>Batch-32 Google Drive (Previous Batch)</h2>
          <hr />
          <div className="flex flex-col gap-4">
            <Button asChild>
              <Link
                href="https://drive.google.com/drive/folders/1sS7NVQgUe2mkG-aAUWz4ZoCcKHPhoU7O?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 1
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://drive.google.com/drive/folders/1vc29IiRnT2v9UJeR4I5E_aacD--YCJj-?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                STL
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://drive.google.com/drive/folders/1Hfm03rvtqqhEILp5as2ycmpUui2RpZ10?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 2
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://drive.google.com/drive/folders/14x9bqi1LlshgvCnh1rdkXVKLAPXs47Ji?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 3
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://drive.google.com/drive/folders/1fvN10P15lXWjWUrVVODnk_1YsNDU1maU?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 4
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://drive.google.com/drive/folders/1K7OaWKIaFW05bQ_L4eoba4kkJA9Q53OF?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 5
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex gap-4 flex-col lg:w-[45%] md:w-[45%] xs:w-full sm:w-full">
          <h2>Batch-32 Google Drive (Current Batch)</h2>
          <hr />
          <div className="flex flex-col gap-4">
            <Button asChild>
              <Link
                href="https://drive.google.com/drive/folders/1Ypbg6GOrcBbZYOBpFxzOKSxJlr2SbmAl?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Module 1
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://drive.google.com/drive/folders/1kPjf5aouUZW89Gn4KUQi7h6oILViTSm_?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                STL
              </Link>
            </Button>
            <Button asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                Module 2 (Coming Soon)
              </Link>
            </Button>
            <Button asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                Module 3 (Coming Soon)
              </Link>
            </Button>
            <Button asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                Module 4 (Coming Soon)
              </Link>
            </Button>
            <Button asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                Module 5 (Coming Soon)
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
