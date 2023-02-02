import { GET } from "@/http/http";

export default function Users({ users }) {
  return (
    <div>
      <h1>Pagina users</h1>
      {users && users.map((user) => <p> {user.firstName}</p>)}
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
