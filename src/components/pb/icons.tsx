import * as React from "react";

type IconProps = { size?: number; sw?: number; className?: string; style?: React.CSSProperties };

const Icon = ({ children, size = 16, sw = 1.6, className, style }: IconProps & { children: React.ReactNode }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" className={className} style={{ flexShrink: 0, ...style }}>
    {children}
  </svg>
);

export const Icons = {
  grid:  (p: IconProps = {}) => <Icon {...p}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></Icon>,
  building: (p: IconProps = {}) => <Icon {...p}><path d="M3 21h18"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/><path d="M9 9h2M13 9h2M9 13h2M13 13h2M9 17h2M13 17h2"/></Icon>,
  users: (p: IconProps = {}) => <Icon {...p}><circle cx="9" cy="8" r="3.5"/><path d="M2 21a7 7 0 0 1 14 0"/><circle cx="17" cy="9" r="3"/><path d="M22 19a5 5 0 0 0-5-5"/></Icon>,
  invoice: (p: IconProps = {}) => <Icon {...p}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/><path d="M8 13h8M8 17h5"/></Icon>,
  wallet: (p: IconProps = {}) => <Icon {...p}><path d="M3 7a2 2 0 0 1 2-2h13v4"/><path d="M3 7v11a2 2 0 0 0 2 2h15v-5"/><path d="M16 12h5v3h-5a1.5 1.5 0 0 1 0-3z"/></Icon>,
  cog: (p: IconProps = {}) => <Icon {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 0 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1A2 2 0 1 1 4.4 16.9l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1A2 2 0 1 1 7.1 4.4l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></Icon>,
  sun: (p: IconProps = {}) => <Icon {...p}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></Icon>,
  plus: (p: IconProps = {}) => <Icon {...p}><path d="M12 5v14M5 12h14"/></Icon>,
  upRight: (p: IconProps = {}) => <Icon {...p}><path d="M7 17 17 7M7 7h10v10"/></Icon>,
  downRight: (p: IconProps = {}) => <Icon {...p}><path d="M7 7l10 10M17 7v10H7"/></Icon>,
  search: (p: IconProps = {}) => <Icon {...p}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></Icon>,
  filter: (p: IconProps = {}) => <Icon {...p}><path d="M3 5h18M6 12h12M10 19h4"/></Icon>,
  send: (p: IconProps = {}) => <Icon {...p}><path d="m22 2-7 20-4-9-9-4 20-7z"/><path d="M22 2 11 13"/></Icon>,
  check: (p: IconProps = {}) => <Icon {...p}><path d="m5 12 4 4L19 7"/></Icon>,
  bolt: (p: IconProps = {}) => <Icon {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/></Icon>,
  refresh: (p: IconProps = {}) => <Icon {...p}><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/></Icon>,
  bell: (p: IconProps = {}) => <Icon {...p}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a2 2 0 0 0 3.4 0"/></Icon>,
  pencil: (p: IconProps = {}) => <Icon {...p}><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4z"/></Icon>,
  trash: (p: IconProps = {}) => <Icon {...p}><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6l1 14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-14"/></Icon>,
  copy: (p: IconProps = {}) => <Icon {...p}><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></Icon>,
  home: (p: IconProps = {}) => <Icon {...p}><path d="M3 11 12 3l9 8"/><path d="M5 10v10h14V10"/></Icon>,
  bank: (p: IconProps = {}) => <Icon {...p}><path d="M3 9 12 4l9 5"/><path d="M5 10v8M9 10v8M15 10v8M19 10v8"/><path d="M3 21h18"/></Icon>,
  mail: (p: IconProps = {}) => <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></Icon>,
  clock: (p: IconProps = {}) => <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></Icon>,
};

export type IconKey = keyof typeof Icons;
