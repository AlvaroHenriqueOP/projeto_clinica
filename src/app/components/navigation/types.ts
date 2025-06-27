export interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  description?: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
} 