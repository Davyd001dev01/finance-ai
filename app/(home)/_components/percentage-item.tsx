import { ReactNode } from "react";

interface PercentageItemProps {
  icon: ReactNode;
  title: string;
  value: number;
}

export default function PercentageItem({
  icon,
  title,
  value,
}: PercentageItemProps) {
  return (
    <div className="flex items-center justify-between">
      {/*ICON*/}
      <div className="flex items-center gap-2">
        {icon}
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
      {/*Value*/}
      <p className="text-sm font-bold">{value}%</p>
    </div>
  );
}
