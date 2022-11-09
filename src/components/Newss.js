import React, { Component } from 'react'
import NewsItem from './NewsItem'
export default class Newss extends Component {
  articles = [
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "The moment that grabbed attention inside the Abbey",
      "description": "An era was ending right before our eyes as soldiers carrying the coffin shuffled up the aisle, writes Sean Coughlan.",
      "url": "http://www.bbc.co.uk/news/uk-62961080",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/A07F/production/_126778014_1024-reuters-d9e7bfe180fac419ed95b5e4ce834cbc278cffed.jpg",
      "publishedAt": "2022-09-19T16:52:20.7894852Z",
      "content": "By Sean CoughlanInside Westminster Abbey\r\nEven when you know something important has happened, it can still have the power to shock. Particularly when you see it with your own eyes. I had a close-up … [+5547 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Covid-19 pandemic 'is over' in the US - Joe Biden",
      "description": "The president said there is still \"a lot of work\" being done to control the virus in the US.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-62959089",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/11CD/production/_126775540_gettyimages-1423995891.jpg",
      "publishedAt": "2022-09-19T16:22:25.9438062Z",
      "content": "By Bernd Debusmann JrBBC News, Washington\r\nPresident Joe Biden has declared the pandemic \"over\" in the US, even as the number of Americans who have died from Covid continues to rise. \r\nMr Biden said … [+2719 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Windsor service praises Queen's ‘unstinting service'",
      "description": "The St George's Chapel ceremony followed a procession that allowed mourners pay their last respects.",
      "url": "http://www.bbc.co.uk/news/uk-62955606",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7C17/production/_126776713_microsoftteams-image-2.png",
      "publishedAt": "2022-09-19T16:22:21.9135593Z",
      "content": "By Andre Rhoden-PaulBBC News\r\nA committal service for the Queen has been held in St George's Chapel, where she will be laid to rest.\r\nLed by the Dean of Windsor, it was attended by 800 people, includ… [+3641 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Grand Theft Auto VI footage leaked after hack, developer Rockstar confirms",
      "description": "More than 90 images and videos were leaked from the franchise's next instalment, developer Rockstar confirms.",
      "url": "http://www.bbc.co.uk/news/technology-62960828",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/77CB/production/_126776603_gettyimages-1238366748.jpg",
      "publishedAt": "2022-09-19T16:07:19.9451677Z",
      "content": "By Matt MurphyBBC News\r\nMore than 90 videos and images from the next edition of the Grant Theft Auto franchise have been leaked online by a hacker, the game's developers say.\r\nThe leaked content was … [+2248 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Watch moments from the Queen's funeral service",
      "description": "Key moments from Westminster Abbey at the the first state funeral since 1965.",
      "url": "http://www.bbc.co.uk/news/uk-62957322",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/E48B/production/_126770585_p0d17fqr.jpg",
      "publishedAt": "2022-09-19T13:37:18.678932Z",
      "content": "A congregation of 2,000 people - including world leaders and royalty - were at Westminster Abbey for the Queen's state funeral service. \r\nIt was the first state funeral since Sir Winston Churchill's … [+134 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Mahsa Amini: Iran police say woman's death was 'unfortunate'",
      "description": "Mahsa Amini, 22, collapsed after being held by morality police for allegedly breaking hijab rules.",
      "url": "http://www.bbc.co.uk/news/world-middle-east-62954648",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/B8A0/production/_126746274_mahsaamini.jpg",
      "publishedAt": "2022-09-19T12:37:21.2568322Z",
      "content": "Tehran's police chief says the death of a woman in custody last week was an \"unfortunate\" incident that he does not want repeated, local media report.\r\nMahsa Amini, 22, collapsed hours after she was … [+2362 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Mark Frerichs: US hostage swapped for Afghan leader linked to Taliban",
      "description": "Mark Frerichs, a US navy veteran working as an engineer, was taken in Afghanistan in 2020.",
      "url": "http://www.bbc.co.uk/news/world-asia-62954203",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/B189/production/_120094454_photo0015.jpg",
      "publishedAt": "2022-09-19T10:07:19.0381655Z",
      "content": "The Taliban have released a US engineer they had held hostage since 2020 in exchange for an Afghan tribal leader held in US custody since 2005.\r\nMark Frerichs was handed over at Kabul airport on Mond… [+2047 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Japan storm: Nine million people told to evacuate as super typhoon Nanmadol hits",
      "description": "Nanmadol is one of the worst typhoons ever to strike Japan, with flooding and landslides expected.",
      "url": "http://www.bbc.co.uk/news/world-asia-62952942",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/12080/production/_126765837_mediaitem126765836.jpg",
      "publishedAt": "2022-09-19T08:37:26.2263332Z",
      "content": "By Elsa MaishmanBBC News\r\nNine million people have been told to evacuate their homes as Japan is battered by one of the worst typhoons the country has ever seen. \r\nThe super typhoon Nanmadol has caus… [+2271 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Ukraine claims control of key Oskil river on front line",
      "description": "Russia's army has been almost completely pushed out of Ukraine's north-eastern Kharkiv region.",
      "url": "http://www.bbc.co.uk/news/world-europe-62952641",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/E3F4/production/_126765385_cc7e7410-169c-467f-8617-a043eb933621.jpg",
      "publishedAt": "2022-09-19T08:37:22.5067866Z",
      "content": "By Paul KirbyBBC News\r\nUkrainian forces say they have regained control of the east bank of the River Oskil, seen as the front line with Russian troops in north-east Ukraine.\r\nRussia's army has been a… [+3764 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Hurricane Fiona knocks out Puerto Rico electricity",
      "description": "The US island's population of 3.3 million loses electricity as Hurricane Fiona makes landfall.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-62947900",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/148A8/production/_126763148_3635e83fdde85e6fe08b4226ec97b9fbd289e231.jpg",
      "publishedAt": "2022-09-18T21:07:16.3983928Z",
      "content": "By Merlyn ThomasBBC News\r\nThe arrival of Hurricane Fiona has knocked out all electricity on the US island of Puerto Rico.\r\nThe operator of the island's grid, Luma Energy, said the system had lost pow… [+1466 chars]"
    }
  ]
  constructor() {

    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    }

  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a94fb29a9666419390a5ceda0dec2123&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles })

  }
  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults/ 18)) {
    }
    else {

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a94fb29a9666419390a5ceda0dec2123&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }

  }
  handlePrevClick = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a94fb29a9666419390a5ceda0dec2123&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  

  }

  render() {
    
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsXpress -Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>

          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr;
            Previous</button>
          <button  disabled={this.state.page+1 > Math.ceil(this.state.totalResults / `${this.props.pageSize}`)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

