import config from '../../../../config/config'
import { Quote } from '../../domain/models/Quote'
import { QuotesUseCases } from '../../domain/usecases/QuotesUseCases'

export class QuotesService implements QuotesUseCases {
    private urlApi: string = `${config.api.baseUrl}`

    async getQuotes(): Promise<Quote[]> {
        const response = await fetch(`${(this.urlApi)}/quotes`)
        if (!response.ok) {
            throw new Error(`Failed to fetch quotes: ${response.statusText}`)
        }

        return await response.json()
    }

    async getQuoteById(id: string): Promise<Quote | undefined> {
        const response = await fetch(`${(this.urlApi)}/quotes/${id}`)
        if (!response.ok) {
            throw new Error(`Failed to fetch quote with id ${id}`)
        }

        return await response.json()
    }
}
