import { Spinner } from "@/components/ui/spinner";

export const AuthLoadingView = () => {
  return (
    <div className="fixed inset-0 grid place-items-center bg-background">
      <Spinner className="size-6 text-ring" />
    </div>
  );
};
