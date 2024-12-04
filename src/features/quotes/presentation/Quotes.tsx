import { useEffect } from 'react'
import { getQuotes } from '../infrastructure/slices/quotesSlice'
import { Quote } from '../domain/models/Quote'

import { RootState } from '../../../redux/store'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { QuotesService } from '../application/services/QuotesService'

export const Quotes = () => {
    const quotes = useAppSelector((state: RootState) => state.quotes)
    const dispatch = useAppDispatch()

    useEffect(() => {
        (async () => {
            const quotesService = new QuotesService()
            const quotesList = await quotesService.getQuotes()
            dispatch(getQuotes(quotesList))
        })()
    }, [dispatch])

    return (
        <div>
            {quotes.map(({ id, quote, author }: Quote) => (
                <blockquote key={id}>
                    &ldquo;{quote}&ldquo;
                    <footer>
                        <cite>{author}</cite>
                    </footer>
                </blockquote>
            ))}
        </div>
    )
}
