/**
 * Compact, correctly-labeled channel badges for the hero composer's channel
 * picker. Hand-authored rather than reused from Figma exports because several
 * of the downloaded "channel-*" assets turned out to be mislabeled (e.g.
 * channel-whatsapp.svg is actually a Gmail glyph) — safer to guarantee the
 * icon always matches its label.
 */
export type ChannelId =
  | "whatsapp"
  | "instagram"
  | "linkedin"
  | "meta"
  | "x"
  | "email"
  | "outlook"
  | "telegram"
  | "slack"
  | "crm";

export const CHANNELS: { id: ChannelId; label: string }[] = [
  { id: "whatsapp", label: "WhatsApp" },
  { id: "instagram", label: "Instagram" },
  { id: "linkedin", label: "LinkedIn" },
  { id: "meta", label: "Meta" },
  { id: "x", label: "X" },
  { id: "email", label: "Email" },
  { id: "outlook", label: "Outlook" },
  { id: "telegram", label: "Telegram" },
  { id: "slack", label: "Slack" },
  { id: "crm", label: "CRM" },
];

function Badge({ bg, children }: { bg: string; children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 20 20" className="size-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="20" rx="6" fill={bg} />
      {children}
    </svg>
  );
}

function Letter({ char }: { char: string }) {
  return (
    <text
      x="10"
      y="14.5"
      textAnchor="middle"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight={700}
      fontSize="11"
      fill="white"
    >
      {char}
    </text>
  );
}

export function ChannelIcon({ id }: { id: ChannelId }) {
  switch (id) {
    case "whatsapp":
      return (
        <Badge bg="#25D366">
          <path
            d="M10 4.5a5.5 5.5 0 0 0-4.72 8.32L4.5 15.5l2.75-.76A5.5 5.5 0 1 0 10 4.5Z"
            fill="none"
            stroke="white"
            strokeWidth="1.15"
            strokeLinejoin="round"
          />
          <path
            d="M7.9 8.4c.15-.35.3-.36.45-.36.13 0 .27 0 .38.02.13.02.26 0 .38.32.13.35.44 1.1.48 1.18.04.08.06.17 0 .27-.06.1-.09.17-.18.26-.09.1-.19.22-.27.3-.09.08-.18.18-.08.35.1.17.44.73.96 1.18.66.58 1.19.76 1.36.85.17.08.27.07.37-.04.1-.11.42-.49.53-.66.11-.17.22-.14.36-.08.15.05.94.44 1.1.52.17.08.28.13.32.2.04.08.04.44-.1.87-.15.42-.85.79-1.18.83-.31.05-.6.2-2.02-.42-1.71-.75-2.78-2.55-2.87-2.67-.08-.11-.68-.9-.68-1.72 0-.82.43-1.22.58-1.4Z"
            fill="white"
          />
        </Badge>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 20 20" className="size-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ig-grad" x1="0" y1="20" x2="20" y2="0">
              <stop offset="0" stopColor="#FEDA75" />
              <stop offset="0.35" stopColor="#D62976" />
              <stop offset="0.7" stopColor="#962FBF" />
              <stop offset="1" stopColor="#4F5BD5" />
            </linearGradient>
          </defs>
          <rect width="20" height="20" rx="6" fill="url(#ig-grad)" />
          <rect x="5" y="5" width="10" height="10" rx="3" fill="none" stroke="white" strokeWidth="1.2" />
          <circle cx="10" cy="10" r="2.6" fill="none" stroke="white" strokeWidth="1.2" />
          <circle cx="13.3" cy="6.7" r="0.7" fill="white" />
        </svg>
      );
    case "linkedin":
      return (
        <Badge bg="#0A66C2">
          <Letter char="in" />
        </Badge>
      );
    case "meta":
      return (
        <Badge bg="#1877F2">
          <Letter char="f" />
        </Badge>
      );
    case "x":
      return (
        <Badge bg="#000000">
          <path d="M5.5 5.5l9 9M14.5 5.5l-9 9" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        </Badge>
      );
    case "email":
      return (
        <Badge bg="#64748B">
          <rect x="4.5" y="6" width="11" height="8" rx="1.5" fill="none" stroke="white" strokeWidth="1.15" />
          <path d="M5 6.8l5 3.8 5-3.8" fill="none" stroke="white" strokeWidth="1.15" strokeLinejoin="round" />
        </Badge>
      );
    case "outlook":
      return (
        <Badge bg="#0A2767">
          <Letter char="O" />
        </Badge>
      );
    case "telegram":
      return (
        <Badge bg="#26A5E4">
          <path
            d="M5 10.3l9.5-4-1.6 9.3-2.9-2.2-1.5 1.5-.3-2.6L14 8.1 6.9 11.4z"
            fill="white"
          />
        </Badge>
      );
    case "slack":
      return (
        <Badge bg="#4A154B">
          <Letter char="#" />
        </Badge>
      );
    case "crm":
      return (
        <Badge bg="#4F46E5">
          <rect x="5" y="6.5" width="10" height="2" rx="1" fill="white" />
          <rect x="5" y="9.5" width="10" height="2" rx="1" fill="white" />
          <rect x="5" y="12.5" width="6" height="2" rx="1" fill="white" />
        </Badge>
      );
    default:
      return null;
  }
}
