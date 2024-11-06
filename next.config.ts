import { withPayload } from "@payloadcms/next/withPayload";

import redirects from "./redirects";
import type { NextConfig } from "next";
import type { RemotePattern } from "next/dist/shared/lib/image-config.js";

const NEXT_PUBLIC_SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  images: {
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL /* 'https://example.com' */].map((item) => {
        const url = new URL(item);

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(":", ""),
        } as RemotePattern;
      }),
    ],
  },
  reactStrictMode: true,
  redirects,
};

export default withPayload(nextConfig);
