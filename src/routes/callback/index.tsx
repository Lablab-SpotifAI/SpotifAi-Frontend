import { component$ } from "@builder.io/qwik";
import { useAuthSession } from "../plugin@auth";

export default component$(() => {
  const session = useAuthSession();
  return (
    <>
      <p>welcome {session.value?.user?.name}</p>
    </>
  );
});
