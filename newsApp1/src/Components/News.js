import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {

    articles= [
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Fred Pleitgen, Ivana Kottasová",
            "title": "'There are maniacs who enjoy killing,' Russian defector says of his former unit accused of war crimes in Bucha - CNN",
            "description": "Nikita Chibrin says he still remembers his fellow Russian soldiers running away after allegedly raping two Ukrainian women during their deployment northwest of Kyiv in March.",
            "url": "https://www.cnn.com/2022/12/13/europe/russian-defector-war-crimes-intl-cmd/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221213103523-russian-defector-nikita-chibrin.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-12-14T02:09:00Z",
            "content": "Nikita Chibrin says he still remembers his fellow Russian soldiers running away after allegedly raping two Ukrainian women during their deployment northwest of Kyiv in March.\r\nI saw them run, then I … [+8161 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Boston Globe"
            },
            "author": null,
            "title": "Spies, microchips, and night lights: The story of an alleged Russian smuggling ring in a N.H. town. - The Boston Globe",
            "description": "The charging documents outline a plot pulled straight from “The Americans” TV series, about KGB agents raising a family near Washington, D.C.",
            "url": "https://www.bostonglobe.com/2022/12/13/metro/spies-microchips-night-lights-story-an-alleged-russian-weapons-smuggler-small-town-nh/",
            "urlToImage": "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/lvw58L8JQYclQhTd4okL608v6xk=/506x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/GASN27RT4F4LDRKW3SMOYY7YRU.jpg",
            "publishedAt": "2022-12-14T01:30:00Z",
            "content": "But Tuesday morning, that perfect American image was shattered as Alexey Brayman, 35,and six others were named in a sprawling federal indictment that accused them of running an international smugglin… [+13632 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Biden signs Respect for Marriage Act, enshrining marriage equality in federal law - KPIX CBS SF Bay Area",
            "description": "Debra Alfarone reports on the star-studded celebration held to mark President Biden's signing of the Respect for Marriage Act (12-13-2022)",
            "url": "https://www.youtube.com/watch?v=FgoqtN7L328",
            "urlToImage": "https://i.ytimg.com/vi/FgoqtN7L328/maxresdefault.jpg",
            "publishedAt": "2022-12-14T01:27:43Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "NBCSports.com"
            },
            "author": "Mike Florio",
            "title": "After benching, Marcus Mariota leaves Falcons - NBC Sports",
            "description": "Falcons quarterback Marcus Mariota is out. Literally.After being benched for rookie Desmond Ridder for performance reasons, Mariota has left the team. And the team doesn’t know if he’ll be back.Coach Arthur Smith has said Mariota will be placed on injured res…",
            "url": "https://profootballtalk.nbcsports.com/2022/12/13/after-benching-marcus-mariota-leaves-falcons/",
            "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2022/12/GettyImages-1446734412-e1670978901888.jpg",
            "publishedAt": "2022-12-14T00:48:00Z",
            "content": "Falcons quarterback Marcus Mariota is out. Literally.\r\nAfter being benched for rookie Desmond Ridder for performance reasons, Mariota has left the team. And the team doesnt know if hell be back.\r\nCoa… [+925 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Louis Casiano",
            "title": "Los Angeles Mayor Karen Bass, council unite on city's rampant homeless problem: 'new direction' - Fox News",
            "description": "A homeless state of emergency proposed by Los Angeles Mayor Karen Bass was approved by the City Council Tuesday.",
            "url": "https://www.foxnews.com/us/los-angeles-mayor-karen-bass-council-unite-homeless-problem-new-direction",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/08/AP22215033384825.jpg",
            "publishedAt": "2022-12-14T00:45:28Z",
            "content": "Los Angeles city leaders on Tuesday unanimously ratified a homeless state of emergency declared by Karen Bass in her first official act as mayor. \r\nThe City Council approved the measure in a 13-0 vot… [+2589 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "INSIDER"
            },
            "author": "Taiyler Simone Mitchell, Azmi Haroun",
            "title": "Megan Thee Stallion explains why she lied about Tory Lanez shooting - Insider",
            "description": "During her testimony Tuesday, Megan Thee Stallion said she didn't think anyone would believe that Tory Lanez shot her.",
            "url": "https://www.insider.com/megan-thee-stallion-explains-why-lied-about-tory-lanez-shooting-2022-12",
            "urlToImage": "https://i.insider.com/6398efc3f0c5330018dc2655?width=1200&format=jpeg",
            "publishedAt": "2022-12-14T00:43:49Z",
            "content": "Rapper Megan Thee Stallion took the stand to testify in Tory Lanez's trial on criminal shooting charges on Tuesday, emotionally depicting the traumatic night in 2020 when she said Lanez verbally bera… [+3236 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "NFL Week 15 Power Rankings: Jaguars, Lions among improbable playoff hopefuls entering final stretch of season - CBS Sports",
            "description": "Pete Prisco says it's hard to believe these teams have a chance to make the postseason",
            "url": "https://www.cbssports.com/nfl/news/nfl-week-15-power-rankings-jaguars-lions-among-improbable-playoff-hopefuls-entering-final-stretch-of-season/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/12/13/65007961-264a-4579-a511-d3de0db6cea7/thumbnail/1200x675/8c2ce26a7c02ce37dd63aeee07b49f0e/lionspowerrankings.png",
            "publishedAt": "2022-12-14T00:17:00Z",
            "content": "It's December, a time for contenders to emerge and pretenders to fade away.\r\nSo go ahead and try explain what happened this past Sunday in the NFL. The Detroit Lions beat the Minnesota Vikings, who c… [+9802 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Lionel Messi and Argentina OVERPOWER Croatia in the 2022 FIFA World Cup semifinal | Every Angle - FOX Soccer",
            "description": "Lionel Messi and Argentina secured a massive victory against Croatia with three goals. Messi struck first in the 34th, followed by Julian Alvarez in the 39th...",
            "url": "https://www.youtube.com/watch?v=7LptYD-QPqU",
            "urlToImage": "https://i.ytimg.com/vi/7LptYD-QPqU/maxresdefault.jpg",
            "publishedAt": "2022-12-14T00:03:30Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Gayle Harrington",
            "title": "'Harry & Meghan' is Netflix's most watched documentary debut in its first week - CNN",
            "description": "Netflix's documentary about Prince Harry and Meghan, Duchess of Sussex, debuted with a total of 81.55 million hours watched in its first week, the company said in a press release Tuesday. That's the highest viewing time of any documentary to debut on the stre…",
            "url": "https://www.cnn.com/2022/12/13/business/harry-and-meghan-netflix-documentary-most-watched/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221212123826-harry-and-meghan.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-12-13T22:47:00Z",
            "content": "Netflixs documentary about Prince Harry and Meghan, Duchess of Sussex, debuted with a total of 81.55 million hours watched in its first week, the company said in a press release Tuesday. Thats the hi… [+1835 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WPVI-TV"
            },
            "author": null,
            "title": "Missing boaters: Kevin Hyde and Joe Ditomasso found safe off Delaware coast - WPVI-TV",
            "description": "Two missing boaters who departed Cape May, New Jersey last month in a 30-foot sailboat have been found safe, Action News has learned.",
            "url": "https://6abc.com/us-coast-guard-missing-sailors-kevin-hyde-joe-ditomasso-cape-may-nj/12564201/",
            "urlToImage": "https://cdn.abcotvs.com/dip/images/12564227_121222-wpvi-missing-boaters-11pm-CC-vid.jpg?w=1600",
            "publishedAt": "2022-12-13T22:01:31Z",
            "content": "CAPE MAY, New Jersey (WPVI) -- Two missing boaters who departed Cape May, New Jersey last month in a 30-foot sailboat have been found safe, Action News has learned.\r\nAccording to the United States Co… [+1466 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Deadline"
            },
            "author": "Mike Fleming Jr",
            "title": "James Cameron On His Titanic ‘Avatar’ Sequel Bet, ‘Terminator’ Remorse, Teaching Sigourney Weaver & Kate Winslet The 7-Minute Breath Holding Swim - Deadline",
            "description": "Disney soon will find out the wisdom of its massive acquisition of Fox and ownership of the billion-dollar investment in Avatar tentpoles that should give the studio a fresh supply of blockbusters over the next decade. Avatar: The Way of Water opens Friday, w…",
            "url": "https://deadline.com/2022/12/james-cameron-avatar-the-way-of-water-terminator-remorse-sigourney-weaver-kate-winslet-7-minute-breath-holding-swim-1235197918/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2022/12/james-cameron-2.jpg?w=1024",
            "publishedAt": "2022-12-13T21:53:00Z",
            "content": "Disney soon will find out the wisdom of its massive acquisition of Fox and ownership of the billion-dollar investment in Avatar tentpoles that should give the studio a fresh supply of blockbusters ov… [+19641 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "John Bacon and Terry Collins, USA TODAY",
            "title": "Winter storm forecast: Latest updates on blizzard warnings, tornadoes - USA TODAY",
            "description": "A massive winter storm roaring across the West prompted blizzard warnings in six states and fueled concerns of possibly severe tornadoes in the South.",
            "url": "https://www.usatoday.com/story/news/nation/2022/12/13/winter-storm-forecast-updates-blizzard-tornado-warnings/10886597002/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2022/12/13/USAT/bea7e69b-138b-42c5-9b9f-ba4eb2aa7533-AP_Winter_Weather.jpg?auto=webp&crop=5178,2913,x0,y317&format=pjpg&width=1200",
            "publishedAt": "2022-12-13T21:51:14Z",
            "content": "A massive winter storm roaring across the West dumped up to 4 feet of snow in parts of Nevada and Idaho, fueled blizzard warnings in six other states and spawned tornadoes that injured several people… [+7159 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fox Business"
            },
            "author": "Breck Dumas",
            "title": "FTX CEO questions actions by Bahamian authorities amid bankruptcy - Fox Business",
            "description": "New FTX CEO John Ray III said his team is investigating actions taken by the Bahamian government amid the crypto exchange's bankruptcy, saying authorities are uncooperative.",
            "url": "https://www.foxbusiness.com/politics/ftx-ceo-questions-actions-bahamian-authorities-bankruptcy",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/12/0/0/john-ray.jpg?ve=1&tl=1",
            "publishedAt": "2022-12-13T21:50:49Z",
            "content": "The new CEO of FTX told U.S. lawmakers Tuesday that his team has received \"extraordinary\" pushback from authorities in the Bahamas, where the fallen crypto exchange is based, and called into question… [+3122 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Meteosat: Europe's new weather satellite heads skyward - BBC",
            "description": "Forecasting hazardous storms should get a big boost from the new Meteosat just launched to orbit.",
            "url": "https://www.bbc.com/news/science-environment-63939650",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/81D5/production/_127973233_32886_a4.jpg",
            "publishedAt": "2022-12-13T21:05:38Z",
            "content": "The most important European satellite of 2022 has just gone into orbit.\r\nMeteosat-12 rode out of the Kourou spaceport in French Guiana on an Ariane rocket to initiate a new era in weather forecasting… [+4840 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Jen Christensen",
            "title": "Covid-19 vaccines have saved more than 3 million lives in US, study says, but the fight isn't over - CNN",
            "description": "The Covid-19 vaccines have kept more than 18.5 million people in the US out of the hospital and saved more than 3.2 million lives, a new study says -- and that estimate is most likely a conservative one, the researchers say.",
            "url": "https://www.cnn.com/2022/12/13/health/covid-19-vaccines-study/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221024193034-covid-19-booster-090922.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-12-13T20:55:00Z",
            "content": "The Covid-19 vaccines have kept more than 18.5 million people in the US out of the hospital and saved more than 3.2 million lives, a new study says and that estimate is most likely a conservative one… [+3756 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "European Parliament strips Eva Kaili of VP role over Qatar graft scandal - Reuters",
            "description": "The European Parliament removed Greek MEP <a href=\"/world/europe/european-lawmaker-eva-kailis-stellar-rise-hit-by-qatar-probe-2022-12-13/\">Eva Kaili</a> as a vice president of the assembly on Tuesday after she was accused of accepting bribes from Qatar in one…",
            "url": "https://www.reuters.com/world/europe/european-parliament-lawmaker-denies-taking-bribes-qatar-lawyer-2022-12-13/",
            "urlToImage": "https://www.reuters.com/resizer/t0Yrk3LdBNidI3whtTcGjGRLZGE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/35DSGB2UXVNYBK5KANRAC54NEQ.jpg",
            "publishedAt": "2022-12-13T20:53:00Z",
            "content": "STRASBOURG, Dec 13 (Reuters) - The European Parliament removed Greek MEP Eva Kaili as a vice president of the assembly on Tuesday after she was accused of accepting bribes from Qatar in one of the bi… [+4577 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "https://www.theguardian.com/profile/kari-paul,https://www.theguardian.com/profile/dominic-rushe,https://www.theguardian.com/profile/joannawalters",
            "title": "Sam Bankman-Fried charged with fraud as first congressional hearing closes – as it happened - The Guardian",
            "description": "US Congress commences hearing on the collapse of the cryptocurrency exchange, less than 24 hours after its former chief executive was arrested",
            "url": "https://www.theguardian.com/business/live/2022/dec/13/house-committee-john-j-ray-iii-ftx-sam-bankman-fried-arrest-cryptocurrency-bankruptcy-latest-updates",
            "urlToImage": "https://i.guim.co.uk/img/media/1966a2d73178521a7b9a4ecea44da298e27d6ad2/0_232_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=994d4c6702709ea925243197e48ced09",
            "publishedAt": "2022-12-13T20:46:54Z",
            "content": "FTX collapse: the latest in the downfall of the cryptocurrency exchange\r\nIt has been a busy day of developments in the fallout of FTX, the company that was once the worlds second-largest cryptocurren… [+12555 chars]"
        },
        {
            "source": {
                "id": "ars-technica",
                "name": "Ars Technica"
            },
            "author": "Andrew Cunningham",
            "title": "iOS 16.2, macOS 13.1 released with new collaboration features and other updates - Ars Technica",
            "description": "Smaller updates for watchOS, tvOS, and HomePod software are also available.",
            "url": "https://arstechnica.com/gadgets/2022/12/new-ios-and-macos-updates-add-encrypted-icloud-backups-and-other-features/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2022/12/Apple-Freeform-hero-760x380.jpg",
            "publishedAt": "2022-12-13T20:27:03Z",
            "content": "Enlarge/ The new Freeform app included in the iOS 16.2 and macOS 13.1 updates.\r\n27 with 0 posters participating\r\nApple has released the final versions of macOS 13.1, iOS 16.2, and iPadOS 16.2 to the … [+2731 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Jason Burke",
            "title": "African leaders gather in US as Joe Biden aims to reboot rocky relations - The Guardian",
            "description": "President and Antony Blinken woo nations at summit in Washington in hope they will align with west rather than Russia or China",
            "url": "https://www.theguardian.com/world/2022/dec/13/african-leaders-gather-in-us-as-joe-biden-aims-to-reboot-rocky-relations",
            "urlToImage": "https://i.guim.co.uk/img/media/3702f8e5cd8f175d0105c5d339b9177cd3fa55cb/0_315_4751_2852/master/4751.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d3b7d3b256f8d0e400837ecb22489bfa",
            "publishedAt": "2022-12-13T19:47:00Z",
            "content": "Dozens of African leaders have assembled in Washington for a summit aimed at rebooting US relations on the continent, which have languished in recent years.\r\nThe US-Africa summit, the first since 201… [+5608 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "McConnell says negotiators ‘very close’ to spending deal - The Hill",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiY2h0dHBzOi8vdGhlaGlsbC5jb20vaG9tZW5ld3Mvc2VuYXRlLzM3NzM3MjUtbWNjb25uZWxsLXNheXMtbmVnb3RpYXRvcnMtdmVyeS1jbG9zZS10by1zcGVuZGluZy1kZWFsL9IBZ2h0dHBzOi8vdGhlaGlsbC5jb20vaG9tZW5ld3Mvc2VuYXRlLzM3NzM3MjUtbWNjb25uZWxsLXNheXMtbmVnb3RpYXRvcnMtdmVyeS1jbG9zZS10by1zcGVuZGluZy1kZWFsL2FtcC8?oc=5",
            "urlToImage": null,
            "publishedAt": "2022-12-13T19:30:00Z",
            "content": null
        }
    ]

    constructor(){
        super();
        console.log("hello i am constructor from newscomp");
        this.state={
            articles:this.articles,
            loading :false,
            page:1

        }
    }
    
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=0192610625674ef795a5fe7b82fa4bfd&page=1";
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({
            articles:parsedData.articles
        })
    } 

     handlePrevclick=async()=>{
        console.log("prev");
        this.setState({
            page:this.state.page-1
        })
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=0192610625674ef795a5fe7b82fa4bfd&page=${this.state.page - 1}`;
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({
            articles:parsedData.articles
        })
    }
     handleNextclick=async()=>{
        console.log("next");
        this.setState({
            page:this.state.page+1
        })
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=0192610625674ef795a5fe7b82fa4bfd&page=${this.state.page + 1}`;
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({
            articles:parsedData.articles
        })
    }

    

  render() {
    return (
        <div className="container my-3">
            <h1>TOP NEWS</h1>
            
            <div className="row">
            {this.state.articles.map((element)=>{
                
               return <div className="col-md-4">
                <Newsitem key={element.url} title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage}
                newsUrl={element.url}/>
                </div>

            })}
            
                
             </div>
        
        <div className="container">
        <div className="d-flex justify-content-between">
          <button  disabled ={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevclick}> &larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextclick}>Next &rarr;</button>
          </div>
        </div>
        
      </div>
    )
  }
}

export default News