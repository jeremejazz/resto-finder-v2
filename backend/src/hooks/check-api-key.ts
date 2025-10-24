import { FastifyReply, FastifyRequest } from "fastify";

const checkApiKey = async (request: FastifyRequest | any, reply: FastifyReply): Promise<void> => {

  const secretApiKey = process.env.API_KEY;

  // Get the API key from the request headers
 
  const clientApiKey = request.query['apiKey'];


  // If the key is missing or incorrect, send a 401 Unauthorized response
  if (!clientApiKey || clientApiKey !== secretApiKey) {
    // The 'return' is important to stop the request from proceeding
    return reply.code(401).send({ error: 'Unauthorized: Invalid API Key' });
  }
}

export default checkApiKey;