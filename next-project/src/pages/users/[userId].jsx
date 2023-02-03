import { GET } from "@/http/http";
import { useRouter } from "next/router";

export default function ({ user }) {
  const router = useRouter();

  return (
    <div>
      <h1>{user.firstName}</h1>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/users");
  const users = await res.json();
  const paths = users.users.map((user) => ({
    params: { userId: user.id + "" },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { userId } = params;
  const data = await GET("users/" + userId);
  return {
    props: {
      user: data,
    },
  };
}
