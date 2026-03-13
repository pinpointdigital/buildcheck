import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4">
      <PageContainer width="narrow">
        <h1 className="font-headline text-h1 font-bold text-navy-800 text-center">
          Page not found
        </h1>
        <p className="mt-4 text-body text-[var(--color-text-secondary)] text-center max-w-[var(--container-reading)] mx-auto">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href={ROUTES.home} variant="primary">
            Back to home
          </Button>
        </div>
      </PageContainer>
    </div>
  );
}
