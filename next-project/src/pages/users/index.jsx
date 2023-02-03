import { GET } from "@/http/http";
import Link from "next/link";

export default function Users({ users }) {
  return (
    <div>
      <h1>Pagina users</h1>
      {users &&
        users.map((user) => (
          <Link href={"users/" + user.id}> {user.firstName}</Link>
        ))}
    </div>
  );
}

export async function getStaticProps() {
  const data = await GET("users");
  return {
    props: {
      users: data.users,
    },
  };
}
