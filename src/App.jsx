import { useState } from "react";
import { CheckCircle, Circle, ChevronDown, ChevronUp } from "lucide-react";

const NAVY = "#223F5D";
const CORAL = "#EB4A4B";
const LIGHT = "#F7F4F0";

const offices = [
  {
    id: 1,
    name: "Pasadena Pediatric Dentistry",
    contact: "Dr. Smith",
    type: "Pediatric",
  },
  { id: 2, name: "Arcadia Family Dental", contact: "Dr. Lee", type: "General" },
  {
    id: 3,
    name: "Monrovia Kids Dentistry",
    contact: "Dr. Patel",
    type: "Pediatric",
  },
  {
    id: 4,
    name: "Sierra Madre Dental Group",
    contact: "Dr. Chen",
    type: "General",
  },
  { id: 5, name: "Altadena Dental Arts", contact: "Dr. Kim", type: "General" },
  { id: 6, name: "San Marino Smiles", contact: "Dr. Nguyen", type: "General" },
  { id: 7, name: "Temple City Dental", contact: "Dr. Rivera", type: "General" },
  {
    id: 8,
    name: "Duarte Family Dental",
    contact: "Dr. Johnson",
    type: "General",
  },
  {
    id: 9,
    name: "Glendora Pediatric Dental",
    contact: "Dr. Torres",
    type: "Pediatric",
  },
  {
    id: 10,
    name: "La Canada Dental Care",
    contact: "Dr. Park",
    type: "General",
  },
  {
    id: 11,
    name: "Rosemead Dental Center",
    contact: "Dr. Martinez",
    type: "General",
  },
  {
    id: 12,
    name: "Alhambra Kids & Family Dental",
    contact: "Dr. Wilson",
    type: "Pediatric",
  },
];

const touchPoints = [
  {
    id: "tp1",
    month: "May",
    date: "May 19–23, 2026",
    reminderDate: "May 12, 2026",
    theme: "Spring Into Summer",
    emoji: "🌸",
    color: "#E8A598",
    tagline: "A warm thank-you to kick off our busiest season",
    giftIdea:
      "Custom TOH-branded iced coffee kit — insulated tumbler, cold brew bags, honey sticks, and a handwritten thank-you card from Dr. Katie & Dr. Cory",
    deliveryMethod: "In-person office drop-off by TOH staff",
    budget: 500,
    perOffice: 41.67,
    items: [
      "Insulated tumbler (qty 12) — ~$18/ea = $216",
      "Cold brew bag packs — ~$6/ea = $72",
      "Honey sticks + sugar packets — ~$3/ea = $36",
      "TOH branded ribbon + tissue paper — ~$2/ea = $24",
      "Handwritten card with notecard set — ~$1.50/ea = $18",
    ],
    actionItems: [
      "Order branded tumblers from Vistaprint/CustomInk",
      "Source cold brew bags (Amazon or local)",
      "Write personalized cards from Drs. Nasoff",
      "Assign staff delivery routes by geography",
      "Take a photo at each drop-off for Instagram",
    ],
    messagingNote:
      "Reference specific patients referred (by first name only) and express genuine appreciation. Keep tone warm and personal — not corporate.",
  },
  {
    id: "tp2",
    month: "June",
    date: "June 16–20, 2026",
    reminderDate: "June 9, 2026",
    theme: "Summer Appreciation Lunch",
    emoji: "☀️",
    color: "#F5C842",
    tagline: "Feed the team that feeds your schedule",
    giftIdea:
      "Catered lunch for each office — order through EZcater or local restaurant. Drop off with a TOH-branded card that says 'Lunch is on us — you've earned it!'",
    deliveryMethod: "Delivered or dropped off during lunch hour (11:30am–1pm)",
    budget: 500,
    perOffice: 41.67,
    items: [
      "EZcater or local taqueria/deli order — ~$35–40/office",
      "TOH branded card stock card — ~$1.50/ea",
      "Disposable serving utensils if needed — ~$1/ea",
    ],
    actionItems: [
      "Call each office to confirm office headcount (1 week before)",
      "Place catering orders 3 days in advance",
      "Stagger deliveries: 2–3 offices per day over the week",
      "Text/email day-of to give a heads up: 'Lunch is on its way!'",
      "Follow up with a 'Hope the team enjoyed it!' text same afternoon",
    ],
    messagingNote:
      "This is the highest-impact touch point. Staff remember who fed them. Go slightly above budget here if needed — it pays off in referral loyalty.",
  },
  {
    id: "tp3",
    month: "July",
    date: "July 7–11, 2026",
    reminderDate: "June 30, 2026",
    theme: "Mid-Summer Check-In",
    emoji: "🧃",
    color: "#7EC8A4",
    tagline: "Staying top of mind all summer long",
    giftIdea:
      "Personalized referral update card + small summer treat bag (mini sunscreen, lip balm, gum, a $5 Starbucks card). Reinforces that you remember individual offices during the busy summer season.",
    deliveryMethod: "Mailed OR hand-delivered with a 'just checking in' note",
    budget: 500,
    perOffice: 41.67,
    items: [
      "Custom folded card (print at Canva + local printer) — ~$3/ea = $36",
      "Mini sunscreen (SPF 30, single-use) — ~$2/ea = $24",
      "TOH lip balm branded (optional from 4imprint) — ~$3/ea = $36",
      "Mini pack of gum or mints — ~$1.50/ea = $18",
      "$5 Starbucks egift card — $5/ea = $60",
      "Kraft gift bag + tissue — ~$2/ea = $24",
    ],
    actionItems: [
      "Design summer card in Canva with TOH branding",
      "Order branded lip balm (allow 2-week lead time)",
      "Pull referral count per office for personalized message",
      "Send eGift cards via email the same week as drop-off",
      "Optional: include QR code to patient new-start form",
    ],
    messagingNote:
      "Mention their referrals by count: 'You've sent us 4 amazing families this year — we're so grateful.' This specificity builds trust and loyalty.",
  },
  {
    id: "tp4",
    month: "August",
    date: "Aug 17–21, 2026",
    reminderDate: "Aug 10, 2026",
    theme: "Back-to-School Boost",
    emoji: "🎒",
    color: "#223F5D",
    tagline:
      "Your patients are heading back — let's get those referrals rolling",
    giftIdea:
      "Branded back-to-school snack tower for the front desk staff — popcorn, trail mix, chocolate, granola bars in a TOH-branded box with a ribbon. This is a crowd-pleaser and sits on the front desk all week.",
    deliveryMethod:
      "In-person drop-off by Dr. Katie or Dr. Cory personally (high-impact visit)",
    budget: 500,
    perOffice: 41.67,
    items: [
      "Snack tower / gift tower (Hickory Farms, Tower of Treats) — ~$28/ea = $336",
      "Custom TOH label/sticker for the box — ~$2/ea = $24",
      "TOH referral pad (mini notepad with referral form) — ~$5/ea = $60",
    ],
    actionItems: [
      "Order snack towers in bulk (Costco, Sam's Club, or wholesaler)",
      "Print custom labels to overlay on boxes with TOH branding",
      "Print a fresh set of paper referral forms / notepads",
      "Personally visit top 5 referring offices with Dr. Cory or Dr. Katie",
      "Bring updated case photos / treatment examples to show during visit",
    ],
    messagingNote:
      "August is the single most important referral month. Back-to-school = kids need ortho evals. Use this drop-off as an opportunity to remind staff what cases to watch for.",
  },
  {
    id: "tp5",
    month: "October",
    date: "Oct 19–23, 2026",
    reminderDate: "Oct 12, 2026",
    theme: "Halloween Treat Drop",
    emoji: "🎃",
    color: "#D4600A",
    tagline: "Trick? No. Just treats — and a little TOH love.",
    giftIdea:
      "Festive Halloween treat box for each office — good chocolate/candy (not cheap stuff), plus a fun TOH-themed card with a Halloween pun. 'We're BOO-thifully grateful for every referral!'",
    deliveryMethod:
      "Drop-off the week before Halloween — staff will display it all week",
    budget: 500,
    perOffice: 41.67,
    items: [
      "Premium Halloween candy mix (Reese's, Snickers, KitKat) — ~$15/ea = $180",
      "Festive box or cauldron bucket — ~$5/ea = $60",
      "Custom TOH Halloween card (Canva design) — ~$2/ea = $24",
      "TOH stickers or branded pens — ~$4/ea = $48",
      "Orange/black crinkle paper filler — ~$1.50/ea = $18",
    ],
    actionItems: [
      "Design Halloween card in Canva (use TOH coral + navy palette)",
      "Source premium bulk candy (Costco or Sam's)",
      "Assemble boxes in-office (team activity)",
      "Post a Reel of the assembly + deliveries on TOH Instagram",
      "Tag referring offices on social if they have IG pages",
    ],
    messagingNote:
      "Keep it fun and light. This isn't a sales pitch — it's pure goodwill. Include a fun line about how sweet their referrals have been all year.",
  },
  {
    id: "tp6",
    month: "November",
    date: "Nov 10–14, 2026",
    reminderDate: "Nov 3, 2026",
    theme: "Thanksgiving Gratitude",
    emoji: "🍂",
    color: "#8B5E3C",
    tagline: "The season to say it: thank you, from the bottom of our hearts",
    giftIdea:
      "Premium handwritten Thanksgiving card from Dr. Katie & Dr. Cory on TOH letterhead + a $25 restaurant/coffee gift card per office. This is the most personal touch point of the year — invest in the card quality.",
    deliveryMethod:
      "Mailed first class by Nov 14 so it arrives before Thanksgiving",
    budget: 500,
    perOffice: 41.67,
    items: [
      "$25 Starbucks or local restaurant gift card — ~$25/ea = $300",
      "Premium card stock + envelope (A2 size) — ~$3/ea = $36",
      "Wax seal or ribbon (branded) — ~$1/ea = $12",
      "First class postage — ~$0.73/ea = $9",
    ],
    actionItems: [
      "Write personalized notes — include # of referrals, patient outcomes, and a genuine message",
      "Use TOH navy + coral card design from Canva",
      "Purchase gift cards in bulk at local Starbucks or via email delivery",
      "Mail by Nov 14 to guarantee delivery before Thanksgiving",
      "Consider including a photo of the team with a 'We're grateful for you' sign",
    ],
    messagingNote:
      "This is not the time to ask for more referrals. 100% gratitude. Mention specific things you love about working with their team. Doctors should sign these personally.",
  },
  {
    id: "tp7",
    month: "December",
    date: "Dec 8–12, 2026",
    reminderDate: "Nov 30, 2026",
    theme: "Holiday Gift & Year-End Celebration",
    emoji: "🎄",
    color: "#2E7D52",
    tagline: "Closing the year with gratitude — and great gifts",
    giftIdea:
      "A curated TOH Holiday Gift — premium branded item (engraved cutting board, cheese board set, or cozy kit) plus a printed Year in Review card showing how many patients were treated together. High-end, memorable, display-worthy.",
    deliveryMethod:
      "In-person delivery by the Drs. Nasoff during the first two weeks of December",
    budget: 500,
    perOffice: 41.67,
    items: [
      "Premium gift (cutting board, cheese set, or cozy kit) — ~$28/ea = $336",
      "Custom branded box or bag — ~$3/ea = $36",
      "Year-in-Review printed card — ~$2/ea = $24",
      "Ribbon / tissue / gift wrap — ~$1.50/ea = $18",
    ],
    actionItems: [
      "Pull full-year referral report per office by Nov 25",
      "Design Year-in-Review mini card (total referrals, cases started, outcomes)",
      "Order premium gifts by Nov 20 (lead time for holidays)",
      "Schedule delivery visits with Drs. Nasoff personally",
      "Optional: invite top 3 referring offices to a small holiday happy hour",
    ],
    messagingNote:
      "Year-end is when your referring offices assess which specialists to keep recommending. Show them their impact with real data. This visit matters most.",
  },
];

const budgetSummary = touchPoints.reduce(
  (acc, tp) => ({ total: acc.total + tp.budget, count: acc.count + 1 }),
  { total: 0, count: 0 }
);

const iconMap = {
  tp1: "🌸",
  tp2: "☀️",
  tp3: "🧃",
  tp4: "🎒",
  tp5: "🎃",
  tp6: "🍂",
  tp7: "🎄",
};

export default function TOHReferralPlan() {
  const [expandedTp, setExpandedTp] = useState("tp1");
  const [completedOffices, setCompletedOffices] = useState({});
  const [activeTab, setActiveTab] = useState("plan");
  const [officeList, setOfficeList] = useState(offices);
  const [editingOffice, setEditingOffice] = useState(null);

  const toggleOffice = (tpId, officeId) => {
    const key = `${tpId}-${officeId}`;
    setCompletedOffices((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const getOfficeCompletion = (tpId) => {
    return officeList.filter((o) => completedOffices[`${tpId}-${o.id}`]).length;
  };

  const totalCompleted = Object.values(completedOffices).filter(Boolean).length;
  const totalPossible = touchPoints.length * officeList.length;

  return (
    <div
      style={{
        fontFamily: "'Georgia', serif",
        background: LIGHT,
        minHeight: "100vh",
        color: NAVY,
      }}
    >
      {/* Header */}
      <div
        style={{
          background: NAVY,
          padding: "32px 24px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: CORAL,
            opacity: 0.12,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -20,
            left: "40%",
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: CORAL,
            opacity: 0.08,
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 6,
            }}
          >
            <div
              style={{
                background: CORAL,
                color: "white",
                fontSize: 11,
                fontFamily: "sans-serif",
                fontWeight: 700,
                letterSpacing: 2,
                padding: "3px 10px",
                borderRadius: 20,
                textTransform: "uppercase",
              }}
            >
              The Ortho House California
            </div>
          </div>
          <h1
            style={{
              color: "white",
              fontSize: 26,
              fontWeight: 700,
              margin: "4px 0 4px",
              lineHeight: 1.2,
            }}
          >
            Referral Gratitude Plan
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontFamily: "sans-serif",
              fontSize: 13,
              margin: 0,
            }}
          >
            May – December 2026 · 12 Referring Offices · 7 Touch Points
          </p>
          {/* Stats bar */}
          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 20,
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "Touch Points", value: "7" },
              { label: "Referring Offices", value: "12" },
              { label: "Budget Per Touch Point", value: "$500" },
              { label: "Total Annual Budget", value: "$3,500" },
              {
                label: "Completed",
                value: `${totalCompleted}/${totalPossible}`,
              },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 10,
                  padding: "8px 14px",
                  minWidth: 90,
                }}
              >
                <div style={{ color: CORAL, fontSize: 18, fontWeight: 700 }}>
                  {stat.value}
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: 10,
                    fontFamily: "sans-serif",
                    letterSpacing: 0.5,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          background: "white",
          borderBottom: `2px solid ${LIGHT}`,
          padding: "0 16px",
        }}
      >
        {[
          { id: "plan", label: "📋 Touch Points" },
          { id: "offices", label: "🏥 Offices" },
          { id: "tracker", label: "✅ Tracker" },
          { id: "reminders", label: "🔔 Reminders" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "12px 14px",
              fontSize: 13,
              fontFamily: "sans-serif",
              color: activeTab === tab.id ? CORAL : "#888",
              fontWeight: activeTab === tab.id ? 700 : 400,
              borderBottom:
                activeTab === tab.id
                  ? `2px solid ${CORAL}`
                  : "2px solid transparent",
              marginBottom: -2,
              transition: "all 0.2s",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ padding: "16px", maxWidth: 800, margin: "0 auto" }}>
        {/* TOUCH POINTS TAB */}
        {activeTab === "plan" && (
          <div>
            {touchPoints.map((tp, idx) => {
              const done = getOfficeCompletion(tp.id);
              const isOpen = expandedTp === tp.id;
              return (
                <div
                  key={tp.id}
                  style={{
                    background: "white",
                    borderRadius: 14,
                    marginBottom: 12,
                    boxShadow: isOpen
                      ? `0 4px 24px rgba(34,63,93,0.10)`
                      : "0 1px 6px rgba(0,0,0,0.06)",
                    border: isOpen
                      ? `2px solid ${CORAL}`
                      : "2px solid transparent",
                    overflow: "hidden",
                    transition: "all 0.2s",
                  }}
                >
                  <button
                    onClick={() => setExpandedTp(isOpen ? null : tp.id)}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "14px 16px",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      textAlign: "left",
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        fontSize: 22,
                        background: tp.color + "22",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {tp.emoji}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          flexWrap: "wrap",
                        }}
                      >
                        <span
                          style={{
                            background: tp.color,
                            color: "white",
                            fontSize: 10,
                            fontFamily: "sans-serif",
                            fontWeight: 700,
                            letterSpacing: 1,
                            padding: "2px 8px",
                            borderRadius: 20,
                            textTransform: "uppercase",
                          }}
                        >
                          {tp.month}
                        </span>
                        <span
                          style={{ fontWeight: 700, fontSize: 15, color: NAVY }}
                        >
                          {tp.theme}
                        </span>
                      </div>
                      <div
                        style={{
                          color: "#888",
                          fontSize: 12,
                          fontFamily: "sans-serif",
                          marginTop: 2,
                        }}
                      >
                        {tp.date} · ${tp.budget} budget · {done}/
                        {officeList.length} offices done
                      </div>
                    </div>
                    <div
                      style={{
                        background:
                          done === officeList.length ? "#e6f7ef" : LIGHT,
                        borderRadius: 20,
                        padding: "3px 10px",
                        fontSize: 11,
                        fontFamily: "sans-serif",
                        color: done === officeList.length ? "#2E7D52" : "#888",
                        fontWeight: 600,
                        flexShrink: 0,
                      }}
                    >
                      {done === officeList.length
                        ? "✓ Complete"
                        : `${done}/${officeList.length}`}
                    </div>
                    {isOpen ? (
                      <ChevronUp size={16} color="#aaa" />
                    ) : (
                      <ChevronDown size={16} color="#aaa" />
                    )}
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: "0 16px 16px",
                        borderTop: `1px solid ${LIGHT}`,
                      }}
                    >
                      <p
                        style={{
                          fontStyle: "italic",
                          color: "#888",
                          fontSize: 13,
                          fontFamily: "sans-serif",
                          margin: "12px 0 10px",
                        }}
                      >
                        "{tp.tagline}"
                      </p>

                      {/* Gift Idea */}
                      <Section title="🎁 Gift Idea" color={tp.color}>
                        <p
                          style={{
                            fontFamily: "sans-serif",
                            fontSize: 13,
                            lineHeight: 1.6,
                            margin: 0,
                          }}
                        >
                          {tp.giftIdea}
                        </p>
                        <div style={{ marginTop: 8 }}>
                          <span
                            style={{
                              background: tp.color + "22",
                              color: tp.color,
                              fontSize: 11,
                              fontFamily: "sans-serif",
                              fontWeight: 700,
                              padding: "2px 8px",
                              borderRadius: 20,
                            }}
                          >
                            📦 {tp.deliveryMethod}
                          </span>
                        </div>
                      </Section>

                      {/* Budget Breakdown */}
                      <Section title="💰 Budget Breakdown" color={tp.color}>
                        {tp.items.map((item, i) => (
                          <div
                            key={i}
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: 12,
                              padding: "4px 0",
                              borderBottom:
                                i < tp.items.length - 1
                                  ? `1px dashed ${LIGHT}`
                                  : "none",
                              color: "#555",
                            }}
                          >
                            · {item}
                          </div>
                        ))}
                        <div
                          style={{
                            marginTop: 8,
                            fontFamily: "sans-serif",
                            fontWeight: 700,
                            fontSize: 13,
                            color: NAVY,
                          }}
                        >
                          Total: ~${tp.budget} · ~${tp.perOffice.toFixed(0)}
                          /office
                        </div>
                      </Section>

                      {/* Action Items */}
                      <Section title="✅ Action Items" color={tp.color}>
                        {tp.actionItems.map((item, i) => (
                          <div
                            key={i}
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: 12,
                              padding: "4px 0",
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 6,
                            }}
                          >
                            <span style={{ color: CORAL, marginTop: 1 }}>
                              →
                            </span>
                            <span style={{ color: "#555" }}>{item}</span>
                          </div>
                        ))}
                      </Section>

                      {/* Messaging Note */}
                      <div
                        style={{
                          background: `${NAVY}08`,
                          border: `1px solid ${NAVY}22`,
                          borderRadius: 10,
                          padding: 12,
                          marginTop: 12,
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "sans-serif",
                            fontSize: 11,
                            fontWeight: 700,
                            color: NAVY,
                            letterSpacing: 1,
                            textTransform: "uppercase",
                            marginBottom: 4,
                          }}
                        >
                          💬 Messaging Note
                        </div>
                        <p
                          style={{
                            fontFamily: "sans-serif",
                            fontSize: 12,
                            color: "#444",
                            lineHeight: 1.6,
                            margin: 0,
                          }}
                        >
                          {tp.messagingNote}
                        </p>
                      </div>

                      {/* Office Checklist */}
                      <Section title="🏥 Office Checklist" color={tp.color}>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: 6,
                          }}
                        >
                          {officeList.map((office) => {
                            const key = `${tp.id}-${office.id}`;
                            const done = completedOffices[key];
                            return (
                              <button
                                key={office.id}
                                onClick={() => toggleOffice(tp.id, office.id)}
                                style={{
                                  background: done ? "#e6f7ef" : "white",
                                  border: `1px solid ${
                                    done ? "#2E7D52" : "#e0e0e0"
                                  }`,
                                  borderRadius: 8,
                                  padding: "6px 10px",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 6,
                                  cursor: "pointer",
                                  textAlign: "left",
                                  transition: "all 0.15s",
                                }}
                              >
                                {done ? (
                                  <CheckCircle size={14} color="#2E7D52" />
                                ) : (
                                  <Circle size={14} color="#ccc" />
                                )}
                                <div>
                                  <div
                                    style={{
                                      fontSize: 11,
                                      fontFamily: "sans-serif",
                                      fontWeight: 600,
                                      color: NAVY,
                                    }}
                                  >
                                    {office.name}
                                  </div>
                                  <div
                                    style={{
                                      fontSize: 10,
                                      fontFamily: "sans-serif",
                                      color: "#999",
                                    }}
                                  >
                                    {office.contact}
                                  </div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </Section>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* OFFICES TAB */}
        {activeTab === "offices" && (
          <div>
            <div
              style={{
                background: CORAL + "15",
                border: `1px solid ${CORAL}33`,
                borderRadius: 10,
                padding: 12,
                marginBottom: 14,
                fontFamily: "sans-serif",
                fontSize: 13,
                color: NAVY,
              }}
            >
              <strong>💡 Tip:</strong> Click any office to edit the name,
              contact, and type. Replace placeholders with your actual referring
              offices.
            </div>
            <div style={{ display: "grid", gap: 8 }}>
              {officeList.map((office) => (
                <div
                  key={office.id}
                  style={{
                    background: "white",
                    borderRadius: 12,
                    padding: 14,
                    boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: NAVY,
                      color: "white",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "sans-serif",
                      fontSize: 14,
                      flexShrink: 0,
                    }}
                  >
                    {office.id}
                  </div>
                  {editingOffice === office.id ? (
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        gap: 6,
                        flexWrap: "wrap",
                      }}
                    >
                      <input
                        defaultValue={office.name}
                        onBlur={(e) => {
                          setOfficeList((prev) =>
                            prev.map((o) =>
                              o.id === office.id
                                ? { ...o, name: e.target.value }
                                : o
                            )
                          );
                        }}
                        style={{
                          flex: 2,
                          minWidth: 120,
                          border: `1px solid ${CORAL}`,
                          borderRadius: 6,
                          padding: "4px 8px",
                          fontFamily: "sans-serif",
                          fontSize: 13,
                          color: NAVY,
                          outline: "none",
                        }}
                      />
                      <input
                        defaultValue={office.contact}
                        onBlur={(e) => {
                          setOfficeList((prev) =>
                            prev.map((o) =>
                              o.id === office.id
                                ? { ...o, contact: e.target.value }
                                : o
                            )
                          );
                        }}
                        style={{
                          flex: 1,
                          minWidth: 80,
                          border: `1px solid ${CORAL}`,
                          borderRadius: 6,
                          padding: "4px 8px",
                          fontFamily: "sans-serif",
                          fontSize: 13,
                          color: NAVY,
                          outline: "none",
                        }}
                      />
                      <button
                        onClick={() => setEditingOffice(null)}
                        style={{
                          background: CORAL,
                          color: "white",
                          border: "none",
                          borderRadius: 6,
                          padding: "4px 12px",
                          cursor: "pointer",
                          fontFamily: "sans-serif",
                          fontSize: 12,
                          fontWeight: 700,
                        }}
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div
                      style={{ flex: 1, cursor: "pointer" }}
                      onClick={() => setEditingOffice(office.id)}
                    >
                      <div
                        style={{
                          fontFamily: "sans-serif",
                          fontSize: 14,
                          fontWeight: 600,
                          color: NAVY,
                        }}
                      >
                        {office.name}
                      </div>
                      <div
                        style={{
                          fontFamily: "sans-serif",
                          fontSize: 12,
                          color: "#888",
                        }}
                      >
                        {office.contact} · {office.type}
                      </div>
                    </div>
                  )}
                  <div
                    style={{
                      background:
                        office.type === "Pediatric" ? "#E8F4FD" : "#F0F7EE",
                      color:
                        office.type === "Pediatric" ? "#1976D2" : "#2E7D52",
                      fontSize: 10,
                      fontFamily: "sans-serif",
                      fontWeight: 700,
                      padding: "3px 8px",
                      borderRadius: 20,
                      flexShrink: 0,
                    }}
                  >
                    {office.type}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TRACKER TAB */}
        {activeTab === "tracker" && (
          <div>
            <div
              style={{
                background: "white",
                borderRadius: 14,
                padding: 16,
                boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 12,
                  color: "#888",
                  marginBottom: 8,
                }}
              >
                Overall Progress
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    flex: 1,
                    height: 10,
                    background: LIGHT,
                    borderRadius: 10,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      borderRadius: 10,
                      background: CORAL,
                      width: `${
                        totalPossible > 0
                          ? (totalCompleted / totalPossible) * 100
                          : 0
                      }%`,
                      transition: "width 0.4s",
                    }}
                  />
                </div>
                <span
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    color: NAVY,
                    flexShrink: 0,
                  }}
                >
                  {totalCompleted}/{totalPossible}
                </span>
              </div>
            </div>

            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  background: "white",
                  borderRadius: 14,
                  overflow: "hidden",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                }}
              >
                <thead>
                  <tr style={{ background: NAVY }}>
                    <th
                      style={{
                        padding: "10px 12px",
                        textAlign: "left",
                        color: "rgba(255,255,255,0.7)",
                        fontFamily: "sans-serif",
                        fontSize: 11,
                        fontWeight: 600,
                      }}
                    >
                      Office
                    </th>
                    {touchPoints.map((tp) => (
                      <th
                        key={tp.id}
                        style={{
                          padding: "10px 8px",
                          textAlign: "center",
                          color: "rgba(255,255,255,0.7)",
                          fontFamily: "sans-serif",
                          fontSize: 11,
                          fontWeight: 600,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {tp.emoji}
                        <br />
                        {tp.month}
                      </th>
                    ))}
                    <th
                      style={{
                        padding: "10px 8px",
                        textAlign: "center",
                        color: "rgba(255,255,255,0.7)",
                        fontFamily: "sans-serif",
                        fontSize: 11,
                        fontWeight: 600,
                      }}
                    >
                      Done
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {officeList.map((office, idx) => {
                    const officeDone = touchPoints.filter(
                      (tp) => completedOffices[`${tp.id}-${office.id}`]
                    ).length;
                    return (
                      <tr
                        key={office.id}
                        style={{
                          background: idx % 2 === 0 ? "white" : "#fafafa",
                        }}
                      >
                        <td
                          style={{
                            padding: "8px 12px",
                            fontFamily: "sans-serif",
                            fontSize: 12,
                            color: NAVY,
                            fontWeight: 600,
                          }}
                        >
                          {office.name.split(" ").slice(0, 2).join(" ")}
                        </td>
                        {touchPoints.map((tp) => {
                          const done =
                            completedOffices[`${tp.id}-${office.id}`];
                          return (
                            <td
                              key={tp.id}
                              style={{ padding: "8px", textAlign: "center" }}
                            >
                              <button
                                onClick={() => toggleOffice(tp.id, office.id)}
                                style={{
                                  background: "none",
                                  border: "none",
                                  cursor: "pointer",
                                  padding: 0,
                                }}
                              >
                                {done ? (
                                  <CheckCircle size={16} color="#2E7D52" />
                                ) : (
                                  <Circle size={16} color="#ddd" />
                                )}
                              </button>
                            </td>
                          );
                        })}
                        <td style={{ padding: "8px", textAlign: "center" }}>
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: 12,
                              fontWeight: 700,
                              color:
                                officeDone === touchPoints.length
                                  ? "#2E7D52"
                                  : NAVY,
                            }}
                          >
                            {officeDone}/{touchPoints.length}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* REMINDERS TAB */}
        {activeTab === "reminders" && (
          <div>
            <div
              style={{
                background: CORAL + "15",
                border: `1px solid ${CORAL}33`,
                borderRadius: 10,
                padding: 12,
                marginBottom: 14,
                fontFamily: "sans-serif",
                fontSize: 13,
                color: NAVY,
                lineHeight: 1.6,
              }}
            >
              <strong>🗓 How to use:</strong> Set each of these as a recurring
              reminder in your phone or Google Calendar. The prep reminder fires
              one week before delivery week so you have time to order, assemble,
              and organize.
            </div>
            {touchPoints.map((tp) => (
              <div
                key={tp.id}
                style={{
                  background: "white",
                  borderRadius: 12,
                  padding: 14,
                  marginBottom: 10,
                  boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                  borderLeft: `4px solid ${tp.color}`,
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
                >
                  <div style={{ fontSize: 22, lineHeight: 1 }}>{tp.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontFamily: "sans-serif",
                        fontWeight: 700,
                        fontSize: 14,
                        color: NAVY,
                      }}
                    >
                      {tp.theme}
                    </div>
                    <div
                      style={{
                        fontFamily: "sans-serif",
                        fontSize: 12,
                        color: "#888",
                        margin: "4px 0 8px",
                      }}
                    >
                      Delivery Week: {tp.date}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                      }}
                    >
                      <ReminderChip
                        label="⚙️ PREP REMINDER"
                        date={tp.reminderDate}
                        note="Order gifts, assemble materials, write cards, schedule staff routes"
                        color={tp.color}
                      />
                      <ReminderChip
                        label="📦 DELIVERY WEEK"
                        date={tp.date}
                        note={`Drop off / send to all ${officeList.length} offices this week`}
                        color={NAVY}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Annual Calendar Summary */}
            <div
              style={{
                background: NAVY,
                borderRadius: 14,
                padding: 16,
                marginTop: 8,
              }}
            >
              <div
                style={{
                  color: "white",
                  fontFamily: "sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  marginBottom: 12,
                }}
              >
                📅 Full Year at a Glance
              </div>
              {[
                {
                  month: "May",
                  items: [
                    "🌸 May 12 — PREP: Spring Iced Coffee Kit",
                    "🌸 May 19–23 — DELIVER",
                  ],
                },
                {
                  month: "June",
                  items: [
                    "☀️ June 9 — PREP: Summer Appreciation Lunch",
                    "☀️ June 16–20 — DELIVER",
                  ],
                },
                {
                  month: "July",
                  items: [
                    "🧃 June 30 — PREP: Mid-Summer Check-In",
                    "🧃 July 7–11 — DELIVER",
                  ],
                },
                {
                  month: "August",
                  items: [
                    "🎒 Aug 10 — PREP: Back-to-School Snack Tower",
                    "🎒 Aug 17–21 — DELIVER (Drs. personally)",
                  ],
                },
                {
                  month: "October",
                  items: [
                    "🎃 Oct 12 — PREP: Halloween Treat Boxes",
                    "🎃 Oct 19–23 — DELIVER",
                  ],
                },
                {
                  month: "November",
                  items: [
                    "🍂 Nov 3 — PREP: Thanksgiving Cards + Gift Cards",
                    "🍂 Nov 10–14 — MAIL (first class)",
                  ],
                },
                {
                  month: "December",
                  items: [
                    "🎄 Nov 30 — PREP: Holiday Gifts + Year-in-Review",
                    "🎄 Dec 8–12 — DELIVER (Drs. personally)",
                  ],
                },
              ].map(({ month, items }) => (
                <div key={month} style={{ marginBottom: 10 }}>
                  <div
                    style={{
                      color: CORAL,
                      fontFamily: "sans-serif",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      marginBottom: 3,
                    }}
                  >
                    {month}
                  </div>
                  {items.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        color: "rgba(255,255,255,0.75)",
                        fontFamily: "sans-serif",
                        fontSize: 12,
                        paddingLeft: 8,
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Section({ title, color, children }) {
  return (
    <div style={{ marginTop: 12 }}>
      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: 11,
          fontWeight: 700,
          color: color,
          letterSpacing: 1,
          textTransform: "uppercase",
          marginBottom: 6,
        }}
      >
        {title}
      </div>
      {children}
    </div>
  );
}

function ReminderChip({ label, date, note, color }) {
  return (
    <div
      style={{
        background: color + "12",
        border: `1px solid ${color}30`,
        borderRadius: 8,
        padding: "8px 10px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span
          style={{
            background: color,
            color: "white",
            fontSize: 9,
            fontFamily: "sans-serif",
            fontWeight: 700,
            letterSpacing: 0.5,
            padding: "2px 6px",
            borderRadius: 20,
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: "sans-serif",
            fontSize: 12,
            fontWeight: 700,
            color,
          }}
        >
          {date}
        </span>
      </div>
      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: 11,
          color: "#666",
          marginTop: 3,
        }}
      >
        {note}
      </div>
    </div>
  );
}
