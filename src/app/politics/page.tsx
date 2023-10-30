import { getNewsSearch } from '@/api'
import { removeDuplicateData } from '@/utils'
import Article from '../components/Article'

const Politics = async() => {
    const newsPolitics = await getNewsSearch("politics")
    const filterArticles = removeDuplicateData(newsPolitics)

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

export default Politics