export default function ProgramCard({ title, ageGroup, description, icon: Icon, color }: { title: string, ageGroup: string, description: string, icon: any, color?: string }) {
  return (
    <div className="bg-card rounded-[2rem] p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300 flex flex-col items-start gap-4">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${color || 'bg-primary/10 text-primary'}`}>
        <Icon className="w-8 h-8" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
        <p className="text-sm font-semibold text-accent mb-3">{ageGroup}</p>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}