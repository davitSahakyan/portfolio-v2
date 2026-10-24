import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fonts and photo for the wedding link previews are read with fs, which tracing can't see
  outputFileTracingIncludes: {
    '/davittatevwedding/invitation/**/*': ['./src/app/(wedding)/davittatevwedding/_og/**/*'],
  },
};

export default nextConfig;
