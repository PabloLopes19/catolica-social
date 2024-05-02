import UserItem from "./userItem";

interface Props {
  title?: string;
  content: User[];
}

export default function ContentSidebar(props: Readonly<Props>) {
  return (
    <div className="hidden lg:flex h-full w-full max-w-[300px] border-l-2 border-border flex-col">
      <div className="flex items-center p-5">
        {props.title && (
          <h1 className="text-title font-semibold">{props.title}</h1>
        )}
      </div>

      <div className="flex flex-col h-[calc(100vh-144px)] overflow-x-auto">
        {props.content.map((user) => (
          <UserItem
            name={user.name}
            username={user.username}
            to={`/user/${user.username}`}
            key={user.id}
          />
        ))}
      </div>
    </div>
  );
}
