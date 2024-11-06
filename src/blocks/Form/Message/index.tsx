import RichText from "@/components/RichText";
import type React from "react";

import { Width } from "../Width";

export const Message: React.FC = ({
  message,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
}: { message: Record<string, any> }) => {
  return (
    <Width className="my-12" width="100">
      {message && <RichText content={message} />}
    </Width>
  );
};
