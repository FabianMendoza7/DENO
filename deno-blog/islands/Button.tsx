import { JSX } from "preact";
import { useState } from "preact/hooks";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  const [like, setLike] = useState(false);

  return (
    <button
      onClick={() => setLike(!like)}
      {...props}
      class="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors"
    >
      {like ? "❤️ Dejar de gustarme" : "🖤 Me gusta!"}
    </button>
  );
}
