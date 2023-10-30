export const getNewsTopHeadlines =async () => {
    const newsData = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=aaa05c224f824f139808ee4c88d61bb6`,{cache:"no-store"})

    return newsData.json()

}

export const getNewsSearch =async (keyword: string) => {
    const newsData = await fetch(`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=aaa05c224f824f139808ee4c88d61bb6&q=${keyword}&pageSize=10`,{cache:"no-store"})
   

    return newsData.json()

}