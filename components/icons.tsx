import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, className, ...rest }: IconProps) {
  return (
    <svg
      className={className ?? "ic"}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <Base {...props}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </Base>
  );
}

export function IconClose(props: IconProps) {
  return (
    <Base {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </Base>
  );
}

export function IconChevronRight(props: IconProps) {
  return (
    <Base {...props}>
      <polyline points="9,18 15,12 9,6" />
    </Base>
  );
}

export function IconChevronLeft(props: IconProps) {
  return (
    <Base {...props}>
      <polyline points="15,18 9,12 15,6" />
    </Base>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <Base {...props}>
      <polyline points="6,9 12,15 18,9" />
    </Base>
  );
}

export function IconMail(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="22,6 12,13 2,6" />
    </Base>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </Base>
  );
}

export function IconFacebook(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </Base>
  );
}

export function IconCup(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M7 4h9a1 1 0 0 1 1 1v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a1 1 0 0 1 1-1z" />
      <path d="M17 9h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2" />
      <line x1="9.5" y1="8.5" x2="9.5" y2="16.5" />
      <line x1="13.5" y1="8.5" x2="13.5" y2="16.5" />
    </Base>
  );
}

export function IconTree(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 22v-4" />
      <path d="M7 18h10l-2.4-4H17L12 4 7 14h2.4L7 18z" />
    </Base>
  );
}

export function IconMugHot(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="2" x2="6" y2="5" />
      <line x1="10" y1="2" x2="10" y2="5" />
      <line x1="14" y1="2" x2="14" y2="5" />
    </Base>
  );
}

export function IconUsers(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </Base>
  );
}

export function IconSun(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </Base>
  );
}

export function IconMoon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </Base>
  );
}

export function IconUtensils(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 2v7a2 2 0 0 0 2 2 2 2 0 0 0 2-2V2" />
      <line x1="6" y1="11" x2="6" y2="22" />
      <path d="M18 2c-1.7 0-3 2.2-3 5v5h3v10" />
    </Base>
  );
}

export function IconMask(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 5.5C6.7 4.2 9.3 3.5 12 3.5s5.3.7 8 2V11c0 5.2-3.5 9.3-8 10.5C7.5 20.3 4 16.2 4 11V5.5z" />
      <line x1="8.6" y1="10" x2="9.8" y2="10" />
      <line x1="14.2" y1="10" x2="15.4" y2="10" />
      <path d="M8.5 14.5a5 5 0 0 0 7 0" />
    </Base>
  );
}

export function IconSparkles(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
      <path d="M19 16.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8z" />
    </Base>
  );
}

export function IconCalendar(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </Base>
  );
}

export function IconImage(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </Base>
  );
}

export function IconInfo(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </Base>
  );
}

export function IconMapPin(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </Base>
  );
}

export function IconArrowUp(props: IconProps) {
  return (
    <Base {...props}>
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5,12 12,5 19,12" />
    </Base>
  );
}

export function IconExternalLink(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </Base>
  );
}
