import SEO from "@/components/SEO";
import PageHeader from "@/components/site/PageHeader";
import ButtonLink from "@/components/site/ButtonLink";
import { routes } from "@/data/site";

export default function ParentalGuidePage() {
  return (
    <div>
      <SEO
        title="Parental guide"
        description="Resources for families at Little Genius Island are coming soon."
        path="/guide"
      />
      <PageHeader
        eyebrow="Parental guide"
        title="Coming *soon*."
        lead="We're preparing helpful resources for your family's journey at Little Genius Island."
      >
        <ButtonLink href={routes.home}>Back to home</ButtonLink>
      </PageHeader>
      <div className="pb-24" />
    </div>
  );
}
