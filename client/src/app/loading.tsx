import { Loader2 } from 'lucide-react';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 bg-background">
      <Loader2 className="animate-spin" />
    </div>
  );
}
