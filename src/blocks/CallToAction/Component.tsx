import type React from "react";

import type { Page } from "@/payload-types";

import RichText from "@/components/RichText";
import { CMSLink } from "@/components/Link";

type Props = Extract<Page["layout"][0], { blockType: "cta" }>;

export const CallToActionBlock: React.FC<
  Props & {
    id?: string;
  }
> = ({ links, richText }) => {
  return (
    <div className="container">
      <div className="flex flex-col gap-8 rounded border border-border bg-card p-4 md:flex-row md:items-center md:justify-between">
        <div className="flex max-w-[48rem] items-center">
          {richText && (
            <RichText
              className="mb-0"
              content={richText}
              enableGutter={false}
            />
          )}
        </div>
        <div className="flex flex-col gap-8">
          {(links || []).map((nav, i) => {
            return <CMSLink key={nav.id} size="lg" {...nav.link} />;
          })}
        </div>
      </div>
    </div>
  );
};
