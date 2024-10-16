import {
  DollarSign,
  MonitorPlay,
  Component,
  LayoutGrid,
  LucideIcon,
  NotebookText,
  Trophy,
  Puzzle,
  School,
  BookCopy,
  Mails,
  Crosshair,
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
              href: "/modules/batch-1",
              label: "Batch 1",
            },
            {
              href: "/modules/batch-2",
              label: "Batch 2",
            },
            {
              href: "/modules/batch-3",
              label: "Batch 3",
            },
            {
              href: "/modules/batch-4",
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
              href: "/awards/batch-1",
              label: "Batch 1",
            },
            {
              href: "/awards/batch-2",
              label: "Batch 2",
            },
            {
              href: "/awards/batch-3",
              label: "Batch 3",
            },
            {
              href: "/awards/batch-4",
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
          href: "/form-responses",
          label: "Form Responses",
          icon: BookCopy,
        },
        {
          href: "/emails",
          label: "Emails",
          icon: Mails,
        },
        {
          href: "/payment",
          label: "Payment",
          icon: DollarSign,
        },
        {
          href: "",
          label: "Contests",
          icon: Crosshair,
          submenus: [
            {
              href: "/contests/batch-1",
              label: "Batch 1",
            },
            {
              href: "/contests/batch-2",
              label: "Batch 2",
            },
            {
              href: "/contests/batch-3",
              label: "Batch 3",
            },
            {
              href: "/contests/batch-4",
              label: "Batch 4",
            },
          ],
        },
        {
          href: "/google-drive",
          label: "Google Drive",
          icon: MonitorPlay,
          submenus: [
            {
              href: "/google-drive/batch-1",
              label: "Batch 1",
            },
            {
              href: "/google-drive/batch-2",
              label: "Batch 2",
            },
            {
              href: "/google-drive/batch-3",
              label: "Batch 3",
            },
            {
              href: "/google-drive/batch-4",
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
              href: "/google-classroom/batch-1",
              label: "Batch 1",
            },
            {
              href: "/google-classroom/batch-2",
              label: "Batch 2",
            },
            {
              href: "/google-classroom/batch-3",
              label: "Batch 3",
            },
            {
              href: "/google-classroom/batch-4",
              label: "Batch 4",
            },
          ],
        },
      ],
    },
  ];
}
