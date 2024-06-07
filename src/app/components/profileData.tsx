interface Props {
  data?: string;
  label: string;
}

export default function ProfileData({ data, label }: Readonly<Props>) {
  return (
    <div className="flex items-center flex-col select-none hover:opacity-40 transition-all duration-200 cursor-pointer h-full py-4 justify-end">
      <h1 className="text-sm font-semibold text-title">{data ?? 0}</h1>
      <span className="text-sm text-light">{label}</span>
    </div>
  );
}
