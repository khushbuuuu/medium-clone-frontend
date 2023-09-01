import Image from 'next/image'
import Author from '../static/author1.jpeg'
import {FiBookmark} from 'react-icons/fi'
import Posti from '../static/postcard1.webp'
import Link from 'next/link'

const styles = {
    wrapper:`flex max-w-[46rem] h-[10rem] gap-[1rem]  `,
    authorName:`font-bold text-xs`,
    authorContainer:`flex gap-[0.4rem]`,
    authorImageContainer:`grid plece-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
    authorImage:`object-cover `,
    title:`font-bold text-2xl`,
    briefing:`text-[#787878]`,
    detailsContainer:`flex items-center justify-between text-[#787878]`,
    articleDetails:`my-2 text-[0.8rem]`,
    category:`bg-[#F2F3F2] p-1 rounded-full`,
    bookmarkContainer:`cursor-pointer`,
    postDetails:`flex-[2.5rem] flex flex-col`,

}
const Postcard = () => {
    return (
        <Link href={`/post/123`}>
        <div className={styles.wrapper}>
        <div className={styles.postDetails}>
        <div className={styles.authorContainer}>

        <div className={styles.authorImageContainer}>
            <Image
            src={Author}
            className={styles.authorImage}
            
            />
        </div>
        <div className={styles.authorName}>Kim Witten, PhD</div>
        </div>
        <h1 className={styles.title}>Stop Trying to Manage Your Time</h1>
        <div className={styles.briefing}>Do this instead</div>
        <div className={styles.detailsContainer}><span className={styles.articleDetails}>Aug 22
·
6 min read
·
<span className={styles.category}>Productivity</span>
</span>
<span className={styles.bookmarkContainer}>
    <FiBookmark className='h-5 w-5'/>
</span>
         </div>
         
    </div>
    <div className={styles.thumbnailContainer}>
            <Image
            src={Posti}
            
            style={{ objectFit:'cover' , height:"140px", width:"200px"}}/>

        </div>
    </div>
    </Link>




    )

}

export default Postcard