import SEO from "@/components/SEO";
import PageHeader from "@/components/site/PageHeader";
import { Reveal } from "@/components/motion/Motion";
import { site } from "@/data/site";

const groups = [
  { title: "Montessori daycare", rows: site.serviceHours.daycare },
  { title: "Piano lessons", rows: site.serviceHours.lessons },
  { title: "Private tutoring", rows: site.serviceHours.lessons },
];

export default function HoursPage() {
  return (
    <div>
      <SEO
        title="Hours"
        description="Daycare runs Monday to Friday, 7 am to 6 pm. Piano lessons and tutoring also run Saturday and Sunday, 9 am to 6 pm."
        path="/hours"
      />
      <PageHeader eyebrow="Hours" title="Hours for each *program*." />
      <section className="shell pb-24 sm:pb-32">
        <div className="flex max-w-3xl flex-col gap-12">
          {groups.map((group) => (
            <Reveal key={group.title}>
              <h2 className="font-serif text-3xl tracking-tight text-ink">{group.title}</h2>
              <div className="mt-4 divide-y divide-forest-900/10 border-y border-forest-900/10">
                {group.rows.map(({ day, hours }) => (
                  <div key={day} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="text-ink-soft">{day}</span>
                    <span className="text-lg font-semibold text-forest-700">{hours}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
