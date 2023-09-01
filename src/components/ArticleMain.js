import Image from "next/image"
import Qazi from '../static/qazi.jpg'
import { AiFillPlayCircle } from "react-icons/ai"
import {IoLogoTwitter} from 'react-icons/io'
import {FaFacebook} from 'react-icons/fa'
import {GrLinkedin} from 'react-icons/gr'
import { BiBookmarks } from "react-icons/bi"
import Banner from '../static/postcard1.webp'

import { HiOutlineLink } from "react-icons/hi"
import { FiMoreHorizontal } from "react-icons/fi"
const styles = {
    content:`h-screen overflow-scroll w-full p-[2rem]`,
    postHeaderContainer:`flex justify-between items-center mt-[2.2rem] mb-[1.2rem]`,
    authorContainer:`flex gap-[1rem]`,
    authorProfileImageContainer:`h-[3rem] w-[3rem] grid center rounded-full overflow-hidden `,
    column:`flex-1 flex flex-col justify-center`,
    postDetails:`flex gap-[0.2rem] text-[#787878]`,
    listenButton:`flex items-center gap-[.2rem] text-[#1A8917]`,
    social:`flex gap-[1rem] text-[#787878] cursor-pointer`,
    space:`w-[.5rem]`,
    bannerConatiner:` w-full grid center overflow-hidden mb-[2rem]`,
    articleMainContainer:`flex flex-col gap-[1rem]`,
    image:` object-cover w-full `,
    title:`fonr-bold text-3xl`,
    subtitle:`fonr-mediumSerifItalic text-[1.4rem] text-[#292929]`,
    articleText:`font-mediumSerif text-[1.4rem] text-[#292929]`,

    wrapper: `flex items-center justify-center flex-[3] border-l border-r`,


}
const ArticleMain = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.postHeaderContainer}>
                   <div className={styles.authorContainer}>
                    <div className={styles.authorProfileImageContainer}>
                        <Image
                        className={'object-cover'}
                        src={Qazi}
                        width={100}
                        height={100}/>
                    </div>
                    <div className={styles.column}>
                        <div>Author Name</div>
                        <div className={styles.postDetails}>
                         <span> June 15 · 7 min read ·</span><span className={styles.listenButton}>
                            <AiFillPlayCircle/> Listen
                         </span>   
                        </div>

                    </div>
                    </div> 
                    <div className={styles.social}>
                        <IoLogoTwitter/>
                        <FaFacebook/>
                        <GrLinkedin/>
                        <HiOutlineLink/>
                        <div className={styles.space}/>
                        <BiBookmarks/>
                        <FiMoreHorizontal/>


                    </div>
                </div>
                <div className={styles.articleMainContainer}>
                    <div className={styles.bannerConatiner}>
                        <Image
                        className={styles.image}
                        src={Banner}
                       
                        />

                    </div>
                    <h1 className={styles.title}>Stop Trying to Manage Your Time</h1>
                    <h4 className={styles.subtitle}>
                        <div> Author Name, June 15, 2022</div>
                        <div> Brief: Do this instead</div>
                    </h4>
                    <div className={styles.articleText}>
                    One of the biggest red herrings in most the productivity advice I see has to do with the relentless pursuit to control, wrangle, seek, carve out, or otherwise manage time. Manage your energy, not your time. If you do that, time works itself out.Smash your day…start with the clock
The new gurus suggest we should be waking up at 4am, undertaking elaborate morning routines, and twisting ourselves into intermittently-timed keto-friendly pretzels to tackle our to-dos in a 4-hour workday. As a result, people are literally exhausting themselves to make it all fit, getting more and more tired as they struggle.
What if we started responding more to the internal “I’m tired” signals over the external clock and calendar signals?
Here are small ways we can listen and respond to the things we actually need to be more productive.
Tiny actions to manage your energy
I’m always amazed how the smallest splinter at the tip of your finger can divert so much focus and can cause such suffering. And removing it brings about immense relief. That’s the power of small changes.
Eliminating various energy drains of the day can be similarly rewarding. Try some of these tactics for surprisingly big energy gains:
If you’re feeling tired, shorten a call by 5–15 minutes. Think of it as giving yourself (and others) a small gift of self-care; permission to attend to needs, clear headspace, and prepare for the next thing. Or to simply sit and do nothing.
Put off a task for later, when you know it’ll be easier on you. For example, if doing all three errands means enduring soul-crushing traffic, delay one (or all) of them.
Or do the thing, but in a way that gives you a bit more energy — with helpful sounds, in a nicer space, wearing comfier clothing, etc.
Look around your space and make one small improvement that will either reduce energy drain or increase energy-giving. This could be removing a dish, closing a window (on screen or in person), getting more comfortable, or whatever else you come up with! There are no wrong answers…

                    </div>

                </div>


            </div>
        </div>


    )
}
export default ArticleMain