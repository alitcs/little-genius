import { Clock, CalendarX, AlertCircle } from "lucide-react";
import CTASection from "@/components/CTASection";

export default function HoursPage() {
  const schedule = [
    { day: "Monday", hours: "7:00 AM – 7:00 PM" },
    { day: "Tuesday", hours: "7:00 AM – 7:00 PM" },
    { day: "Wednesday", hours: "7:00 AM – 7:00 PM" },
    { day: "Thursday", hours: "7:00 AM – 7:00 PM" },
    { day: "Friday", hours: "7:00 AM – 7:00 PM" },
    { day: "Saturday", hours: "8:00 AM – 12:00 PM", note: "Half-day activities only" },
    { day: "Sunday", hours: "Closed", closed: true },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary/5 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Hours of Operation</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Flexible schedules designed to support busy, working parents.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="bg-card border border-border shadow-sm rounded-[2rem] overflow-hidden mb-12">
            <div className="bg-primary p-6 md:p-8 flex items-center gap-4 text-primary-foreground">
              <Clock size={32} />
              <h2 className="text-2xl md:text-3xl font-bold">Weekly Schedule</h2>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex flex-col divide-y divide-border">
                {schedule.map((item, idx) => (
                  <div key={idx} className={`py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${item.closed ? 'opacity-60' : ''}`}>
                    <span className="text-xl font-bold text-foreground w-32">{item.day}</span>
                    <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                      <span className={`text-lg font-semibold ${item.closed ? 'text-destructive' : 'text-primary'}`}>
                        {item.hours}
                      </span>
                      {item.note && (
                        <span className="text-sm font-bold bg-muted px-3 py-1 rounded-full text-muted-foreground w-fit">
                          {item.note}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Holiday closures */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#EDF5E1] p-8 rounded-[2rem] flex flex-col gap-4">
              <CalendarX size={32} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Holiday Closures</h3>
              <p className="text-muted-foreground font-medium leading-relaxed mb-2">
                We are closed on all statutory holidays to allow our dedicated staff to spend time with their families.
              </p>
              <ul className="list-disc pl-5 text-foreground font-semibold space-y-1">
                <li>New Year's Day</li>
                <li>Family Day</li>
                <li>Good Friday</li>
                <li>Victoria Day</li>
                <li>Canada Day</li>
                <li>Labour Day</li>
                <li>Thanksgiving Day</li>
                <li>Christmas Day & Boxing Day</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-8 rounded-[2rem] flex flex-col gap-4">
              <AlertCircle size={32} className="text-accent" />
              <h3 className="text-2xl font-bold text-foreground">Late Pick-up Policy</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">
                We understand that delays happen. However, to respect our educators' schedules, a late fee of <strong className="text-foreground">$1 per minute</strong> is applied after closing time.
              </p>
              <p className="text-muted-foreground font-medium leading-relaxed">
                Please notify us immediately if you anticipate being late so we can reassure your child and make necessary arrangements.
              </p>
            </div>
          </div>

        </div>
      </section>

      <CTASection />
    </div>
  );
}