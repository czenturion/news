export type ArticlesT = {
    articles: ArticleT[]
    source: string
    status: string
}

export type ArticleT = {
    source: {
        id: string
        name: string
    }
    author: string
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: string
    content: string
}

export type HeadlinesT = {
    status: string
    sources: HeadlineT[]
}

export type HeadlineT = {
    id: string
    name: string
    description: string
    url: string
    category: string
    language: string
    country: string
}


export type OptionsT = Record<string, string | null> | undefined

export type Callback<T> = (data?: T) => void;