import { FastifyPluginAsync } from 'fastify'
import checkApiKey from '../../../../hooks/check-api-key';

const search: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', { preHandler: [checkApiKey] }, async function (request, reply) {

    console.log('Search route accessed');
    return 'GET Search'
  })
}

export default search
