import { getNewsSearch } from '@/api'
import { removeDuplicateData } from '@/utils'
import Article from '../components/Article'

const LifeStyle = async() => {
    const newsLifeStyle = await getNewsSearch("lifeStyle")
    const filterArticles = removeDuplicateData(newsLifeStyle)

  return (
    <div className='w-[700px]'>
        {filterArticles.map((article,idx) =>(
            <div key={`${article?.title}-${idx}`}>
                <Article data={article} />
            </div>    
        ))}
    </div>
  )
}

export default LifeStyle