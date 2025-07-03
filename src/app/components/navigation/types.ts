export interface NavigationItem {
  name: string;
  href: string;
  section?: string | null;
  icon?: React.ComponentType<{ className?: string }>;
  description?: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
} 