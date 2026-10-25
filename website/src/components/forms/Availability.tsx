import { useRef, useState, type PointerEvent } from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatHour, hourSlots, weekdays, type Availability } from "./signup-model";
import { site } from "@/data/site";

type Mode = "yes" | "no";
type Paint = { mode: Mode | null };

const isClosed = (day: string, hour: number) =>
  (day === "Saturday" || day === "Sunday") && hour < site.lessonWeekendStart;

const modes: { value: Mode; label: string; icon: typeof Check }[] = [
  { value: "yes", label: "Works for us", icon: Check },
  { value: "no", label: "Doesn't work", icon: X },
];

export default function AvailabilityPicker({
  value,
  onChange,
}: {
  value: Availability;
  onChange: (next: Availability) => void;
  idPrefix?: string;
}) {
  const [mode, setMode] = useState<Mode>("yes");
  const paint = useRef<Paint | null>(null);
  const latest = useRef(value);
  latest.current = value;

  const setCell = (day: string, hour: number, next: Mode | null) => {
    const current = latest.current[day]?.[hour] ?? null;
    if (current === next) return;
    const dayCells = { ...(latest.current[day] ?? {}) };
    if (next) dayCells[hour] = next;
    else delete dayCells[hour];
    latest.current = { ...latest.current, [day]: dayCells };
    onChange(latest.current);
  };

  const cellFrom = (target: Element | null) => {
    const cell = target?.closest<HTMLElement>("[data-day]");
    if (!cell?.dataset.day || cell.dataset.hour === undefined) return null;
    return { day: cell.dataset.day, hour: Number(cell.dataset.hour) };
  };

  const onDown = (event: PointerEvent<HTMLDivElement>) => {
    const cell = cellFrom(event.target as Element);
    if (!cell) return;
    event.preventDefault();
    const already = latest.current[cell.day]?.[cell.hour] === mode;
    paint.current = { mode: already ? null : mode };
    setCell(cell.day, cell.hour, paint.current.mode);
  };

  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!paint.current) return;
    const cell = cellFrom(document.elementFromPoint(event.clientX, event.clientY));
    if (cell) setCell(cell.day, cell.hour, paint.current.mode);
  };

  const stop = () => {
    paint.current = null;
  };

  const copyMonday = () => {
    const monday = latest.current[weekdays[0].value] ?? {};
    const next = { ...latest.current };
    for (const day of weekdays.slice(1, 5)) next[day.value] = { ...monday };
    latest.current = next;
    onChange(next);
  };

  const hasAny = Object.values(value).some((cells) => Object.keys(cells).length > 0);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-full bg-forest-50 p-1" role="radiogroup" aria-label="What dragging does">
          {modes.map(({ value: modeValue, label, icon: Icon }) => (
            <button
              key={modeValue}
              type="button"
              role="radio"
              aria-checked={mode === modeValue}
              onClick={() => setMode(modeValue)}
              className={cn(
                "inline-flex min-h-10 items-center gap-1.5 rounded-full px-4 text-sm font-semibold transition-colors",
                mode === modeValue
                  ? modeValue === "yes"
                    ? "bg-forest-700 text-white"
                    : "bg-red-500 text-white"
                  : "text-ink-soft",
              )}
            >
              <Icon size={15} aria-hidden="true" />
              {label}
            </button>
          ))}
        </div>
        <div className="flex gap-1 text-sm">
          <button
            type="button"
            onClick={copyMonday}
            className="rounded-full px-3 py-2 font-medium text-forest-700 hover:bg-forest-50"
          >
            Copy Mon to Mon–Fri
          </button>
          <button
            type="button"
            onClick={() => onChange({})}
            disabled={!hasAny}
            className="rounded-full px-3 py-2 font-medium text-ink-soft hover:bg-forest-50 disabled:opacity-40"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-forest-900/10 bg-white">
        <div className="grid grid-cols-[2.6rem_repeat(7,minmax(0,1fr))] border-b border-forest-900/10 bg-cream/60 text-center text-xs font-semibold text-ink-soft sm:grid-cols-[3.4rem_repeat(7,minmax(0,1fr))] sm:text-sm">
          <span />
          {weekdays.map((day) => (
            <span key={day.value} className="border-l border-forest-900/10 py-2.5">
              {day.label}
            </span>
          ))}
        </div>

        <div
          role="group"
          aria-label="Weekly schedule"
          className="grid touch-none select-none grid-cols-[2.6rem_repeat(7,minmax(0,1fr))] sm:grid-cols-[3.4rem_repeat(7,minmax(0,1fr))]"
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={stop}
          onPointerLeave={stop}
          onPointerCancel={stop}
        >
          {hourSlots.map((hour, row) => (
            <div key={hour} className="contents">
              <span
                className={cn(
                  "relative -top-2 pr-1.5 text-right text-[10px] leading-none text-ink-soft sm:text-xs",
                  row === 0 && "top-1",
                )}
              >
                {formatHour(hour)}
              </span>
              {weekdays.map((day) => {
                const state = value[day.value]?.[hour];
                if (isClosed(day.value, hour)) {
                  return (
                    <span
                      key={day.value}
                      aria-hidden="true"
                      className="h-9 border-l border-t border-forest-900/10 bg-forest-900/[0.06] bg-[repeating-linear-gradient(135deg,transparent_0_4px,rgba(27,46,31,0.08)_4px_5px)] sm:h-10"
                    />
                  );
                }
                return (
                  <button
                    key={day.value}
                    type="button"
                    data-day={day.value}
                    data-hour={hour}
                    aria-label={`${day.value} ${formatHour(hour)} to ${formatHour(hour + 1)}${state ? (state === "yes" ? ", works" : ", doesn't work") : ""}`}
                    aria-pressed={Boolean(state)}
                    onKeyDown={(event) => {
                      if (event.key === " " || event.key === "Enter") {
                        event.preventDefault();
                        setCell(day.value, hour, state === mode ? null : mode);
                      }
                    }}
                    className={cn(
                      "h-9 border-l border-t border-forest-900/10 transition-colors duration-100 sm:h-10",
                      state === "yes" && "bg-forest-600/85",
                      state === "no" &&
                        "bg-red-400/80 bg-[repeating-linear-gradient(135deg,transparent_0_5px,rgba(255,255,255,0.25)_5px_7px)]",
                      !state && "hover:bg-forest-50",
                    )}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
