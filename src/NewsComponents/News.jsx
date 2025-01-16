import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
    let category = props.category;
    let [articles, setArticles] = useState([]);
    let [totalResults, setTotalResults] = useState(0);
    let [page, setPage] = useState(1);

    let resultNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=73b64103eaa24e84b390add5993d267a`;

        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
    };

    useEffect(() => {
        resultNews();
    }, []);

    let fetchData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${
            page + 1
        }&apiKey=73b64103eaa24e84b390add5993d267a`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
    };

    return (
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchData}
            hasMore={articles.length < totalResults}
            loader={<h4 className="text-center">Loading...</h4>}
            endMessage={
                <p className="text-center">
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            <div className="container mx-auto my-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {articles.map((element) => {
                        return (
                            <div key={element.url}>
                                <NewsItem
                                    sourceName={element.source.name}
                                    title={element.title}
                                    desc={element.description}
                                    imageURL={
                                        element.urlToImage
                                            ? element.urlToImage
                                            : Image
                                    }
                                    newsUrl={element.url}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </InfiniteScroll>
    );
}

export default News;
