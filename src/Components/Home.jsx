import { doc, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { database } from '../firebase/setup';

const Home = (props) => {
  const [news, setNews] = useState([]);
  console.log(news)

  const addNews = async(data) =>{
    const newsDoc = doc(database, "News", `${data.url.substr(-10,10)}`)
    try{
      await setDoc(newsDoc,{
        title:data.title,
        description:data.description
      })
    }catch(err){
      console.log(err);
      
    }
    
  }

  const getNews = async () => {
    await fetch(`https://newsapi.org/v2/everything?q=${props.menu ? props.menu : "Home"}&sortBy=popularity&apiKey=af8c2e1ea13e42d8aed54653e0758778`)
      .then(res => res.json())
      .then(json => setNews(json.articles.filter(article => article.urlToImage && article.description)));
  };

  useEffect(() => {
    getNews();
  }, [props.menu]);

  return (
    <div className='mt-12 p-5 grid grid-cols-4 gap-4'>
      {news
        .filter(data => data.title.toLowerCase().includes(props.search.toLowerCase()))
        .map((data, index) => (
          <Link onClick={() => addNews(data)} key={index} to="/details" state={{data:data}} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={data.urlToImage} alt={data.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{data.title}</div>
              <p className="text-gray-700 text-base">
                {data.description}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Home;