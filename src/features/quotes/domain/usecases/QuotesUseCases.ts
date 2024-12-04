import { Quote } from '../models/Quote'

export interface QuotesUseCases {
    getQuotes(): Promise<Quote[]>
    getQuoteById(id: string): Promise<Quote | undefined>
}