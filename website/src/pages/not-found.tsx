import SEO from "@/components/SEO";
import PageHeader from "@/components/site/PageHeader";
import ButtonLink from "@/components/site/ButtonLink";
import { routes } from "@/data/site";

export default function NotFound() {
  return (
    <div>
      <SEO title="Page not found" description="This page could not be found." path="/404" />
      <PageHeader eyebrow="404" title="We couldn't find that *page*." lead="It may have moved. Let's get you back on track.">
        <ButtonLink href={routes.home}>Back to home</ButtonLink>
      </PageHeader>
      <div className="pb-24" />
    </div>
  );
}
