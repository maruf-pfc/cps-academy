import {
  Tag,
  DollarSign,
  MonitorPlay,
  Bookmark,
  Component,
  LayoutGrid,
  LucideIcon,
  NotebookText,
  Trophy,
  Puzzle,
  School,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
  icon?: LucideIcon;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Public",
      menus: [
        {
          href: "/commons",
          label: "Commons",
          icon: Puzzle,
        },
        {
          href: "/outlines",
          label: "Outlines",
          icon: NotebookText,
        },
        {
          href: "",
          label: "Modules",
          icon: Component,
          submenus: [
            {
              href: "/modules/batch-1-course-modules",
              label: "Batch 1",
            },
            {
              href: "/modules/batch-2-course-modules",
              label: "Batch 2",
            },
            {
              href: "/modules/batch-3-course-modules",
              label: "Batch 3",
            },
            {
              href: "/modules/batch-4-course-modules",
              label: "Batch 4",
            },
          ],
        },
        {
          href: "",
          label: "Awards",
          icon: Trophy,
          submenus: [
            {
              href: "/awards/batch-1-awards",
              label: "Batch 1",
            },
            {
              href: "/awards/batch-2-awards",
              label: "Batch 2",
            },
            {
              href: "/awards/batch-3-awards",
              label: "Batch 3",
            },
            {
              href: "/awards/batch-4-awards",
              label: "Batch 4",
            },
          ],
        },
      ],
    },
    {
      groupLabel: "Private",
      menus: [
        {
          href: "/payment",
          label: "Payment",
          icon: DollarSign,
        },
        {
          href: "/google-drive",
          label: "Google Drive",
          icon: MonitorPlay,
          submenus: [
            {
              href: "/batch-1-course-modules",
              label: "Batch 1",
            },
            {
              href: "/batch-2-course-modules",
              label: "Batch 2",
            },
            {
              href: "/batch-3-course-modules",
              label: "Batch 3",
            },
            {
              href: "/batch-4-course-modules",
              label: "Batch 4",
            },
          ],
        },
        {
          href: "/google-classroom",
          label: "Google Classroom",
          icon: School,
          submenus: [
            {
              href: "/batch-1-course-modules",
              label: "Batch 1",
            },
            {
              href: "/batch-2-course-modules",
              label: "Batch 2",
            },
            {
              href: "/batch-3-course-modules",
              label: "Batch 3",
            },
            {
              href: "/batch-4-course-modules",
              label: "Batch 4",
            },
          ],
        },
      ],
    },
  ];
}
