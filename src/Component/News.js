import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {


    article=[
        {
          "source": {
            "id": "engadget",
            "name": "Engadget"
          },
          "author": "Lawrence Bonk",
          "title": "Apple bans Epic’s developer account and calls the company ‘verifiably untrustworthy’",
          "description": "Epic’s plan to launch its own iOS storefront\r\n in the EU could be in serious jeopardy. Apple terminated the company's developer account just one day after iOS 17.4 finally allowed\r\n for third-party app stores in Europe to comply with the Digital Markets Act (…",
          "url": "https://www.engadget.com/apple-bans-epics-developer-account-and-calls-the-company-verifiably-untrustworthy-191316210.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/NuKfhNWD_eWl1ysHi9ZpeQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2021-11/018296a0-4238-11ec-b79f-72319adfd299",
          "publishedAt": "2024-03-06T19:13:16Z",
          "content": "Epics plan to launch its own iOS storefront\r\n in the EU could be in serious jeopardy. Apple terminated the company's developer account just one day after iOS 17.4 finally allowed\r\n for third-party ap… [+5021 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Kris Holt",
          "title": "Beats Studio Buds + are on sale for a record-low price",
          "description": "Those who are looking to upgrade their earbuds could do much worse than picking up a pair of Beats Studio Buds +. We reckon they're the best Beats option for most people. In addition, they give Apple fans who don't necessarily love the stems of AirPods but wo…",
          "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_10923374-f3af-45c8-87b1-111cb036e624",
          "urlToImage": null,
          "publishedAt": "2024-03-06T15:57:42Z",
          "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 241 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Gizmodo.com"
          },
          "author": "Maxwell Zeff",
          "title": "Apple Crushes Epic’s App Store Dreams Over the CEO’s Petty Tweets",
          "description": "There’s petty, and then there’s Apple’s beef with Epic Games. Apple terminated Epic’s developer account on Wednesday, blocking the company’s ability to make its own Epic Games Store for iOS. Why? All because CEO Tim Sweeney wouldn’t stop dunking on Apple’s un…",
          "url": "https://gizmodo.com/apple-crushes-epics-app-store-dreams-ceo-s-petty-tweets-1851312958",
          "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/a7123879ad961f10d91af40fcd5b8b85.jpg",
          "publishedAt": "2024-03-06T19:30:00Z",
          "content": "Theres petty, and then theres Apples beef with Epic Games. Apple terminated Epics developer account on Wednesday, blocking the companys ability to make its own Epic Games Store for iOS. Why? All beca… [+2426 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Gizmodo.com"
          },
          "author": "Florence Ion",
          "title": "What You Really Want From the iPhone 16",
          "description": "There is no iPhone 16 yet; it will not be until later this year. But people have their wishlists because when there’s talk of a possible update to their daily carry on the horizon, it inspires them to think of where they’d want to spend their money.Read more.…",
          "url": "https://gizmodo.com/what-you-want-from-a-iphone-16-1851310618",
          "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/eb9d94e543e112e309ecc259b7763afd.jpg",
          "publishedAt": "2024-03-06T15:25:00Z",
          "content": "There is no iPhone 16 yet; it will not be until later this year. But people have their wishlists because when theres talk of a possible update to their daily carry on the horizon, it inspires them to… [+3847 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Android Central"
          },
          "author": "bradypsnyder@gmail.com (Brady Snyder)",
          "title": "Apple Music won't work on rooted Android devices, following Google's footsteps",
          "description": "Following Google's move to block RCS messages from sending on rooted Android phones, Apple has taken similar measures with Apple Music.",
          "url": "https://www.androidcentral.com/apps-software/apple-music-wont-work-on-rooted-android-devices-following-googles-footsteps",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/EdH3ZAKYo5zNEs8LxVMKHg-1200-80.jpg",
          "publishedAt": "2024-03-06T15:15:16Z",
          "content": "<ul><li>The Apple Music app for Android no longer works on rooted devices; instead, it displays an error message.</li><li>Some users have already found workarounds, like the MagiskHide tool, that wil… [+2844 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Android Central"
          },
          "author": "andrew.myrick@futurenet.com (Andrew Myrick)",
          "title": "Why the hell would Google promise seven years of updates?",
          "description": "Another bout of class-action lawsuits against Apple has us wondering if this is what the future holds for Google.",
          "url": "https://www.androidcentral.com/apps-software/why-would-google-promise-seven-years-of-updates",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/AriHAnbWjHYfa6q4QWWvVG-1200-80.jpg",
          "publishedAt": "2024-03-06T09:00:16Z",
          "content": "(Image credit: Nicholas Sutrich / Android Central)\r\nBeyond the Alphabet is a weekly column that focuses on the tech world both inside and out of the confines of Mountain View.\r\nApple recently settled… [+6254 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Android Central"
          },
          "author": "bradypsnyder@gmail.com (Brady Snyder)",
          "title": "Early OnePlus 13 leaks point to redesign and upgraded fingerprint sensor",
          "description": "The new OnePlus 12 launched not too long ago, but early OnePlus 13 leaks indicate a redesign and improved fingerprint sensor might be on the way.",
          "url": "https://www.androidcentral.com/phones/early-oneplus-13-leaks-point-to-redesign-and-upgraded-fingerprint-sensor",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/XfPqPpn49uJuEm37hjAqQF-1200-80.jpg",
          "publishedAt": "2024-03-06T16:02:05Z",
          "content": "<ul><li>OnePlus just released its newest flagship smartphones, the OnePlus 12 and OnePlus 12R, but early OnePlus 13 leaks are already popping up. </li><li>A leak from Digital Chat Station says that a… [+2789 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "MacRumors"
          },
          "author": "Hartley Charlton",
          "title": "Apple Stores Now Stock 14-Inch M3 MacBook Pro With 16GB of RAM",
          "description": "Apple retail stores now stock a configuration of the entry-level, M3 MacBook Pro with 16GB of unified memory.\n\n\n\n\n\nThe configuration, spotted by French website Consomac, is now highlighted as a standard option on Apple's website for $1,999. While the configur…",
          "url": "https://www.macrumors.com/2024/03/06/apple-stores-now-stock-16gb-macbook-pro/",
          "urlToImage": "https://images.macrumors.com/t/xEZPSDZ4DkLA0Np99FN3SiW8QPE=/1600x/article-new/2024/03/new-16-gb-macbook-pro-configuration.jpg",
          "publishedAt": "2024-03-06T14:30:05Z",
          "content": "Apple retail stores now stock a configuration of the entry-level, M3 MacBook Pro with 16GB of unified memory.\r\nThe configuration, spotted by French website Consomac, is now highlighted as a standard … [+468 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNET"
          },
          "author": "Oliver Haslam",
          "title": "Tired of That Weird Little Apple TV Remote? Upgrade to This $24 Alternative - CNET",
          "description": "The Apple TV streaming boxes are great, but the remote? Not so much. If you're lucky, you've already lost it -- so you have an excuse to buy this one instead.",
          "url": "https://www.cnet.com/deals/tired-of-that-weird-little-apple-tv-remote-upgrade-to-this-24-alternative-instead/",
          "urlToImage": "https://www.cnet.com/a/img/resize/2e902c6d77538c2a7f255c08ea236e6044a6ff4e/hub/2024/01/23/7730069b-1bf9-44ac-bbb9-fdf58d5ab3ec/function101-apple-tv-remote.jpg?auto=webp&fit=crop&height=675&width=1200",
          "publishedAt": "2024-03-06T13:43:00Z",
          "content": "We're pretty confident in saying that the Apple TV 4K is one of the best streaming devices we've tested, and it offers many features that you can't get from competing products. But as great as it is,… [+1370 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNET"
          },
          "author": "Katie Collins",
          "title": "On-Device AI Is a Whole New Way of Experiencing Artificial Intelligence - CNET",
          "description": "At MWC 2024, I saw firsthand how AI is fundamentally reshaping current and future devices, from phones to robots.",
          "url": "https://www.cnet.com/tech/mobile/on-device-ai-is-a-whole-new-way-of-experiencing-artificial-intelligence/",
          "urlToImage": "https://www.cnet.com/a/img/resize/822457af6e84ddff6ee97f3197f44c06c6c9cc48/hub/2024/02/29/868ccae7-9d02-4c1e-8bf5-15130fe26215/v-stella-ai-integrit-06.jpg?auto=webp&fit=crop&height=675&width=1200",
          "publishedAt": "2024-03-06T21:42:16Z",
          "content": "At Mobile World Congress last week, the show floor was abuzz with AI. It was the same at CES two months earlier: The biggest theme of the biggest consumer tech show was that AI suddenly seemed to be … [+9614 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "MacRumors"
          },
          "author": "Joe Rossignol",
          "title": "Apple Changes Trade-In Values for iPhones, iPads, and Apple Watches",
          "description": "Apple today adjusted its estimated trade-in values for select iPhone, iPad, and Apple Watch models in the U.S., with the changes reflected on its website.\n\n\n\n\n\nApple slightly increased trade-in values for the iPhone 14 Pro Max, second-generation iPhone SE, Ap…",
          "url": "https://www.macrumors.com/2024/03/06/apple-adjusts-trade-in-values-march-2024/",
          "urlToImage": "https://images.macrumors.com/t/Qt_Jt5VhVFRnHs0-EqgV1suAQnY=/1600x/article-new/2023/06/iPhone-Trade-In-Box.jpg",
          "publishedAt": "2024-03-06T16:42:39Z",
          "content": "Apple today adjusted its estimated trade-in values for select iPhone, iPad, and Apple Watch models in the U.S., with the changes reflected on its website.\r\nApple slightly increased trade-in values fo… [+1041 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "MacRumors"
          },
          "author": "Joe Rossignol",
          "title": "Apple Explains Why It Terminated Epic's Latest Developer Account",
          "description": "Apple today said it has terminated Epic Games Sweden's developer account worldwide due to the game developer's pattern of untrustworthy behavior.\n\n\n\n\n\nApple shared the following statement with MacRumors:Epic's egregious breach of its contractual obligations t…",
          "url": "https://www.macrumors.com/2024/03/06/apple-explains-terminating-epic-games-account/",
          "urlToImage": "https://images.macrumors.com/t/-CV6eWobN2rZ-9lCcbnibyTCe2I=/1794x/article-new/2021/05/app-store-blue-banner-epic-1.jpg",
          "publishedAt": "2024-03-06T17:40:49Z",
          "content": "Apple today said it has terminated Epic Games Sweden's developer account worldwide due to the game developer's pattern of untrustworthy behavior.\r\nApple shared the following statement with MacRumors:… [+1090 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "MacRumors"
          },
          "author": "Joe Rossignol",
          "title": "Apple Car's Decade of Development and 'Failure' Detailed in New Report",
          "description": "Bloomberg's Mark Gurman and Drake Bennett today published an in-depth report examining Apple's decade-long attempt at creating an electric vehicle. The project was reportedly canceled last week after many challenges and setbacks.\n\n\n\n\n\nThe report provides a va…",
          "url": "https://www.macrumors.com/2024/03/06/apple-car-history-bloomberg-report/",
          "urlToImage": "https://images.macrumors.com/t/HFSNzdZ3uIDcR_H3unjaFQDN4Ro=/2500x/article-new/2022/03/Apple-car-wheel-icon-Kevin-Lynch-feature-blue-revamp.jpg",
          "publishedAt": "2024-03-06T22:15:47Z",
          "content": "Bloomberg's Mark Gurman and Drake Bennett today published an in-depth report examining Apple's decade-long attempt at creating an electric vehicle. The project was reportedly canceled last week after… [+155 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "MacRumors"
          },
          "author": "Juli Clover",
          "title": "Apple Releases Safari Technology Preview 190 With Bug Fixes and Performance Improvements",
          "description": "Apple today released a new update for Safari Technology Preview, the experimental browser Apple first introduced in March 2016. Apple designed the ‌Safari Technology Preview‌ to test features that may be introduced into future release versions of Safari.\n\n\n\n\n…",
          "url": "https://www.macrumors.com/2024/03/06/apple-releases-safari-technology-preview-190/",
          "urlToImage": "https://images.macrumors.com/t/jHD1aGfXq86Ln_kfzTyWIF68vOo=/2368x/article-new/2021/02/Safari-Technology-Preview-Feature.jpg",
          "publishedAt": "2024-03-06T23:23:21Z",
          "content": "Apple today released a new update for Safari Technology Preview, the experimental browser Apple first introduced in March 2016. Apple designed the ‌Safari Technology Preview‌ to test features that ma… [+956 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "MacRumors"
          },
          "author": "Tim Hardwick",
          "title": "Alternative iOS App Stores Only Work for 'Grace Period' When Traveling Outside of EU",
          "description": "With the release of iOS 17.4, iPhone users in the European Union can access third-party app stores, but Apple warns that EU users traveling outside of the bloc will only have a \"grace period\" before some features stop working altogether when they're away.\n\n\n\n…",
          "url": "https://www.macrumors.com/2024/03/06/alternative-ios-app-stores-eu-grace-period/",
          "urlToImage": "https://images.macrumors.com/t/WWB3cN-4gbZyF0bdFfAhhqJsjrw=/2500x/article-new/2024/01/App-Store-vs-EU-Feature-2.jpg",
          "publishedAt": "2024-03-06T12:22:29Z",
          "content": "With the release of iOS 17.4, iPhone users in the European Union can access third-party app stores, but Apple warns that EU users traveling outside of the bloc will only have a \"grace period\" before … [+2309 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "MacRumors"
          },
          "author": "Hartley Charlton",
          "title": "MacBook Air vs. MacBook Pro Buyer's Guide: 30+ Differences Compared",
          "description": "Apple recently updated the MacBook Air by adding the M3 chip, so how do the new machines compare to its latest MacBook Pro models?\n\n\n\n\n\nDespite now being similar in appearance, the ‌MacBook Air‌ and the MacBook Pro are very different devices, so should you co…",
          "url": "https://www.macrumors.com/guide/macbook-air-vs-macbook-pro/",
          "urlToImage": "https://images.macrumors.com/t/YY5gy3rqOXCTJ-kepvN4J3FK7jI=/2507x/article-new/2023/01/M2-MBA-vs-M2-MacBook-Pro-Buyers-Guide-Feature.jpg",
          "publishedAt": "2024-03-06T17:29:00Z",
          "content": "Apple recently updated the MacBook Air by adding the M3 chip, so how do the new machines compare to its latest MacBook Pro models?\r\nDespite now being similar in appearance, the ‌MacBook Air‌ and the … [+15555 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NPR"
          },
          "author": "NPR",
          "title": "Haley's Out: Can Trump Win Her Supporters?",
          "description": "Nikki Haley's announcement that she was suspending her campaign for president didn't come as a surprise. She's trailed front-runner Donald Trump in all but two Republican primary contests so far. <br/><br/>Haley did manage to sway some Republican voters away …",
          "url": "https://www.npr.org/2024/03/06/1198910635/haleys-out-can-trump-win-her-supporters",
          "urlToImage": "https://media.npr.org/assets/img/2024/03/06/gettyimages-2063286864_wide-5443e9ba9d9f0ecf95737fe4d37e08fd716a4202-s1400-c100.jpg",
          "publishedAt": "2024-03-06T22:46:40Z",
          "content": "Republican presidential candidate and former U.N. Ambassador Nikki Haley walks off stage after announcing the suspension of her presidential campaign at her campaign headquarters on Daniel Island, So… [+1033 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Slashdot.org"
          },
          "author": "msmash",
          "title": "Alternative iOS App Stores Won't Work (For Long) Outside of the EU",
          "description": "Alternative iOS app stores won't work (for long) outside of the EU. From a report: With iOS 17.4, iPhone users in the EU can now access third-party app marketplaces -- pending availability which is expected any day -- but extended overseas travel could change…",
          "url": "https://apple.slashdot.org/story/24/03/06/164259/alternative-ios-app-stores-wont-work-for-long-outside-of-the-eu",
          "urlToImage": "https://a.fsdn.com/sd/topics/ios_64.png",
          "publishedAt": "2024-03-06T16:05:00Z",
          "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
        },
        {
          "source": {
            "id": "business-insider",
            "name": "Business Insider"
          },
          "author": "Sarah Jackson",
          "title": "Check out all the new emoji for your iPhone in iOS 17.4, from shaking heads to gender-neutral families",
          "description": "Apple released its iOS 17.4 update, featuring new emoji like a phoenix, shaking heads, and gender-neutral families.",
          "url": "https://www.businessinsider.com/iphone-new-emoji-slideshow-apple-ios-17-4-update-2024-3",
          "urlToImage": "https://i.insider.com/65e8acfa90413ab8e1d9d167?width=1200&format=jpeg",
          "publishedAt": "2024-03-06T18:18:55Z",
          "content": "Apple's iOS 17.4 update is here.NurPhoto / Getty\r\n<ul><li>Apple released its iOS 17.4 update for the iPhone on Tuesday.</li><li>The update includes many new emoji, including a phoenix, shaking heads,… [+1035 chars]"
        },
        {
          "source": {
            "id": "business-insider",
            "name": "Business Insider"
          },
          "author": "Hasan Chowdhury,Lina Batarags",
          "title": "Apple is focusing on the Vision Pro in 2024. Slipping China sales show it can't forget about the iPhone.",
          "description": "Apple has entered a new hardware market with the launch of the Vision Pro, but challenges surrounding the iPhone mean it might need an upgrade.",
          "url": "https://www.businessinsider.com/apple-iphones-might-need-ai-upgrade-soon-2024-3",
          "urlToImage": "https://i.insider.com/65e7176bce7f1785b2e63dcf?width=1200&format=jpeg",
          "publishedAt": "2024-03-06T11:43:19Z",
          "content": "iPhones are losing appeal in Apple's most important international market.Apple\r\n<ul><li>Apple entered a whole new hardware market this year with the launch of the Vision Pro.</li><li>But slipping sal… [+5499 chars]"
        },
        {
          "source": {
            "id": "business-insider",
            "name": "Business Insider"
          },
          "author": "Aaron Mok",
          "title": "Nvidia may leapfrog Apple in value if the iPhone maker doesn't wow investors with AI soon, analyst says",
          "description": "A lot is riding on Apple's push towards AI — including the iPhone maker's current market cap dominance over Nvidia, a noted Apple analyst said.",
          "url": "https://www.businessinsider.com/nvidia-could-leapfrog-apple-value-if-ai-push-disappoints-iphone-2024-3",
          "urlToImage": "https://i.insider.com/659a6ad16979d7371821152c?width=1200&format=jpeg",
          "publishedAt": "2024-03-06T10:00:02Z",
          "content": "One analyst says Nvidia's market cap may blow past Apple's if the iPhone maker doesn't release generative AI products this year.Fernando Gutierrez-Juarez/Getty (L); NurPhoto/Getty\r\n<ul><li>Apple need… [+2822 chars]"
        },
        {
          "source": {
            "id": "business-insider",
            "name": "Business Insider"
          },
          "author": "Ana Altchek",
          "title": "Elon Musk's private emails reveal he pushed to make OpenAI part of Tesla",
          "description": "OpenAI posted a series of emails from Elon Musk that call into question his motive for a lawsuit against the startup.",
          "url": "https://www.businessinsider.com/elon-musk-wanted-tesla-to-merge-with-openai-according-to-his-emails-2024-3",
          "urlToImage": "https://i.insider.com/65e8c233ce7f1785b2e6fe4e?width=1200&format=jpeg",
          "publishedAt": "2024-03-06T19:49:42Z",
          "content": "OpenAI released a series of emails indicating Elon Musk wanted to merge Tesla with the startup.NurPhoto/Getty\r\n<ul><li>OpenAI posted emails from Elon Musk that reveal he wanted the company to merge w… [+3201 chars]"
        },
        {
          "source": {
            "id": "business-insider",
            "name": "Business Insider"
          },
          "author": "Melia Russell",
          "title": "Meet Boston's new power venture capitalist",
          "description": "Lyman's new role at Underscore positions her as a key player in Boston's startup ecosystem as the firm raises its third $50 million fund.",
          "url": "https://www.businessinsider.com/lily-lyman-next-leader-underscore-vc-boston-2024-2",
          "urlToImage": "https://i.insider.com/65de53566080194819fa9b99?width=1200&format=jpeg",
          "publishedAt": "2024-03-06T10:00:01Z",
          "content": "Lily Lyman is the next leader of the venture capital firm Underscore VC.Lindsey Williams\r\n<ul><li>A changing of the guard is underway at Boston-based venture capital firm Underscore VC.</li><li>Lily … [+8490 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Harvard Business Review"
          },
          "author": null,
          "title": "How 8 Successful CEOs Allocated Capital to Build Durable Businesses",
          "description": "Learn how they differed from their peers to drive exceptional value.",
          "url": "https://hbr.org/podcast/2024/03/how-8-successful-ceos-allocated-capital-to-build-durable-businesses",
          "urlToImage": "https://hbr.org/resources/images/article_assets/2023/05/wide-hbr-on-strategy.png",
          "publishedAt": "2024-03-06T13:22:00Z",
          "content": "March 06, 2024Think of CEOs who have made strong rates of return for investors and built durable businesses. What strategies do you associate with their success?\r\nInvestor and author William Thorndik… [+13560 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Harvard Business Review"
          },
          "author": null,
          "title": "How to Lead Great Conversations with Your Team",
          "description": "If you’re trying to build stronger relationships with your employees, this episode is for you.",
          "url": "https://hbr.org/podcast/2024/03/how-to-lead-great-conversations-with-your-team",
          "urlToImage": "https://hbr.org/resources/images/article_assets/2023/05/wide-hbr-on-leadership.png",
          "publishedAt": "2024-03-06T13:02:00Z",
          "content": "HANNAH BATES: Welcome to HBR on Leadership, case studies and conversations with the world’s top business and management experts, hand-selected to help you unlock the best in those around you. Some le… [+17849 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "VentureBeat"
          },
          "author": "Jordan Fragen",
          "title": "Apple terminates Epic’s third party iOS game store ambitions",
          "description": "Following their lengthy legal battle, Apple has terminated Epic Games developer account, stifling its third-part iOS App Store ambitions.",
          "url": "https://venturebeat.com/games/epic-games-apple-third-party-app-store-eu-terminated/",
          "urlToImage": "https://venturebeat.com/wp-content/uploads/2023/11/free-fortnite.jpg?w=1200&strip=all",
          "publishedAt": "2024-03-06T19:29:27Z",
          "content": "Are you looking to showcase your brand in front of the gaming industrys top leaders? Learn more about GamesBeat Summit sponsorship opportunities here. \r\nApple has terminated Epic Games iOS developer … [+1992 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "VentureBeat"
          },
          "author": "Dean Takahashi",
          "title": "Hunch raises $23M for new-age social discovery app",
          "description": "Hunch, a new social discovery app, has raised $23 Million to fuel its global expansion.",
          "url": "https://venturebeat.com/games/hunch-raises-23m-for-new-age-social-discovery-app/",
          "urlToImage": "?w=1200&strip=all",
          "publishedAt": "2024-03-06T16:00:00Z",
          "content": "Are you looking to showcase your brand in front of the gaming industrys top leaders? Learn more about GamesBeat Summit sponsorship opportunities here. \r\nHunch, a new social discovery app, has raised … [+1116 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hipertextual"
          },
          "author": "Gabriel Erard",
          "title": "Con iOS 17.4, es aún más fácil proteger tu iPhone en caso de robo",
          "description": "Apple lanzó ayer iOS 17.4, una actualización plagada de novedades relacionadas con la adecuación a la Ley de Mercados Digitales de la Unión Europea. Aunque también trae otros cambios importantes, como un modo más sencillo de activar la \"protección antirrobo\" …",
          "url": "http://hipertextual.com/2024/03/ios-17-4-proteccion-iphone-robo",
          "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2023/09/iPhone-15-1-scaled.jpg",
          "publishedAt": "2024-03-06T15:59:35Z",
          "content": "Apple lanzó ayeriOS 17.4, una actualización plagada de novedades relacionadas con la adecuación a la Ley de Mercados Digitales de la Unión Europea. Aunque también trae otros cambios importantes, como… [+4771 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hipertextual"
          },
          "author": "Alberto Martín",
          "title": "Apple puede desactivar las tiendas de apps de terceros en tu iPhone por el motivo más absurdo",
          "description": "iOS 17.4 ya está disponible, y con esta actualización, también las tiendas de aplicaciones de terceros en iOS. Es un paso de gigante para Apple, obligado por la Unión Europea y en cumplimiento de la Ley de Mercados Digitales, pero viene acompañada de mucha le…",
          "url": "http://hipertextual.com/2024/03/apple-tiendas-terceros-union-europea",
          "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2024/02/app-store-terceros-setapp-iphone.jpg",
          "publishedAt": "2024-03-06T09:46:48Z",
          "content": "iOS 17.4 ya está disponible, y con esta actualización, también las tiendas de aplicaciones de terceros en iOS. Es un paso de gigante para Apple, obligado por la Unión Europea y en cumplimiento de la … [+3418 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hipertextual"
          },
          "author": "José María López",
          "title": "iOS 17.4 cambia mucho tu iPhone: esta es la lista completa de novedades",
          "description": "Apple ha puesto a disposición de los usuarios iOS 17.4, una esperada y obligada actualización. Especialmente en la Unión Europea, donde los dispositivos de Apple están obligados a permitir la instalación de tiendas de aplicaciones más allá de la App Store. Pe…",
          "url": "http://hipertextual.com/2024/03/novedades-ios-17-4",
          "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2024/03/Apple-iOS-174.jpg",
          "publishedAt": "2024-03-06T11:23:49Z",
          "content": "Apple ha puesto a disposición de los usuarios iOS 17.4, una esperada y obligada actualización. Especialmente en la Unión Europea, donde los dispositivos de Apple están obligados a permitir la instala… [+6947 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hipertextual"
          },
          "author": "Eduardo Arcos",
          "title": "Epic asegura que Apple ha suspendido su cuenta de desarrollador por criticarlos públicamente",
          "description": "Epic asegura que Apple ha suspendido su cuenta de desarrollador, limitando la posibilidad de lanzar su propia tienda de apps en la Unión Europea, tras los cambios introducidos en iOS 17.4 para cumplir con la ley de mercados digitales. Es una vuelta de tuerca …",
          "url": "http://hipertextual.com/2024/03/apple-suspende-cuenta-desarrollador-epic",
          "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2020/12/epic-games-store-scaled.jpg",
          "publishedAt": "2024-03-06T17:41:45Z",
          "content": "Epic asegura que Apple ha suspendido su cuenta de desarrollador, limitando la posibilidad de lanzar su propia tienda de apps en la Unión Europea, tras los cambios introducidos en iOS 17.4 para cumpli… [+3235 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hipertextual"
          },
          "author": "José María López",
          "title": "Cómo instalar aplicaciones y tiendas de terceros en tu iPhone con iOS 17.4",
          "description": "Apple siempre ha defendido la App Store como única puerta de entrada de aplicaciones a tu iPhone y iPad. Pero la Unión Europea tiene una opinión diferente, de manera que si vives en territorio europeo, a partir de iOS 17.4 en adelante, tendrás la posibilidad …",
          "url": "http://hipertextual.com/2024/03/instalar-tiendas-apps-alternativas",
          "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2022/12/Apple-App-Store-scaled.jpg",
          "publishedAt": "2024-03-06T12:31:25Z",
          "content": "Apple siempre ha defendido la App Store como única puerta de entrada de aplicaciones a tu iPhone y iPad. Pero la Unión Europea tiene una opinión diferente, de manera que si vives en territorio europe… [+5536 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hipertextual"
          },
          "author": "Rubén Chicharro",
          "title": "iOS 17.4 te dice cómo de sana está la batería de tu iPhone: así puedes verlo",
          "description": "Además de todas las novedades que Apple ha lanzado para cumplir con la Ley de Mercados Digitales de la Unión Europea, iOS 17.4 trae una importante novedad para conocer mejor el estado de la salud de la batería de tu iPhone. Ahora, además de ver la capacidad m…",
          "url": "http://hipertextual.com/2024/03/ios-17-4-te-dice-como-de-sana-esta-la-bateria-de-tu-iphone-asi-puedes-verlo",
          "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2023/09/DSC07029-scaled.jpg",
          "publishedAt": "2024-03-06T15:11:48Z",
          "content": "Además de todas las novedades que Apple ha lanzado para cumplir con la Ley de Mercados Digitales de la Unión Europea, iOS 17.4 trae una importante novedad para conocer mejor el estado de la salud de … [+2232 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Xataka.com"
          },
          "author": "Javier Lacort",
          "title": "Qué ocurre si viajas fuera de la UE o si eliminas una tienda: todos los detalles sobre las nuevas tiendas de aplicaciones de iOS",
          "description": "iOS 17.4 ya ha sido liberado por Apple, y con esta actualización el iPhone de los ciudadanos europeos ya está preparado para la llegada de las tiendas de terceros. Setapp ya confirmó que llegará en unos meses, y a lo largo de este año veremos más empresas ent…",
          "url": "https://www.xataka.com/aplicaciones/que-ocurre-viajas-fuera-ue-eliminas-tienda-todos-detalles-nuevas-tiendas-aplicaciones-ios",
          "urlToImage": "https://i.blogs.es/c80364/destue/840_560.jpeg",
          "publishedAt": "2024-03-06T17:31:41Z",
          "content": "iOS 17.4 ya ha sido liberado por Apple, y con esta actualización el iPhone de los ciudadanos europeos ya está preparado para la llegada de las tiendas de terceros. Setapp ya confirmó que llegará en u… [+5985 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Xataka.com"
          },
          "author": "Yúbal Fernández",
          "title": "Novedades de iOS 17.4: todos los cambios y mejoras de la última actualización para iPhone e iPad",
          "description": "Vamos a decirte cuáles son las novedades de iOS 17.4, la nueva actualización de  iOS 17. Se trata de una de las actualizaciones más esperadas del sistema operativo, con lo que iOS rompe sus cadenas y empieza a permitir la llegada de tiendas de aplicaciones de…",
          "url": "https://www.xataka.com/basics/novedades-ios-17-4-todos-cambios-mejoras-ultima-actualizacion-para-iphone-e-ipad",
          "urlToImage": "https://i.blogs.es/0c417a/ios/840_560.jpeg",
          "publishedAt": "2024-03-06T09:42:46Z",
          "content": "Vamos a decirte cuáles son las novedades de iOS 17.4, la nueva actualización de  iOS 17. Se trata de una de las actualizaciones más esperadas del sistema operativo, con lo que iOS rompe sus cadenas y… [+3803 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Xataka.com"
          },
          "author": "Christian Ruiz",
          "title": "Tu padre se merece algo más que el Casio clásico: cinco relojes inteligentes con mucha clase para regalarle",
          "description": "El Día del Padre se va acercando, por lo que ya va tocando elegir el regalo que vamos a hacer para ese 19 de marzo. Uno de los complementos que más triunfan dentro del género masculino es el reloj, así que, para aprovechar los tiempos actuales, podemos optar …",
          "url": "https://www.xataka.com/seleccion/tu-padre-se-merece-algo-que-casio-clasico-cinco-relojes-inteligentes-mucha-clase-para-regalarle",
          "urlToImage": "https://i.blogs.es/1b5ce8/relojes-inteligentes-dia-del-padre/840_560.png",
          "publishedAt": "2024-03-06T12:48:02Z",
          "content": "El Día del Padre se va acercando, por lo que ya va tocando elegir el regalo que vamos a hacer para ese 19 de marzo. Uno de los complementos que más triunfan dentro del género masculino es el reloj, a… [+3065 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Xataka.com"
          },
          "author": "Ricardo Aguilar",
          "title": "Enviar mensajes cruzados entre WhatsApp y Telegram es técnicamente posible. Que vaya a suceder es un asunto distinto",
          "description": "Marzo apuntaba a ser un gran mes. Novedades en la normativa europea y sus gatekeepers han obligado a gigantes como Microsoft, Apple o Meta a mover ficha. Apple se ha tenido que abrir a las apps de terceros, y Meta se ha visto obligada a hacer sus apps interop…",
          "url": "https://www.xataka.com/aplicaciones/enviar-mensajes-cruzados-whatsapp-telegram-tecnicamente-posible-que-vaya-a-suceder-asunto-distinto",
          "urlToImage": "https://i.blogs.es/0ea6be/1200_800/840_560.jpeg",
          "publishedAt": "2024-03-06T11:31:40Z",
          "content": "Marzo apuntaba a ser un gran mes. Novedades en la normativa europea y sus gatekeepers han obligado a gigantes como Microsoft, Apple o Meta a mover ficha. Apple se ha tenido que abrir a las apps de te… [+1819 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Xataka.com"
          },
          "author": "Jose García",
          "title": "iOS 17.4 incluye una función muy útil para conocer la salud de la batería de tu iPhone. Así se usa",
          "description": "La batería sigue siendo uno de los puntos críticos de cualquier dispositivo, ya sea un móvil, un reloj inteligente o una tablet. Si tiene una batería, está expuesto a la inevitable degradación de la misma y, por lo tanto, a que la autonomía final vaya cada ve…",
          "url": "https://www.xataka.com/moviles/ios-17-4-incluye-funcion-muy-util-para-conocer-salud-bateria-tu-iphone-asi-se-usa",
          "urlToImage": "https://i.blogs.es/5fa63f/bateria/840_560.jpeg",
          "publishedAt": "2024-03-06T13:31:42Z",
          "content": "La batería sigue siendo uno de los puntos críticos de cualquier dispositivo, ya sea un móvil, un reloj inteligente o una tablet. Si tiene una batería, está expuesto a la inevitable degradación de la … [+2817 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Xataka.com"
          },
          "author": "Javier Lacort",
          "title": "Las expectativas por la IA están disparando muchas acciones bursátiles. Hasta Soundhound ha triplicado su valor",
          "description": "El 30 de noviembre de 2022 cayó un rayo en forma de ChatGPT. La IA viene de mucho antes, pero la llegada del chatbot de OpenAI fue lo que disparó la conciencia mundial sobre las posibilidades que esta abría.\n<!-- BREAK 1 -->\nDesde entonces, muchas empresas ha…",
          "url": "https://www.xataka.com/empresas-y-economia/expectativas-ia-estan-disparando-muchas-acciones-bursatiles-soundhound-ha-triplicado-su-valor",
          "urlToImage": "https://i.blogs.es/8fe370/dest-aciones/840_560.jpeg",
          "publishedAt": "2024-03-06T12:01:41Z",
          "content": "El 30 de noviembre de 2022 cayó un rayo en forma de ChatGPT. La IA viene de mucho antes, pero la llegada del chatbot de OpenAI fue lo que disparó la conciencia mundial sobre las posibilidades que est… [+4080 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Xataka.com"
          },
          "author": "Javier Marquez",
          "title": "‘GTA Vice City’ en modo ‘Doom’: alguien ha conseguido hacer funcionar el juego de Rockstar en un router TP-Link",
          "description": "‘Doom’ es el juego por excelencia para ser jugado en cualquier cosa que no sea una consola o un ordenador. Hemos visto a esta legendaria obra funcionar en una calculadora con batería de patatas, en tractores John Deere y hasta en el Bloc de notas de Windows. …",
          "url": "https://www.xataka.com/videojuegos/gta-vice-city-modo-doom-alguien-ha-conseguido-hacer-funcionar-juego-rockstar-router-tp-link",
          "urlToImage": "https://i.blogs.es/5ff89c/gta-vice-city-funcionando-en-un-router-1-2/840_560.jpeg",
          "publishedAt": "2024-03-06T20:31:43Z",
          "content": "Doom es el juego por excelencia para ser jugado en cualquier cosa que no sea una consola o un ordenador. Hemos visto a esta legendaria obra funcionar en una calculadora con batería de patatas, en tra… [+2709 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Xataka.com"
          },
          "author": "Ricardo Aguilar",
          "title": "Qualcomm era la mejor opción en móviles económicos. El Nothing Phone (2a) es la prueba de lo contrario",
          "description": "MediaTek. Quién te ha visto y quién te ve. El antes y el después llegó con el MediaTek Dimensity 8100, un procesador \"de gama media\" que logró lo que parecía imposible: superar a un procesador de gama alta de Qualcomm. Desde entonces, las series 7.000, 8.000 …",
          "url": "https://www.xataka.com/componentes/qualcomm-era-mejor-opcion-moviles-economicos-tornas-han-cambiado-completo",
          "urlToImage": "https://i.blogs.es/1c277a/1200_800/840_560.jpeg",
          "publishedAt": "2024-03-06T09:01:39Z",
          "content": "MediaTek. Quién te ha visto y quién te ve. El antes y el después llegó con el MediaTek Dimensity 8100, un procesador \"de gama media\" que logró lo que parecía imposible: superar a un procesador de gam… [+4125 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Xataka.com"
          },
          "author": "Alejandro Alcolea",
          "title": "Xiaomi 14, análisis: una de las mejores experiencias del año que no necesita el apellido Pro",
          "description": "<ul>\n <li>Xiaomi 14, análisis: no todos los móviles premium deben tener el apellido Pro</li>\n <li>Xiaomi 14, análisis: una de las mejores experiencias del año que no necesita el apellido Pro</li>\n <li>Xiaomi 14, análisis: compacto, premium y tan redondo que s…",
          "url": "https://www.xataka.com/analisis/xiaomi-14-analisis-caracteristicas-precio-especificaciones",
          "urlToImage": "https://i.blogs.es/832c7b/analisis-xiaomi-14-2/840_560.jpeg",
          "publishedAt": "2024-03-06T15:01:41Z",
          "content": "Meses después de su lanzamiento en China, Xiaomi ya tiene su móvil de gama premium para occidente. Es una jugada curiosa, pues en 2023 lanzaron el Xiaomi 13 y el Xiaomi 13 Pro con diferencias no sólo… [+32110 chars]"
        },
        {
          "source": {
            "id": "abc-news",
            "name": "ABC News"
          },
          "author": "Alexander Mallin",
          "title": "Chinese national allegedly stole AI trade secrets from Google: Prosecutors",
          "description": "Prosecutors say Linwei Ding, 38, allegedly stole confidential trade secrets and secretly started to work for two China-based AI tech startups.",
          "url": "https://abcnews.go.com/US/chinese-national-arrested-allegedly-stole-ai-trade-secrets-google/story?id=107860745",
          "urlToImage": "https://i.abcnewsfe.com/a/4c679eba-31a2-4cf0-a773-1481f052537c/Google-2-gty-j-m-240306_1709759984364_hpMain_16x9.jpg?w=1600",
          "publishedAt": "2024-03-06T21:30:03Z",
          "content": "A Chinese national was arrested Wednesday in California and charged with allegedly stealing confidential trade secrets from Google's Artificial Intelligence program while secretly working for two AI … [+2706 chars]"
        },
        {
          "source": {
            "id": "abc-news",
            "name": "ABC News"
          },
          "author": "Emma Ogao",
          "title": "US court absolves top tech companies in Congo's child labor case",
          "description": "The case sought to hold the tech giants liable for “forced labor” in the DRC’s cobalt mines",
          "url": "https://abcnews.go.com/International/us-court-absolves-top-tech-companies-congos-child/story?id=107839639",
          "urlToImage": "https://i.abcnewsfe.com/a/4d2457ff-b118-40af-a223-9908beb8c3d4/artisanal-mines-rf-gty-ml-240306_1709729247051_hpMain_16x9.jpg?w=1600",
          "publishedAt": "2024-03-06T14:10:58Z",
          "content": "LONDON -- A U.S. court has absolved five of America's biggest tech companies in a case over their alleged support of child labor in cobalt mining in the Democratic Republic of Congo (DRC) on Tuesday\r… [+2715 chars]"
        },
        {
          "source": {
            "id": "fox-news",
            "name": "Fox News"
          },
          "author": "Kurt Knutsson, CyberGuy Report",
          "title": "The iPhone privacy setting you need to turn off",
          "description": "Apple's Journal app may make some of your personal information vulnerable. Kurt \"CyberGuy\" Knutsson explains how to change privacy settings of the Journal app.",
          "url": "https://www.foxnews.com/tech/iphone-privacy-setting-you-need-to-turn-off",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/08/IPHONE-13-MINI.jpg",
          "publishedAt": "2024-03-06T11:00:15Z",
          "content": "Join Fox News for access to this content\r\nPlus special access to select articles and other premium content with your account - free of charge.\r\nPlease enter a valid email address.\r\nBy entering your e… [+3606 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Cool Hunting"
          },
          "author": "Josh Rubin",
          "title": "Jonathan Adler: Design Tangents Episode Thirteen",
          "description": "Insights (and vocab lessons) from the beloved potter, interior decorator and author Decades ago, we first met potter, interior decorator and author Jonathan Adler when he worked at a film talent agency …",
          "url": "http://coolhunting.com/design/jonathan-adler-design-tangents-episode-thirteen/",
          "urlToImage": "https://i0.wp.com/coolhunting.com/wp-content/uploads/2024/03/Podcast_CHDT_S2_1600x900_twitter_JA-1.png?w=1200&h=675&ssl=1",
          "publishedAt": "2024-03-06T03:03:42Z",
          "content": "Insights (and vocab lessons) from the beloved potter, interior decorator and author\n\n\nPodcast\nDesign\r\n\n\n\n\n\nJonathan Adler: Design Tangents Episode Thirteen\r\n\n\n\nInsights (and vocab lessons) from the b… [+2447 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Apple Newsroom"
          },
          "author": "John Gruber",
          "title": "How iOS Is Determining Eligibility for Alternative App Marketplaces in the European Union",
          "description": "Users based in the European Union with an iPhone have the ability to install apps using alternative app marketplaces, in addition to the App Store.",
          "url": "https://support.apple.com/en-gb/118110",
          "urlToImage": null,
          "publishedAt": "2024-03-06T23:28:21Z",
          "content": "Users based in the European Union with an iPhone have the ability to install apps using alternative app marketplaces, in addition to the App Store.\r\nFeatures in this article are only available to use… [+7800 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Framer.app"
          },
          "author": "John Gruber",
          "title": "Television for Vision Pro",
          "description": "Welcome to the future of television. An app for Apple Vision Pro.",
          "url": "https://delicious-feel-037337.framer.app/",
          "urlToImage": null,
          "publishedAt": "2024-03-06T20:44:38Z",
          "content": "Speaking of new apps from recent guests on my podcast, Adam Lisagor has created a new app for Vision Pro that he introduces thus, with a clever one-minute video:\n\n\n Welcome to the future of televisio… [+876 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Apple Newsroom"
          },
          "author": "John Gruber",
          "title": "Vision Pro’s Battery Indicator Is Confusing",
          "description": "Learn how to connect and charge your Apple Vision Pro battery, and get tips for the best experience.",
          "url": "https://support.apple.com/en-us/117740",
          "urlToImage": null,
          "publishedAt": "2024-03-06T22:15:16Z",
          "content": "Learn how to connect and charge your Apple Vision Pro battery, and get tips for the best experience.\r\nApple Vision Pro is powered by an external rechargeable battery that you can use for up to 2 hour… [+5955 chars]"
        },
        {
          "source": {
            "id": "the-verge",
            "name": "The Verge"
          },
          "author": "John Gruber",
          "title": "Here’s the New iOS 17.4 Default Browser Nag for iPhone Users in Europe",
          "description": "",
          "url": "https://www.theverge.com/2024/3/6/24092026/heres-the-new-ios-default-browser-nag-for-iphone-users-in-europe",
          "urlToImage": "https://cdn.vox-cdn.com/uploads/chorus_asset/file/23966628/the_verge_social_share.png",
          "publishedAt": "2024-03-06T23:05:37Z",
          "content": "Thomas Ricker, writing for The Verge:\n\n\n It’s DMA day in Europe, and I’ve immediately been prompted to \nchoose a default browser after updating to iOS 17.4. The list is \npopulated with “the most down… [+1054 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Digital Trends"
          },
          "author": "Arif Bacchus",
          "title": "I love my PC, but there’s one thing I miss from the Mac",
          "description": "This one Mac peripheral does something I always miss on my Windows PCs.",
          "url": "https://www.digitaltrends.com/computing/macs-have-something-pcs-desperately-need/",
          "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2018/11/applemacmini_review_12.jpg?resize=1200%2C630&p=1",
          "publishedAt": "2024-03-06T20:31:44Z",
          "content": "Rich Shibley / Digital Trends\r\nIn almost all cases, I prefer to be on a Windows machine. That’s just who I am.\r\nBut when I do occasionally switch over to my Mac mini, there’s one aspect of the setup … [+4513 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Digital Trends"
          },
          "author": "Phil Nickinson",
          "title": "Sling TV ads arcade games on Fire TV and Android TV",
          "description": "You can now play arcade games on Sling TV in full-screen — or side by side with whatever you happen to be watching.",
          "url": "https://www.digitaltrends.com/home-theater/sling-tv-arcade-games/",
          "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/03/sling-arcade.jpg?resize=1200%2C630&p=1",
          "publishedAt": "2024-03-06T22:03:03Z",
          "content": "Sling TV\r\nIf you’ve ever been watching live TV and thought to yourself, “What I’d really like to do right now, as I’m watching a basketball game, is also play some Tetris,” Sling TV now has you cover… [+1661 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Digital Trends"
          },
          "author": "Christine Romero-Chan",
          "title": "5 phones you should buy instead of the iPhone 15 Pro",
          "description": "Considering picking up an iPhone 15 Pro right now? Maybe you shouldn't. Here are five other phones you should buy instead.",
          "url": "https://www.digitaltrends.com/mobile/phones-you-should-buy-instead-of-the-apple-iphone-15-pro/",
          "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/10/iphone-15-pro-natural-titanium-hand-wooden-gate.jpg?resize=1200%2C630&p=1",
          "publishedAt": "2024-03-06T13:00:58Z",
          "content": "Christine Romero-Chan / Digital Trends\r\nApple’s iPhone 15 Pro is what we consider one of the best iPhones that you can buy right now. It offers most of the latest cutting-edge tech from Apple, includ… [+7939 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Digital Trends"
          },
          "author": "Alex Blake",
          "title": "5 email apps you should use instead of Gmail or Outlook",
          "description": "Sick of using Gmail and Outlook for your email? We’ve found five email apps that can freshen up your inbox.",
          "url": "https://www.digitaltrends.com/computing/5-email-apps-you-should-use-instead-of-gmail-or-outlook/",
          "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/03/Spark-email-app.jpg?resize=1200%2C630&p=1",
          "publishedAt": "2024-03-06T19:35:28Z",
          "content": "Proton\r\nGmail and Outlook are the two go-to email clients — the default apps that almost everyone uses. That doesn’t, however, mean they’re the best.\r\nIf you’re looking to switch things up and try ou… [+4892 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Beuc.eu"
          },
          "author": null,
          "title": "EU Commission protects consumers in Apple music streaming case",
          "description": "The European Commission’s decision today that Apple broke EU antitrust rules by restricting consumers’ choice of music streaming services in the EU’s Single Market is a strong signal in favour of consumers.",
          "url": "https://www.beuc.eu/press-releases/eu-commission-protects-consumers-apple-music-streaming-case",
          "urlToImage": null,
          "publishedAt": "2024-03-06T16:45:58Z",
          "content": "The European Commissions decision today that Apple broke EU antitrust rules by restricting consumers choice of music streaming services in the EUs Single Market is a strong signal in favour of consum… [+1740 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Benkettle.xyz"
          },
          "author": null,
          "title": "Autogenerating a Book Series from Three Years of iMessages",
          "description": "Tired of waiting for iMessage to load my messages from years ago, I printed them all out in a set of paperback books.",
          "url": "https://benkettle.xyz/posts/message-book/",
          "urlToImage": null,
          "publishedAt": "2024-03-06T13:27:37Z",
          "content": "Autogenerating a Book Series From Three Years of iMessages\r\nFebruary 8, 2024\r\nI am frequently annoyed at the things that I can’t remember. And when I’m trying to remember the details of something, I … [+12823 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "heise online"
          },
          "author": "Wolfgang Kreutz",
          "title": "heise+ | EPS-Dateien anzeigen: So ist das auch in macOS Sonoma möglich",
          "description": "macOS 14 Sonoma kann nicht mehr mit EPS- und PostScript-Dateien umgehen – auch von macOS 13 Ventura bekannte Tricks scheitern. So geht es trotzdem.",
          "url": "https://www.heise.de/ratgeber/EPS-Dateien-anzeigen-So-ist-das-auch-in-macOS-Sonoma-moeglich-9637020.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
          "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/4/6/9/6/3/mi0124_eps_vorschau_aufmacher_digital-50bd9b5ce2d6fa64.jpg",
          "publishedAt": "2024-03-06T10:00:00Z",
          "content": "Inhaltsverzeichnis\r\nBereits in macOS 12 Monterey, erschienen 2021, hatte Apple begonnen, den Support für PostScript einzuschränken, und strich die QuickLook-Ansicht für dieses Format. Mit macOS 13 Ve… [+1813 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "heise online"
          },
          "author": "Eva-Maria Weiß",
          "title": "DMA: Google ändert Suche, Meta teilt Konten, Tiktok legt Einspruch ein",
          "description": "Mehr Fairness und Wettbewerb fordert der Digital Markets Act. Jetzt müssen die Gatekeeper ihre Dienste ändern.",
          "url": "https://www.heise.de/news/DMA-Google-aendert-Suche-Meta-teilt-Konten-Tiktok-legt-Einspruch-ein-9647295.html",
          "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/2/4/1/0/shutterstock_1926849941-44e6051ee12584eb.jpg",
          "publishedAt": "2024-03-06T09:43:00Z",
          "content": "Google, Meta und Co. müssen ihre Dienste neu verknüpfen, ändern und anpassen das fordert der Digital Markets Act (DMA), der am 7. März 2024 in Anwendung kommt. Während der bereits angewandte Digital … [+5193 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "heise online"
          },
          "author": "Martin Holland",
          "title": "US-Gesetzentwurf: ByteDance soll zum Verkauf von TikTok gezwungen werden",
          "description": "Abgeordnete beider großer US-Parteien wollen ByteDance per Gesetz dazu zwingen, TikTok zu verkaufen. Das Weiße Haus hat bereits Unterstützung signalisiert.",
          "url": "https://www.heise.de/news/US-Gesetzentwurf-ByteDance-soll-zum-Verkauf-von-TikTok-gezwungen-werden-9647237.html",
          "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/2/3/7/9/shutterstock_1336435262-a215553faf3f5782.jpg",
          "publishedAt": "2024-03-06T06:27:00Z",
          "content": "In den USA hat eine Gruppe von Abgeordneten aus beiden großen Parteien im Repräsentantenhaus den nächsten Angriff auf die beliebte Video-App TikTok begonnen. In einem jetzt vorgelegten Gesetzentwurf … [+2092 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "heise online"
          },
          "author": "Bernd Mewes",
          "title": "Twitch: Neue Tools und Apps für mehr Sicherheit und bessere Monetarisierung",
          "description": "Für 2024 plant Twitch dem CEO Dan Clancy zufolge neue Tools und Apps mit Fokus auf Community-Ausbau. Auch Monetarisierung und Sicherheit soll verbessert werden.",
          "url": "https://www.heise.de/news/Twitch-Neue-Tools-und-Apps-fuer-mehr-Sicherheit-und-bessere-Monetarisierung-9647824.html",
          "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/2/7/2/2/shutterstock_1884700318-19239c1d5c9a4163.jpg",
          "publishedAt": "2024-03-06T17:30:00Z",
          "content": "Inhaltsverzeichnis\r\nZu Beginn dieses Jahres hat Twitch die Monetariserungsmöglichkeiten auf der Live-Streaming-Plattform zugunsten der Streamer angepasst. Nun gibt CEO Dan Clancy einen Ausblick auf w… [+4568 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "9to5Mac"
          },
          "author": "Chance Miller",
          "title": "How to find your new Apple Cash card number in iOS 17.4",
          "description": "iOS 17.4, which is now available to everyone, includes a significant change for Apple Cash users. As first spotted by Reddit user u/simpledsp last month, Apple Cash users can now set up a virtual card number that can be used for shopping when Apple Pay online…",
          "url": "https://9to5mac.com/2024/03/06/apple-cash-virtual-card-number-feature/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/04/apple-cash-visa.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2024-03-06T19:08:07Z",
          "content": "iOS 17.4, which is now available to everyone, includes a significant change for Apple Cash users. As first spotted by Reddit user u/simpledsp last month, Apple Cash users can now set up a virtual car… [+1486 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "9to5Mac"
          },
          "author": "Michael Potuck",
          "title": "How to get iMessage quantum security on your iPhone (and why it’s useful)",
          "description": "Apple has launched a major security upgrade for iMessage – protection against quantum computers. Read along for how to get iMessage quantum security on your iPhone, iPad, Mac, and Apple Watch, why it’s valuable, and more.\n\n\n\n more…",
          "url": "https://9to5mac.com/2024/03/06/how-to-get-imessage-quantum-security/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/how-to-get-imessage-quantum-security.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2024-03-06T17:50:00Z",
          "content": "Apple has launched a major security upgrade for iMessage protection against quantum computers. Read along for how to get iMessage quantum security on your iPhone, iPad, Mac, and Apple Watch, why it’s… [+1433 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "9to5Mac"
          },
          "author": "Filipe Espósito",
          "title": "New generation Apple Pencil again rumored to launch soon",
          "description": "Regain clarity with CleanMyPhone by MacPaw — the new AI-powered cleaning app that quickly identifies and removes blurred images, screenshots, and other clutter from your device. Download it now with a free trial.\n\n\n\n\n\n\n\nWe recently reported on evidence of a n…",
          "url": "https://9to5mac.com/2024/03/05/new-gen-apple-pencil-rumor/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/03/apple-pencil.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2024-03-06T01:30:35Z",
          "content": "Regain clarity with CleanMyPhone by MacPaw the new AI-powered cleaning app that quickly identifies and removes blurred images, screenshots, and other clutter from your device. Download it now with a … [+1873 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "9to5Mac"
          },
          "author": "Chance Miller",
          "title": "Tesla app for Apple Watch in the works, Musk suggests",
          "description": "Tesla owners might soon be able to control their car using their Apple Watch, at least if Elon Musk is to be believed. In response to a question on social media about whether Tesla could add Apple Watch integration, Musk responded: “Sure.” \n\n\n\n more…",
          "url": "https://9to5mac.com/2024/03/06/tesla-app-for-apple-watch-elon/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/03/tesla-apple-watch.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2024-03-06T20:44:33Z",
          "content": "Tesla owners might soon be able to control their car using their Apple Watch, at least if Elon Musk is to be believed. In response to a question on social media about whether Tesla could add Apple Wa… [+1148 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "9to5Mac"
          },
          "author": "Chance Miller",
          "title": "Over 200 Apple Watches recovered from Illinois lakes by metal detectorist and diver",
          "description": "Professional “metal detectorist” Darick Langos says that Apple Watches have become a surprisingly big part of his business. According to to Langos, he has recovered more than 200 Apple Watches while diving into and searching the Chain O’ Lakes region in north…",
          "url": "https://9to5mac.com/2024/03/06/apple-watch-lakes-metal-detectorist/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/10/Apple-Watch-Ultra.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2024-03-06T16:29:39Z",
          "content": "Professional metal detectorist Darick Langos says that Apple Watches have become a surprisingly big part of his business. According to to Langos, he has recovered more than 200 Apple Watches while di… [+1267 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "9to5Mac"
          },
          "author": "Ben Lovejoy",
          "title": "Apple’s DMA response could render the law toothless, say campaign groups",
          "description": "Campaign groups say that if the EU lets Apple get away with its response to the Digital Markets Act (DMA), then the law will be rendered toothless.\n\n\n\nApple, Amazon, Google, and Meta have all taken the same approach to the antitrust law, say the groups: to se…",
          "url": "https://9to5mac.com/2024/03/06/apples-dma-response/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/03/Apples-DMA-response.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2024-03-06T12:59:32Z",
          "content": "Campaign groups say that if the EU lets Apple get away with its response to the Digital Markets Act (DMA), then the law will be rendered toothless.\r\nApple, Amazon, Google, and Meta have all taken the… [+1856 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "9to5Mac"
          },
          "author": "Zac Hall",
          "title": "Epic says Apple terminated its newly reinstated developer account over tweet",
          "description": "In the latest installment of Things No One Should Lose Sleep Over, Epic Games says Apple has taken down its newly reinstated developer account in the EU. In a blog post, Epic partly blames a tweet as Apple’s reason for doing so. Epic says this hinders its pla…",
          "url": "https://9to5mac.com/2024/03/06/epic-games-dev-account-dead/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/03/epic.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2024-03-06T16:51:51Z",
          "content": "In the latest installment of Things No One Should Lose Sleep Over, Epic Games says Apple has taken down its newly reinstated developer account in the EU. In a blog post, Epic partly blames a tweet as… [+2068 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "9to5Mac"
          },
          "author": "Benjamin Mayo",
          "title": "Apple TV+ shares trailer for new drama starring Colin Farrell, Mythic Quest season four starts filming, more",
          "description": "Regain clarity with CleanMyPhone by MacPaw — the new AI-powered cleaning app that quickly identifies and removes blurred images, screenshots, and other clutter from your device. Download it now with a free trial.\n\n\n\n\n\n\n\nThere was a bunch of Apple TV+ related …",
          "url": "https://9to5mac.com/2024/03/05/apple-tv-trailer-sugar-mythic-quest/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/03/apple-tv-plus-news-clean-my-phone.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2024-03-06T00:35:43Z",
          "content": "Regain clarity with CleanMyPhone by MacPaw the new AI-powered cleaning app that quickly identifies and removes blurred images, screenshots, and other clutter from your device. Download it now with a … [+2070 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "9to5Mac"
          },
          "author": "Ben Lovejoy",
          "title": "There is no excuse for the failure to implement Spotify HomePod support",
          "description": "My colleague yesterday referenced the fact that Spotify is demanding greater freedoms from Apple, but hasn’t yet taken advantage of the ones already offered to the company. Key among these is the company’s failure to implement Spotify HomePod support.\n\n\n\nIt s…",
          "url": "https://9to5mac.com/2024/03/06/spotify-homepod-support/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/03/Spotify-HomePod-support.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2024-03-06T14:49:59Z",
          "content": "My colleague yesterday referenced the fact that Spotify is demanding greater freedoms from Apple, but hasn’t yet taken advantage of the ones already offered to the company. Key among these is the com… [+2135 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "9to5Mac"
          },
          "author": "Chance Miller",
          "title": "Should you update to iOS 17.4? Here’s what’s new",
          "description": "iOS 17.4 is now available to everyone. It comes with a number of major changes to the App Store and the iPhone ecosystem in the European Union. There are new emoji, an upgrade to CarPlay, Siri improvements, and much more. \n\n\n\nHead below as we recap everything…",
          "url": "https://9to5mac.com/2024/03/06/ios-17-4-new-features-release-date/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/01/iOS-17.4-hero.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2024-03-06T14:36:46Z",
          "content": "iOS 17.4 is now available to everyone. It comes with a number of major changes to the App Store and the iPhone ecosystem in the European Union. There are new emoji, an upgrade to CarPlay, Siri improv… [+4806 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "9to5Mac"
          },
          "author": "Zac Hall",
          "title": "iOS 17.4: Apple’s ‘new instrument cluster experience’ for CarPlay",
          "description": "Apple’s iOS 17.4 software update for iPhone is now available. It features major App Store changes in the EU, new emoji for everyone, and a slight update to CarPlay. \n\n\n\nHere’s how Apple describes the CarPlay update in iOS 17.4:\n\n\n\n more…",
          "url": "https://9to5mac.com/2024/03/06/ios-17-4-carplay/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/carplay-17.4.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2024-03-06T19:34:47Z",
          "content": "Apple’s iOS 17.4 software update for iPhone is now available. It features major App Store changes in the EU, new emoji for everyone, and a slight update to CarPlay. \r\nHere’s how Apple describes the C… [+1629 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "9to5Mac"
          },
          "author": "Ben Lovejoy",
          "title": "Apple surprises manga fans with 19-Minute Takashi Miike film on YouTube",
          "description": "Fans of manga got a pleasant surprise today, when Apple released a 19-Minute Takashi Miike film on its Japanese YouTube channel (shown below).\n\n\n\nThe film, shot entirely on an iPhone 15 Pro, is an adaption of a story by well-known Japanese manga artist Osamu …",
          "url": "https://9to5mac.com/2024/03/06/apple-takashi-miike-film/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/03/Takashi-Miike-film.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2024-03-06T14:22:35Z",
          "content": "Fans of manga got a pleasant surprise today, when Apple released a 19-Minute Takashi Miike film on its Japanese YouTube channel (shown below).\r\nThe film, shot entirely on an iPhone 15 Pro, is an adap… [+1924 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "9to5Mac"
          },
          "author": "Benjamin Mayo",
          "title": "Apple stock falls to lowest level this year, while other tech companies see AI-fuelled rally",
          "description": "Regain clarity with CleanMyPhone by MacPaw — the new AI-powered cleaning app that quickly identifies and removes blurred images, screenshots, and other clutter from your device. Download it now with a free trial.\n\n\n\n\n\n\n\nApple’s stock price has been taking a b…",
          "url": "https://9to5mac.com/2024/03/05/apple-stock-falls-march-year/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/03/apple-stock-price-decline.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2024-03-06T00:10:51Z",
          "content": "Regain clarity with CleanMyPhone by MacPaw the new AI-powered cleaning app that quickly identifies and removes blurred images, screenshots, and other clutter from your device. Download it now with a … [+2553 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "9to5Mac"
          },
          "author": "Filipe Espósito",
          "title": "Apple rolls out new analytics data for developers through App Store Connect",
          "description": "Regain clarity with CleanMyPhone by MacPaw — the new AI-powered cleaning app that quickly identifies and removes blurred images, screenshots, and other clutter from your device. Download it now with a free trial.\n\n\n\n\n\n\n\nFollowing the release of iOS 17.4, Appl…",
          "url": "https://9to5mac.com/2024/03/05/apple-rolls-out-new-analytics-data-for-developers-through-app-store-connect/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/03/App-Store-Connect.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2024-03-06T00:27:30Z",
          "content": "Regain clarity with CleanMyPhone by MacPaw the new AI-powered cleaning app that quickly identifies and removes blurred images, screenshots, and other clutter from your device. Download it now with a … [+1576 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "9to5Mac"
          },
          "author": "Ben Lovejoy",
          "title": "Apple shares three success stories from its Entrepreneur Camp for developers",
          "description": "Apple’s Entrepreneur Camp was first launched back in 2018, focusing then on app-driven business owned or led by women. The latest edition is geared to developers from Indigenous backgrounds.\n\n\n\nApple has today highlighted three of the camp’s success stories, …",
          "url": "https://9to5mac.com/2024/03/06/apple-entrepreneur-camp-stories/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/03/Apple-Entrepreneur-Camp-success-stories.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2024-03-06T15:32:34Z",
          "content": "Apple’s Entrepreneur Camp was first launched back in 2018, focusing then on app-driven business owned or led by women. The latest edition is geared to developers from Indigenous backgrounds.\r\nApple h… [+2951 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "9to5Mac"
          },
          "author": "Seth Kurkowski",
          "title": "9to5Mac Daily: March 6, 2024 – iOS 17.4 now available, free Apple TV+ movies",
          "description": "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apple’s Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overcast and other podcast players.\n\n\n\nSponsored by Capital One S…",
          "url": "https://9to5mac.com/2024/03/06/daily-march-6-2024/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/9to5Mac-Daily-art-lead.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2024-03-06T17:31:58Z",
          "content": "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apples Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overca… [+846 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "9to5Mac"
          },
          "author": "Ben Lovejoy",
          "title": "FDA approves first iPhone-enabled blood glucose monitor without a prescription",
          "description": "The dream of an Apple Watch which can take blood sugar readings may be some time off yet, but if you want an iPhone-enabled blood glucose monitor, you will soon be able to buy one without a prescription.\n\n\n\nThe FDA has granted approval for Dexcom’s Stelo Gluc…",
          "url": "https://9to5mac.com/2024/03/06/iphone-blood-glucose-monitor/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/03/iPhone-enabled-blood-glucose-monitor.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2024-03-06T13:30:28Z",
          "content": "The dream of an Apple Watch which can take blood sugar readings may be some time off yet, but if you want an iPhone-enabled blood glucose monitor, you will soon be able to buy one without a prescript… [+2042 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "9to5Mac"
          },
          "author": "Rikka Altland",
          "title": "Apple’s new M3 MacBook Airs from $1,049, M3 MacBook Pro $300 off, more Macs from $899",
          "description": "Today’s best deals are all about MacBooks. You can currently lock-in a pre-order discount on Apple’s new M3 MacBook Airs, with both 13- and 15-inch models from $1,049. The savings carry over to the Liquid Retina XDR Display-backed 14-inch M3 MacBook Pro at $1…",
          "url": "https://9to5mac.com/2024/03/06/m3-macbook-air-deals-m3-macbook-pro-more/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/03/m3-macbook-air-vs-m2-conclusion.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2024-03-06T16:44:00Z",
          "content": "Today’s best deals are all about MacBooks. You can currently lock-in a pre-order discount on Apple’s new M3 MacBook Airs, with both 13- and 15-inch models from $1,049. The savings carry over to the L… [+4917 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Android Police"
          },
          "author": "Anu Joy",
          "title": "ExpressVPN: How to cancel your subscription",
          "description": "ExpressVPN has servers in over 100 countries and lots of extra privacy features. If you find you no longer need the service, here's how to cancel.",
          "url": "https://www.androidpolice.com/cancel-expressvpn-tutorial/",
          "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/02/express-vpn.jpg",
          "publishedAt": "2024-03-06T06:52:13Z",
          "content": "A VPN hides your IP address and protects you from hackers, trackers, and malicious actors. The service also gives you access to geo-locked content so that you can enjoy your favorite movies no matter… [+3168 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Tim.blog"
          },
          "author": "Tim Ferriss",
          "title": "Behind the Scenes: Who Is The Real Audience of The Tim Ferriss Show?",
          "description": "A few years ago, a famous creator asked me if I’d ever learned anything from my audience, as he hadn’t. My response? “Oh, God, yes! More than I can possibly begin to explain.” That’s the whole reason I have comments on this blog, plus clear rules. If you cult…",
          "url": "https://tim.blog/2024/03/06/tim-ferriss-show-audience-survey/",
          "urlToImage": "https://149346886.v2.pressablecdn.com/wp-content/uploads/2014/04/timferrissshowart-1400x1400.jpg",
          "publishedAt": "2024-03-06T20:30:36Z",
          "content": "A few years ago, a famous creator asked me if I’d ever learned anything from my audience, as he hadn’t. My response?\r\n“Oh, God, yes! More than I can possibly begin to explain.”\r\nThat’s the whole reas… [+4478 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "AppleInsider"
          },
          "author": "news@appleinsider.com (William Gallagher)",
          "title": "Apple spotlights Entrepreneur Camp alumni app developers",
          "description": "Marking five years of its Entrepreneur Camp development program, Apple has highlighted three creators who are working to solve real-world problems through the App Store.L-R: Jenny Xu of Run Legends, Edna Martinson of Boddle Learning, and Jo Aggarwal of WysaTh…",
          "url": "https://appleinsider.com/articles/24/03/06/apple-spotlights-entrepreneur-camp-alumni-app-developers",
          "urlToImage": "https://photos5.appleinsider.com/gallery/58858-120021-000-lede-App-Creators-xl.jpg",
          "publishedAt": "2024-03-06T15:45:19Z",
          "content": "L-R: Jenny Xu of Run Legends, Edna Martinson of Boddle Learning, and Jo Aggarwal of Wysa\r\nMarking five years of its Entrepreneur Camp development program, Apple has highlighted three creators who are… [+2623 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "AppleInsider"
          },
          "author": "news@appleinsider.com (Mike Wuerthele)",
          "title": "'Verifiably untrustworthy' Epic Games iOS app store plans in EU killed by Apple",
          "description": "The Epic vs. Apple bad blood continues, as Apple has called Epic 'verifiably untrustworthy' and shut down the developer account it made to develop a 3rd-party app store in the European Union.Still from the Epic Games-produced ad criticizing Apple for being li…",
          "url": "https://appleinsider.com/articles/24/03/06/verifiably-untrustworthy-epic-games-ios-app-store-plans-in-eu-killed-by-apple",
          "urlToImage": "https://photos5.appleinsider.com/gallery/58622-119502-000-lede-Epic-Games-xl.jpg",
          "publishedAt": "2024-03-06T17:09:33Z",
          "content": "Still from the Epic Games-produced ad criticizing Apple for being like the book '1984'\r\nThe Epic vs. Apple bad blood continues, as Apple has called Epic 'verifiably untrustworthy' and shut down the d… [+2998 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "AppleInsider"
          },
          "author": "news@appleinsider.com (Wesley Hilliard)",
          "title": "Apple sat at a crossroads of indecision that led to Project Titan's slow death",
          "description": "A detailed report on Apple's decade of Apple Car development reveals five ditched concepts, hubris, and executive failings.Apple Park viewed from Apple MapsAnalysts will no doubt examine Apple's worst-kept secret, Project Titan, for years. With every new repo…",
          "url": "https://appleinsider.com/articles/24/03/06/apple-sat-at-a-crossroads-of-indecision-that-led-to-project-titans-slow-death",
          "urlToImage": "https://photos5.appleinsider.com/gallery/58863-120034-IMG_5052-xl.jpg",
          "publishedAt": "2024-03-06T23:26:04Z",
          "content": "Apple Park viewed from Apple Maps\r\nA detailed report on Apple's decade of Apple Car development reveals five ditched concepts, hubris, and executive failings.\r\nAnalysts will no doubt examine Apple's … [+1678 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "AppleInsider"
          },
          "author": "news@appleinsider.com (Andrew Orr)",
          "title": "MacBook Pro and MacBook Air overwhelmingly drive Apple Mac sales",
          "description": "New research claims to have details on exactly how dominant MacBook Pro and MacBook Air sales are, versus desktop contemporaries.Apple customers prefer portable devices across Mac, iPhone, and iPadMac sales have been declining, with even the 2023 MacBook Air …",
          "url": "https://appleinsider.com/articles/24/03/06/macbook-pro-and-macbook-air-overwhelmingly-drive-apple-mac-sales",
          "urlToImage": "https://photos5.appleinsider.com/gallery/58860-120027-14-inch-MacBook-Pro-with-M3-xl.jpg",
          "publishedAt": "2024-03-06T17:39:09Z",
          "content": "Apple customers prefer portable devices across Mac, iPhone, and iPad\r\nNew research claims to have details on exactly how dominant MacBook Pro and MacBook Air sales are, versus desktop contemporaries.… [+1586 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "AppleInsider"
          },
          "author": "news@appleinsider.com (Wesley Hilliard)",
          "title": "Capturing spatial video: Apple Vision Pro vs iPhone 15 Pro",
          "description": "Apple has provided users with two options for capturing 3D \"spatial\" video, Apple Vision Pro and iPhone 15 Pro, but both options have trade-offs. Here's what you need to know.Apple Vision Pro can capture spatial videoThere are multiple differences between the…",
          "url": "https://appleinsider.com/articles/24/03/06/capturing-spatial-video-apple-vision-pro-vs-iphone-15-pro",
          "urlToImage": "https://photos5.appleinsider.com/gallery/58836-119960-AVP-cam1-xl.jpg",
          "publishedAt": "2024-03-06T18:47:36Z",
          "content": "Apple Vision Pro can capture spatial video\r\nApple has provided users with two options for capturing 3D \"spatial\" video, Apple Vision Pro and iPhone 15 Pro, but both options have trade-offs. Here's wh… [+7702 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "AppleInsider"
          },
          "author": "news@appleinsider.com (Malcolm Owen)",
          "title": "The next Apple CEO: Who could succeed Tim Cook?",
          "description": "Apple CEO Tim Cook is planning to exit Apple within the next ten years. Here are the strongest contenders to be his replacement as chief executive.Apple CEO Tim Cook and potential candidates to replace himTim Cook's time at the top of Apple is limited, accord…",
          "url": "https://appleinsider.com/articles/24/03/06/the-next-apple-ceo-who-could-succeed-tim-cook",
          "urlToImage": "https://photos5.appleinsider.com/gallery/58802-119877-cookreplacements1-xl.jpg",
          "publishedAt": "2024-03-06T11:15:24Z",
          "content": "Apple CEO Tim Cook and potential candidates to replace him\r\nApple CEO Tim Cook is planning to exit Apple within the next ten years. Here are the strongest contenders to be his replacement as chief ex… [+11562 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "AppleInsider"
          },
          "author": "news@appleinsider.com (Wesley Hilliard)",
          "title": "Alternative app marketplaces won't work outside of the EU",
          "description": "A combination of on-device geolocation checks and Apple ID restrictions stop alternative app marketplaces from working outside of the EU — even preventing app updates.Apple is locking alternative app marketplaces to the EUApple was forced to comply with the E…",
          "url": "https://appleinsider.com/articles/24/03/06/alternative-app-marketplaces-wont-work-outside-of-the-eu",
          "urlToImage": "https://photos5.appleinsider.com/gallery/58854-120013-IMG_5047-xl.jpg",
          "publishedAt": "2024-03-06T01:47:32Z",
          "content": "Apple is locking alternative app marketplaces to the EU\r\nA combination of on-device geolocation checks and Apple ID restrictions stop alternative app marketplaces from working outside of the EU — eve… [+1927 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "AppleInsider"
          },
          "author": "news@appleinsider.com (Amber Neely)",
          "title": "Apple Developer Center Singapore offers sessions, labs, and workshops to devs across the region",
          "description": "Apple recently launched its first Developer Center in Singapore, which will provide customized resources and expert guidance to the region's diverse app development community.The center aims to support Southeast Asia's thriving developer community, which has …",
          "url": "https://appleinsider.com/articles/24/03/06/apple-developer-center-singapore-offers-sessions-labs-and-workshops-to-devs-across-the-region",
          "urlToImage": "https://photos5.appleinsider.com/gallery/58856-120020-developercenter-xl.jpg",
          "publishedAt": "2024-03-06T15:35:57Z",
          "content": "Apple recently launched its first Developer Center in Singapore, which will provide customized resources and expert guidance to the region's diverse app development community. \r\nThe center aims to su… [+1524 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "AppleInsider"
          },
          "author": "news@appleinsider.com (William Gallagher)",
          "title": "Stars take you through Steve Martin's comedy career in new documentary",
          "description": "Apple TV+ has released a first trailer for \"Steve! (martin) a documentary in two pieces,\" with the comic actor himself plus stars including Tina Fey, Martin Short, and Jerry Seinfeld.Steve Martin (source: Wiki Commons)First announced in 2022, the new two-part…",
          "url": "https://appleinsider.com/articles/24/03/06/stars-take-you-through-steve-martins-comedy-career-in-new-documentary",
          "urlToImage": "https://photos5.appleinsider.com/gallery/49818-97623-000-Lead-image-xl.jpg",
          "publishedAt": "2024-03-06T14:52:03Z",
          "content": "Steve Martin (source: Wiki Commons)\r\nApple TV+ has released a first trailer for \"Steve! (martin) a documentary in two pieces,\" with the comic actor himself plus stars including Tina Fey, Martin Short… [+995 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "AppleInsider"
          },
          "author": "news@appleinsider.com (Amber Neely)",
          "title": "How to add and remove stickers as a reaction in Messages in iOS 17",
          "description": "Learn how to use stickers in Messages, including the new feature that allows you to place stickers as a reaction to individual messages. How to use reaction stickers in Messages in iOS 17Stickers have been a part of the Messages app for a while now. Initially…",
          "url": "https://appleinsider.com/articles/24/03/06/how-to-add-and-remove-stickers-as-a-reaction-in-messages-in-ios-17",
          "urlToImage": "https://photos5.appleinsider.com/gallery/58112-118420-header-xl.jpg",
          "publishedAt": "2024-03-06T04:05:29Z",
          "content": "How to use reaction stickers in Messages in iOS 17\r\nLearn how to use stickers in Messages, including the new feature that allows you to place stickers as a reaction to individual messages.\r\nStickers … [+2114 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "AppleInsider"
          },
          "author": "news@appleinsider.com (Christine McKee)",
          "title": "Lowest price ever: Apple's M2 MacBook Air drops to $869",
          "description": "A record-breaking price drop has hit Apple's M2 MacBook Air and the discount is available exclusively to AppleInsider readers.To snap up the $869 M2 MacBook Air deal at B&H Photo, simply shop through this exclusive pricing link from a laptop or desktop comput…",
          "url": "https://appleinsider.com/articles/24/03/06/lowest-price-ever-apples-m2-macbook-air-drops-to-869",
          "urlToImage": "https://photos5.appleinsider.com/gallery/58859-120026-macbook-air-m2-869-sale-price-xl.jpg",
          "publishedAt": "2024-03-06T17:24:57Z",
          "content": "A record-breaking price drop has hit Apple's M2 MacBook Air and the discount is available exclusively to AppleInsider readers.\r\nExclusive MacBook Air savings\r\nTo snap up the $869 M2 MacBook Air deal … [+1786 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "AppleInsider"
          },
          "author": "news@appleinsider.com (Christine McKee)",
          "title": "Exclusive deals hit Apple's M3 MacBook Air with Adorama VIP membership",
          "description": "Preorder deals are in effect on Apple's new M3 MacBook Air, with both 13-inch and 15-inch models eligible for the exclusive VIP coupon.Get a VIP discount on Apple's new M3 MacBook Air.To grab the VIP discounts, simply sign up for Adorama's VIP Rewards program…",
          "url": "https://appleinsider.com/articles/24/03/06/exclusive-deals-hit-apples-m3-macbook-air-with-adorama-vip-membership",
          "urlToImage": "https://photos5.appleinsider.com/gallery/58853-120014-m3-macbook-air-coupon-xl.jpg",
          "publishedAt": "2024-03-06T05:55:03Z",
          "content": "Get a VIP discount on Apple's new M3 MacBook Air.\r\nPreorder deals are in effect on Apple's new M3 MacBook Air, with both 13-inch and 15-inch models eligible for the exclusive VIP coupon.\r\nExclusive d… [+2122 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "AppleInsider"
          },
          "author": "news@appleinsider.com (Malcolm Owen)",
          "title": "Immerse yourself in the neon streets of Tokyo manga with a new 'Shot on iPhone' film",
          "description": "Apple's latest \"Shot on iPhone\" film is a live-action and frenetic remake of the manga \"Midnight,\" a Takashi Miike-directed high-action video about a Tokyo taxi driver.Kento Kaku, star of the 'Shot on iPhone' film 'Midnight'The \"Shot on iPhone\" series is a sh…",
          "url": "https://appleinsider.com/articles/24/03/06/immerse-yourself-in-the-neon-streets-of-tokyo-manga-with-a-new-shot-on-iphone-film",
          "urlToImage": "https://photos5.appleinsider.com/gallery/58855-120018-midnightfilm-xl.jpg",
          "publishedAt": "2024-03-06T11:50:05Z",
          "content": "Kento Kaku, star of the 'Shot on iPhone' film 'Midnight'\r\nApple's latest \"Shot on iPhone\" film is a live-action and frenetic remake of the manga \"Midnight,\" a Takashi Miike-directed high-action video… [+2303 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "AppleInsider"
          },
          "author": "news@appleinsider.com (William Gallagher)",
          "title": "Logitech MX Brio review: excellent all-round 4K webcam",
          "description": "Announced on Wednesday, the Logitech MX Brio is a tremendously clear Ultra HD 4K webcam that can easily be mounted on a MacBook Pro for video conferences, or also put on a tripod for filming.Logitech MX Brio review — the camera includes one light and two beam…",
          "url": "https://appleinsider.com/articles/24/03/06/logitech-mx-brio-review-excellent-all-round-4k-webcam",
          "urlToImage": "https://photos5.appleinsider.com/gallery/58851-120007-888-Light-and-microphones-xl.jpg",
          "publishedAt": "2024-03-06T11:04:10Z",
          "content": "Logitech MX Brio review -- the camera includes one light and two beam-forming microphones\r\nAnnounced on Wednesday, the Logitech MX Brio is a tremendously clear Ultra HD 4K webcam that can easily be m… [+6857 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Gizmodo.jp"
          },
          "author": "岩田リョウコ",
          "title": "アップル、EUから独占禁止法違反で約3000億円の罰金を請求される",
          "description": "Appleはヨーロッパで独占禁止法に違反したとして、18億4000万ユーロ（約3000億円）の罰金を受けました。",
          "url": "https://www.gizmodo.jp/2024/03/apple-slapped-with-2-billion-fine-for-ripping-off-musi.html",
          "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2024/03/06/shutterstock_1035467191.jpg?w=1280&h=630&f=jpg",
          "publishedAt": "2024-03-06T10:00:00Z",
          "content": "Copyright © mediagene Inc. All Rights Reserved."
        },
        {
          "source": {
            "id": null,
            "name": "Gizmodo.jp"
          },
          "author": "武者良太",
          "title": "Apple Vision ProとMeta Quest 3、いま買うべきXRヘッドセットはどっち？",
          "description": "Photo:武者良太［解答例］5年先をひとつまみしたいならVisionPro。今のXR道をいっしょに歩きたいならQuest3でしょうか。かたや50万円を超えるアップルの「VisionPro」。もう1つは7万4800円から買えるMetaの「Quest3」。価格が大幅に違う2台ですが、どちらも2024年を代表するXRヘッドセットとなるでしょう。さあ、どっちを買ったほうが楽しい2024年を過ごせるでしょ",
          "url": "https://www.gizmodo.jp/2024/03/which-vision-pro-quest-3.html",
          "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2024/03/01/DSC02691-%E5%BC%B7%E5%8C%96-NR_R.jpg?w=1280&h=630&f=jpg",
          "publishedAt": "2024-03-06T23:00:00Z",
          "content": "5Vision ProXRQuest 3\r\n50Vision Pro174800MetaQuest 322024XR\r\n20242\r\nPCVision Pro\r\nPhoto: \r\nMacBook AirM2R1Vision ProXRQuest 3Snapdragon XR2 Gen2SoCXR\r\nM2PCIntelCore i5-13600NVIDIA GTX1650CPU/GPUSoC1PC… [+433 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Gizmodo.jp"
          },
          "author": "湯木進悟",
          "title": "OnePlusの新作スマウォは47mmのビッグサイズで電池持ち良し",
          "description": "スマートウォッチ「OnePlus Watch 2」の使用レポ。47mmサイズで主張が強いが、Wear OS対応で電池持ちも良い。",
          "url": "https://www.gizmodo.jp/2024/03/oneplus-watch-2-first-impression.html",
          "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2024/03/05/240305OnePlus1.jpg?w=1280&h=630&f=jpg",
          "publishedAt": "2024-03-06T03:30:00Z",
          "content": "OnePlus\r\nOnePlus Watch 2GIZMODOFlorence Ion\r\nOnePlus Watch47mm\r\nPhoto: Florence Ion - Gizmodo US\r\nGooglePixel Watch 2SamsungGalaxy Watch 642mmOnePlus Watch 2\r\nRadiant Steel\r\nApple Watch\r\nOnePlusOSOne… [+201 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Gizmodo.jp"
          },
          "author": "小暮ひさのり",
          "title": "iPhoneユーザーみんなが笑顔になれる2 in 1ケーブル",
          "description": "Image:サンワダイレクトやったね！念願のUSB-Cだ！と、おそらく世界中が喜んでいるはずのiPhone15シリーズ。10年目にしてApple（アップル）独自規格のLightningからUSB-Cへとポートを変更されました。やったね！…でも、聞いて下さいよ。良いことばかりじゃないんです。先日家族で出かけた時「充電したい、ケーブル貸して」と言われたのですが、「ごめん、パパのiPhone、USB-C",
          "url": "https://www.gizmodo.jp/2024/03/sanwa-usb-c-2in1-cable-lightning-usb-c.html",
          "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2024/03/06/2024-03-06hak00.jpg?w=1280&h=630&f=jpg",
          "publishedAt": "2024-03-06T22:00:00Z",
          "content": "USB-C\r\niPhone 1510AppleLightningUSB-C\r\niPhoneUSB-C\r\niPhone\r\nUSB-CLightningLightningMFiApple\r\niPhoneiPhone 15LightningAirPods\r\nSource: via PC Watch"
        },
        {
          "source": {
            "id": null,
            "name": "Theonion.com"
          },
          "author": "Sirhan Sirhan",
          "title": "Apple Unveils New Apple Vision Pro Mini",
          "description": "CUPERTINO, CA—Touting the product as the smallest virtual reality headset in the world, Apple held a keynote presentation at its headquarters Wednesday to unveil a brand-new product, the Apple Vision Pro Mini. “When it comes to spatial computing, the Apple Vi…",
          "url": "https://www.theonion.com/apple-unveils-new-apple-vision-pro-mini-1851298413",
          "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/1dea078425a557a9c5fa4132f3aaf0ec.jpg",
          "publishedAt": "2024-03-06T11:15:00Z",
          "content": "CUPERTINO, CATouting the product as the smallest virtual reality headset in the world, Apple held a keynote presentation at its headquarters Wednesday to unveil a brand-new product, the Apple Vision … [+729 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yanko Design"
          },
          "author": "JC Torres",
          "title": "Apple Pencil Number 2 skin is a perfect homage with a big caveat",
          "description": "Apple Pencil Number 2 skin is a perfect homage with a big caveatDespite what its founder once said, Apple has wholeheartedly embraced the stylus, at least for its iPads. In fact, you could even say it innovated...",
          "url": "https://www.yankodesign.com/2024/03/06/apple-pencil-number-2-skin-is-a-perfect-homage-with-a-big-caveat/",
          "urlToImage": "https://www.yankodesign.com/images/design_news/2024/03/apple-pencil-number-2-edition-comes-with-an-unbelievable-caveat/apple-number-2-pencil-4.jpg",
          "publishedAt": "2024-03-06T16:20:13Z",
          "content": "Despite what its founder once said, Apple has wholeheartedly embraced the stylus, at least for its iPads. In fact, you could even say it innovated an accessory that hasn’t seen much change in years, … [+2331 chars]"
        }
      ]

constructor()
{
    super();
    this.state={
        article:this.article
    }
}


  render() {
    return (
      <div>



        <h3>This is my news channel website</h3>
        <div class="row">

       {this.state.article.map((element)=>{
           return<div class="col-sm-3">
           <Newsitem title={element.title} description={element.description} imageurl={element.urlToImage}></Newsitem>
           </div>
       })}
   


    

    </div>
    </div>
    )
  }
}
