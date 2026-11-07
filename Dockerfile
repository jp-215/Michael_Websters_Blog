
# ---- Base: Node 22 (matches @types/node 22) ----
FROM node:22-slim AS base
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app

# ---- Dependencies: installed from the lockfile only ----
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# ---- Build the Next.js standalone bundle ----
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# NEXT_PUBLIC_* values are inlined into the browser bundle at build time, so they
# are passed as build args. They are not secret.
ARG NEXT_PUBLIC_EMAILJS_SERVICE_ID
ARG NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
ARG NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
ENV NEXT_PUBLIC_EMAILJS_SERVICE_ID=$NEXT_PUBLIC_EMAILJS_SERVICE_ID \
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=$NEXT_PUBLIC_EMAILJS_TEMPLATE_ID \
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=$NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

# BASEHUB_TOKEN is needed during the build (static post pages query BaseHub).
# It is used only for this RUN and is not set as an ENV, so it is not present
# at runtime. Railway passes its service variables as build args automatically.
ARG BASEHUB_TOKEN
RUN BASEHUB_TOKEN="$BASEHUB_TOKEN" npm run build

# ---- Runtime: minimal image, non-root user ----
FROM base AS runner
ENV NODE_ENV=production \
    HOSTNAME=0.0.0.0 \
    PORT=3000

RUN groupadd --system --gid 1001 nodejs \
 && useradd --system --uid 1001 --gid nodejs nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

# Railway injects PORT at runtime; server.js reads it.
CMD ["node", "server.js"]
