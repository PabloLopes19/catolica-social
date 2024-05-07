interface Props {
  user: User;
}

export default function ProfileContainer({ user }: Props) {
  return (
    <div className="flex flex-col gap-3 p-10">
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold text-title">{user.name}</h1>
        <span className="text-sm text-light">@{user.username}</span>
      </div>
    </div>
  );
}
