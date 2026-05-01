const toolBadgeByName: Record<string, string> = {
  HubSpot: "HS",
  Zoho: "ZO",
  WhatsApp: "WA",
  Twilio: "TW",
  Calendly: "CA",
  "Google Sheets": "GS",
  Slack: "SL",
  n8n: "n8",
  OpenAI: "AI",
};

export function ToolBadge({ tool }: { tool: string }) {
  return (
    <span className="logo-pill-badge">
      {toolBadgeByName[tool] ?? tool.slice(0, 2).toUpperCase()}
    </span>
  );
}
