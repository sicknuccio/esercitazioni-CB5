import { useRouter } from "next/router";

export default function () {
  const router = useRouter();
  const { userId } = router.query;
  return (
    <div>
      <h2>{userId}</h2>
    </div>
  );
}
