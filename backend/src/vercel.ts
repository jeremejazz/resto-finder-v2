import path from 'node:path'
import type { VercelRequest, VercelResponse } from '@vercel/node'
import Fastify from 'fastify'
import app from './app'

// Reuse the Fastify instance across invocations (kept warm by Vercel)
let fastify = (global as any).__vercel_fastify as ReturnType<typeof Fastify> | undefined

if (!fastify) {
  fastify = Fastify({
    logger: true
  })

  // Ensure static assets are resolvable at runtime inside the serverless function
  // We include `backend/public/**` via vercel.json and point the app to that directory
  process.env.PUBLIC_DIR = path.join(process.cwd(), 'backend', 'public')

  // Register the main application plugin
  fastify.register(app)

  ;(global as any).__vercel_fastify = fastify
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  await fastify!.ready()
  // Delegate the request to Fastify's underlying Node server
  fastify!.server.emit('request', req, res)
}
