import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import MyIsland from "../islands/MyIsland.tsx";
import OtherIsland from "../islands/OtherIsland.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to DENO `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <Counter count={count} />
        <MyIsland>
        <p>This text is rendered on the server</p>
          <OtherIsland>
            Hi
          </OtherIsland>
        </MyIsland>
      </div>
    </>
  );
}
