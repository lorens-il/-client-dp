import React from 'react';
import { useGetNewsQuery } from '../../../api/apiQuery';

import "./News.sass";

const News = () => {
   
    const {
        data: news = {articles: []},
        isLoading,
        isError
    } = useGetNewsQuery();

    const creatingListNews = ({articles}) => (
        articles.map(({source, author, content, title, description, url, urlToImage}) => (
            <div key={url + Math.random()} className="news__wrapper">
                <h2 className='news__title'>{title}</h2>
                <div className='news__img-wrapper'>
                    <img className='news__img' src={urlToImage} alt="news" />
                </div>
                <div className="news__desc">{description}</div>
                <a href={url}>Перейти</a>
            </div>
        ))
    )
    const listNews = creatingListNews(news);

    return <div className='news'>{listNews}</div>;
};

export default News;
