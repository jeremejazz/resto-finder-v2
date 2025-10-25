import { FastifyReply, FastifyRequest } from "fastify"
import * as searchService from './search.service';

export interface SearchQuery {
    text: string;
    type: string;
}
const searchController = async ( request: FastifyRequest<{ Querystring: SearchQuery }>, reply: FastifyReply): Promise<any> => {
    const text = request.query.text || '';
    const type = request.query.type || '';
    const results = await searchService.searchGoogle(text, type);
    return {
        data: results
    };
};

export default searchController;